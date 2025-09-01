import React from "react";
import { getTranslations } from "next-intl/server";
export default async function About() {
  const aboutT = await getTranslations("ABOUT");
  return (
    <section>
      <h2 className="page-title">{aboutT("title")}</h2>
      <p className="about-desc text-9 font-normal leading-normal">
        {aboutT("about1")}
      </p>
      <br />
      <p className="about-desc text-9 font-normal leading-normal">
        {aboutT("about2")}
      </p>
    </section>
  );
}
