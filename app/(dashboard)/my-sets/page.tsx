import { getMySets } from "@/actions/set";
import { RecentCard } from "@/components/cards/RecentCard";

export default async function MySets() {
  const mySets = await getMySets();

  if (mySets?.length === 0) {
    return (
      <div className="flex rounded-lg h-full w-full  justify-center items-center flex-col gap-4">
        <div className="flex flex-col text-center">
          <p className="text-2xl font-semibold ">No sets found</p>
          <p className="text-sm max-w-xs text-gray-500">
            Sets are collections of cards that you have created.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">My Sets</h1>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {mySets.map((set, index) => (
          <RecentCard key={set.id} index={index} set={set} />
        ))}
      </div>
    </div>
  );
}

