import { z } from "zod";

export type Card = {
  id: string;
  question: string;
  answer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

export const createCardSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  tags: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
});