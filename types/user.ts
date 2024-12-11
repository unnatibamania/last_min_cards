import { z } from "zod";

export type User = {
  id: string;
  email: string;
  name: string;
};

export const createUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
});
