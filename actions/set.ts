"use server";

import { db } from "@/db";
import { sets } from "@/schema/set";
import { and, eq } from "drizzle-orm";

import { randomUUID } from "crypto";

import { currentUser } from "@clerk/nextjs/server";

export const createSet = async ({
  title,
  description,
  isDraft,
  isPublic,
}: {
  title: string;
  description: string;
  isDraft: boolean;
  isPublic: boolean;
}) => {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error("User not found");
    }

    const newSet = await db
      .insert(sets)
      .values({
        title: title.length > 0 ? title : "Untitled",
        description,
        userId: user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        is_draft: isDraft,
        is_public: isPublic,
        id: randomUUID(),
      })
      .returning();

    return newSet;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create set");
  }
};

export const getSets = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const setsList = await db
    .select()
    .from(sets)
    .where(and(eq(sets.userId, user.id), eq(sets.is_draft, false)));

  return setsList;
};

export const getDraftSets = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const draftSets = await db
    .select()
    .from(sets)
    .where(and(eq(sets.userId, user.id), eq(sets.is_draft, true)));

  return draftSets;
};

export const getDraft = async (id: string) => {
  const draft = await db.select().from(sets).where(eq(sets.id, id));

  return draft;
};
