import {expect, test} from "vitest";
import {Gw2Client} from "../../gw2-client";

const apiClient = new Gw2Client();

test("should return daily crafting", async () => {
  expect((await apiClient.daily.getDailyCrafting()).length).toBeGreaterThan(0);
});

test("should return daily world bosses", async () => {
  expect((await apiClient.daily.getDailyWorldBosses()).length).toBeGreaterThan(0);
});

test("should return daily map chests", async () => {
  expect((await apiClient.daily.getDailyMapChests()).length).toBeGreaterThan(0);
});