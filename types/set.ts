import { z } from "zod";

export type Set = {
  id: string;
  title: string;
  description: string;
  is_draft: boolean;
  is_public: boolean;
  created_at: string;
  updated_at: string;
  tags: string[];
  users_enrolled: string[];
};

export const createSetSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  is_draft: z.boolean(),
  is_public: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
  tags: z.array(z.string()),
  users_enrolled: z.array(z.object({ id: z.string(), profile_picture: z.string() })),
});
