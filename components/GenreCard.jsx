import { generateRandomHex } from "@/lib/utils";
import React from "react";

export default function GenreCard({ genre }) {
  const hex = generateRandomHex();
  return (
    <div className="flex flex-row rounded-lg h-[48px] w-full cursor-pointer gap-4 bg-neutral-800">
      <div
        className="h-full w-2 rounded-l-lg "
        style={{ background: hex }}
      ></div>
      <div className="flex justify-center items-center">{genre}</div>
    </div>
  );
}
