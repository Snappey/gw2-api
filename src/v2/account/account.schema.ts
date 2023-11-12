import {z} from "zod";
import {s} from "vitest/dist/reporters-5f784f42";

export const AccountSchema = z.object({
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

export const AccountAchievementSchema = z.object({
  id: z.number(),
  current: z.number().optional(),
  max: z.number().optional(),
  done: z.boolean(),
  bits: z.array(z.number()).optional(),
  repeated: z.number().optional(),
  unlocked: z.boolean().optional(),
});

export const AccountItemSchema = z.object({
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
  }).optional()
});

export const AccountBuildStorageSchema = z.object({
  name: z.string(),
  profession: z.string(),
  specializations: z.array(z.object({
    id: z.number(),
    traits: z.array(z.number().optional())
  })),
  skills: z.object({
    heal: z.number().or(z.null()),
    utilities: z.array(z.number().or(z.null())),
    elite: z.number().or(z.null()),
  }),
  aquatic_skills: z.object({
    heal: z.number().or(z.null()),
    utilities: z.array(z.number().or(z.null())),
    elite: z.number().or(z.null()),
  }).optional(),
  legends: z.array(z.number().or(z.null())).optional(),
  aquatic_legends: z.array(z.number().or(z.null())).optional(),
});

export const AccountFinisherSchema = z.object({
  id: z.number(),
  permanent: z.boolean().optional(),
  quantity: z.number().optional(),
});

export const AccountCatSchema = z.object({
  id: z.number(),
  hint: z.string(),
});

export const AccountLegendaryArmorySchema = z.object({
  id: z.number(),
  count: z.number(),
});

export const AccountProgressionSchema = z.object({
  id: z.string(),
  value: z.number(),
});

export const AccountMasterySchema = z.object({
  id: z.number(),
  level: z.number(),
});

export const AccountMasteryPointsSchema = z.object({
  totals: z.array(z.object({
    region: z.string(),
    spent: z.number(),
    earned: z.number(),
  })),
  unlocked: z.array(z.number()),
});

export const AccountMaterialStorageSchema = z.object({
  id: z.number(),
  category: z.number(),
  binding: z.string().optional(),
  count: z.number(),
});

export const AccountWalletSchema = z.object({
  id: z.number(),
  value: z.number(),
});