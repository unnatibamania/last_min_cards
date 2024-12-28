"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Pencil, Trash, CreditCard, Lock, Unlock } from "lucide-react";

import { deleteDraft } from "@/actions/set";

import { Loader2 } from "lucide-react";

import { Button } from "../ui/button";

import { Set } from "@/types/set";
import { Pill } from "../Pill";

import { DeleteConfirmation } from "../confirmation-modal/DeleteConfirmation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export const DraftCard = ({ draft }: { draft: Set }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
          {draft.tags.map((tag) => (
            <Pill key={tag} tag={tag} hasAction={false} onClick={() => {}} />
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
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            <Trash className="w-4 h-4" />
            Delete
          </Button>
        </div>

        {/* <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
            </DialogHeader>

            <DialogDescription>
              This action will delete the draft set.
            </DialogDescription>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={async () => {
                  setIsLoading(true);
                  await deleteDraft(draft.id);
                  router.refresh();
                  setOpen(false);
                  setIsLoading(false);
                }}
              >
                {isLoading ? <Loader2 className="w-4 h-4" /> : "Delete"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}

        <DeleteConfirmation open={open} setOpen={setOpen} isLoading={isLoading} deleteDraft={deleteDraft} draft={draft} setIsLoading={setIsLoading} />
      </div>
    </>
  );
};

