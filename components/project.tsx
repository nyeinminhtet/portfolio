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
        className=" bg-gray-100 flex flex-col md:flex-row max-w-[52rem] Borderblack overflow-hidden hover:bg-gray-200 transition md:pr-18
       relative md:h-[23rem] dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className=" px-5 pt-4 pb-7 md:pl-10 md:pr-2 md:pt-10 md:max-w-[50%] flex flex-col h-full md:group-even:ml-[26rem]">
          <div className="flex gap-5 items-center">
            <h3 className=" text-2xl font-semibold dark:text-gray-200">
              {title}
            </h3>
            <div className="flex gap-4">
              <Link
                href={demo}
                target="_blank"
                className=" underline text-base font-bold hover:text-indigo-500"
              >
                demo
              </Link>
              <Link
                href={github}
                target="_blank"
                className=" bg-zinc-50 rounded-lg hover:bg-zinc-400 "
              >
                <Github className=" dark:text-black  rounded-md hover:bg-zinc-400 dark:hover:bg-zinc-50" />
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
                className=" bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="project"
          quality={100}
          priority
          className="md:absolute lg:group-hover:-translate-x-3 lg:group-hover:translate-y-3 lg:group-last:mt-10 lg:group-hover:scale-110 transition
              md:right-0 w-full object-contain md:w-[25.25rem] md:group-last:w-[27rem] rounded-t-lg shadow-2xl cursor-pointer group-odd:top-20 group-even:left-0"
        />
      </section>
    </motion.div>
  );
}
