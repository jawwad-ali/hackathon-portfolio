"use client";

import { styles } from "@/styles";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

interface HeadsProps {
  subText: string;
  heading: string;
}

const Heads = ({ subText, heading }: HeadsProps) => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>{subText}</p>
        <h2 className={styles.sectionHeadText}>{heading}</h2>
      </motion.div>
    </>
  );
};

export default Heads;
