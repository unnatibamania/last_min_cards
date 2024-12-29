import { getDraftSets } from "@/actions/set";
import { DraftCard } from "@/components/cards/DraftCard";
import { DraftCardForServer } from "@/components/cards/DraftCardForServer";
// import { Set } from "@/types/set";

export default async function DraftsPage() {
  const draftSets = await getDraftSets();

  if (draftSets?.length === 0) {
    return (
      <div className="flex rounded-lg h-full w-full  justify-center items-center flex-col gap-4">
        <div className="flex flex-col text-center">
          <p className="text-2xl font-semibold ">No drafts found</p>
          <p className="text-sm max-w-xs text-gray-500">
            Drafts are sets of cards that you have created but not yet
            published.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 flex h-full flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Drafts</h1>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {draftSets.map((draft) => (
          <DraftCardForServer key={draft.id} draft={draft} />
        ))}
      </div>
    </div>
  );
}

