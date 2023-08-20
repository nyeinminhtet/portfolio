"use client";

import { projectsData } from "@/libs/data";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
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
        className=" bg-gray-100 max-w-[52rem] Borderblack overflow-hidden hover:bg-gray-200 transition sm:pr-18
       relative sm:h-[23rem] dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className=" px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[26rem]">
          <h3 className=" text-2xl font-semibold dark:text-gray-200">
            {title}
          </h3>
          <p className=" mt-2 leading-relaxed text-gray-700 sm:group-first:text-[0.8rem] md:group-first:text-[1rem] dark:text-gray-50">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                key={i}
                className=" bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Link href={link} target="_blank">
          <Image
            src={imageUrl}
            alt="project"
            quality={95}
            className=" absolute hidden sm:block group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:scale-110 transition
             top-8 sm:-right-10 md:right-0 w-[22.25rem] md:w-[25.25rem] rounded-t-lg shadow-2xl cursor-pointer group-odd:top-20 group-even:left-0"
          />
        </Link>
      </section>
    </motion.div>
  );
}