import { getDraftSets } from "@/actions/set";
import { DraftCard } from "@/components/cards/DraftCard";
import { Set } from "@/types/set";

export default async function DraftsPage() {
  const draftSets = await getDraftSets();

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Drafts</h1>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {draftSets.map((draft) => (
          <DraftCard key={draft.id} draft={draft as Set} />
        ))}
      </div>
    </div>
  );
}
