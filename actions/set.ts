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
  tags,
}: {
  title: string;
  description: string;
  isDraft: boolean;
  isPublic: boolean;
  tags: string[];
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
        tags,
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

export const updateSet = async (
  id: string,
  title: string,
  description: string,
  isPublic: boolean,
  tags: string[]
) => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const set = await db
      .update(sets)
      .set({ title, description, is_public: isPublic, tags })
      .where(eq(sets.id, id))
      .returning();

    return set;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update set");
  }
};

export const getMySets = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const mySets = await db
      .select()
      .from(sets)
      .where(and(eq(sets.is_draft, false), eq(sets.userId, user?.id)));

    return mySets;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get my sets");
  }
};
