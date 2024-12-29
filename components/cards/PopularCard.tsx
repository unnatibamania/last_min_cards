"use client"

import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

import { Progress } from "../ui/progress";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Set } from "@/types/set";

export const PopularCard = ({ index, set }: { index: number; set: Set }) => {
    
    return (
      <div
        key={index}
        className="flex cursor-pointer border rounded-2xl p-4 flex-col gap-4"
      >
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">{set.title}</h2>
          <p className="text-xs text-gray-500">{set.description}</p>
        </div>
  
       
  
        <div className="flex items-center justify-between">
          {
            set.users_enrolled?.length > 0 ?    <div className="flex items-center -space-x-3 relative">
            <Avatar>
              <AvatarImage src="https://github.com/itsnitinr.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
  
            <Avatar className=" ">
              <AvatarImage src="https://github.com/ameybh.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
  
            <Avatar className="">
              <AvatarImage src="https://github.com/unnatibamania.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
  
            <Avatar className="">
              <AvatarFallback>+4</AvatarFallback>
            </Avatar>
          </div>
   : <div></div>
          }
       
          <div className="flex gap-x-2">
         
  
          <Button
            variant="outline"
            onClick={() => {
            }}
          >
            Join this set
          </Button>
          </div>
        </div>
  
      </div>
    );
  };