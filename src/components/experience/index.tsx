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
      img:"/workLogos/mpay.svg",
      url:"https://mpay.az",
      profession:experienceT("profession"),
      details:[
        experienceT("exp5.desc1"),
        experienceT("exp5.desc2"),
        experienceT("exp5.desc3"),
        experienceT("exp5.desc4"),
        experienceT("exp5.desc5"),
      ],
      date:`${experienceT("jul")} 2023 - ${experienceT("present")}`,
    },
    {
      img:"Intelligence Solutions",
      url:"",
      profession:experienceT("profession"),
      details:[
        experienceT("exp4.desc1"),
        experienceT("exp4.desc2"),
        experienceT("exp4.desc3"),
        experienceT("exp4.desc4"),
        experienceT("exp4.desc5"),
      ],
      date:`${experienceT("jan")} 2023 - ${experienceT("jul")} 2023`,
    },
    {
      img:"Freelance",
      url:"",
      profession:experienceT("profession"),
      details:[
        experienceT("exp3.desc1"),
        experienceT("exp3.desc2"),
        experienceT("exp3.desc3"),
        experienceT("exp3.desc4"),
        experienceT("exp3.desc5"),
      ],
      date:`${experienceT("feb")} 2022 - ${experienceT("jan")} 2023`,
    },
    {
      img:"Time Group",
      url:"",
      profession:experienceT("profession"),
      details:[
        experienceT("exp2.desc1"),
        experienceT("exp2.desc2"),
        experienceT("exp2.desc3"),
        experienceT("exp2.desc4"),
        experienceT("exp2.desc5"),
      ],
      date:`${experienceT("jun")} 2020 - ${experienceT("feb")} 2021`,
    },
    {
      img:"Metiaturk MMC",
      url:"",
      profession:experienceT("profession_little"),
      details:[
        experienceT("exp1.desc1"),
        experienceT("exp1.desc2"),
        experienceT("exp1.desc3"),
        experienceT("exp1.desc4"),
        experienceT("exp1.desc5"),
      ],
      date:`${experienceT("mar")} 2019 - ${experienceT("feb")} 2020`,
    },
  ];
  return (
    <SectionWrapper
      className="bg-theme-light-50 dark:bg-theme-dark-50"
      id="experience"
    >
      <SectionHeader
        desc={experienceT("desc")}
        title={experienceT("title")}
      />
      <ul className="experience-list gap-y-[30px]  mx-auto flex flex-col items-center">
        {
          experiences.map((experienceItem)=>(
            <li
              key={experienceItem.date}
              className="experience-list__item w-[100%] flex flex-col flex justify-between
            bg-theme-light-100 dark:bg-theme-dark-100 p-[2rem] rounded-md 
            shadow-[0px_0px_22px_-8px_rgba(0,0,0,0.5)]
            sm:max-w-[350px]
            md:flex-row md:max-w-[1000px]
            ">
              {
                experienceItem.img.includes("/") ?  
                  <a href={experienceItem.url}>
                    <Image
                      alt="work place image"
                      height={30}
                      src={experienceItem.img}
                      width={125}
                    />
                  </a>
                  : <h4 className="font-bold w-[150px]">{experienceItem.img}</h4>
              }
              <div className="job-details w-[100%] md:-w-[600px]">
                <h3
                  className="subtitle-tablet_mobile-semibold 
                text-theme-light-900 dark:text-theme-dark-900 mb-[1rem]">
                  {experienceItem.profession}
                </h3>
                <ul className="">
                  {
                    experienceItem.details.map((detailItem)=>(
                      <li
                        key={detailItem}
                        className="body-2-all-screen mb-[10px] sm:mb-[0px]
                        text-theme-light-600 dark:text-theme-dark-600">
                        {detailItem}
                      </li>
                    ))
                  }
                  
                </ul>
              </div>
              <div
                className="attended-date text-theme-light-700 w-[175px] 
              dark:text-theme-dark-700 body-2-all-screen">
                {experienceItem.date}
              </div>
            </li>
          ))
        }
      </ul>
    </SectionWrapper>
  );
}
