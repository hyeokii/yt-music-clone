import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Playlist } from "@/types";
import PlayListCard from "@/components/PlayListCard";

interface PlayListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playlistArray?: Playlist[];
}

export default function PlayListCarousel({
  title,
  subTitle,
  Thumbnail,
  playlistArray,
}: PlayListCarouselProps) {
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
          {playlistArray?.map((playlist, index) => {
            return (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/3 xl:basis-1/5"
              >
                <PlayListCard playlist={playlist} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
