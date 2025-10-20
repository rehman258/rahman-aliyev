import React, { Dispatch,SetStateAction } from "react";
import Image from "next/image";
import ModeSwticher from "./modeSwitcher";
import LanguageSwtitcher from "../common/languageSwitcher";
import DownloadResume from "./downloadResume";
import Navbar from "../navbar";
import "./scss/index.scss";

export default function Header({ mode,changeMode, setIsSidebarOpen }:{ mode: string; changeMode: () => void;
  setIsSidebarOpen:Dispatch<SetStateAction<boolean>>
 }) {
  return (
    <header
      className=" py-[16px] px-[1rem] lg:px-[5rem] sticky top-[0px] bg lg:relative 
    bg-theme-light-default dark:bg-theme-dark-default opacity-[95%]">
      <div className="header-container flex justify-between items-center lg:flex hidden">
        <div
          className="logo text-theme-dark-default dark:text-theme-light-default font-bold text-[1rem] 
        lg:text-[1.125rem]">
          <Image
            alt="site logo"
            height={125}
            src={"/light-logo.png"}
            width={95}
          />
        </div>
        <nav className="flex items-center">
          <Navbar/>
          <span className="h-[28px] bg-theme-dark-500 w-[1px] mx-[16px]"></span>
          <div className="flex items-center gap-[16px]">
            <ModeSwticher
              changeMode={changeMode}
              mode={mode}/>
            <LanguageSwtitcher/>
            <DownloadResume/>
          </div>
        </nav>
      </div>
      <div className="header-container flex justify-between items-center lg:hidden flex">
        <div className="flex align-center justify-between w-[100%]">
          <div className="flex gap-[24px]">
            <ModeSwticher
              changeMode={changeMode}
              mode={mode}/>
            <DownloadResume/>
          </div>
          <div className="flex gap-[24px] items-center">
            <LanguageSwtitcher/>
            <Image
              alt="hamburger menu icon for side bar control"
              height={24}
              src={`/icons/${mode}Hamburger.svg`}
              width={24}
              onClick={()=>setIsSidebarOpen(true)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
