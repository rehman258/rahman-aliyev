"use client";

import React from "react";
import Image from "next/image";
import useMood from "@/src/hooks/useMod";
export default function ModeSwticher() {
  const { mode, changeMode } = useMood();
  const changeModeHandler = ()=>{
    changeMode();
    if (mode === "light") return "dark";
    return "light";
  };
  
  return (
    <Image
      alt="template mode swticher"
      className="cursor-pointer"
      height={24}
      src={`/icons/${mode}ModeIcon.svg`}
      width={24}
      onClick={changeModeHandler}
    />
  );
}
