import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Projects() {
  const projectsT = await getTranslations("PROJECTS");

  return (
    <section>
      <h1 className="page-title">{projectsT("title")}</h1>
      <ul className="projects-list flex  gap-26 flex-wrap">
        <li className="project-item p-11 rounded-lg w-[calc(50% - 26px)]">
          <Image
            alt="Project 1"
            className=""
            height={200}
            src="/path/to/image.jpg"
            width={242}
          />
          <span className="project-name font-bold text-9">
            {projectsT("project1")}
          </span>
          <a
            className="see-more block text-blue-500 flex gap-5"
            href="#">
            {projectsT("see_more")} 
            <Image
              alt="see more icon for project"
              height={20}
              src={"/icons/SeeMoreIcon.svg"}
              width={20}
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
