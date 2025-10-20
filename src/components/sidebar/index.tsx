"use client";

import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function Sidebar({ isSidebarOpen,setIsSidebarOpen }:
  {isSidebarOpen:boolean, setIsSidebarOpen: Dispatch<SetStateAction<boolean>>}) {
  
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
    <aside
      className={` w-[100%] shadow fixed top-[0px] opacity-[.98] h-[100%] left-[0%] 
        transition-all duration-500 ease-in-out`}
      style={{ left: isSidebarOpen?"0%":"-100%" }}
    >
      <div
        className="sidebar-overlay  w-[100%] h-[100%] opacity-[.5] absolute"
        onClick={()=>setIsSidebarOpen(false)}></div>
      <div
        className="w-[60%] sm:w-[50%] md:w-[40%] 
      h-[100%] absolute z-2 bg-theme-light-default shadow ">
        <ul className={`flex flex-col gap-[5px] align-center} p-[1rem]`}>
          <li className="flex items-start justify-between">
            <Image
              alt="logo"
              height={75}
              src={"/light-logo.png"}
              width={90}
            />
            <Image
              alt="sidebar close icon"
              className="self-start"
              height={50}
              src={"/icons/closeIcon.svg"}
              width={50}
              onClick={()=>setIsSidebarOpen(false)}
            />
          </li>
          {
            navItems.map((navItem)=>(
              <li
                key={navItem.text} 
                className="">
                <a
                  className="block body-2-all-screen-medium cursor-pointer py-[10px] "
                  href="">
                  {navItem.text}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  );
}
