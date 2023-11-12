import {ApiClient} from "../../api-client";
import {z} from "zod";

const AccountSchema = z.object({
  id: z.string(),
  age: z.number(),
  name: z.string(),
  world: z.number(),
  guilds: z.array(z.string()),
  guild_leader: z.array(z.string()),
  created: z.string().datetime(),
  access: z.array(z.string()),
  commander: z.boolean(),
  fractal_level: z.number(),
  daily_ap: z.number(),
  monthly_ap: z.number(),
  wvw_rank: z.number(),
  last_modified: z.string().datetime().optional(),
  build_storage_slots: z.number().optional(),
});

const AccountAchievementSchema = z.object({
  id: z.number(),
  current: z.number().optional(),
  max: z.number().optional(),
  done: z.boolean(),
  bits: z.array(z.number()).optional(),
  repeated: z.number().optional(),
  unlocked: z.boolean().optional(),
});

export const AccountBankSlotSchema = z.object({
  id: z.number(),
  count: z.number(),
  charges: z.number().optional(),
  skin: z.number().optional(),
  dyes: z.array(z.number()).optional(),
  upgrades: z.array(z.number()).optional(),
  upgrade_slot_indices: z.array(z.number()).optional(),
  infusions: z.array(z.number()).optional(),
  binding: z.string().optional(),
  bound_to: z.string().optional(),
  stats: z.object({
    id: z.number(),
    attributes: z.object({
      AgonyResistance: z.number().optional(),
      BoonDuration: z.number().optional(),
      ConditionDamage: z.number().optional(),
      ConditionDuration: z.number().optional(),
      CritDamage: z.number().optional(),
      Healing: z.number().optional(),
      Power: z.number().optional(),
      Precision: z.number().optional(),
      Toughness: z.number().optional(),
      Vitality: z.number().optional(),
    })
  })
});

export const AccountBuildStorage = z.object({
  name: z.string(),
  profession: z.string(),
  specializations: z.array(z.object({
    id: z.number(),
    traits: z.array(z.number())
  })),
  skills: z.object({
    heal: z.number(),
    utilities: z.array(z.number()),
    elite: z.number(),
  }),
  aquatic_skills: z.object({
    heal: z.number(),
    utilities: z.array(z.number()),
    elite: z.number(),
  }),
  legends: z.array(z.number()),
  aquatic_legends: z.array(z.number()),
});

export type Account = z.infer<typeof AccountSchema>;
export type AccountAchievement = z.infer<typeof AccountAchievementSchema>;
export type AccountBankSlot = z.infer<typeof AccountBankSlotSchema>;

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

  public async getBank(): Promise<AccountBankSlot[]> {
    return this._apiClient.getAuthenticated(z.array(AccountBankSlotSchema), "/v2/account/bank");
  }
}