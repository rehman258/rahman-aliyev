"use client";
import React from "react";
import useMod from "../hooks/useMod";
import Button from "@/src/components/common/button";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Banner from "@/src/components/banner/idnex";
import About from "@/src/components/about";
import Skills from "@/src/components/skills";
import Experience from "@/src/components/experience";
import Projects from "@/src/components/projects";
import Contact from "@/src/components/contact";
export default function SinglePage() {
    const { mode, changeMode } = useMod();
  return (
    <>
      <Header mode={mode||"light"} changeMode={changeMode}/>
      <main>
        <Banner/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact mode={mode || "light"}/>
      </main>
      <Footer/>
    </>
  );
}
