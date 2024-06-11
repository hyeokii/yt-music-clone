"use client";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
export default function PlayListNav({ playlist }) {
  const { id, owner, playlistName, songList } = playlist;
  const onClickPlay = () => {};
  return (
    <li className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg group">
      <div>
        <div className="text-[14px]">{playlistName}</div>
        <div className="text-[12px] text-neutral-500">{owner}</div>
      </div>
      <div
        onClick={onClickPlay}
        className="hidden group-hover:block cursor-pointer"
      >
        <AiFillPlayCircle size={30} />
      </div>
    </li>
  );
}
