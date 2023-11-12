import {z} from "zod";


export const ColorPropertiesSchema = z.object({
  brightness: z.number(),
  contrast: z.number(),
  hue: z.number(),
  saturation: z.number(),
  lightness: z.number(),
  rgb: z.array(z.number()).length(3, "rgb array must have 3 elements"),
});

export const ColorSchema = z.object({
  id: z.number(),
  name: z.string(),
  base_rgb: z.array(z.number()).length(3, "rgb array must have 3 elements"),
  cloth: ColorPropertiesSchema,
  leather: ColorPropertiesSchema,
  metal: ColorPropertiesSchema,
  fur: ColorPropertiesSchema,
  item: z.number().optional(),
  categories: z.array(z.string()),
});