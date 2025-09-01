import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
export default async function Navigation() {
  const navT = await getTranslations("NAV");

  return (
    <div className="navigation px-14 py-17 self-start">
      <ul className="flex flex-col gap-y-10">
        <li>
          <Link
            className="flex items-center flex-col justify-center rounded-md"
            href="/about">
            <Image
              alt="about route"
              height={25}
              src={"./icons/About.svg"}
              width={25}
            />
            {
              <span className="block font-bold text-6">{navT("about")}</span>
            }
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center flex-col justify-center rounded-md"
            href="/experience">
            <Image
              alt="experience route"
              height={25}
              src={"./icons/Experience.svg"}
              width={25}
            />
            {
              <span className="block font-bold text-6">{navT("experience")}</span>
            }
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center flex-col justify-center rounded-md"
            href="/projects">
            <Image
              alt="projects route"
              height={25}
              src={"./icons/Projects.svg"}
              width={25}
            />
            {
              <span className="block font-bold text-6">{navT("projects")}</span>
            }
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center flex-col justify-center rounded-md"
            href="/skills">
            <Image
              alt="skills route"
              height={25}
              src={"./icons/Skills.svg"}
              width={25}
            />
            {
              <span className="block font-bold text-6">{navT("skills")}</span>
            }
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center flex-col justify-center rounded-md"
            href="/contact">
            <Image
              alt="contact route"
              height={25}
              src={"./icons/Contact.svg"}
              width={25}
            />
            {
              <span className="block font-bold text-6">{navT("contact")}</span>
            }
          </Link>
        </li>
      </ul>
    </div>
  );
}
