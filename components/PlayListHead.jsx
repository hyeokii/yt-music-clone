"use client";
import React from "react";
import IconButton from "./elements/IconButton";
import { FiMoreVertical, FiPlay, FiFolderPlus } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "./elements/WhiteButton";
import DarkButton from "./elements/DarkButton";

export default function PlayListHead({ playlist }) {
  const { playlistName, owner, songList } = playlist;
  const randomSong = getRandomElementFromArray(songList);
  return (
    <section>
      <div className="flex gap-10">
        <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image alt="songImg" fill src={randomSong?.imageSrc} />
        </div>
        <article className=" flex flex-col justify-center">
          <div className="font-bold text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범 • ${owner} • 2024 `}</div>
            <div>{`${songList.length}곡 • 15분`}</div>
          </div>
          <ul className="hidden lg:flex flex-row gap-4 mt-4">
            <WhiteButton icon={<FiPlay size={24} />} label="재생" />
            <DarkButton
              icon={<FiFolderPlus size={24} />}
              label="보관함에 저장"
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>

      <ul className="flex lg:hidden flex-row gap-4 mt-4">
        <WhiteButton icon={<FiPlay size={24} />} label="재생" />
        <DarkButton icon={<FiFolderPlus size={24} />} label="보관함에 저장" />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
}
