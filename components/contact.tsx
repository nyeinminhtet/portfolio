"use client";

import React from "react";
import SectionHeader from "./sectionHeader";
import { useSectionView } from "@/libs/hook";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SendBtn from "./sendBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className=" scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
    >
      <SectionHeader>Contact me</SectionHeader>
      <p className=" text-gray-700 -mt-3 dark:text-gray-300">
        Please contact me directly from{" "}
        <a
          href="mailto:nyeinminhtet.dev@gmail.com"
          className="underline font-bold"
        >
          {" "}
          Email
        </a>{" "}
        or through this form.
      </p>

      <form
        className=" mt-10 flex flex-col "
        action={async (formdata) => {
          const { data, error } = await sendEmail(formdata);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email send successfully");
        }}
      >
        <input
          className=" h-14 rounded-lg Borderblack px-5 dark:bg-white/10 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          type="email"
          placeholder="Your email..."
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className=" h-52 my-3 rounded-lg Borderblack p-5  dark:bg-white/10 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="What do you want to tell me?"
          required
          name="message"
          maxLength={5000}
        />
        <SendBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
