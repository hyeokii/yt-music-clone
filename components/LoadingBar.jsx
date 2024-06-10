"use client";
import React from "react";
import { BarLoader } from "react-spinners";

const loadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader color="red" cssOverride={{ width: "100%" }} />
    </div>
  );
};

export default loadingBar;
