"use client";

import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function LocaleLayout({ children }: Props) {

  return (
    <HeroUIProvider>{children}</HeroUIProvider>
  );
}