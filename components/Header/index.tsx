"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
  className={`fixed left-0 top-0 z-99999 w-full py-7 ${
    stickyMenu ? "bg-white !py-4 shadow transition duration-100 dark:bg-black" : ""
  }`}
>
  <div className="relative mx-auto max-w-c-1390 flex justify-between items-center px-4 md:px-12 xl:px-">
    <div className="flex items-center">
      <a href="/">
        <Image
          src="/images/logo/logo-dark.png"
          alt="logo"
          width={150}
          height={60}
          className="hidden w-full dark:block"
        />
        <Image
          src="/images/logo/logo-light.png"
          alt="logo"
          width={150}
          height={60}
          className="w-full dark:hidden"
        />
      </a>
    </div>
    <div className="flex items-center gap-6">
      <ThemeToggler />
    </div>
  </div>
</header>
  );
};

// w-full delay-300

export default Header;
