"use client";

import React from "react";
import Image from "next/image";
export default function ModeSwticher({ mode,changeMode }:{mode:string, changeMode:()=>void}) {

  const changeModeHandler = ()=>{
    changeMode();
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
