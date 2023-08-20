"use client";

import React, { useEffect } from "react";
import SectionHeader from "./sectionHeader";
import { motion } from "framer-motion";
import { useSectionView } from "@/libs/hook";

const About = () => {
  const { ref } = useSectionView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className=" mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3 text-lg text-start">
        After high school, I learnt a programming but it didn't complete. But in
        2022, I attended
        <span className="font-medium"> Full-stack developer course </span> and
        learnt step by step. And then I decided to pursue my passion for
        programming. My favorite part of programming is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL but I can also use MongoDB.
        </span>{" "}
        I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a junior
        developer.
      </p>

      <p className=" text-lg text-start">
        <span>When I'm not coding</span>, I enjoy listening songs, watching
        movies, and reading. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm also
        learning <span className="font-medium">English for opportunities </span>
        and about Blockchain.
      </p>
    </motion.section>
  );
};

export default About;
