import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sarrmal from "@/public/sarrmal.png";
import breadit from "@/public/breadid.png";
import shortvideo from "@/public/tiktok.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "SarrMal",
    description:
      "Customers no need to wait for orders, they can do it by scaning qr-code that provided restaurants. SarrMal(POS) provied for restaurants that include manage menus, qr-code for order, customers side and restaurant side for Manager. ",
    tags: [
      "React",
      "Next.js",
      "NextAuth",
      "Redux Toolkit",
      "Typescript",
      "Material-UI",
      "Prisma",
      "PostgreSQL",
    ],
    imageUrl: sarrmal,
    link: "https://www.nyeinminhtet.com/",
  },
  {
    title: "Breadit",
    description:
      "Create communite and then  creat a post for vote and comment to know who liked your thought.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "NextAuth",
      "Tailwind",
      "Prisma",
      "MySQL",
    ],
    imageUrl: breadit,
    link: "https://breadid.vercel.app/",
  },
  {
    title: "Short-video-platform",
    description:
      "Short video platform is similar with TikTok because I like watching TikTok so I did it.There you can post a video,like and comment.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Sanity"],
    imageUrl: shortvideo,
    link: "https://short-video-platform.vercel.app/",
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind",
  "Material-UI",
  "Framer Motion",
  "NextAuth",
  "Node.js",
  "Express",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Git",
] as const;
