import {z} from "zod";
import {ApiClient} from "../../api-client";
import {
  AchievementSchema,
  CategorySchema,
  DailyAchievementSchema,
  DailyAchievementsSchema,
  GroupSchema
} from "./achievement.schema";

export type Achievement = z.infer<typeof AchievementSchema>;
export type AchievementCategory = z.infer<typeof CategorySchema>;
export type DailyAchievement = z.infer<typeof DailyAchievementSchema>;
export type DailyAchievements = z.infer<typeof DailyAchievementsSchema>;
export type AchievementGroup = z.infer<typeof GroupSchema>;

export class AchievementsService {
  private readonly _apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this._apiClient = apiClient;
  }

  public async getAchievementIds(): Promise<number[]> {
    return this._apiClient.get(z.number().array(), "/v2/achievements");
  }

  public async getAchievement(achievementId: number | string): Promise<Achievement> {
    return this._apiClient.get(AchievementSchema, `/v2/achievements?id=${achievementId}`);
  }

  public async getAchievements(achievementIds: number[] | string[]): Promise<Achievement[]> {
    if (achievementIds.length > 200) {
      throw new Error("too many ids specified, max 200");
    }

    return this._apiClient.get(z.array(AchievementSchema), `/v2/achievements?ids=${achievementIds.join(",")}`);
  }

  public async getCategoryIds(): Promise<number[]> {
    return this._apiClient.get(z.number().array(), "/v2/achievements/categories");
  }

  public async getCategory(categoryId: number | string): Promise<AchievementCategory> {
    return this._apiClient.get(CategorySchema, `/v2/achievements/categories?id=${categoryId}`);
  }

  public async getCategories(categoryIds: number[] | string[]): Promise<AchievementCategory[]> {
    if (categoryIds.length > 200) {
      throw new Error("too many ids specified, max 200");
    }

    return this._apiClient.get(z.array(CategorySchema), `/v2/achievements/categories?ids=${categoryIds.join(",")}`);
  }

  public async getDailies(): Promise<DailyAchievements> {
    return this._apiClient.get(DailyAchievementsSchema, "/v2/achievements/daily");
  }

  public async getTomorrowDailies(): Promise<DailyAchievements> {
    return this._apiClient.get(DailyAchievementsSchema, "/v2/achievements/daily/tomorrow");
  }

  public async getGroups(): Promise<number[]> {
    return this._apiClient.get(z.string().array(), "/v2/achievements/groups");
  }

  public async getGroup(groupId: string): Promise<AchievementGroup> {
    return this._apiClient.get(GroupSchema, `/v2/achievements/groups?id=${groupId}`);
  }
}