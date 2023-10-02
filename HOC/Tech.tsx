import { technologies } from "@/constants";
import BallCanvas from "@/components/BallCanvas";

const Tech = () => {
  return (
    <div
      className="flex flex-row flex-wrap gap-10 justify-center max-w-7xl mx-auto"
      style={{ marginTop: "100px" }}
    >
      {technologies.map((technology, idx) => (
        <div className="w-28 h-28" key={idx}>
          <BallCanvas icon={technology.icon} /> 
        </div>
      ))}
    </div>
  );
};

export default Tech;
