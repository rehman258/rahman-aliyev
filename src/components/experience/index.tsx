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
      <ul className="experience-list  mx-auto flex flex-col items-center">
        <li
          className="experience-list__item w-[100%] flex flex-col gap-[3rem] flex justify-between
        bg-theme-light-100 dark:bg-theme-dark-100 p-[2rem] rounded-md 
        shadow-[0px_0px_22px_-8px_rgba(0,0,0,0.5)]
        sm:max-w-[350px]
        md:flex-row md:max-w-[896px]
        ">
          <Image
            alt="work place image"
            height={30}
            src={"/my-image.jpeg"}
            width={125}
          />
          <div className="job-details">
            <h5
              className="subtitle-tablet_mobile-semibold 
            text-theme-light-900 dark:text-theme-dark-900 mb-[1rem]">
              {"Sr. Frontend Developer"}
            </h5>
            <ul>
              <li className="body-2-all-screen text-theme-light-600 dark:text-theme-dark-600">
                {"lorem ipsum dolor sit amet"}
              </li>
              <li className="body-2-all-screen text-theme-light-600 dark:text-theme-dark-600">
                {"lorem ipsum dolor sit amet"}
              </li>
              <li className="body-2-all-screen text-theme-light-600 dark:text-theme-dark-600">
                {"lorem ipsum dolor sit amet"}
              </li>
              <li className="body-2-all-screen text-theme-light-600 dark:text-theme-dark-600">
                {"lorem ipsum dolor sit amet"}
              </li>
            </ul>
          </div>
          <div className="attended-date text-theme-light-700 dark:text-theme-dark-700 body-2-all-screen">
            {"Nov 2021 - Present"}
          </div>
        </li>
      </ul>
    </SectionWrapper>
  );
}
