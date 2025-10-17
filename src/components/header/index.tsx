import React from "react";
import Image from "next/image";
import ModeSwticher from "./modeSwitcher";
import DownloadResume from "./downloadResume";
import "./scss/index.scss";

export default function Header({ mode,changeMode }:{ mode: string; changeMode: () => void; }) {
  return (
    <header
      className=" py-[16px] px-[1rem] lg:px-[5rem] sticky top-[0px] bg lg:relative 
    bg-theme-light-default dark:bg-theme-dark-default opacity-[95%]">
      <div className="header-container flex justify-between items-center lg:flex hidden">
        <div
          className="logo text-theme-dark-default dark:text-theme-light-default font-bold text-[1rem] 
        lg:text-[1.125rem]">
          {"<> Rahman Aliyev </>"}
        </div>
        <nav className="flex items-center">
          <ul className="flex gap-[24px] align-center">
            <li className="body-2-all-screen-medium cursor-pointer">{"Home"}</li>
            <li className="body-2-all-screen-medium cursor-pointer">{"About"}</li>
            <li className="body-2-all-screen-medium cursor-pointer">{"Skills"}</li>
            <li className="body-2-all-screen-medium cursor-pointer">{"Eperience"}</li>
            <li className="body-2-all-screen-medium cursor-pointer">{"Works"}</li>
            <li className="body-2-all-screen-medium cursor-pointer">{"Contact"}</li>
          </ul>
          <span className="h-[28px] bg-theme-dark-500 w-[1px] mx-[16px]"></span>
          <div className="flex align-center gap-[16px]">
            <ModeSwticher
              changeMode={changeMode}
              mode={mode}/>
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
          <Image
            alt="hamburger menu icon for side bar control"
            height={24}
            src={"/icons/lightHamburger.svg"}
            width={24}
          />
        </div>
      </div>
    </header>
  );
}
