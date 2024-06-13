"use client";
import { TopSong } from "@/types";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import {
  FiPlayCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiMoreVertical,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";

interface SongCardProps {
  song: TopSong;
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image
          src={song.imageSrc}
          alt="songImg"
          fill
          className="object-cover"
        />
        <div className="hidden w-[48px] h-[48px] absolute top-0  group-hover:flex items-center justify-center bg-[rgba(0,0,0,0.5)] cursor-pointer">
          <FiPlayCircle size={20} />
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>{song.rank + 1}</div>
      </div>
      <div>{song.name}</div>
      <section className="hidden group-hover:flex absolute flex-row h-[48px] w-1/2 top-0 right-0 justify-end bg-[rgba(0,0,0,0.7)] ">
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiThumbsDown size={20} />} />{" "}
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
}
