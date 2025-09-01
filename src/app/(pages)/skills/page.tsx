import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
export default async function Skills() {
  const skillsT = await getTranslations("SKILLS");

  const skills = [
    {
      name: "HTML",
      icon: "/icons/HtmlIcon.svg",
    },
    {
      name: "CSS",
      icon: "/icons/CssIcon.svg",
    },
    {
      name: "JS",
      icon: "/icons/JsIcon.svg",
    },
    {
      name: "TS",
      icon: "/icons/TsIcon.svg",
    },
    {
      name: "React",
      icon: "/icons/ReactIcon.svg",
    },
    {
      name: "Next.js",
      icon: "/icons/NextIcon.svg",
    },
    {
      name: "Redux",
      icon: "/icons/ReduxIcon.svg",
    },
    {
      name: "Tailwind",
      icon: "/icons/TailwindIcon.svg",
    },
    {
      name: "HeroUi",
      icon: "/icons/HeroUiIcon.png",
    },
    {
      name: "Bootstrap",
      icon: "/icons/BootstrapIcon.svg",
    },
    {
      name: "MaterialUi",
      icon: "/icons/MaterialUiIcon.svg",
    },
    {
      name: "Vue",
      icon: "/icons/VueIcon.svg",
    },
    {
      name: "Vuetify",
      icon: "/icons/VuetifyIcon.png",
    },
  ];

  return (
    <section>
      <h1 className="page-title">{skillsT("skills")}</h1>
      <ul className="skills-list flex gap-12 flex-wrap">
        {
          skills.map((skill) => (
            <li
              key={skill.name}
              className="text-center max-w-[67.5px] cursor-pointer">
              <div className="skill-item mb-2 p-7 rounded-lg h-[65px] flex items-center justify-center">
                <Image
                  alt={`${skill.name} logo`}
                  height={45}
                  src={skill.icon}
                  width={45}
                />
              </div>
              <h6 className="font-semibold text-9 tracking-wider text-ellipsis overflow-hidden">
                {skill.name}
              </h6>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
