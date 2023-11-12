"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementsService = void 0;
const zod_1 = require("zod");
const TierSchema = zod_1.z.object({
    count: zod_1.z.number(),
    points: zod_1.z.number(),
});
const RewardSchema = zod_1.z.object({
    type: zod_1.z.string(),
    count: zod_1.z.number().optional(),
    id: zod_1.z.number().optional(),
    region: zod_1.z.string().optional(),
});
const BitSchema = zod_1.z.object({
    type: zod_1.z.enum(["Text", "Item", "Minipet", "Skin"]),
    id: zod_1.z.number().optional(),
    text: zod_1.z.string().optional(),
});
const AchievementSchema = zod_1.z.object({
    id: zod_1.z.string(),
    icon: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    requirement: zod_1.z.string(),
    locked_text: zod_1.z.string(),
    type: zod_1.z.enum(['Default', 'ItemSet']),
    flags: zod_1.z.array(zod_1.z.enum(['Pvp', 'CategoryDisplay', 'MoveToTop', 'IgnoreNearlyComplete', 'Repeatable', 'Hidden', 'RequiresUnlock', 'RepairOnLogin', 'Daily', 'Weekly', 'Monthly', 'Permanent'])),
    tiers: zod_1.z.array(TierSchema),
    prerequisites: zod_1.z.array(zod_1.z.number()).optional(),
    rewards: zod_1.z.array(RewardSchema).optional(),
    bits: zod_1.z.array(BitSchema).optional(),
    point_cap: zod_1.z.number().optional(),
});
class AchievementsService {
    _apiClient;
    constructor(apiClient) {
        this._apiClient = apiClient;
    }
    async getIds() {
        return this._apiClient.get(zod_1.z.number().array(), "/achievements");
    }
    async get(achievementId) {
        return this._apiClient.get(AchievementSchema, `/achievements?id=${achievementId}`);
    }
    async getMany(achievementIds) {
        if (achievementIds.length > 200) {
            throw new Error("too many ids specified, max 200");
        }
        return this._apiClient.get(AchievementSchema, `/achievements?id=${achievementIds.join(",")}`);
    }
}
exports.AchievementsService = AchievementsService;
