import {ApiClient} from "../../api-client";
import {z} from "zod";

export class DailyService {
  private readonly _apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this._apiClient = apiClient;
  }

  public async getDailyCrafting(): Promise<string[]> {
    return this._apiClient.get(z.array(z.string()), "/v2/dailycrafting");
  }

  public async getDailyMapChests(): Promise<string[]> {
    return this._apiClient.get(z.array(z.string()), "/v2/mapchests");
  }

  public async getDailyWorldBosses(): Promise<string[]> {
    return this._apiClient.get(z.array(z.string()), "/v2/worldbosses");
  }
}