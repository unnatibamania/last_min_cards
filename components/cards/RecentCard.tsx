"use client";

import { useState } from "react";

import { Progress } from "../ui/progress";

import { useRouter } from "next/navigation";

import { deleteDraft } from "@/actions/set";

import { Button } from "../ui/button";

import { Trash2 } from 'lucide-react'

import { DeleteConfirmation } from "../confirmation-modal/DeleteConfirmation";

import { Set } from "@/types/set";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const RecentCard = ({ index, set, cardsLength, visitedCardsLength }: { index: number; set: Set, cardsLength: number, visitedCardsLength: number }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      key={index}
      className="flex cursor-pointer border rounded-2xl p-4 flex-col gap-4"
    >
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">{set.title}</h2>
        <p className="text-xs text-gray-500">{set.description}</p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p>Progress</p>

          <p className="text-xs">{visitedCardsLength} / {cardsLength} cards</p>
        </div>

        <Progress value={visitedCardsLength / cardsLength * 100} />
      </div>

      <div className="flex items-center justify-between">
        {
          set.users_enrolled?.length > 0 ?    <div className="flex items-center -space-x-3 relative">
          <Avatar>
            <AvatarImage src="https://github.com/itsnitinr.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar className=" ">
            <AvatarImage src="https://github.com/ameybh.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar className="">
            <AvatarImage src="https://github.com/unnatibamania.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar className="">
            {/* <AvatarImage src="https://github.com/.png" /> */}
            <AvatarFallback>+4</AvatarFallback>
          </Avatar>
        </div>
 : <div></div>
        }
     
        <div className="flex gap-x-2">
        <Button
        size={'icon'}
          onClick={() => {
              setOpen(true);
            }}
          >
            <Trash2 />
          </Button>

        <Button
          variant="outline"
          onClick={() => {
            router.push(`/cards/${set.id}`);
          }}
        >
          Continue
        </Button>
        </div>
      </div>

      <DeleteConfirmation open={open} setOpen={setOpen} isLoading={isLoading} deleteDraft={deleteDraft} draft={set} setIsLoading={setIsLoading} />
    </div>
  );
};

