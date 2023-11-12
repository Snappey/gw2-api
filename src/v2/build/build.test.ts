import {expect, test} from "vitest";
import {Gw2Client} from "../../gw2-client";

const apiClient = new Gw2Client();

test("should return build", async () => {
  expect((await apiClient.build.getBuild()).id).toBeGreaterThan(0);
});