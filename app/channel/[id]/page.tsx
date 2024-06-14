"use client";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import DarkButton from "@/components/elements/DarkButton";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
import PagePadding from "@/components/PagePadding";
import WhiteButton from "@/components/elements/WhiteButton";
import { CiShuffle } from "react-icons/ci";
import { BsBroadcast } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";
import IconButton from "./../../../components/elements/IconButton";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import PlayListCarousel from "@/components/PlayListCarousel";
import { Playlist } from "@/types";

export default async function page(props: {
  params: {
    id: string;
  };
}) {
  const channelId = props.params.id;
  const channel = await getChannelById(Number(channelId));
  if (!channel) permanentRedirect("/");
  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;
  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
      <section>
        <div className="font-bold text-[40px]">{channel.name}</div>
        <div className="hidden lg:flex flex-row gap-4 items-center text-[14px] mt-4">
          <DarkButton
            className={"w-[230px] flex justify-center"}
            label="구독"
          />
          <WhiteButton icon={<CiShuffle size={20} />} label="셔플" />
          <WhiteButton icon={<BsBroadcast size={20} />} label="뮤직 스테이션" />
          <IconButton icon={<IoMdMore size={20} />} />
        </div>
        <div className="flex lg:hidden flex-col gap-4 text-[14px] mt-4">
          <DarkButton
            className={"w-[250px] flex justify-center"}
            label="구독"
          />
          <div className="flex flex-row gap-4">
            <WhiteButton icon={<CiShuffle size={20} />} label="셔플" />
            <WhiteButton
              icon={<BsBroadcast size={20} />}
              label="뮤직 스테이션"
            />
            <IconButton icon={<IoMdMore size={20} />} />
          </div>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, idx) => {
              return (
                <SongCardRowExpand key={`${idx}_${song.name}`} song={song} />
              );
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">앨범</div>{" "}
        <PlayListCarousel playlistArray={channel.playlistArray} />
      </section>
      <section className="mt-[80px]"></section>
    </PagePadding>
  );
}
