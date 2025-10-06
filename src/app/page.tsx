import React from "react";
import Button from "@/src/components/common/button";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Banner from "@/src/components/banner/idnex";
import About from "@/src/components/about";
import Skills from "@/src/components/skills";
import Experience from "@/src/components/experience";
import Projects from "@/src/components/projects";
export default function SinglePage() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
      </main>
      <Footer/>
    </>
  );
}
