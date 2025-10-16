import React from "react";
import Image from "next/image";
import SectionWrapper from "../common/sectionWrapper";
import "./scss/index.scss";
import SectionHeader from "@/src/components/common/sectionHeader";
export default function About() {
  return (
    <SectionWrapper
      className="bg-theme-light-50 dark:bg-theme-dark-50  
    ">
      <SectionHeader
        title="About me"
      />
      <div className="sm:flex">
        <div
          className="sm:w-[35%]
        xl:w-[50%] w-[100%] mb-[2rem] flex justify-center align-center sm:mx-auto">
          <Image
            alt="developer image"
            className="rounded-2xl self-start"
            height={500}
            src={"/my-image.jpeg"}
            width={350}
          />
        </div>
        <div className="sm:w-[65%] sm:ps-[2rem] xl:ps-[0px] xl:w-[50%] w-[100%] ">
          <h5
            className="text-[3rem] mb-[1.5rem] heading-3-tablet_mobile-bold 
          text-theme-light-900 dark:text-theme-dark-900">
            {"About me"}
          </h5>
          <p className="text-theme-light-600 dark:text-theme-dark-600">
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit aspernatur neque veritatis doloremque, 
            adipisci laborum deleniti inventore harum delectus voluptatibus 
            officia facilis iure, magni aliquid odit quam quas vitae ad.`}
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit aspernatur neque veritatis doloremque, 
            adipisci laborum deleniti inventore harum delectus voluptatibus 
            officia facilis iure, magni aliquid odit quam quas vitae ad.`}
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit aspernatur neque veritatis doloremque, 
            adipisci laborum deleniti inventore harum delectus voluptatibus 
            officia facilis iure, magni aliquid odit quam quas vitae ad.`}
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit aspernatur neque veritatis doloremque, 
            adipisci laborum deleniti inventore harum delectus voluptatibus 
            officia facilis iure, magni aliquid odit quam quas vitae ad.`}
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit aspernatur neque veritatis doloremque, 
            adipisci laborum deleniti inventore harum delectus voluptatibus 
            officia facilis iure, magni aliquid odit quam quas vitae ad.`}
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit aspernatur neque veritatis doloremque, 
            adipisci laborum deleniti inventore harum delectus voluptatibus 
            officia facilis iure, magni aliquid odit quam quas vitae ad.`}
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit aspernatur neque veritatis doloremque, 
            adipisci laborum deleniti inventore harum delectus voluptatibus 
            officia facilis iure, magni aliquid odit quam quas vitae ad.`}
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit aspernatur neque veritatis doloremque, 
            adipisci laborum deleniti inventore harum delectus voluptatibus 
            officia facilis iure, magni aliquid odit quam quas vitae ad.`}
            {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit aspernatur neque veritatis doloremque, 
            adipisci laborum deleniti inventore harum delectus voluptatibus 
            officia facilis iure, magni aliquid odit quam quas vitae ad.`}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
