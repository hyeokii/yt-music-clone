"use client";
import { Song } from "@/types";
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
import { useRouter } from "next/navigation";

interface SongCardRowExpandProps {
  song: Song;
}

export default function SongCardRowExpand({ song }: SongCardRowExpandProps) {
  const { channel, channelId } = song;
  const router = useRouter();
  const onClickChannel = () => {
    router.push(`/channel/${channelId}`);
  };
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
      <div className="flex flex-row gap-4 justify-between basis-1/3">
        <div className="w-[130px] truncate">{song.name}</div>
        <div
          onClick={onClickChannel}
          className="text-neutral-500 hover:underline cursor-pointer"
        >
          {channel}
        </div>
      </div>

      <section className="hidden group-hover:flex absolute flex-row h-[48px] w-[120px] top-0 right-0 justify-end bg-[rgba(0,0,0,0.7)] ">
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiThumbsDown size={20} />} />{" "}
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
}
