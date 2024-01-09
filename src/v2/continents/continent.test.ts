import {expect, test} from "vitest";
import {Gw2Client} from "../../gw2-client";

const apiClient = new Gw2Client(process.env.GW2_API_KEY);

test("get continent ids", async () => {
    const ids = await apiClient.continents.getContinentIds();
    expect(ids).toBeDefined();
});

test("get continent", async () => {
    const continent = await apiClient.continents.getContinent(1);
    expect(continent).toBeDefined();
});

test("get all continents", async () => {
    const continents = await apiClient.continents.getAllContinents();
    expect(continents).toBeDefined();
});

test("get continent floor ids", async () => {
    const ids = await apiClient.continents.getContinentFloorIds(1);
    expect(ids).toBeDefined();
});

test("get continent floor", async () => {
    const floor = await apiClient.continents.getContinentFloor(1, 1);
    expect(floor).toBeDefined();
});

test("get continent floors", async () => {
    const floors = await apiClient.continents.getContinentFloors(1, [1, 2]);
    expect(floors).toBeDefined();
});

test("get all continent floors", async () => {
    const floors = await apiClient.continents.getAllContinentFloors(1);
    expect(floors).toBeDefined();
});
