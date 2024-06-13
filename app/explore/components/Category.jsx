import React from "react";
import { FiMusic } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
const CategoryMenu = ({ icon, label }) => {
  return (
    <div className="w-full h=[56px] flex flex-row items-center gap-4 bg-neutral-800 p-3 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-900">
      {icon}
      {label}
    </div>
  );
};

export default function Category() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <CategoryMenu label={"최신 음악"} icon={<FiMusic color="#AAAAAA" />} />
      <CategoryMenu label={"차트"} icon={<FiBarChart color="#AAAAAA" />} />
      <CategoryMenu
        label={"분위기 및 장르"}
        icon={<FiSmile color="#AAAAAA" />}
      />
    </div>
  );
}
