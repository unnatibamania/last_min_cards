"use client";

import { useRouter } from "next/navigation";

import { Pencil, Trash, CreditCard, Lock, Unlock } from "lucide-react";

import { Button } from "../ui/button";

import { Set } from "@/types/set";
import { Pill } from "../Pill";

const tags = ["tag1", "tag2", "tag3"];

export const DraftCard = ({ draft }: { draft: Set }) => {
  const router = useRouter();

  return (
    <>
      <div
        key={draft.id}
        className="flex cursor-pointer hover:shadow-sm transition-all duration-300 border rounded-2xl p-4 flex-col gap-4"
      >
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">{draft.title}</h2>
          <p className="text-xs text-gray-500">{draft.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Pill key={tag} tag={tag} onClick={() => {}} />
          ))}
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            <p className="text-xs text-gray-500">43 cards at present</p>
          </div>

          <p className="text-xs flex items-center gap-1 text-gray-500">
            {draft.is_public ? (
              <>
                <Unlock className="w-4 h-4" /> Public
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" /> Private
              </>
            )}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => {
              router.push(`/draft/${draft.id}`);
            }}
          >
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <Button onClick={() => {}}>
            <Trash className="w-4 h-4" />
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};
