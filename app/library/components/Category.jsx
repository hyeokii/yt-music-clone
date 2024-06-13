"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiFillCaretDown } from "react-icons/ai";

export default function Category() {
  const libraryCategory = ["재생목록", "팟캐스트", "노래", "앨범", "아티스트"];
  const [selectedSort, setSelectedSort] = useState("");

  return (
    <div className="flex flex-row justify-between items-center gap-4 flex-wrap">
      <ul className="max-w-full overflow-auto flex flex-row gap-4">
        {libraryCategory.map((item) => {
          return (
            <li
              key={item}
              className={cn(
                "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer"
              )}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex flex-row justify-between w-[162px] h-[42px] items-center p-5 bg-neutral-700 border-neutral-600 rounded-3xl text-[14px] border">
              <div>{selectedSort || "정렬 기준"}</div>
              <div>
                <AiFillCaretDown size={15} />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px] bg-neutral-800" align="end">
            <DropdownMenuLabel className="p-4">정렬 기준</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuRadioGroup
              value={selectedSort}
              onValueChange={setSelectedSort}
            >
              <DropdownMenuRadioItem className="p-4 pl-7" value="최근에 저장됨">
                최근에 저장됨
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                className="p-4 pl-7"
                value="최근 재생한 음악"
              >
                최근 재생한 음악
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="p-4 pl-7" value="인기 순">
                인기 순
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
