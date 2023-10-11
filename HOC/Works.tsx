"use client";
import { motion } from "framer-motion";

import { styles } from "@/styles";
import { projects } from "@/constants";

import ProjectCard from "@/components/ProjectCard";
import Heads from "@/components/Heads";

const Works = () => {
  return (
    <motion.div
    id='work'
      className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
      style={{ marginTop: "100px" }}
    >
      <motion.div>
        <Heads subText="My Work" heading="Projects." />
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Projects Card */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={`${index}`} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Works;
