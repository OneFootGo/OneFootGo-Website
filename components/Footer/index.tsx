"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-blacksection border-t border-stroke dark:border-strokedark">
      <div className="flex justify-center items-center py-7 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <p>&copy; {new Date().getFullYear()} OneFootGo. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer;
