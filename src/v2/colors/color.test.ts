import {expect, test} from "vitest";
import {Gw2Client} from "../../gw2-client";

const apiClient = new Gw2Client();

test("should return color ids", async () => {
  expect((await apiClient.colors.getColors()).length).toBeGreaterThan(0);
});

test("should return a color", async () => {
  expect((await apiClient.colors.getColor(1)).id).toBe(1);
});