
"use server";

import { getMySets, getDraftSets } from "@/actions/set";

import { Sidebar } from "./Sidebar";

export const Aside = async () => {
  const sets = await getMySets();
  const draftSets = await getDraftSets();

  return <Sidebar sets={sets.length} draftSets={draftSets.length} />;
};
