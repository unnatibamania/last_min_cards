"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

import CardView from "@/components/creation/CardView";
import { GripVertical } from "lucide-react";

import { CardData } from "@/app/types/card";

export default function EnhancedCardCreator() {
  const [cards, setCards] = useState<CardData[]>([
    {
      id: "1",
      question: "First Law of motion",
      answer:
        "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.",
      tags: ["tag1"],
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardSetTitle, setCardSetTitle] = useState("");
  const [cardSetDescription, setCardSetDescription] = useState("");
  // const [name, setName] = useState(cards[0].name);
  // const [description, setDescription] = useState(cards[0].description);
  // const [newTag, setNewTag] = useState("");

  return (
    <div className="grid grid-cols-3 w-full gap-8 h-full">
      <div className="flex flex-col  gap-4">
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
        cards={cards}
        setCards={setCards}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <div className="flex flex-col w-full gap-2">
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col h-fit gap-2">
          <h1 className="text-lg font-medium">Make it sharable</h1>
          <p className="text-sm text-gray-500">
            Share your cards with your friends and family
          </p>
          <Button variant="outline">Create Link</Button>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col h-fit gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-medium">Are you ready?</h1>
            <p className="text-sm text-gray-500">
              You can always edit your cards later
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">Save as draft</Button>
            <Button>Create</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
