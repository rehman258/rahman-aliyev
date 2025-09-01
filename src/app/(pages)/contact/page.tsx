"use client";

import React from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { useTranslations } from "next-intl";
export default function Contact() {
  const contactT = useTranslations("CONTACT");

  const classNames = {
    input: [
      "h-[50]",
    ],
    innerWrapper:[
      "h-[50]"
    ],
    inputWrapper:[
      "h-[50]",
      "form-element"
    ],
  };

  return (
    <section>
      <h1 className="page-title">{contactT("title")}</h1>
      <form
        action=""
        className="flex flex-col">
        <label
          className="mb-1"
          htmlFor="">
          {contactT("email")}
        </label>
        <Input
          className="h-[50] mb-12"
          classNames={classNames}
        />
        <label
          className="mb-1"
          htmlFor="">
          {contactT("subject")}
        </label>
        <Input
          className="h-[50] mb-12"
          classNames={classNames}
        />
        <label
          className="mb-1"
          htmlFor="">
          {contactT("message")}
        </label>
        <Textarea
          className="h-[180px] mb-12"
          classNames={
            { 
              ...classNames,
              inputWrapper:[ ...classNames.inputWrapper, "min-h-[180px]" ],
              innerWrapper: ["flex","items-start"],
              // input:[ ...classNames.input,],
            }
          }
          // label={contactT("message")}
          // labelPlacement="outside"
        />
        <Button className="h-[50] self-end py-6 px-30 form-button">
          {contactT("submit")}
        </Button>
      </form>
    </section>
  );
}
