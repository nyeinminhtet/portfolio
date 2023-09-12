"use client";

import ActiveSectionContextProvider from "@/context/activeSectionContext";
import React, { ReactNode } from "react";
import Header from "./header";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAllProjects = pathname.includes("/projects");
  return (
    <ActiveSectionContextProvider>
      {!isAllProjects && <Header />}
      {children}
      <Toaster position="top-right" />
    </ActiveSectionContextProvider>
  );
};

export default Providers;
