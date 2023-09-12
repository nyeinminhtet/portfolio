"use client";

import React from "react";
import SectionHeader from "./sectionHeader";
import { projectsData } from "@/libs/data";
import Project from "./project";
import { useSectionView } from "@/libs/hook";
import { ArrowRightCircle, ChevronRightCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const Projects = () => {
  const { ref } = useSectionView("Projects", 0.3);
  const router = useRouter();

  return (
    <section ref={ref} id="projects" className=" scroll-mt-28 mb-28">
      <SectionHeader>My Projects</SectionHeader>

      <div className=" flex justify-between mb-4">
        <div />
        <p
          className=" hover:opacity-75 cursor-pointer flex gap-1 text-gray-700 dark:text-zinc-400"
          onClick={() => router.push("/projects")}
        >
          All Projects <ArrowRightCircle size={25} />
        </p>
      </div>

      <div>
        {projectsData.slice(0, 4).map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
