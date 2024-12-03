"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import OwnCards from "@/components/creation/OwnCards";
import AICards from "@/components/creation/AICards";

const CreatePage = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <div className="p-4 h-screen">
      <div className="h-full w-full flex justify-center items-center">
        {selectedMethod ? (
          selectedMethod === "own" ? (
            <OwnCards />
          ) : (
            <AICards />
          )
        ) : (
          <div className="border-2 border-dashed rounded-lg min-w-96 h-64">
            <div className="flex flex-col items-center h-full justify-center gap-3">
              <div className="flex flex-col items-center gap-1">
                <h1 className="text-2xl font-bold">Create a new project</h1>
                <p className="text-sm text-gray-500">
                  Create a new project to get started
                </p>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setSelectedMethod("own")}>
                  Create your own
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedMethod("ai")}
                >
                  Use AI
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
