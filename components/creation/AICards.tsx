import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import CardView from "./CardView";

const AICards = () => {
  return (
    <div className="flex flex-col h-full s w-full p-3 overflow-hidden gap-4">
      <div className="flex flex-col justify-between w-full items-center border border-gray-400 p-4 border-dashed h-full rounded-2xl gap-4">
        <div className="flex min-w-96 flex-col gap-4">
          <CardView
            cards={[]}
            setCards={() => {}}
            currentIndex={0}
            setCurrentIndex={() => {}}
          />
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="relative">
            <Textarea
              rows={8}
              className="p-4"
              placeholder="Create flashcards on Newton's three laws of motion..."
            />

            <Button
              type="button"
              size="icon"
              className="absolute right-4 bottom-4"
            >
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICards;
