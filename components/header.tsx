"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/libs/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/activeSectionContext";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className=" z-[999] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-3 left-1/2 h-[3rem] w-[20rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
         shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full
         dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      ></motion.div>

      <nav className="fixed flex top-3 left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap justify-center items-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="  flex items-center justify-center h-3/4 relative dark:text-gray-500 dark:hover:text-gray-300"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex justify-end items-center w-full p-3 hover:text-gray-850 transition",
                  {
                    "text-gray-950 dark:text-gray-100":
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <p className="hidden md:block">{link.name}</p>
                <link.Icon className="block md:hidden  w-6 h-6 sm:w-7 sm:h-7" />
                {link.name === activeSection && (
                  <motion.span
                    layoutId="active"
                    transition={{ type: "spring", stiffness: 380, damping: 40 }}
                    className=" bg-gray-200  rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
