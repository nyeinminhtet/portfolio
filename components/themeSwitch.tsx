"use client";

import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      localTheme === "dark" && document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className=" fixed bottom-5 right-5 dark:bg-white w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 flex items-center justify-center
     shadow-2xl rounded-full hover:scale-110 active:scale-105 bg-gray-900"
      onClick={handleTheme}
    >
      {theme === "light" ? (
        <FaMoon className="text-white h-5 w-5" />
      ) : (
        <BsSun className="h-5 w-5 text-black" />
      )}
    </button>
  );
};

export default ThemeSwitch;
