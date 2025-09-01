import React from "react";
import { getTranslations } from "next-intl/server";

export default async function Experience() {
  const experienceT = await getTranslations("EXPERIENCE");

  return (
    <section>
      <h1 className="page-title">{experienceT("education")}</h1>
      <ul className="education-list flex gap-19">
        <li className="education-item rounded-lg px-10 py-8">
          <h6 className="text-9 font-normal">
            {"2021 - 2025"}
          </h6>
          <p className="font-semibold text-9">
            {"BFIC - Tourism and Organization"}
          </p>
        </li>
        <li className="education-item rounded-lg px-10 py-8">
          <h6 className="text-9 font-normal">
            {"2021 - 2025"}
          </h6>
          <p className="font-semibold text-9">
            {"BFIC - Tourism and Organization"}
          </p>
        </li>
      </ul>
      <h1 className="page-title mt-14">{experienceT("title")}</h1>
      <ul className="experience-list flex flex-col gap-10">
        <li className="experience-item rounded-lg px-10 py-8">
          <h6 className="font-bold text-9">
            {"Company: "}{"Software Engineer at XYZ Company"}
          </h6>
          <p className="text-9">
            <span className="font-bold">
              {"Role: "}
            </span>{" "}
            <span className="">
              {"Software Engineer at XYZ Company"}
            </span>
          </p>
          <p className="text-9">
            <span className="font-bold">
              {"Duration: "}
            </span>
            <span>
              {"2021 - 2025"}
            </span>
          </p>
        </li>
        {/* <li className="experience-item rounded-lg px-10 py-8">
          <h6 className="text-9 font-normal">
            {"2019 - 2021"}
          </h6>
          <p className="font-semibold text-9">
            {"Junior Developer at ABC Corp"}
          </p>
        </li> */}
      </ul>
    </section>
  );
}
