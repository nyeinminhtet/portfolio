import sarrmal from "@/public/sarrmal.png";
import breadit from "@/public/breadid.png";
import shortvideo from "@/public/tiktok.png";
import social from "@/public/social.png";
import gossipy from "@/public/gossipy.png";
import bookbuddy from "@/public/bookbuddy.png";
import phaykyi from "@/public/phaykyi.png";
import summarizer from "@/public/summarizer.png";
import carhub from "@/public/carhub.png";
import spacePortfolio from "@/public/spacePortfolio.png";
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
    title: "Space Portfolio",
    demo: "https://spaceportfolio-eight.vercel.app/",
    github: "https://github.com/nyeinminhtet/spaceportfolio",
    description:
      "A portfolio with animation design with Framer Motion  and NextJs 14.",
    tags: ["React", "NextJs", "Framer Motion"],
    imageUrl: spacePortfolio,
  },
  {
    title: "SocialMedia",
    demo: "https://socialplatform.vercel.app/",
    github: "https://github.com/nyeinminhtet/Mern-social",
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
  {
    title: "Gossipy",
    demo: "https://gossipy-talk.vercel.app/",
    github: "https://github.com/nyeinminhtet/gossipy",
    description:
      "A realtime chat message, user can add friend, accept and send message.",
    tags: [
      "React",
      "Next.js",
      "Tailwind-css",
      "Shadcn/ui",
      "Typescript",
      "NextAuth",
      "Redis",
    ],
    imageUrl: gossipy,
  },
  {
    title: "CarHub",
    demo: "https://carhub-pink.vercel.app",
    github: "https://github.com/nyeinminhtet/carhub",
    description:
      "A car showroom that user can check the car and choose what he want. Free feel to visit and can check all types of cars.",
    tags: ["React", "Next.js", "Typescript", "RapidAPI"],
    imageUrl: carhub,
  },
  {
    title: "BookBuddy",
    demo: "https://bookbuddy-seven.vercel.app/",
    github: "https://github.com/nyeinminhtet/bookbuddy",
    description:
      "AI support chat box, can ask for book what you want. But only can ask for book. It's the best for testing OpenAI.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind-css",
      "Shadcd/ui",
      "Redis",
    ],
    imageUrl: bookbuddy,
  },
  {
    title: "Summarizer",
    demo: "https://summarizer-article.vercel.app/",
    github: "https://github.com/nyeinminhtet/summarizer",
    description:
      "For articles to summarize with OpenAI. For only, to  summarize article link. Summarized by OpenAI.",
    tags: ["React", "Redux-Toolkit", "Tailwind-css", "RapidApi"],
    imageUrl: summarizer,
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
