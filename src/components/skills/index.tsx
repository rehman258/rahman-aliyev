import React from "react";
import SectionWrapper from "../common/sectionWrapper";
import SectionHeader from "@/src/components/common/sectionHeader";
import Image from "next/image";
import "./scss/index.scss";
import { useTranslations } from "next-intl";

export default function Skills() {
  const skillsT = useTranslations("SKILLS");
  const skills = [
    {
      img:"/icons/skills/js.svg",
      name:"Javascript"
    },
    {
      img:"/icons/skills/ts.svg",
      name:"Typescript"
    },
    {
      img:"/icons/skills/react.svg",
      name:"React"
    },
    {
      img:"/icons/skills/next.svg",
      name:"Next.js"
    },
    {
      img:"/icons/skills/html.svg",
      name:"HTML 5"
    },
    {
      img:"/icons/skills/css.svg",
      name:"CSS 3"
    },
    {
      img:"/icons/skills/tailwind.svg",
      name:"Tailwind"
    },
    {
      img:"/icons/skills/materialUI.svg",
      name:"Material UI"
    },
    {
      img:"/icons/skills/heroUI.svg",
      name:"Hero UI"
    },
    {
      img:"/icons/skills/git.svg",
      name:"Git"
    },
  ];
  return (
    <SectionWrapper
      className=""
      id="skills">
      <SectionHeader
        desc={skillsT("desc")}
        title={skillsT("title")}
      />
      <ul className="flex flex-wrap section-list gap-y-[1rem]">
        {
          skills.map((skilItem)=>(
            <li
              key={skilItem.name}
              className="flex flex-col items-center justify-center w-1/3 sm:w-1/5 lg:w-1/6">
              <Image
                alt="developer skill"
                className="mb-[0.5rem]"
                height={64}
                src={skilItem.img}
                width={64}
              />
              <p className="text-theme-light-600 dark:text-theme-dark-600 text-[18px]">
                {skilItem.name}
              </p>
            </li>
          ))
        }
      </ul>
    </SectionWrapper>
  );
}
