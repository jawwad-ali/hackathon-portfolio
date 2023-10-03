import { styles } from "@/styles";

import Heads from "@/components/Heads";
import WorkHistory from "@/components/WorkHistory";

const Experience = () => {
  return (
    <>
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
        style={{ marginTop: "100px" }} 
      > 
        {/* Heading and SubHeading */}
        <Heads subText="What I have done so far." heading="Work Experience" />

        {/* Component that shows where I've worked */}
        <WorkHistory />
      </div>
    </>
  );
};

export default Experience;
