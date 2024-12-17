import { getDraftSets } from "@/actions/set";
import { RecentCard } from "@/components/cards/RecentCard";

export default async function MySets() {
  const draftSets = await getDraftSets();

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">My Sets</h1>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {draftSets.map((draft, index) => (
          <RecentCard key={draft.id} index={index} />
        ))}
      </div>
    </div>
  );
}
