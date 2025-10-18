"use client";

import React from "react";
import Image from "next/image";
import LocationMark from "@/public/assets/iconComponents/LocationMark";
import Link from "next/link";
import useMod from "@/src/hooks/useMod";
import SectionWrapper from "@/src/components/common/sectionWrapper";
import { useTranslations } from "next-intl";
export default function Banner() {
  const bannerT = useTranslations("BANNER");
  const { mode } = useMod();
  return (
    <SectionWrapper className="bg-theme-light-default dark:bg-theme-dark-default">
      <div className="banner-container flex flex-col md:flex-row justify-between">
        <div className="banner-conent w-[100%] md:w-[66.66666%] mb-[2rem]">
          <h1 className="heading-1-mobile-semibold mb-[0.5rem]">
            {
              bannerT("hi_Iam")
            }
          </h1>
          <p className="body-2-all-screen mb-[3rem]">
            {
              bannerT("desc")
            }
          </p>
          <div className="mb-[3rem]">
            <p className="body-2-all-screen flex gap-[8px] items-center mb-[0.5rem]">
              <LocationMark/>
              {
                bannerT("address")
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
                bannerT("available")
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
        <div className="banner-image w-[100%] md:w-[33.33333%] flex justify-center">
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
