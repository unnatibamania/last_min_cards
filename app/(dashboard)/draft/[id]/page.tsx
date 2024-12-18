import { getDraft } from "@/actions/set";
import { getCardsByDraftId } from "@/actions/cards";
import { DraftPageClient } from "@/components/drafts/Drafts";
// Server Component
export default async function DraftPage({
  params,
}: {
  params: { id: string };
}) {
  const draft = await getDraft(params.id);
  const cards = await getCardsByDraftId({ draftId: params.id });

  return <DraftPageClient draft={draft} cards={cards} />;
}
