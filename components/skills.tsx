"use client";

import React from "react";
import SectionHeader from "./sectionHeader";
import { skillsData } from "@/libs/data";
import Image from "next/image";
import { useSectionView } from "@/libs/hook";
import { motion } from "framer-motion";

const fadeInMotion = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className=" mb-28 scroll-mt-28 max-w-[53rem] text-center sm:mb-40"
    >
      <SectionHeader>My Skills</SectionHeader>

      <ul className="flex flex-wrap justify-center gap-6">
        {skillsData.map((skill, i) => (
          <motion.li
            key={i}
            variants={fadeInMotion}
            initial="initial"
            custom={i}
            whileInView="animate"
            viewport={{ once: true }}
            className="relative w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] md:w-[4rem] md:h-[4rem]"
          >
            <Image
              alt="skills"
              src={skill}
              fill
              quality={95}
              className=" object-contain rounded-xl dark:bg-white"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
