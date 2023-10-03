"use client";
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";

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
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">&quot;</p>

      <div className="mt-1 flex flex-col justify-around h-full">
        <p className="text-white tracking-wider text-[18px]">{review}</p>

        <div className="mt-7 h-full flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-base">
              <span className="blue-text-gradient">@</span> {client_name}
            </p>
          </div>

          <div>
            <Image
              src={image}
              alt={`review by ${client_name}`}
              className="h-10 w-10 object-cover rounded-full"
              width={50}
              height={50}
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
// 2.13.16