"use client";

import { RecentCard } from "@/components/cards/RecentCard";

export default function Home() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Recents</h1>
          <p className="text-sm text-gray-400">
            These are the cards which you have preffered last week
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <RecentCard index={index} key={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Recents</h1>
          <p className="text-sm text-gray-400">
            These are the cards which you have preffered last week
          </p>
        </div>
      </div>
    </div>
  );
}
