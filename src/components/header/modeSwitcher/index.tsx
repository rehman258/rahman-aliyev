"use client";

import React,{ useState } from "react";
import Image from "next/image";

export default function ModeSwticher() {
  const [mode, setMode] = useState<string | null>("light");
  const changeModeHandler = ()=>{
    const currentMode = document.body.getAttribute("data-theme");
    setMode((prevState)=>{
      document.body.setAttribute("data-theme", `${currentMode === "light" ? "dark" : "light"}`);
      if (prevState === "light") return "dark";
      return "light";
    });
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
