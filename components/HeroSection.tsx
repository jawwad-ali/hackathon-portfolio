"use client";
import { styles } from "@/styles";

import { motion } from "framer-motion";

import Image from "next/image";

import { connectWithMe } from "@/constants";

import Link from "next/link";

const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const HeroSection = () => {
  return (
    <motion.section
      initial={fadeInAnimation.initial}
      animate={fadeInAnimation.animate}
      transition={{ duration: 1 }}
      className={`relative w-full h-screen mx-auto`}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-5`}
      >
        {/* Left Side */}
        <div className="flex lg:w-1/2 w-full">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="ml-2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi I am <span className="text-[#915eff]">Ali</span>
            </h1>
            <p className={`${styles.heroSubText}`}>
              I develop 3D user visuals , user{" "}
              <br className="sm:block hidden" />
              interfaces and Web{" "}
              <span className="lg:block inline-block"> Application</span>
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full lg:rotate-0 rotate-90 flex lg:justify-end">
          <div className="bg-[rgb(10,21,84)] rounded-full h-[400px] lg:w-16 p-2 flex flex-col items-center justify-evenly">
            {connectWithMe.map((platform, idx) => (
              <Link
                href={`${platform.platform_link}`}
                key={idx}
                target="_blank"
              >
                <Image
                  src={platform.platform_img}
                  alt={platform.platform_name}
                  className="rounded-full w-12 lg:rotate-0 -rotate-90"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
