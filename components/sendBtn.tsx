import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SendBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className=" group h-[3rem] w-[7rem] gap-2 bg-gray-900 text-white rounded-full outline-none flex justify-center items-center transition-all
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-60
          dark:bg-white dark:bg-opacity-60 dark:text-black"
      disabled={pending}
    >
      {pending ? (
        <div className=" h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send
          <FaPaperPlane className=" text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
};

export default SendBtn;
