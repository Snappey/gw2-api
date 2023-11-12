import {z, ZodSchema} from "zod";
import {RateLimiter, TokenBucket} from "./util";

export type SchemaVersion = "latest"
  | "2019-02-21T00:00:00Z" | "2019-03-22T00:00:00.000Z" | "2019-05-16T00:00:00.000Z" | "2019-05-21T23:00:00.000Z"
  | "2019-05-22T00:00:00.000Z" | "2019-12-19T00:00:00.000Z" | "2020-11-17T00:30:00.000Z" | "2021-04-06T21:00:00.000Z"
  | "2021-07-15T13:00:00.000Z" | "2022-03-09T02:00:00.000Z" | "2022-03-23T19:00:00.000Z";

export type Localisation = "en" | "de" | "fr" | "es" | "zh";

export class ApiClient {
  private readonly _baseUrl: string;
  private readonly _apiKey: string;
  private readonly _schemaVersion: SchemaVersion;
  private readonly _language: Localisation;
  private readonly _authHeaders: Record<string, string>;
  private readonly _staticHeaders: Record<string, string>;
  private readonly _useHeaders: boolean;

  private readonly _rateLimiter: RateLimiter;

  constructor(baseUrl: string, apiKey: string = "", language: Localisation = "en", schemaVersion: SchemaVersion = "latest", useHeaders: boolean = true) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
    this._schemaVersion = schemaVersion;
    this._language = language;
    this._useHeaders = useHeaders;
    this._rateLimiter = new TokenBucket(300, 60);

    this._staticHeaders = {
      'Accept-Language': this._language,
      'X-Schema-Version': this._schemaVersion,
    }

    if (this._apiKey.length > 0) {
      this._authHeaders = {
        "Authorization": `Bearer ${this._apiKey}`
      };
    } else {
      this._authHeaders = {};
    }
  }

  private combinePath(...paths: string[]): string {
    return paths.reduce(
      (acc, path) => {
        const trailingSlash = acc.endsWith("/");
        const leadingSlash = path.startsWith("/");

        if (trailingSlash && leadingSlash) {
          return `${acc}${path.slice(1)}`;
        } else if (!trailingSlash && !leadingSlash) {
          return `${acc}/${path}`;
        } else {
          return `${acc}${path}`;
        }
      }
    );
  }

  private async makeRequest(path: string, method: "GET" | "POST", body?: any, headers?: Record<string, string>, authenticated: boolean = false): Promise<Response> {
    const canSend = await this._rateLimiter.canSend()
    if (!canSend) {
      throw new Error("rate limit exceeded (token bucket)")
    }

    let url = this.combinePath(this._baseUrl, path);
    if (!this._useHeaders) {
      let queryString = `schema_version=${this._schemaVersion}&language=${this._language}`;
      if (authenticated) {
        queryString += `&access_token=${this._apiKey}`;
      }

      if (url.includes("?")) {
        url += "&" + queryString;
      } else {
        url += "?" + queryString;
      }
    } else {
      headers = {
        ...this._staticHeaders,
        ...(authenticated ? this._authHeaders : {}),
        ...headers
      };
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    });

    switch (response.status) {
      case 206:
        console.warn("at least one of the requested ids was not found");
        break;
      case 403:
        throw new Error("invalid api key or insufficient permissions");
      case 404:
        throw new Error("endpoint does not exist or requested ids were not found");
      case 429:
        throw new Error("rate limit exceeded (api)")
      case 503:
        throw new Error("endpoint is disabled");
    }

    return response;
  }

  public async get(schema: ZodSchema, path: string): Promise<z.infer<typeof schema>> {
    return this.makeRequest(path, "GET")
      .then(response => response.json())
      .then(json => schema.parse(json));
  }

  public async getAuthenticated(schema: ZodSchema, path: string): Promise<z.infer<typeof schema>> {
    return this.makeRequest(path, "GET", undefined, undefined, true)
      .then(response => response.json())
      .then(json => schema.parse(json));
  }

  public async post(schema: ZodSchema, path: string, body: any): Promise<z.infer<typeof schema>> {
    return this.makeRequest(path, "POST", body)
      .then(response => response.json())
      .then(json => schema.parse(json));
  }
}