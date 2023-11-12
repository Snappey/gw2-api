import {ApiClient} from "../../api-client";
import {z} from "zod";

export const BuildSchema = z.object({
  id: z.number(),
})

export type Build = z.infer<typeof BuildSchema>;

export class BuildService {
  private readonly _apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this._apiClient = apiClient;
  }

  public async getBuild(): Promise<Build> {
    return this._apiClient.get(BuildSchema, "/v2/build");
  }
}