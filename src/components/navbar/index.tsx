import React from "react";
import { useTranslations } from "next-intl";
export default function Navbar({ type }:{type?:string}) {
  const headerT = useTranslations("HEADER");
  const navItems = [
    {
      text: headerT("NAV.home"),
      path:"home",
    },
    {
      text: headerT("NAV.about"),
      path:"about",
    },
    {
      text: headerT("NAV.skills"),
      path:"skills",
    },
    {
      text: headerT("NAV.experience"),
      path:"experience",
    },
    {
      text: headerT("NAV.projects"),
      path:"projects",
    },
    {
      text: headerT("NAV.contact"),
      path:"contact",
    },
  ];
  return (
    <ul className={`flex gap-[24px] ${type === "sidebar" ? "flex-col" : undefined} align-center}`}>
      {
        navItems.map((navItem)=>(
          <li
            key={navItem.text}>
            <a
              className="body-2-all-screen-medium cursor-pointer"
              href={`#${navItem.path}`}
            >
              {navItem.text}
            </a>
          </li>
        ))
      }
    </ul>
  );
}
