"use client";

import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

import Heads from "./Heads";

const Introduction = () => {
  return (
    <> 
      <motion.div variants={textVariant(0.5)}>
        <Heads subText="Introduction" heading="Overview." />
      </motion.div>
 
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Over the past 4 years, I am constantly learning new technologies and
        building logical problem-solving projects. From development,
        optimization, security, and maintenance, I am providing all the possible
        solutions. I had worked on stacks like React Stack and on Jamstack. I
        had great hands-on the most popular languages including Javascript and
        Typescript. Most probably, I used to follow the most popular stack of
        Jamstack (Next.js / Gatsby.js / Sanity.io / Contentful, etc) to build
        fast-blazing modern serverless websites.
      </motion.p>
    </>
  );
};

export default Introduction;