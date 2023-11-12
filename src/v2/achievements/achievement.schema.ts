import {z} from "zod";

export const TierSchema = z.object({
  count: z.number(),
  points: z.number(),
});

export const RewardSchema = z.object({
  type: z.string(),
  count: z.number().optional(),
  id: z.number().optional(),
  region: z.string().optional(),
});

export const BitSchema = z.object({
  type: z.enum(["Text", "Item", "Minipet", "Skin"]),
  id: z.number().optional(),
  text: z.string().optional(),
});

export const AchievementSchema = z.object({
  id: z.number(),
  icon: z.string().optional(),
  name: z.string(),
  description: z.string(),
  requirement: z.string(),
  locked_text: z.string(),
  type: z.enum(['Default', 'ItemSet']),
  flags: z.array(z.enum(['Pvp', 'CategoryDisplay', 'MoveToTop', 'IgnoreNearlyComplete', 'Repeatable', 'Hidden', 'RequiresUnlock', 'RepairOnLogin', 'Daily', 'Weekly', 'Monthly', 'Permanent'])),
  tiers: z.array(TierSchema),
  prerequisites: z.array(z.number()).optional(),
  rewards: z.array(RewardSchema).optional(),
  bits: z.array(BitSchema).optional(),
  point_cap: z.number().optional(),
});

export const RequiredAccessSchema = z.object({
  product: z.enum(['HeartOfThorns', 'PathOfFire', "IcebroodSaga", "EndOfDragons", "ShadowOfTheObscure"]),
  condition: z.enum(['HasAccess', 'NoAccess']),
});

export const AchievementCategorySchema = z.object({
  id: z.number(),
  required_access: RequiredAccessSchema.optional(),
  flags: z.array(z.enum(['PvE', 'PvP', 'WvW', 'SpecialEvent'])).optional(),
  level: z.array(z.number()).length(2).optional(), // Assuming the level array always contains exactly two numbers.
});

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  order: z.number(),
  icon: z.string(),
  achievements: z.array(AchievementCategorySchema),
  tomorrow: z.array(AchievementCategorySchema).optional(),
});

export const LevelSchema = z.object(
  {
    min: z.number(),
    max: z.number(),
  }
);

export const DailyAchievementSchema = z.object({
  id: z.number(),
  level: LevelSchema,
  required_access: RequiredAccessSchema.optional(),
});

export const DailyAchievementsSchema = z.object({
  pvp: z.array(DailyAchievementSchema),
  pve: z.array(DailyAchievementSchema),
  wvw: z.array(DailyAchievementSchema),
  fractals: z.array(DailyAchievementSchema),
  special: z.array(DailyAchievementSchema),
});

export const GroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  order: z.number(),
  categories: z.array(z.number()),
});
