import { Progress } from "../ui/progress";

import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const RecentCard = ({ index }: { index: number }) => {
  return (
    <div
      key={index}
      className="flex cursor-pointer border rounded-2xl p-4 flex-col gap-4"
    >
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">Flash Card {index + 1}</h2>
        <p className="text-xs text-gray-500">This is a flash card.</p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p>Progress</p>

          <p className="text-xs">12 / 15 cards</p>
        </div>

        <Progress value={33} />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center -space-x-3 relative">
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
            {/* <AvatarImage src="https://github.com/.png" /> */}
            <AvatarFallback>+4</AvatarFallback>
          </Avatar>
        </div>

        <Button variant="outline">Continue</Button>
      </div>
    </div>
  );
};