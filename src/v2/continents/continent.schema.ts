import {z} from "zod";

export const CoordinatesSchema = z.array(z.number()).length(2);
export const BoundsSchema = z.array(
    z.array(z.number()).length(2)
).length(2);

export const ContinentSchema = z.object({
    name: z.string(),
    min_zoom: z.number(),
    max_zoom: z.number(),
    floors: z.array(z.number()),
    id: z.number()
});

export const PointOfInterestSchema = z.object({
    name: z.string().optional(),
    type: z.enum(["waypoint", "landmark", "vista", "unlock"]),
    floor: z.number(),
    coord: CoordinatesSchema,
    chat_link: z.string(),
    id: z.number(),
    icon: z.string().optional()
});

export const TaskSchema = z.object({
    id: z.number(),
    objective: z.string(),
    level: z.number(),
    coord: CoordinatesSchema,
    bounds: BoundsSchema,
    chat_link: z.string(),
});

export const SkillChallengeSchema = z.object({
    id: z.number(),
    coord: CoordinatesSchema,
});

export const SectorSchema = z.object({
    id: z.number(),
    name: z.string(),
    level: z.number(),
    coord: CoordinatesSchema,
    bounds: BoundsSchema,
    chat_link: z.string(),
});

export const MasteryPointSchema = z.object({
    id: z.number(),
    region: z.string(),
    coord: CoordinatesSchema,
});

export const AdventureSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    coord: CoordinatesSchema,
});

export const FloorSchema = z.object({
    texture_dims: CoordinatesSchema,
    clamped_view: BoundsSchema.optional(),
    maps: z.record(z.string(), z.object({
        name: z.string(),
        min_level: z.number(),
        max_level: z.number(),
        default_floor: z.number(),
        label_coord: z.array(z.number()),
        continent_rect: z.array(z.number()),
        map_rect: z.array(z.number()),
        points_of_interest: z.record(z.string(), PointOfInterestSchema),
        tasks: z.record(z.string(), TaskSchema),
        skill_challenges: z.array(z.string(), SkillChallengeSchema),
        sectors: z.record(z.string(), SectorSchema),
        mastery_points: z.array(MasteryPointSchema),
        adventures: z.array(AdventureSchema),
    })).optional(),
    name: z.string().optional(),
    min_level: z.number().optional(),
    max_level: z.number().optional(),
    default_floor: z.number().optional(),
    id: z.number()
});
