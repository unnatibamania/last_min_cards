"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

export const DraftCard = ({ index }: { index: number }) => {
  const router = useRouter();

  return (
    <div
      key={index}
      className="flex cursor-pointer border rounded-2xl p-4 flex-col gap-4"
    >
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">Flash Card {index + 1}</h2>
        <p className="text-xs text-gray-500">This is a flash card.</p>
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => {
            router.push("/cards/123");
          }}
        >
          Edit
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            router.push("/cards/123");
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
