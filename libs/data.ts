import sarrmal from "@/public/sarrmal.png";
import breadit from "@/public/breadid.png";
import shortvideo from "@/public/tiktok.png";
import phaykyi from "@/public/phaykyi.png";
import mandalayEvents from "@/public/mandalay_events.png";

import react from "@/assets/react.svg";
import nextjs from "@/assets/nextjs-icon-svgrepo-com.svg";
import typescript from "@/assets/typescript.svg";
import redux from "@/assets/redux.svg";
import tailwind from "@/assets/tailwaind-removebg-preview.png";
import mui from "@/assets/mui-removebg-preview.png";
import nextauth from "@/assets/nextauth.png";
import nodejs from "@/assets/node-js.svg";
import prisma from "@/assets/prisma.png";
import mongodb from "@/assets/mongodb.svg";
import psql from "@/assets/postgresql.svg";
import mysql from "@/assets/mysql.svg";
import git from "@/assets/github.svg";
import express from "@/assets/express-removebg-preview.png";
import framer from "@/assets/framer-removebg-preview.png";

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
    title: "SarrMal(POS)",
    demo: "https://sarrmal.vercel.app/",
    github: "https://github.com/nyeinminhtet/happy-pos-nextjs",
    description:
      "Customers no need to wait for orders, they can do it by scan qr-code that provided restaurants. SarrMal(POS) provide for restaurants that include manage menus, qr-code for order, customers side and restaurant side for Manager. ",
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
  },
  {
    title: "Breadit",
    demo: "https://breadid.vercel.app/",
    github: "https://github.com/nyeinminhtet/reddit-clone",
    description:
      "Create communite and create a post for vote and comment to know who liked your thought.",
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
  },
  {
    title: "Short-Video",
    demo: "https://short-video-platform.vercel.app/",
    github: "https://github.com/nyeinminhtet/short-video-platform",
    description:
      "Short video platform is similar with TikTok because I like watching TikTok so I did it.There you can post a video,like and comment.",
    tags: ["React", "Next.js", "Typescript", "Tailwind", "Sanity"],
    imageUrl: shortvideo,
  },
  {
    title: "Mandalay Events",
    demo: "https://mandalay-events.vercel.app/",
    github: "https://github.com/nyeinminhtet/mandalay-events",
    description:
      "Find out festivals and music shows in Mandalay from one place. You can buy a ticket. The event time and place can be arranged together.",
    tags: [
      "React",
      "NextJs",
      "Tailwind-css",
      "Shadcn-ui",
      "Typescript",
      "Zod",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Clerk",
    ],
    imageUrl: mandalayEvents,
  },

  {
    title: "Phay Kyi",
    demo: "https://phay-kyi.vercel.app/dashboard",
    github: "https://github.com/nyeinminhtet/phay-kyi",
    description:
      "A game that users created what they wanted, and answer the quiz. Then, they can check how many answers they did. They can also choose Hot topic.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind-css",
      "Shadcn/ui",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
    ],
    imageUrl: phaykyi,
  },
] as const;

export const skillsData = [
  react,
  nextjs,
  redux,
  typescript,
  tailwind,
  mui,
  framer,
  nextauth,
  nodejs,
  express,
  prisma,
  mongodb,
  psql,
  mysql,
  git,
] as const;
