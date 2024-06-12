import React from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";

export default function Sidebar({ children }) {
  return (
    <div className="flex flex-row h-full">
      <nav className="hidden lg:block w-[240px] border-r-[1px] border-netural-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
}
