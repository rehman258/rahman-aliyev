"use client";

import React from "react";
import Image from "next/image";
import LocationMark from "@/public/assets/iconComponents/LocationMark";
import Link from "next/link";
import useMod from "@/src/hooks/useMod";
import SectionWrapper from "@/src/components/common/sectionWrapper";
export default function Banner() {
  const { mode } = useMod();
  return (
    <SectionWrapper className="px-[70px] py-[96px] bg-theme-light-default dark:bg-theme-dark-default">
      <div className="banner-container px-[2rem] flex justify-between">
        <div className="banner-conent w-[66.666666%]">
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
          <div className="mb-[3rem]">
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
          <div>
            <ul>
              <li>
                <Link href={"/"}>
                  <Image
                    alt="github icon"
                    height={24}
                    src={`/icons/${mode}Github.svg`}
                    width={24}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="banner-image w-[33.333333%] flex justify-center">
          <Image
            alt="developer image"
            className="rounded-xl shadow-black shadow-2xl"
            height={350}
            src={"/my-image.jpeg"}
            width={300}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
