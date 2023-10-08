"use client";
import Image, { StaticImageData } from "next/image";

// import { fadeIn } from "@/utils/motion";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

interface TestimonialsProps {
  review: string;
  client_name: string;
  image: string | StaticImageData;
  index: number;
}
[];

const FeedbackCard = ({
  review,
  index,
  client_name,
  image,
}: TestimonialsProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 1,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      });
    } else {
      controls.start({ y: -100, transition: { duration: 1 } });
    }
  }, [inView,controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ y: -100 }}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">&quot;</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{review}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-base">
              <span className="blue-text-gradient">@</span> {client_name}
            </p>
          </div>

          <Image
            src={image}
            alt={`review by ${client_name}`}
            className="h-10 w-10 object-cover rounded-full"
            width={50}
            height={50}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
