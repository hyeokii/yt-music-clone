import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TopSong } from "@/types";
import { chunkArray } from "@/lib/utils";
import SongCard from "./SongCard";

interface SongListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  songListTop10: TopSong[];
}

const SongColumn = ({ songList = [] }: { songList: TopSong[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {songList.map((song, index) => {
        return <SongCard key={index} song={song} />;
      })}
    </div>
  );
};

export default function SongListCarousel({
  title,
  subTitle,
  Thumbnail,
  songListTop10,
}: SongListCarouselProps) {
  const chunkedSongListTop10 = chunkArray(songListTop10, 4);
  return (
    <div className="w-full ">
      <Carousel>
        <div className="flex justify-between">
          <article className="flex flex-row gap-3 ">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              {subTitle && <div className="text-neutral-500">{subTitle}</div>}
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent className="mt-4">
          {chunkedSongListTop10?.map((songlist, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-1/2 lg:basis-1/2  xl:basis-1/3"
              >
                <SongColumn songList={songlist} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
