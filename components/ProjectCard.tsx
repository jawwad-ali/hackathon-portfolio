import Image, { StaticImageData } from "next/image";

import { Tilt } from "react-tilt";

import { github, arrow } from "@/public/assets";

import Link from "next/link";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string | StaticImageData;
  source_code_link: string;
  index: number;
  key: string | number;
  hosted_link?: string;
}

const ProjectCard = ({
  key,
  hosted_link,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 2 } });
    } else {
      controls.start({ opacity: 0, transition: { duration: 2 } });
    }
  }, [inView,controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <Link href={`${source_code_link}`}>
            <Image
              src={github}
              alt="Github"
              className="h-10 w-10 absolute top-2 right-2 bg-black rounded-full cursor-pointer"
            />
          </Link>
          <Link href={`${hosted_link}`}>
            <Image
              src={arrow}
              alt="Go to host link"
              className="h-10 w-10 absolute top-2 left-2 bg-secondary opacity-80 -rotate-45 rounded-full text-white cursor-pointer"
            />
          </Link>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag, index) => (
            <p key={index} className={`${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
