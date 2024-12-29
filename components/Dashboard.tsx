import { RecentCard } from "@/components/cards/RecentCard";
import { PopularCard } from "@/components/cards/PopularCard";
import { Set } from "@/types/set";

export const Dashboard = ({ popularSets, recentSets }: { popularSets: Set[], recentSets: Set[] }    ) => {
    return (
        <div className="flex h-full max-w-6xl gap-6 flex-col p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Recents</h1>
          <p className="text-sm text-gray-400">
            These are the cards which you have preffered last week
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {recentSets.map((set, index) => (
            <RecentCard
              set={set}
              index={index}
              key={index}
              cardsLength={10}
              visitedCardsLength={10}
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
          {popularSets.map((set, index) => (
            // <RecentCard
            //   set={{ ...set, id: index.toString() }}
            //   index={index}
            //   key={index}
            //   cardsLength={10}
            // />

            <PopularCard
              index={index}
              set={set}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
    )
}