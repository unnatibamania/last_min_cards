import { RecentCard } from "@/components/cards/RecentCard";

const set = {
  title: "Newtons laws of motion",
  description: "Newtons laws of motion is here",
  // createdAt: new Date(),
  is_draft: false,
  is_public: true,
  id: "1",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  tags: [],
};

export default async function Home() {
  return (
    // <div className="flex justify-center w-full h-full">
    <div className="flex h-full max-w-6xl gap-6 flex-col p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Recents</h1>
          <p className="text-sm text-gray-400">
            These are the cards which you have preffered last week
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <RecentCard
              set={{ ...set, id: index.toString() }}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Popular cards</h1>
          <p className="text-sm text-gray-400">
            These are the cards which you have preffered last week
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <RecentCard
              set={{ ...set, id: index.toString() }}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
}

