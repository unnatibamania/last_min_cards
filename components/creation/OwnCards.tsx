"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

import { Pill } from "../Pill";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { Switch } from "@/components/ui/switch";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CardView from "@/components/creation/CardView";
import { GripVertical, DraftingCompass, Save } from "lucide-react";

import { createSet } from "@/actions/set";
import { createCard } from "@/actions/cards";
import { CardData } from "@/app/types/card";

import { Loader2 } from "lucide-react";

export default function EnhancedCardCreator() {
  const router = useRouter();

  const { toast } = useToast();

  const [confirmCreate, setConfirmCreate] = useState(false);
  const [cards, setCards] = useState<CardData[]>([
    {
      id: "1",
      question: "First Law of motion",
      answer:
        "An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.",
      tags: ["inertia", "physics"],
      order: 1,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardSetTitle, setCardSetTitle] = useState("");
  const [cardSetDescription, setCardSetDescription] = useState("");
  const [setTagInput, setSetTagInput] = useState("");
  // const [cardSetTags, setCardSetTags] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isPublic, setIsPublic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDraftLoading, setIsDraftLoading] = useState(false);

  const handleCreateSet = async ({ isDraft }: { isDraft: boolean }) => {
    try {
      // setIsLoading(true);
      const newSet = await createSet({
        title: cardSetTitle,
        description: cardSetDescription,
        isDraft: isDraft,
        isPublic,
        tags,
      });

      await createCard({
        cardsList: cards,
        setId: newSet[0]?.id,
      });

      router.push(`/my-sets`);
      setIsLoading(false);
      setIsDraftLoading(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to create set",
      });
    }
  };

  return (
    <div className="grid grid-cols-3 w-full  gap-3 h-full">
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
            value={setTagInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const input = e.currentTarget;
                const newTag = input.value.trim();
                setTags([...tags, newTag]);
                setSetTagInput("");
              }
            }}
            onChange={(e) => setSetTagInput(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Pill
                key={tag}
                tag={tag}
                onClick={() => {
                  setTags(tags.filter((t) => t !== tag));
                }}
              />
            ))}
          </div>

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
        cards={cards}
        setCards={setCards}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <div className="flex flex-col w-full gap-2">
        <div className="flex bg-white shadow-sm p-4  rounded-xl justify-between">
          <div className="flex flex-col h-fit">
            <h1 className="text-lg font-medium">
              Do you want to make it public ?
            </h1>
            <p className="text-sm text-gray-500">
              Share your cards with the world
            </p>
          </div>

          <Switch
            checked={isPublic}
            onCheckedChange={setIsPublic}
            // className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-500"
          />

          {/* <Button variant="outline">Create Link</Button> */}
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col h-fit gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-medium">Are you ready?</h1>
            <p className="text-sm text-gray-500">
              You can always edit your cards later
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsDraftLoading(true);
                handleCreateSet({ isDraft: true });
              }}
            >
              {isDraftLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <DraftingCompass className="h-4 w-4" />
              )}
              Save as draft
            </Button>
            <Button
              onClick={() => setConfirmCreate(true)}
              // onClick={() => handleCreateSet({ isDraft: false })}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  {" "}
                  <Save className="h-4 w-4" /> Create set{" "}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={confirmCreate} onOpenChange={setConfirmCreate}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to create this set?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            You can always edit your cards later
          </DialogDescription>
          <DialogFooter>
            <Button
              variant={"outline"}
              onClick={() => {
                setConfirmCreate(false);
              }}
            >
              {/* <Delete className="h-4 w-4" /> */}
              Cancel
            </Button>
            <Button
              onClick={() => {
                setIsLoading(true);
                handleCreateSet({ isDraft: false });
                // setConfirmCreate(false);
              }}
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
