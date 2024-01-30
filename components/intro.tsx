"use client";

import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpg";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSectionView } from "@/libs/hook";
import { useActiveSectionContext } from "@/context/activeSectionContext";

const Intro = () => {
  const { ref } = useSectionView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 sm:mb-0 scroll-mt-[100rem] w-[70%]"
      id="home"
    >
      <div className="flex flex-wrap justify-evenly items-center mb-10">
        {/* image section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Image
              src={profile}
              alt="profile"
              width="242"
              height="242"
              quality="95"
              priority={true}
              className="object-cover profile border-2 border-s-white border-e-white "
            />
          </motion.div>
        </div>

        <div className=" max-w-[500px]">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className=" text-md sm:text-2xl dark:text-gray-400 font-medium !leading-[1.5]"
          >
            Hello,
            <span className="font-bold dark:text-white ">
              I'm Nyein Min Htet,
            </span>{" "}
            a
            <span className=" font-bold dark:text-white">
              {" "}
              junior web developer{" "}
            </span>
            <span>who's passionate about crafting web applications.</span>
            My focus is
            <span className="font-bold dark:text-white"> React & Nextjs.</span>
          </motion.h1>
        </div>
      </div>

      {/* contact me */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-row justify-center items-center text-base gap-2"
      >
        <a
          className="flex items-center font-bold cursor-pointer group bg-white text-gray-900 px-5  md:px-7 py-3 gap-2 rounded-full 
          Borderblack outline-none focus:scale-110 hover:scale-105 active:scale-105 transition dark:bg-white/10 dark:text-gray-200"
          href="/Nyein_Min Htet_Resume.pdf"
        >
          CV
        </a>

        <div className="flex gap-1">
          <a
            href="https://www.linkedin.com/in/nyeinminhtet/"
            target="_blank"
            className="flex group items-center cursor-pointer  hover:bg-white   p-3 gap-2 rounded-full
           outline-none focus:scale-[1.15]  active:scale-[1.15] transition dark:hover:bg-gradient-to-r dark:from-white/90 dark:to-slate-200"
          >
            <FaLinkedin className="text-blue-500  w-10 h-10" />
          </a>
          <a
            href="https://github.com/nyeinminhtet"
            target="_blank"
            className="flex group items-center cursor-pointer   hover:bg-white p-3 gap-2 rounded-full 
            outline-none focus:scale-[1.15]  active:scale-[1.15] transition dark:hover:bg-gradient-to-r dark:from-white/90 dark:to-slate-200"
          >
            <FaGithub className="w-10 h-10 text-black dark:text-white group-hover:dark:text-black" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
