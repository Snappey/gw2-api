import {expect, test} from "vitest";
import {Gw2Client} from "../../gw2-client";

const apiClient = new Gw2Client(process.env.GW2_API_KEY);

test("return account data", async () => {
  const account = await apiClient.account.getAccount();
  expect(account).toBeDefined();
  expect(account.id).toBeDefined();
  expect(account.name).toBeDefined();
  expect(account.world).toBeDefined();
  expect(account.guilds).toBeDefined();
  expect(account.guild_leader).toBeDefined();
  expect(account.created).toBeDefined();
  expect(account.access).toBeDefined();
  expect(account.commander).toBeDefined();
  expect(account.fractal_level).toBeDefined();
  expect(account.daily_ap).toBeDefined();
  expect(account.monthly_ap).toBeDefined();
  expect(account.wvw_rank).toBeDefined();
});

test("return account achievements", async () => {
  const achievements = await apiClient.account.getAchievements();
  expect(achievements).toBeDefined();
});

test("return account bank", async () => {
  const bank = await apiClient.account.getBank();
  expect(bank).toBeDefined();
});

test("return account build storage ids", async () => {
  const buildStorage = await apiClient.account.getBuildStorageIds();
  expect(buildStorage).toBeDefined();
});

test("return account build storage", async () => {
  const buildStorage = await apiClient.account.getBuildStorage(1);
  expect(buildStorage).toBeDefined();
});

test("return account daily crafting", async () => {
  const dailyCrafting = await apiClient.account.getDailyCrafting();
  expect(dailyCrafting).toBeDefined();
});

test("return account dungeons", async () => {
  const dungeons = await apiClient.account.getDungeons();
  expect(dungeons).toBeDefined();
});

test("return account dyes", async () => {
  const dyes = await apiClient.account.getDyes();
  expect(dyes).toBeDefined();
});

test("return account finishers", async () => {
  const finishers = await apiClient.account.getFinishers();
  expect(finishers).toBeDefined();
});

test("return account gliders", async () => {
  const gliders = await apiClient.account.getGliders();
  expect(gliders).toBeDefined();
});

test("return account home cats", async () => {
  const homeCats = await apiClient.account.getHomeCats();
  expect(homeCats).toBeDefined();
});

test("return account home nodes", async () => {
  const homeNodes = await apiClient.account.getHomeNodes();
  expect(homeNodes).toBeDefined();
});

test("return account legendary armory", async () => {
  const legendaryArmory = await apiClient.account.getLegendaryArmory();
  expect(legendaryArmory).toBeDefined();
});

test("return account luck", async () => {
  const luck = await apiClient.account.getLuck();
  expect(luck).toBeDefined();
  expect(luck.length).toBeGreaterThan(0);
});

test("return account mail carriers", async () => {
  const mailCarriers = await apiClient.account.getMailCarriers();
  expect(mailCarriers).toBeDefined();
});

test("return account mapchests", async () => {
  const mapChests = await apiClient.account.getMapChests();
  expect(mapChests).toBeDefined();
});

test("return account masteries", async () => {
  const masteries = await apiClient.account.getMasteries();
  expect(masteries).toBeDefined();
});

test("return account mastery points", async () => {
  const masteryPoints = await apiClient.account.getMasteryPoints();
  expect(masteryPoints).toBeDefined();
  expect(masteryPoints.totals).toBeDefined();
  expect(masteryPoints.unlocked).toBeDefined();
});

test("return account materials", async () => {
  const materials = await apiClient.account.getMaterials();
  expect(materials).toBeDefined();
});

test("return account minis", async () => {
  const minis = await apiClient.account.getMinis();
  expect(minis).toBeDefined();
});

test("return account mount types", async () => {
  const mountTypes = await apiClient.account.getMountTypes();
  expect(mountTypes).toBeDefined();
});

test("return account mount skins", async () => {
  const mountSkins = await apiClient.account.getMountSkins();
  expect(mountSkins).toBeDefined();
});

test("return account novelties", async () => {
  const novelties = await apiClient.account.getNovelties();
  expect(novelties).toBeDefined();
});

test("return account outfits", async () => {
  const outfits = await apiClient.account.getOutfits();
  expect(outfits).toBeDefined();
});

test("return account progression", async () => {
  const progression = await apiClient.account.getProgession();
  expect(progression).toBeDefined();
});

test("return account pvp heroes", async () => {
  const pvpHeroes = await apiClient.account.getPvpHeroes();
  expect(pvpHeroes).toBeDefined();
});

test("return account raids", async () => {
  const raids = await apiClient.account.getRaids();
  expect(raids).toBeDefined();
});

test("return account recipes", async () => {
  const recipes = await apiClient.account.getRecipes();
  expect(recipes).toBeDefined();
});

test("return account shared inventory", async () => {
  const sharedInventory = await apiClient.account.getSharedInventory();
  expect(sharedInventory).toBeDefined();
});

test("return account jade bots", async () => {
  const jadeBots = await apiClient.account.getJadeBots();
  expect(jadeBots).toBeDefined();
});

test("return account skiffs", async () => {
  const skiffs = await apiClient.account.getSkiffs();
  expect(skiffs).toBeDefined();
});

test("return account skins", async () => {
  const skins = await apiClient.account.getSkins();
  expect(skins).toBeDefined();
});

test("return account titles", async () => {
  const titles = await apiClient.account.getTitles();
  expect(titles).toBeDefined();
});

test("return account wallet", async () => {
  const wallet = await apiClient.account.getWallet();
  expect(wallet).toBeDefined();
  expect(wallet.length).toBeGreaterThan(0);
});

test("return account world bosses", async () => {
  const worldBosses = await apiClient.account.getWorldBosses();
  expect(worldBosses).toBeDefined();
});
