"use client";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { Search } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center p-2 shadow-sm border-b border-gray-200 justify-between">
      <Input
        placeholder="Search"
        startContent={<Search className="w-4 h-4" />}
        className="min-w-96 max-w-96"
      />

      <div className="flex items-center gap-4">
        <Button onClick={() => router.push("/create")}>
          <Plus className="w-4 h-4" />
          <span>Create</span>
        </Button>

        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent> </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};
