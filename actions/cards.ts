"use server";

import { db } from "@/db";
import { cards } from "@/schema/cards";

import { eq } from "drizzle-orm";

import { randomUUID } from "crypto";

import { Card } from "@/types/cards";

import { currentUser } from "@clerk/nextjs/server";

export const createCard = async ({
  cardsList,
  setId,
}: {
  cardsList: { question: string; answer: string; tags: string[] }[];
  setId: string;
}) => {
  // insert multiple

  try {
    const user = await currentUser();

    if (!user?.id) throw new Error("User not authenticated");

    const cardListToReturn = await db
      .insert(cards)
      .values(
        cardsList.map((card, index) => ({
          answer: card.answer,
          question: card.question,
          tags: card.tags,
          setId,
          order: index,
          userId: user.id,
          createdAt: new Date(),
          updatedAt: new Date(),
          id: randomUUID(),
        }))
      )
      .returning();

    return cardListToReturn;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create cards");
  }
};

export const getCards = async ({ setId }: { setId: string }) => {
  const cardsList = await db.select().from(cards).where(eq(cards.setId, setId));

  return cardsList;
};

export const getCardsByDraftId = async ({ draftId }: { draftId: string }) => {
  const cardsList = await db
    .select()
    .from(cards)
    .where(eq(cards.setId, draftId));

  return cardsList;
};

export const updateCards = async (cardsToUpdate: Card[]) => {
  try {
    // Use Promise.all to handle multiple updates in parallel
    const updatedCards = await Promise.all(
      cardsToUpdate.map(async (card) => {
        return db.update(cards).set(card).where(eq(cards.id, card.id));
      })
    );

    return updatedCards;
  } catch (error) {
    console.error("Error updating cards:", error);
    throw new Error("Failed to update cards");
  }
};

export const deleteCard = async (id: string) => {
  const deletedCard = await db.delete(cards).where(eq(cards.id, id));

  return deletedCard;
};


export const markCardAsVisited = async (id: string) => {
  const updatedCard = await db.update(cards).set({ is_visited: true }).where(eq(cards.id, id)).returning();

  return updatedCard;
};

