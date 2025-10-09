import React from "react";
import SectionWrapper from "@/src/components/common/sectionWrapper";
import SectionHeader from "@/src/components/common/sectionHeader";
import Image from "next/image";
export default function Projects() {
  return (
    <SectionWrapper>
      <SectionHeader
        desc="Some of the noteworthy projects I have built:"
        title="Projects"
      />
      <ul className="w-[1152px] mx-auto">
        <li
          className="flex shadow-2xl dark:shadow-[color:--theme-100]
        rounded-2xl overflow-hidden">
          <div className="p-[3rem] w-[50%] flex bg-theme-light-50 dark:bg-theme-dark-50">
            <Image
              alt="project image"
              height={384}
              src={"/example-project.svg"}
              width={480}
            />
          </div>
          <div
            className="p-[3rem] w-[50%] bg-theme-light-default 
          dark:bg-theme-dark-default flex flex-col gap-[1.5rem]">
            <h6
              className="project-item__title font-semibold 
            text-theme-light-900 dark:text-theme-dark-900 text-[20px] text-ellipsis">
              {"Fiskil"}
            </h6>
            <p className="project-item__desc text-theme-light-600 dark:text-theme-dark-600">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante 
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.`}
            </p>
            <ul className="project-item__used-tech flex flex-wrap">
              <li
                className="bg-theme-light-200 dark:bg-theme-dark-200 
              rounded-full px-[1.25rem] py-[0.25rem] text-theme-light-600 dark:text-theme-dark-600">
                {"React"}
              </li>
            </ul>
            <a href="#">
              <Image
                alt="open project icon"
                height={24}
                src={"/icons/openProjectIcon.svg"}
                width={24}
              />
            </a>

          </div>
        </li>
      </ul>
    </SectionWrapper>
  );
}
