import sarrmal from "@/public/sarrmal.png";
import breadit from "@/public/breadid.png";
import shortvideo from "@/public/tiktok.png";
import social from "@/public/social.png";
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
  {
    title: "Social-Platform",
    description:
      "A SocialMedia Platform, can create post, like and follow function. Light & Dark mods are include as LightTheme.",
    tags: [
      "React",
      "Redux-Toolkit",
      "Material-UI",
      "express",
      "mongoose",
      "MongoDB",
    ],
    imageUrl: social,
    link: "https://socialplatform.vercel.app/",
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
