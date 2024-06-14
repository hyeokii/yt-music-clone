import { cn } from "@/lib/utils";
import React from "react";

export default function DarkButton({ icon = <></>, label, className = "" }) {
  return (
    <div
      className={cn(
        "cursor-pointer text-[14px] flex flex-row border border-neutral-700 rounded-2xl justify-center items-center min-w-[80px] h-[36px] p-4 gap-2 hover:bg-neutral-700",
        className
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
