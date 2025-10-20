import React from "react";
import { useTranslations } from "next-intl";
export default function Navbar({ type }:{type?:string}) {
  const headerT = useTranslations("HEADER");
  const navItems = [
    {
      text: headerT("NAV.home"),
    },
    {
      text: headerT("NAV.about"),
    },
    {
      text: headerT("NAV.skills"),
    },
    {
      text: headerT("NAV.experience"),
    },
    {
      text: headerT("NAV.projects"),
    },
    {
      text: headerT("NAV.contact"),
    },
  ];
  return (
    <ul className={`flex gap-[24px] ${type === "sidebar" ? "flex-col" : undefined} align-center}`}>
      {
        navItems.map((navItem)=>(
          <li
            key={navItem.text} 
            className="body-2-all-screen-medium cursor-pointer">{navItem.text}</li>
        ))
      }
    </ul>
  );
}
