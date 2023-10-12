"use client";

import React from "react";
import { projectsData } from "@/libs/data";
import Link from "next/link";
import { Github } from "lucide-react";
import Image from "next/image";
import { ChevronLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/sectionHeader";

const Page = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col mx-10 -mt-20">
      <SectionHeader>All Projects</SectionHeader>
      <div className="mb-5 w-40">
        <button
          onClick={() => router.back()}
          className=" flex gap-1 hover:opacity-75 md:px-5 py-1 rounded-lg text-xl"
        >
          <ChevronLeftCircle size={30} />
          back
        </button>
      </div>

      {/* all projects */}
      <section className=" scroll-mt-28 mb-28 flex flex-wrap justify-center gap-5 md:gap-3">
        {projectsData.map((project, index) => {
          const { title, demo, description, tags, github, imageUrl } = project;
          return (
            <div key={index} className="mb-3 sm:mb-6">
              <section
                className=" bg-gray-100 flex flex-col md:flex-row gap-x-3 max-w-[40rem] Borderblack overflow-hidden hover:bg-gray-200 transition sm:pr-18
                            relative sm:h-[23rem] dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className=" px-5 pt-4 pb-7 sm:pl-5 sm:pr-2 sm:pt-5 sm:max-w-[50%] flex flex-col h-full ">
                  <div className="flex gap-2 items-center">
                    <h3 className="text-2xl text-indigo-700 ">{title}</h3>
                    <div className="flex gap-4">
                      <Link
                        href={demo}
                        target="_blank"
                        className=" underline text-md font-bold hover:text-indigo-500"
                      >
                        demo
                      </Link>
                      <Link
                        href={github}
                        target="_blank"
                        className=" bg-zinc-50 rounded-lg hover:bg-zinc-400 "
                      >
                        <Github className=" bg-zinc-300 dark:text-black  rounded-md hover:bg-zinc-400 dark:hover:bg-zinc-50" />
                      </Link>
                    </div>
                  </div>
                  <p className=" mt-2 leading-relaxed text-gray-700  dark:text-gray-50">
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

                <Image
                  src={imageUrl}
                  alt="project"
                  quality={100}
                  priority
                  className="  
                 object-contain w-full md:w-[20rem]  shadow-2xl "
                />
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Page;
