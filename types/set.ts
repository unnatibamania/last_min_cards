import { z } from "zod";

export type Set = {
  id: string;
  title: string;
  description: string;
  is_draft: boolean;
  is_public: boolean;
};

export const createSetSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  is_draft: z.boolean(),
  is_public: z.boolean(),
});
