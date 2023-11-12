import {expect, test} from "vitest";
import {Gw2Client} from "../../gw2-client";

const apiClient = new Gw2Client();

test("should return achievement ids", async () => {
  expect(Array.isArray(await apiClient.achievements.getAchievementIds())).toBe(true);
});

test("should return an achievement", async () => {
  const achievementId = 3147;
  expect((await apiClient.achievements.getAchievement(achievementId)).id).toBe(achievementId);
});

test("should return an array of achievements", async () => {
  const achievementIds = [3147, 3148];
  const achievements = await apiClient.achievements.getAchievements(achievementIds);
  expect(
    achievements.at(0)?.id === 3147
    && achievements.at(1)?.id === 3148
  ).toBe(true);
});

test("should return achievement category ids", async () => {
  expect(Array.isArray(await apiClient.achievements.getCategoryIds())).toBe(true);
});

test("should return an achievement category", async () => {
  expect((await apiClient.achievements.getCategory(1)).id).toBe(1);
});

test("should return an array of achievement categories", async () => {
  const categoryIds = [1, 2];
  const categories = await apiClient.achievements.getCategories(categoryIds);
  expect(
    categories.at(0)?.id === 1
    && categories.at(1)?.id === 2
  ).toBe(true);
});

test("should return daily achievements", async () => {
  expect(async () => await apiClient.achievements.getDailies()).rejects.toThrowError("disabled");
});

test("should return tomorrow's daily achievements", async () => {
  expect(async () => await apiClient.achievements.getTomorrowDailies()).rejects.toThrowError("disabled");
});

test("should return achievement group ids", async () => {
  expect(Array.isArray(await apiClient.achievements.getGroups())).toBe(true);
});

test("should return an achievement group", async () => {
  expect((await apiClient.achievements.getGroup("65B4B678-607E-4D97-B458-076C3E96A810")).id).toBe("65B4B678-607E-4D97-B458-076C3E96A810");
});