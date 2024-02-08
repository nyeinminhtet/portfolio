"use client";

import { projectsData } from "@/libs/data";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  demo,
  github,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgres = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgres = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgres,
        opacity: opacityProgres,
      }}
      className="mb-3 sm:mb-6 last:mb-0 group"
    >
      <section
        className=" bg-gray-100 group flex flex-col lg:flex-row max-w-[52rem] Borderblack overflow-hidden hover:bg-gray-200 transition md:pr-18
      relative  md:h-[23rem] dark:bg-gray-800 "
      >
        <div className="px-5 pt-4 pb-7 md:pl-10 md:pr-2 md:pt-10 md:max-w-[50%] flex flex-col h-full md:group-even:ml-[50%]">
          <div className=" flex gap-5 items-center">
            <h3 className="relative text-2xl font-semibold dark:text-gray-200">
              {title}
              <motion.hr className="underline-animation group-hover:w-full" />
            </h3>
            <div className="flex gap-4">
              <Link
                href={demo}
                target="_blank"
                className=" underline text-base font-bold hover:text-indigo-500"
              >
                demo
              </Link>
              <Link href={github} target="_blank">
                <Github className=" dark:text-white  rounded-md  hover:text-indigo-800 dark:hover:text-indigo-600" />
              </Link>
            </div>
          </div>
          <p className=" mt-2 leading-relaxed text-gray-700  md:group-first:text-[1rem] dark:text-gray-50">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="bg-black/70 px-3 py-1 text-[0.7rem] 
                uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:absolute w-full md:w-1/2 group-even:left-0 group-odd:right-0">
          <Image
            src={imageUrl}
            alt="project"
            quality={100}
            priority
            className="md:absolute lg:group-last:mt-10 transition
              md:right-0 w-full object-contain md:w-[25.25rem] md:group-last:w-[27rem] rounded-t-lg shadow-2xl"
          />
        </div>
      </section>
    </motion.div>
  );
}
