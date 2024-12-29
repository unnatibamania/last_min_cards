import { getPopularSets, getRecentSets } from "@/actions/set";


import { Dashboard } from "@/components/Dashboard";



export default async function Home() {
  const popularSets = await getPopularSets();
  const recentSets = await getRecentSets();

  return (
    <Dashboard popularSets={popularSets} recentSets={recentSets} />
  );
}

