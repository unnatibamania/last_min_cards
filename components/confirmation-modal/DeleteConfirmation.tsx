import { Loader2 } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
  } from "@/components/ui/dialog";

  import { Button } from "@/components/ui/button";

  import { useRouter } from "next/navigation";


export const DeleteConfirmation = ({open, setOpen, isLoading, deleteDraft, draft, setIsLoading}: {open: boolean, setOpen: (open: boolean) => void, isLoading: boolean, deleteDraft: (id: string) => void, draft: any, setIsLoading: (isLoading: boolean) => void    }) => {
    const router = useRouter();
    return  <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure?</DialogTitle>
      </DialogHeader>

      <DialogDescription>
        This action will delete the draft set.
      </DialogDescription>
      <DialogFooter>
        <Button variant="outline" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          variant="destructive"
          onClick={async () => {
            setIsLoading(true);
            await deleteDraft(draft.id);
            router.refresh();
            setOpen(false);
            setIsLoading(false);
          }}
        >
          {isLoading ? <Loader2 className="w-4 h-4" /> : "Delete"}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
}