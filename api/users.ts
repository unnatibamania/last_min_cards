import { eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/db";
import { users } from "@/schema/user";
import { createUserSchema } from "@/types/user";

export const createUser = async (user: z.infer<typeof createUserSchema>) => {
  const newUser = await db.insert(users).values(user);

  return newUser;
};

export const getUser = async (id: string) => {
  const user = await db.select().from(users).where(eq(users.id, id));
  return user;
};
