import React from "react";
import SectionWrapper from "@/src/components/common/sectionWrapper";
import SectionHeader from "@/src/components/common/sectionHeader";
import Image from "next/image";
import "./scss/index.scss";

export default function Experience() {
  return (
    <SectionWrapper
      className="bg-theme-light-50 dark:bg-theme-dark-50"
    >
      <SectionHeader
        desc="Here is a quick summary of my most recent experiences:"
        title="Experience"
      />
      <ul className="experience-list w-[896px] mx-auto flex flex-col items-center">
        <li
          className="experience-list__item flex gap-[3rem] flex justify-between
        bg-theme-light-100 dark:bg-theme-dark-100 p-[2rem] rounded-md shadow-2xl">
          <Image
            alt="work place image"
            height={285}
            src={"/my-image.jpeg"}
            width={210}
          />
          <div className="job-details">
            <h5 className="font-semibold text-[20px] text-theme-light-900 dark:text-theme-dark-900 mb-[1rem]">
              {"Sr. Frontend Developer"}
            </h5>
            <ul>
              <li className="text-theme-light-600 leading-[24px] dark:text-theme-dark-600">
                {"lorem ipsum dolor sit amet"}
              </li>
              <li className="text-theme-light-600 leading-[24px] dark:text-theme-dark-600">
                {"lorem ipsum dolor sit amet"}
              </li>
              <li className="text-theme-light-600 leading-[24px] dark:text-theme-dark-600">
                {"lorem ipsum dolor sit amet"}
              </li>
              <li className="text-theme-light-600 leading-[24px] dark:text-theme-dark-600">
                {"lorem ipsum dolor sit amet"}
              </li>
            </ul>
          </div>
          <div className="attended-date text-theme-light-700 dark:text-theme-dark-700">
            {"Nov 2021 - Present"}
          </div>
        </li>
      </ul>
    </SectionWrapper>
  );
}
