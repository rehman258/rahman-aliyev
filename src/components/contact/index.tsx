import React from "react";
import SectionWrapper from "@/src/components/common/sectionWrapper";
import SectionHeader from "@/src/components/common/sectionHeader";
import Image from "next/image";

export default function Contact() {
  return (
    <SectionWrapper>
      <SectionHeader
        desc="What’s next? Feel free to reach out to me if you're looking 
        for a developer, have a query, or simply want to connect."
        title="Get in touch"
      />
      <div className="section-content flex flex-col items-center justify-center">
        <div className="contact-details flex flex-col mb-[3rem]">
          <p className="contact-dtails__mail">
            {"rehman1998eliyev@gmail.com"}
          </p>
          <p className="contact-dtails__phone">
            {"+994 50 991 06 74"}
          </p>
        </div>
      
        <ul className="social-links">
          <li className="social-links__item">
            <Image
              alt="social link image"
              height={24}
              src={"/icons/lightGithub.svg"}
              width={24}
            />
          </li>
        </ul>
      </div>

    </SectionWrapper>
  );
}
