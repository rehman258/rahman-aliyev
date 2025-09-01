"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
export default function ThemeToggle() {
  const [themeToggle, setThemeToggle] = React.useState<boolean>(false);
  return (
    <div className="page-mode">
      <Button 
        className="rounded-full px-0 h-full min-w-1"
        onClick={() => setThemeToggle(!themeToggle)}
      >
        {
          themeToggle ? (
            <Image
              alt="Dark Mode"
              height={59}
              src="/icons/DarkModeMoon.svg"
              width={59}
            />
          ) : (
            <Image
              alt="Light Mode"
              height={59}
              src="/icons/LightModeBubble.svg"
              width={59}
            />
          )}
      </Button>

    </div>
  );
}
