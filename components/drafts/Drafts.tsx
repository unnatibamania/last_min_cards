"use client";

import { Set } from "@/types/set";

import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GripVertical } from "lucide-react";
import { motion } from "framer-motion";

import CardView from "@/components/creation/CardView";

import { CardData } from "@/app/types/card";

interface DraftPageClientProps {
  draft: Set;
  cards: CardData[];
}

export const DraftPageClient = ({ draft, cards }: DraftPageClientProps) => {
  const [cardSetTitle, setCardSetTitle] = useState(draft.title);
  const [cardSetDescription, setCardSetDescription] = useState(
    draft.description
  );
  // const [tags, setTags] = useState(draft.tags);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardsList, setCardsList] = useState<CardData[]>(cards);

  useEffect(() => {
    setCardsList(cards);
  }, [cards]);

  return (
    <div className="grid grid-cols-3 p-6 bg-inherit w-full gap-3 h-full">
      {/* Your client-side UI here */}
      <div className="flex flex-col gap-4">
        <section className="flex flex-col gap-4">
          <Input
            placeholder="Title"
            value={cardSetTitle}
            onChange={(e) => setCardSetTitle(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            value={cardSetDescription}
            onChange={(e) => setCardSetDescription(e.target.value)}
          />

          <Input
            placeholder="Tags"
            // value={tags.join(",")}
            // onChange={(e) => setTags(e.target.value.split(","))}
          />

          {/* <Button onClick={handleCreateSet}>Create Set</Button> */}
        </section>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Cards</p>
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={
                index === currentIndex
                  ? "bg-white z-10 relative border cursor-pointer  flex items-center gap-2 rounded-xl p-2 shadow-sm"
                  : "bg-white z-10 relative cursor-pointer hover:shadow-md transition-all duration-300 flex items-center gap-2 rounded-xl p-2 shadow-sm"
              }
            >
              {index === currentIndex && (
                <motion.div
                  layout="position"
                  layoutId="current-card"
                  className="absolute inset-0 -z-10 rounded-xl border border-gray-500 bg-white"
                />
              )}
              <GripVertical className="h-4 w-4 cursor-grab" />
              <p className="text-sm font-medium">{card.question}</p>
            </div>
          ))}
        </div>
      </div>

      <CardView
        cards={cardsList}
        setCards={setCardsList}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      {/* <div className="flex flex-col gap-4"></div> */}
    </div>
  );
};
