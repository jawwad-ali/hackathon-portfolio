"use client";

import { styles } from "@/styles";

import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

interface HeadsProps {
  subText: string;
  heading: string;
}

const variants1 = {
  hidden: { x: 10 },
  visible: { x: -10 },
};

const Heads = ({ subText, heading }: HeadsProps) => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setIndex((prevIndex) => prevIndex + 1);
          }, 100);
          return () => clearInterval(interval);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className={styles.sectionSubText}>{subText}</p>
        <motion.h2 className={styles.sectionHeadText}>
          {heading.substring(0, index)}
        </motion.h2>
      </motion.div>
    </>
  );
};

export default Heads;
