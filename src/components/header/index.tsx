import React from "react";
import ModeSwticher from "./modeSwitcher";
import DownloadResume from "./downloadResume";
export default function Header() {
  return (
    <header className=" py-[16px] px-[80px] ">
      <div className="header-container flex justify-between items-center px-[2rem]">
        <div className="logo text-theme-dark-default dark:text-theme-light-default">
          {"<>Rahman Aliyev</>"}
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
            <ModeSwticher/>
            <DownloadResume/>
          </div>
        </nav>
      </div>
    </header>
  );
}
