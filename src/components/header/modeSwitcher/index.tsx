"use client";

import React from "react";
import Image from "next/image";
import useMood from "@/src/hooks/useMod";
export default function ModeSwticher() {
  const { mode, changeMode } = useMood();

  const changeModeHandler = ()=>{
    changeMode();
    console.log(mode);
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
