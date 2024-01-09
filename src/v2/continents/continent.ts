import {ApiClient} from "../../api-client";
import {z} from "zod";
import {ContinentSchema, FloorSchema} from "./continent.schema";

export type Continent = z.infer<typeof ContinentSchema>;
export type Floor = z.infer<typeof FloorSchema>;

export class ContinentService {
    private readonly _apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this._apiClient = apiClient;
    }

    getContinentIds(): Promise<number[]> {
        return this._apiClient.get(z.array(z.number()), "/v2/continents");
    }

    getContinent(id: string | number): Promise<Continent> {
        return this._apiClient.get(ContinentSchema, `/v2/continents/${id}`);
    }

    getAllContinents(): Promise<Continent[]> {
        return this._apiClient.get(z.array(ContinentSchema), `/v2/continents?ids=all`);
    }

    getContinentFloorIds(id: string | number): Promise<number[]> {
        return this._apiClient.get(z.array(z.number()), `/v2/continents/${id}/floors`);
    }

    getContinentFloor(id: string | number, floor: string | number): Promise<Floor> {
        return this._apiClient.get(FloorSchema, `/v2/continents/${id}/floors/${floor}`);
    }

    getContinentFloors(id: string | number, floors: string[] | number[]): Promise<Floor[]> {
        return this._apiClient.get(z.array(FloorSchema), `/v2/continents/${id}/floors?ids=${floors.join(",")}`);
    }

    getAllContinentFloors(id: string | number): Promise<Floor[]> {
        return this._apiClient.get(z.array(FloorSchema), `/v2/continents/${id}/floors?ids=all`);
    }
}