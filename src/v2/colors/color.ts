import {ApiClient} from "../../api-client";
import {z} from "zod";
import {ColorSchema} from "./color.schema";


export type Color = z.infer<typeof ColorSchema>;

export class ColorService {
  private readonly _apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this._apiClient = apiClient;
  }

  public async getColors(): Promise<number[]> {
    return this._apiClient.get(z.number().array(), "/v2/colors");
  }

  public async getColor(id: number): Promise<Color> {
    return this._apiClient.get(ColorSchema, `/v2/colors?id=${id}`);
  }
}