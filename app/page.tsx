"use client";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col">
      <nav className="p-2 border flex justify-between items-center">
        <div />

        <Button onClick={() => router.push("/create")}>Create</Button>
      </nav>
      <div className="flex h-full ">
        <aside className="min-w-44">Sidebar</aside>
        <main className="flex-1">Main</main>
      </div>
    </div>
  );
}
