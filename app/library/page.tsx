import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "./../library/components/Category";
import PlayListCard from "@/components/PlayListCard";
import { getRandomElementFromArray } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";

export default function page() {
  return (
    <PagePadding>
      <div className="mt-9"></div>
      <Category />
      <div className="mt-12"></div>
      <section className="grid grid-cols-3 gap-6 lg:grid-cols-4 xl:grid-cols-5">
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />{" "}
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
      </section>
    </PagePadding>
  );
}
