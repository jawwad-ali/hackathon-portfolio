"use client";
import { motion } from "framer-motion";

import { styles } from "@/styles";
import { services } from "@/constants";

import { fadeIn, textVariant } from "@/utils/motion";
import ServiceCard from "@/components/ServiceCard";

const About = () => {
  return (
    <>
      <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 `}>
        <motion.div variants={textVariant(0.5)}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4  text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Over the past 4 years, I am constantly learning new technologies and
          building logical problem-solving projects. From development,
          optimization, security, and maintenance, I am providing all the
          possible solutions. I had worked on stacks like React Stack and on
          Jamstack. I had great hands-on the most popular languages including
          Javascript and Typescript. Most probably, I used to follow the most
          popular stack of Jamstack (Next.js / Gatsby.js / Sanity.io /
          Contentful, etc) to build fast-blazing modern serverless websites.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 w-full">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
