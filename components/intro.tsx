"use client";

import Image from "next/image";
import React from "react";
import profile from "@/public/profile.png";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionView } from "@/libs/hook";
import { useActiveSectionContext } from "@/context/activeSectionContext";

const Intro = () => {
  const { ref } = useSectionView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} className="mb-28 sm:mb-0 scroll-mt-[100rem]" id="home">
      <div className="flex flex-wrap justify-evenly mb-10">
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
              className="profile border-gray-100 object-cover shadow-xl border "
            />
          </motion.div>
        </div>

        <div className=" max-w-[500px]">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className=" text-md sm:text-2xl dark:text-gray-300 font-medium !leading-[1.5]"
          >
            Hello,
            <span className="font-bold dark:text-white">
              I'm Nyein Min Htet,
            </span>{" "}
            a
            <span className=" font-bold dark:text-white">
              {" "}
              junior full-stack developer{" "}
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
        className="flex flex-col sm:flex-row justify-center items-center text-md gap-2"
      >
        <Link
          href="#contact"
          className="flex group items-center bg-gray-800 text-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-gray-950"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className=" opacity-70 group-hover:translate-x-2  transition" />
        </Link>
        <a
          className="flex items-center cursor-pointer group bg-white text-gray-900 px-7 py-3 gap-2 rounded-full 
          Borderblack outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-gray-200"
          href="/Resume.pdf"
        >
          Resume{" "}
        </a>

        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/nyeinminhtet/"
            target="_blank"
            className="flex group items-center cursor-pointer hover:text-gray-950  bg-white text-gray-800 p-4 gap-2 rounded-full Borderblack
           outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] transition dark:bg-white/60"
          >
            <BsLinkedin size={25} />
          </a>
          <a
            href="https://github.com/nyeinminhtet"
            target="_blank"
            className="flex group items-center cursor-pointer hover:text-gray-950  bg-white text-gray-800 p-4 gap-2 rounded-full Borderblack
           outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.5] transition dark:bg-white/60"
          >
            <FaGithubSquare size={27} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
