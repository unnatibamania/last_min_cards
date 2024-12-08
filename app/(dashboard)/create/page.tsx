"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import OwnCards from "@/components/creation/OwnCards";
import AICards from "@/components/creation/AICards";
import { Pencil, Stars } from "lucide-react";

const CreatePage = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <div className="p-4 bg-slate-100 h-full">
      <div className="h-full w-full  flex justify-center items-start">
        {selectedMethod ? (
          selectedMethod === "own" ? (
            <OwnCards />
          ) : (
            <AICards />
          )
        ) : (
          <div className="border-2 border-dashed bg-white rounded-lg min-w-96 h-64 shadow-md">
            <div className="flex flex-col items-center h-full justify-center gap-6">
              <div className="flex flex-col items-center gap-1">
                <h1 className="text-2xl font-bold">Create a new set</h1>
                <p className="text-sm text-gray-500 max-w-64 text-center">
                  Create your own set of cards or let AI generate them for you
                </p>
              </div>

              <div className="flex gap-2">
                <Button size={"lg"} onClick={() => setSelectedMethod("own")}>
                  <Pencil className="w-4 h-4" />
                  <span> Create</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedMethod("ai")}
                  size={"lg"}
                >
                  <Stars className="w-4 h-4" />
                  <span> Use AI</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CreatePage;
