"use client";

// import React, { useEffect } from "react";

import { useTranslations } from "next-intl";
export default function Logo() {
  const headerT = useTranslations("HEADER");
  // useEffect(() => {
  //   setInterval(() => {
  //     const el = document.getElementById("header-logo") as HTMLElement | null;
  //     el?.style.setProperty("color", 
  //       `rgb(${Math.random() * 250}, ${Math.random() * 250}, ${Math.random() * 250})`);
  //   }, 4000);
  // }, []);
  return (
    <div
      className="logo text-4xl"
      id="header-logo" >{headerT("logo")}</div>
  );
}
