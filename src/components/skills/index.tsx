import React from "react";
import SectionWrapper from "../common/sectionWrapper";
import SectionHeader from "@/src/components/common/sectionHeader";
import Image from "next/image";
import "./scss/index.scss";
import { useTranslations } from "next-intl";

export default function Skills() {
  const skillsT = useTranslations("SKILLS");
  return (
    <SectionWrapper className="">
      <SectionHeader
        desc={skillsT("desc")}
        title={skillsT("title")}
      />
      <ul className="flex flex-wrap section-list gap-y-[1rem]">
        <li className="flex flex-col items-center justify-center w-1/3 sm:w-1/5 lg:w-1/6">
          <Image
            alt="developer skill"
            className="mb-[0.5rem]"
            height={64}
            src={"/icons/skills/js.svg"}
            width={64}
          />
          <p className="text-theme-light-600 dark:text-theme-dark-600 text-[18px]">
            {"Javascript"}
          </p>
        </li>
      </ul>
    </SectionWrapper>
  );
}
