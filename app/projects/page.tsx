import { HeroHighlightDemo } from "@/components/AnimationComponents/HeroHighlightDemo";
import { SidebarDemo } from "@/components/AnimationComponents/SidebarDemo";
import CountryFlag from "@/components/HomePageComponents/CountryFlag";
import SecondSection from "@/components/ProjectPageComponents/AllProjectShowCase/SecondarySection";
import ProjectHero from "@/components/ProjectPageComponents/Projects";
import ThirdSection from "@/components/ProjectPageComponents/ThirdSection/page";
import SplineHero from "@/components/SplineComponents/SplineHero";
import React from "react";
import "./projects.css"
import Awards from "@/components/ProjectPageComponents/Awards";
const Projects = () => {
  return (
    <>
      <main>
        <ProjectHero />
        <SecondSection />
        <ThirdSection />
        <Awards />
      </main>
    </>
  );
};

export default Projects;
