"use client";

import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { ListRestart, Shuffle } from "lucide-react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CardSetPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex h-full w-full justify-center">
      <div className="max-w-3xl w-full p-8 flex gap-4 flex-col">
        <section className="flex flex-col">
          <h1 className="text-2xl font-semibold">Newtons laws of motion</h1>

          <p className="text-md text-gray-400">
            Newtons laws of motion is here
          </p>
        </section>

        <motion.div
          onClick={() => setIsFlipped(!isFlipped)}
          className=" h-96 cursor-pointer  w-full rounded-3xl perspective-1000"
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
        >
          <motion.div
            className="relative w-full h-full transform-style-3d"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Front of the card */}
            <div
              className={`absolute w-full h-full bg-white rounded-xl shadow-sm p-6 
            backface-hidden flex flex-col justify-center items-center
            ${!isFlipped ? "z-10" : "z-0"}`}
            >
              <h2 className="text-2xl font-bold mb-4">Front Side</h2>
              <p className="text-center">Click to flip the card!</p>
              <div className="mt-4 text-blue-500">🃏 Front Content</div>
            </div>

            {/* Back of the card */}
            <div
              className={`absolute w-full h-full  text-white rounded-xl shadow-sm p-6 
            backface-hidden flex flex-col justify-center items-center
            transform rotate-x-180
            ${isFlipped ? "z-10" : "z-0"}`}
            >
              <h2 className="text-2xl font-bold mb-4">Back Side</h2>
              <p className="text-center">Card has been flipped!</p>
              <div className="mt-4">🔄 Back Content</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <Button className="rounded-full" size={"icon"} variant={"outline"}>
              <ArrowLeft />
            </Button>

            <p>11 / 14</p>

            <Button className="rounded-full" size={"icon"} variant={"outline"}>
              <ArrowRight />
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button className="rounded-full" size={"icon"} variant={"outline"}>
              <ListRestart />
            </Button>

            <Button className="rounded-full" size={"icon"} variant={"outline"}>
              <Shuffle />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
