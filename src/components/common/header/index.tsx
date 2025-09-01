import React from "react";

import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
export default async function Header() {

  return (
    <header className="px-55 py-17 flex items-center justify-between mb-40">
      <Logo/>
      <ThemeToggle />
    </header>
  );
}
