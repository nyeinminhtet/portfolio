import React, { useRef } from "react";
import SectionHeader from "./sectionHeader";
import { projectsData } from "@/libs/data";
import Project from "./project";

const Projects = () => {
  return (
    <section>
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
