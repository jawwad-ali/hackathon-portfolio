import { styles } from "@/styles";
import { services } from "@/constants";

import ServiceCard from "@/components/ServiceCard";
import Introduction from "@/components/Introduction";

const About = () => {
  return (
    <>
      <div id='about' className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 `}>
        <Introduction />

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