import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between py-[16px] px-[80px]">
      <div className="logo">
        {"<>Rahman Aliyev</>"}
      </div>
      <nav>
        <ul className="flex gap-[24px]">
          <li className="body-2-all-screen-medium">{"Home"}</li>
          <li className="body-2-all-screen-medium">{"About"}</li>
          <li className="body-2-all-screen-medium">{"Skills"}</li>
          <li className="body-2-all-screen-medium">{"Eperience"}</li>
          <li className="body-2-all-screen-medium">{"Works"}</li>
          <li className="body-2-all-screen-medium">{"Contact"}</li>
        </ul>
      </nav>
    </header>
  );
}
