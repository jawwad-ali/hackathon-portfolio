"use client";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      variants={staggerContainer("", "")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0`}
    >
      {children}
    </motion.section>
  );
};

export default Wrapper;
