import { getDraftSets } from "@/actions/set";
import { DraftCard } from "@/components/cards/DraftCard";

export default async function DraftsPage() {
  const draftSets = await getDraftSets();

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Drafts</h1>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {draftSets.map((draft, index) => (
          <DraftCard key={draft.id} index={index} />
        ))}
      </div>
    </div>
  );
}
