import React from "react";
import SectionWrapper from "@/src/components/common/sectionWrapper";
import SectionHeader from "@/src/components/common/sectionHeader";
import Image from "next/image";
import "./scss/index.scss";
import { useTranslations } from "next-intl";
export default function Projects() {
  const projectsT = useTranslations("PROJECTS");
  const projects = [
    {
      img:"/projectImages/pc.png",
      title: "Stylist Colorist",
      desc:projectsT("project1_desc"),
      path:"https://www.pervincebrayilova.com/",
      techs:["HTML", "CSS", "Javascript"],
    }
  ];
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        desc={projectsT("desc")}
        title={projectsT("title")}
      />
      <ul className="projects-list w-[1152px] mx-auto">
        {
          projects.map((projectItem)=>(
          
            <li
              key={projectItem.title}
              className="flex flex-col shadow-[0px_0px_22px_-8px_rgba(0,0,0,0.5)] 
              dark:shadow-[color:--theme-100]rounded-2xl overflow-hidden md:flex-row">
              <div className="p-[2rem] lg:p-[3rem] w-[100%] flex bg-theme-light-50 dark:bg-theme-dark-50">
                <Image
                  alt="project image"
                  height={400}
                  src={projectItem.img}
                  width={480}
                />
              </div>
              <div
                className="p-[2rem] md:p-[3rem] w-[100%] bg-theme-light-default 
          dark:bg-theme-dark-default flex flex-col gap-[1.5rem]">
                <h2
                  className="project-item__title font-semibold 
            text-theme-light-900 dark:text-theme-dark-900 text-[20px] text-ellipsis">
                  {projectItem.title}
                </h2>
                <p className="project-item__desc text-theme-light-600 dark:text-theme-dark-600">
                  {projectItem.desc}
                </p>
                <ul className="project-item__used-tech flex flex-wrap gap-[10px]">
                  {
                    projectItem.techs.map((techItem)=>(

                      <li
                        key={techItem}
                        className="bg-theme-light-200 dark:bg-theme-dark-200 
                      rounded-full px-[1.25rem] py-[0.25rem] text-theme-light-600 dark:text-theme-dark-600">
                        {techItem}
                      </li>
                    ))
                  }
                </ul>
                <a href={projectItem.path}>
                  <Image
                    alt="open project icon"
                    height={24}
                    src={"/icons/openProjectIcon.svg"}
                    width={24}
                  />
                </a>

              </div>
            </li>
          ))
        }
      </ul>
    </SectionWrapper>
  );
}
