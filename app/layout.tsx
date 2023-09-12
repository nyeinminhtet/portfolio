import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import ThemeSwitch from "@/components/themeSwitch";
import Providers from "@/components/providers";

const popin = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: " Personal Portfolio",
  description: "full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" !scroll-smooth">
      <body
        className={`${popin.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className=" bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div
          className=" bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
         lg:left-[-28rem] xl:left[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        ></div>

        <Providers>{children}</Providers>

        <ThemeSwitch />
      </body>
    </html>
  );
}
