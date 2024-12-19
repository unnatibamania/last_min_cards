import { getMySets } from "@/actions/set";
import { RecentCard } from "@/components/cards/RecentCard";

export default async function MySets() {
  const mySets = await getMySets();

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">My Sets</h1>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {mySets.map((set, index) => (
          <RecentCard key={set.id} index={index} />
        ))}
      </div>
    </div>
  );
}
