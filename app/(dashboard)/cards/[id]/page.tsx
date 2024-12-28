// "use client";

import { getCards } from "@/actions/cards";

import { getDraft } from "@/actions/set";

import CardSet from "@/components/card-set/CardSet";

import { Card } from "@/types/cards";
import { Set } from "@/types/set";

export default async function CardSetPage({ 
  params,
}: {
  params: { id: string };
}) {
  const cards = await getCards({ setId: params.id });

  const set = await getDraft(cards[0]?.setId as string);

  return <CardSet cards={cards as Card[]} set={set[0] as Set} />;
}

