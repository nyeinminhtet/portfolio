"use client";

import React from "react";
import SectionHeader from "./sectionHeader";
import { projectsData } from "@/libs/data";
import Project from "./project";
import { useSectionView } from "@/libs/hook";

const Projects = () => {
  const { ref } = useSectionView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className=" scroll-mt-28 mb-28">
      <SectionHeader>My Projects</SectionHeader>

      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
