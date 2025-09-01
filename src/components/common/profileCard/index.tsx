import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function ProfilCard() {
  const profileT = await getTranslations("PROFILE_CARD");

  return (
    <aside className="profile-card px-16 flex flex-col items-center pb-17">
      <picture>
        <Image
          alt="developer image"
          className="dev-image"
          height={200}
          src="/dev-test-image.png"
          width={200}
        />
      </picture>
      <div className="dev-name text-11 text-center leading-normal my-5 font-bold">{"Rahman Aliyev"}</div>
      <div
        className="profession text-8 rounded-md text-base 
      font-medium px-10 py-5">{profileT("profession")}</div>
      <ul className="socials mt-17 mb-20 flex gap-8">
        <li>
          <Link
            href={"#"}
          >
            <Image
              alt="developer github"
              height={34}
              src={"/icons/Github.svg"}
              width={34}
            />
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
          >
            <Image
              alt="developer linkedin"
              height={34}
              src={"/icons/Linkedin.svg"}
              width={34}
            />
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
          >
            <Image
              alt="developer instagram"
              height={34}
              src={"/icons/Instagram.svg"}
              width={34}
            />
          </Link>
        </li>
      </ul>
      <ul className="contacts rounded-xl p-10">
        <li className="flex flex-col items-center w-full">
          <div className="flex items-center gap-10 w-full justify-start">
            <Image
              alt="developer phone contact"
              className="icon"
              height={35}
              src="/icons/ContactPhone.svg"
              width={35}
            />
            <a
              className="leading-normal text-7 font-medium "
              href="tel:+994509910674"
            >
              {"+994 509910674"}
            </a>
          </div>
          <hr className="w-full my-4"/>
        </li>
        <li className="flex flex-col items-center w-full">
          <div className="flex items-center gap-10 w-full justify-start">
            <Image
              alt="developer email contact"
              className="icon"
              height={35}
              src="/icons/ContactEnvelope.svg"
              width={35}
            />
            <a
              className="leading-normal text-7 font-medium "
              href="mailto:rehman1998eliyev@gmail.com"
            >
              {"rehman1998eliyev@gmail.com"}
            </a>
          </div>
          <hr className="w-full my-4"/>
        </li>
        <li className="flex flex-col items-center w-full">
          <div className="flex items-center gap-10 w-full justify-start">
            <Image
              alt="developer location"
              className="icon"
              height={35}
              src="/icons/ContactLocationMark.svg"
              width={35}
            />
            <a
              className="leading-normal text-7 font-medium"
            >
              <address className="not-italic">
                {"Baku, Azerbaijan"}
              </address>
            </a>
          </div>
          <hr className="w-full my-4"/>
        </li>
        <li className="flex flex-col items-center w-full">
          <div className="flex items-center gap-10 w-full justify-start">
            <Image
              alt="phone icon"
              className="icon"
              height={35}
              src="/icons/ContactPhone.svg"
              width={35}
            />
            <a
              className="leading-normal text-7 font-medium "
              href="https://wa.me/+994509910674"
            >
              {"+994 509910674"}
            </a>
          </div>
        </li>
      </ul>
      <div className="view-resume mt-15 text-10 cursor-pointer rounded-lg text-center py-6 px-15 font-bold">
        {profileT("view_resume")}
      </div>
    </aside>
  );
}
