import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "./../../lib/dummyData";
import UserIcon from "@/components/UserIcon";

export default function Home() {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
        <PlayListCarousel
          title="다시 듣기"
          subTitle="재혁"
          playlistArray={[...dummyPlaylistArray1]}
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size="lg" />
            </div>
          }
        />
        <div className="mt-12"></div>
        <PlayListCarousel
          title="케이시 - Full Bloom"
          subTitle="새로운 앨범"
          playlistArray={[...dummyPlaylistArray1]}
        />
        <div className="mt-12"></div>
        <PlayListCarousel
          title="커뮤니티 제공"
          playlistArray={[...dummyPlaylistArray1]}
        />
      </div>
    </PagePadding>
  );
}
