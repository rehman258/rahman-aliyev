import React from "react";
import Image from "next/image";
import LocationMark from "@/public/assets/iconComponents/LocationMark";
export default function Banner() {
  return (
    <section className="px-[70px] py-[96px] bg-theme-light-default dark:bg-theme-dark-default">
      <div className="banner-container px-[2rem]">
        <div className="banner-conent">
          <h1 className="heading-1-desktop-bold mb-[0.5rem]">
            {"Hi, I'am Rahman 👋"}
          </h1>
          <p className="body-2-all-screen mb-[3rem]">
            {
              `
              I'm a full stack developer (React.js & Node.js) with a focus on creating 
              (and occasionally designing) 
              exceptional digital experiences that are fast, accessible, visually appealing, 
              and responsive. Even though I have been creating web applications for over 7 years, 
              I still love it as if it was something new.
              `
            }
          </p>
          <div>
            <p className="body-2-all-screen flex gap-[8px] items-center mb-[0.5rem]">
              <LocationMark/>
              {
                "Azerbaijan, Baku"
              }
            </p>
            <p className="body-2-all-screen flex gap-[8px] items-center">
              <Image
                alt={"available icon"}
                height={24}
                src={"/icons/availableIcon.svg"}
                width={24}
              />
              {
                "Azerbaijan, Baku"
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
