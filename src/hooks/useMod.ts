"use client";

import { useEffect, useState } from "react";

export default function useMod() {
  const [mode, setMode] = useState<string | null>("light");
  let currentMode:string|null = "light";
  const changeMode = ()=>{
    currentMode = document.body.getAttribute("data-theme");
    document.body.setAttribute("data-theme", `${currentMode === "light" ? "dark" : "light"}`);
  };

  useEffect(()=>{
    setMode(document.body.getAttribute("data-theme"));
  },[currentMode]);

  return {
    mode,
    changeMode
  };
}
