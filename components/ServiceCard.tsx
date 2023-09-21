import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        >
          <div
            // @ts-ignore
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 
            min-h-[280px] flex flex-col items-center justify-evenly"
          >
            <Image
              src={icon}
              alt="Icon"
              width={50}
              height={56}
              //   className="w-6 h-6 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>{" "}
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

export default ServiceCard;
// 1.16.24
