import React from "react";

export default function WhiteButton({ icon, label }) {
  return (
    <div className="cursor-pointer flex flex-row text-[14px] bg-white text-black rounded-2xl justify-center items-center min-w-[80px] h-[36px] p-4 gap-2 hover:bg-neutral-200">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
