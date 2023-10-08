"use client";

import { Tilt } from "react-tilt";

import { fadeIn } from "@/utils/motion";

import Image from "next/image";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const ServiceCard = ({ index, title, icon }: any) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 2 } });
    } else {
      controls.start({ opacity: 0, transition: { duration: 2 } });
    }
  }, [inView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Tilt className="xs:w-[250px] w-[350px] flex flex-wrap">
          <motion.div
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          >
            <div
              // @ts-ignore
              className="bg-tertiary rounded-[20px] py-5 px-12 
            min-h-[280px] flex flex-col items-center justify-evenly"
            >
              <Image src={icon} alt="Icon" width={50} height={56} />
              <h3 className="text-white text-[20px] font-bold text-center">
                {title}
              </h3>{" "}
            </div>
          </motion.div>
        </Tilt>
      </motion.div>
    </>
  );
};

export default ServiceCard;
