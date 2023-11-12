import {z} from "zod";

export const AnswerSchema = z.object({
  id: z.string().default("0"),
  title: z.string().default(""),
  description: z.string().default(""),
  journal: z.string().default(""),
  question: z.number().default(0),
  professions: z.array(z.string()).optional().default([]),
  races: z.array(z.string()).optional().default([]),
});

export const QuestionSchema = z.object({
  id: z.number().default(0),
  title: z.string().default(""),
  description: z.string().default(""),
  answers: z.array(z.string()),
  order: z.number().default(0),
  professions: z.array(z.string()).optional().default([]),
  races: z.array(z.string()).optional().default([]),
})