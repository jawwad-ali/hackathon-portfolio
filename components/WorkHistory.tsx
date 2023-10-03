'use client'
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/constants";

import ExperienceCard from "@/components/ExperienceCard";

const WorkHistory = () => {
  return (
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, idx) => (
          <ExperienceCard experience={experience} idx={idx} key={idx} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkHistory;