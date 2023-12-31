"use client";
import { useState } from "react";
import Link from "next/link";

import { styles } from "../styles";
import { navLinks } from "../constants";

import { menu, close } from "../public/assets";

import Download from "../public/download.png";

import Image from "next/image";

import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className={`${styles.paddingX} bg-primary w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 w-full">
          <Link href="/" className="flex items-center justify-center">
            {/* Nav logo and title */}
            <Image
              src={Download}
              alt="Logo"
              className="w-28 h-10 object-contain"
            />

            <p className="text-white text-[18px] font-bold cursor-pointer hidden md:flex -ml-5">
              Ali Jawwad
            </p>
          </Link>
        </div>

        {/* nav links */}
        <div>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={`${link.id.toLowerCase()}`}
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer transition-all"
              >
                <Link href={`#${link.title.toLowerCase()}`}>{link.title}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile nav */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image
              src={toggle ? close : menu}
              alt="Humburger menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 
              min-w-[140px] z-10 rounded-xl
            `}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4 ">
                {navLinks.map((link) => (
                  <li
                    key={`${link.id}`}
                    className="text-secondary hover:text-white font-poppins text-[16px] font-medium cursor-pointer transition-all"
                  >
                    <Link
                      href={`#${link.id}`}
                      onClick={() => setToggle(!toggle)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
