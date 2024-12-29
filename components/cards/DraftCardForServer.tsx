"use server";

import { Set } from "@/types/set";

import { DraftCard } from "./DraftCard";


import { getCards } from "@/actions/cards";


export const DraftCardForServer = async ({draft}: {
    draft:Set
})=>{
    const cards = await getCards({setId:draft.id});
    return <DraftCard draft={draft}  cardsLength={cards.length} />
}