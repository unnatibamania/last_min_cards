import { Button } from "../ui/button";
import { HomeIcon, Settings } from "lucide-react";

export const Aside = () => {
  return (
    <aside className="flex flex-col border min-w-56 justify-between">
      <div className="flex flex-col items-center gap-4 p-2">
        <h1 className="text-2xl font-bold p-2">Sheep Ed App</h1>

        <section className="flex flex-col gap-4 w-full">
          <Button variant="ghost" className="w-full border justify-start">
            <HomeIcon className="w-4 h-4" />
            <span>Dashboard</span>
          </Button>
        </section>
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </Button>
      </div>
    </aside>
  );
};
