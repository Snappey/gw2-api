import {ApiClient} from "../../api-client";
import {z} from "zod";
import {
  AccountAchievementSchema,
  AccountItemSchema,
  AccountBuildStorageSchema,
  AccountCatSchema,
  AccountFinisherSchema,
  AccountLegendaryArmorySchema,
  AccountProgressionSchema,
  AccountMasteryPointsSchema,
  AccountMasterySchema,
  AccountMaterialStorageSchema,
  AccountSchema,
  AccountWalletSchema
} from "./account.schema";

export type Account = z.infer<typeof AccountSchema>;
export type AccountAchievement = z.infer<typeof AccountAchievementSchema>;
export type AccountItem = z.infer<typeof AccountItemSchema>;
export type AccountBuildStorage = z.infer<typeof AccountBuildStorageSchema>;
export type AccountFinisher = z.infer<typeof AccountFinisherSchema>;
export type AccountCat = z.infer<typeof AccountCatSchema>;
export type AccountLegendaryArmory = z.infer<typeof AccountLegendaryArmorySchema>;
export type AccountProgression = z.infer<typeof AccountProgressionSchema>;
export type AccountMastery = z.infer<typeof AccountMasterySchema>;
export type AccountMasteryPoints = z.infer<typeof AccountMasteryPointsSchema>;
export type AccountMaterialStorage = z.infer<typeof AccountMaterialStorageSchema>;
export type AccountWallet = z.infer<typeof AccountWalletSchema>;

export class AccountService {
  private readonly _apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this._apiClient = apiClient;
  }

  public async getAccount(): Promise<Account> {
    return this._apiClient.getAuthenticated(AccountSchema, "/v2/account");
  }

  public async getAchievements(): Promise<AccountAchievement[]> {
    return this._apiClient.getAuthenticated(z.array(AccountAchievementSchema), "/v2/account/achievements");
  }

  public async getBank(): Promise<AccountItem[]> {
    return this._apiClient.getAuthenticated(z.array(AccountItemSchema.or(z.null())), "/v2/account/bank");
  }

  public async getBuildStorageIds(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/buildstorage");
  }

  public async getBuildStorage(id: number): Promise<AccountBuildStorage> {
    return this._apiClient.getAuthenticated(AccountBuildStorageSchema, `/v2/account/buildstorage/${id}`);
  }

  public async getDailyCrafting(): Promise<string[]> {
    return this._apiClient.getAuthenticated(z.array(z.string()), "/v2/account/dailycrafting");
  }

  public async getDungeons(): Promise<string[]> {
    return this._apiClient.getAuthenticated(z.array(z.string()), "/v2/account/dungeons");
  }

  public async getDyes(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/dyes");
  }

  public async getFinishers(): Promise<AccountFinisher[]> {
    return this._apiClient.getAuthenticated(z.array(AccountFinisherSchema), "/v2/account/finishers");
  }

  public async getGliders(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/gliders");
  }

  public async getHomeCats(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/home/cats");
  }

  public async getHomeNodes(): Promise<string[]> {
    return this._apiClient.getAuthenticated(z.array(z.string()), "/v2/account/home/nodes");
  }

  public async getLegendaryArmory(): Promise<AccountLegendaryArmory[]> {
    return this._apiClient.getAuthenticated(z.array(AccountLegendaryArmorySchema), "/v2/account/legendaryarmory");
  }

  public async getLuck(): Promise<AccountProgression[]> {
    return this._apiClient.getAuthenticated(z.array(AccountProgressionSchema), "/v2/account/luck");
  }

  public async getMailCarriers(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/mailcarriers");
  }

  public async getMapChests(): Promise<string[]> {
    return this._apiClient.getAuthenticated(z.array(z.string()), "/v2/account/mapchests");
  }

  public async getMasteries(): Promise<AccountMastery[]> {
    return this._apiClient.getAuthenticated(z.array(AccountMasterySchema), "/v2/account/masteries");
  }

  public async getMasteryPoints(): Promise<AccountMasteryPoints> {
    return this._apiClient.getAuthenticated(AccountMasteryPointsSchema, "/v2/account/mastery/points");
  }

  public async getMaterials(): Promise<AccountMaterialStorage[]> {
    return this._apiClient.getAuthenticated(z.array(AccountMaterialStorageSchema), "/v2/account/materials");
  }

  public async getMinis(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/minis");
  }

  public async getMountTypes(): Promise<string[]> {
    return this._apiClient.getAuthenticated(z.array(z.string()), "/v2/account/mounts/types");
  }

  public async getMountSkins(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/mounts/skins");
  }

  public async getNovelties(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/novelties");
  }

  public async getOutfits(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/outfits");
  }

  public async getProgession(): Promise<AccountProgression[]> {
    return this._apiClient.getAuthenticated(z.array(AccountProgressionSchema), "/v2/account/progression");
  }

  public async getPvpHeroes(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/pvp/heroes");
  }

  public async getRaids(): Promise<string[]> {
    return this._apiClient.getAuthenticated(z.array(z.string()), "/v2/account/raids");
  }

  public async getRecipes(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/recipes");
  }

  public async getSharedInventory(): Promise<AccountItem[]> {
    return this._apiClient.getAuthenticated(z.array(AccountItemSchema.or(z.null())), "/v2/account/inventory");
  }

  public async getJadeBots(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/jadebots");
  }

  public async getSkiffs(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/skiffs");
  }

  public async getSkins(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/skins");
  }

  public async getTitles(): Promise<number[]> {
    return this._apiClient.getAuthenticated(z.array(z.number()), "/v2/account/titles");
  }

  public async getWallet(): Promise<AccountWallet[]> {
    return this._apiClient.getAuthenticated(z.array(AccountWalletSchema), "/v2/account/wallet");
  }

  public async getWorldBosses(): Promise<string[]> {
    return this._apiClient.getAuthenticated(z.array(z.string()), "/v2/account/worldbosses");
  }
}