"use client";

import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "@/styles";
import { experiences } from "@/constants";
import { textVariant } from "@/utils/motion";

import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => {
  return (
    <>
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
        style={{ marginTop: "100px" }}
      >
        <motion.div variants={textVariant(0.5)}>
          <p className={styles.sectionSubText}>What I have done so far.</p>
          <h2 className={styles.sectionHeadText}>Work Experience</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
            <VerticalTimeline>
                {experiences.map((experience , idx) => (
                    <ExperienceCard experience={experience} idx={idx} />
                ))}
            </VerticalTimeline>
        </div>

      </div>
    </>
  );
};

export default Experience;
