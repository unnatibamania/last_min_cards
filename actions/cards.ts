"use server";

import { db } from "@/db";
import { cards } from "@/schema/cards";

import { randomUUID } from "crypto";

import { currentUser } from "@clerk/nextjs/server";

export const createCard = async ({
  cardsList,
  setId,
}: {
  cardsList: { question: string; answer: string; tags: string[] }[];
  setId: string;
}) => {
  // insert multiple

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

  console.log({
    cardListToReturn,
  });

  return cardListToReturn;
};