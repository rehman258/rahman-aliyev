"use client";

import { useState } from "react";

export default function useMod() {
  const [mode, setMode] = useState<string | null>("light");
  const changeMode = ()=>{
    const currentMode = document.body.getAttribute("data-theme");
    setMode((prevMode)=>prevMode === "light" ? "dark" : "light");
    document.body.setAttribute("data-theme", `${currentMode === "light" ? "dark" : "light"}`);
  };
  return {
    mode,
    changeMode
  };
}
