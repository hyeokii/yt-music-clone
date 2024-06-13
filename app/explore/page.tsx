import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "./components/Category";
import {
  getAllPlaylist,
  getSongListTop10,
  dymmyGenreList,
} from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import GenreListCarousel from "@/components/GenreListCarousel";

export default async function page() {
  const [playlistArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlayListCarousel title="새 앨범 및 싱글" playlistArray={playlistArray} />
      <div className="mt-20"></div>
      <SongListCarousel title="인기곡" songListTop10={songListTop10} />
      <div className="mt-20"></div>
      <GenreListCarousel title="분위기 및 장르" genreList={dymmyGenreList} />
      <div className="mt-20"></div>
    </PagePadding>
  );
}
