import React from "react";
import SectionWrapper from "@/src/components/common/sectionWrapper";
import SectionHeader from "@/src/components/common/sectionHeader";
import Image from "next/image";
import "./scss/index.scss";
import { useTranslations } from "next-intl";

export default function Experience() {
  const experienceT = useTranslations("EXPERIENCE");
  const experiences = [
    {
      img:"/my-image.jpeg",
      profession:experienceT("profession"),
      details:[
        "lorem ipsum dolor sit amet",
        "lorem ipsum dolor sit amet",
        "lorem ipsum dolor sit amet",
        "lorem ipsum dolor sit amet"
      ],
      date:`${experienceT("jul")} 2023 - ${experienceT("present")}`,
    },
  ];
  return (
    <SectionWrapper
      className="bg-theme-light-50 dark:bg-theme-dark-50"
    >
      <SectionHeader
        desc={experienceT("desc")}
        title={experienceT("title")}
      />
      <ul className="experience-list  mx-auto flex flex-col items-center">
        {
          experiences.map((experienceItem)=>(
            <li
              key={experienceItem.date}
              className="experience-list__item w-[100%] flex flex-col gap-[3rem] flex justify-between
            bg-theme-light-100 dark:bg-theme-dark-100 p-[2rem] rounded-md 
            shadow-[0px_0px_22px_-8px_rgba(0,0,0,0.5)]
            sm:max-w-[350px]
            md:flex-row md:max-w-[896px]
            ">
              <Image
                alt="work place image"
                height={30}
                src={experienceItem.img}
                width={125}
              />
              <div className="job-details">
                <h5
                  className="subtitle-tablet_mobile-semibold 
                text-theme-light-900 dark:text-theme-dark-900 mb-[1rem]">
                  {experienceItem.profession}
                </h5>
                <ul>
                  {
                    experienceItem.details.map((detailItem)=>(
                      <li
                        key={detailItem}
                        className="body-2-all-screen text-theme-light-600 dark:text-theme-dark-600">
                        {detailItem}
                      </li>
                    ))
                  }
                  
                </ul>
              </div>
              <div className="attended-date text-theme-light-700 dark:text-theme-dark-700 body-2-all-screen">
                {experienceItem.date}
              </div>
            </li>
          ))
        }
      </ul>
    </SectionWrapper>
  );
}
