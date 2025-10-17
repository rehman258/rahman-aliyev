"use client";

import React from "react";
// import useMod from "@/src/hooks/useMod";
import SectionWrapper from "@/src/components/common/sectionWrapper";
import SectionHeader from "@/src/components/common/sectionHeader";
import Image from "next/image";

export default function Contact({ mode }:{mode:string}) {
  return (
    <SectionWrapper>
      <SectionHeader
        desc="What’s next? Feel free to reach out to me if you're looking 
        for a developer, have a query, or simply want to connect."
        title="Get in touch"
      />
      <div className="section-content flex flex-col items-center justify-center">
        <div className="contact-details flex flex-col mb-[3rem]">
          <div className="flex justify-center gap-[16px]">
            <a
              className="contact-dtails__mail flex gap-[20px] font-bold
            mb-[1rem] text-theme-light-900 dark:text-theme-dark-900 text-[1rem]"
              href="mailto:rehman1998eliyev@gmail.com">
              <Image 
                alt="developer mail icon"
                height={24}
                src={`/icons/${mode}Envelope.svg`}
                width={24}
              />
              {"rehman1998eliyev@gmail.com"}
            </a>
            <Image
              alt="copy icon"
              height={24}
              src={`/icons/${mode}Copy.svg`}
              width={24}
            />
          </div>
          <div className="flex justify-center gap-[16px]">
            <a
              className="contact-dtails__phone flex gap-[20px] font-bold
            text-theme-light-900 dark:text-theme-dark-900 text-[1rem]"
              href="tel:+994509910674">
              <Image 
                alt="developer phone icon"
                height={24}
                src={`/icons/${mode}Phone.svg`}
                width={24}
              />
              {"+994 50 991 06 74"}
              
            </a>
            <Image
              alt="copy icon"
              height={24}
              src={`/icons/${mode}Copy.svg`}
              width={24}
            />
          </div>
        </div>
        <p className="mb-[0.5rem] text-theme-light-600 dark:text-theme-dark-600">
          {"You may also find me on these platforms!"}
        </p>
        <ul className="social-links">
          <li className="social-links__item">
            <a href="">
              <Image
                alt="social link image"
                height={24}
                src={`/icons/${mode}github.svg`}
                width={24}
              />
            </a>
          </li>
        </ul>
      </div>

    </SectionWrapper>
  );
}
