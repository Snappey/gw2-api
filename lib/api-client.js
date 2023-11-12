"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const util_1 = require("./util");
class ApiClient {
    _baseUrl;
    _apiKey;
    _schemaVersion;
    _language;
    _staticHeaders;
    _useHeaders;
    _rateLimiter;
    constructor(baseUrl, apiKey, language = "en", schemaVersion = "latest", useHeaders = true) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
        this._schemaVersion = schemaVersion;
        this._language = language;
        this._useHeaders = useHeaders;
        this._rateLimiter = new util_1.TokenBucket(300, 60);
        this._staticHeaders = {
            "Authorization": `Bearer ${this._apiKey}`,
            'Accept-Language': this._language,
            'X-Schema-Version': this._schemaVersion,
        };
    }
    combinePath(...paths) {
        return paths.reduce((acc, path) => {
            const trailingSlash = acc.endsWith("/");
            const leadingSlash = path.startsWith("/");
            if (trailingSlash && leadingSlash) {
                return `${acc}${path.slice(1)}`;
            }
            else if (!trailingSlash && !leadingSlash) {
                return `${acc}/${path}`;
            }
            else {
                return `${acc}${path}`;
            }
        });
    }
    async makeRequest(path, method, body, headers) {
        const canSend = await this._rateLimiter.canSend();
        if (!canSend) {
            throw new Error("rate limit exceeded (token bucket)");
        }
        let url = this.combinePath(this._baseUrl, path);
        if (!this._useHeaders) {
            const queryString = `schema_version=${this._schemaVersion}&language=${this._language}&access_token=${this._apiKey}`;
            if (url.includes("?")) {
                url += "&" + queryString;
            }
            else {
                url += "?" + queryString;
            }
        }
        else {
            headers = {
                ...this._staticHeaders,
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
                throw new Error("rate limit exceeded (api)");
            case 503:
                throw new Error("endpoint is disabled");
        }
        return response;
    }
    async get(schema, path) {
        return this.makeRequest(path, "GET")
            .then(response => schema.parse(response.json()));
    }
    async post(schema, path, body) {
        return this.makeRequest(path, "POST", body)
            .then(response => schema.parse(response.json()));
    }
}
exports.ApiClient = ApiClient;
