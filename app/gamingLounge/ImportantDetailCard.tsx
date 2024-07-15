import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faCircleArrowUp,
  faFileLines,
  faComments,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface ImportantDetailCardProps {
  description: string;
  image: string;
  icon: IconDefinition;
  buttonText: string | null;
  delay: number;
}

const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
    },
  }),
};

export const ImportantDetailCard: React.FC<ImportantDetailCardProps> = ({
  description,
  image,
  icon,
  buttonText,
  delay,
}) => {
  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      custom={delay}
      whileInView={"animate"}
      viewport={{ once: true }}
      className="relative flex w-full flex-col-reverse sm:flex-row lg:w-1/3 lg:flex-col-reverse lg:items-start lg:justify-end"
    >
      <div className="w-full py-4 pr-5 sm:w-1/2 sm:py-0 lg:w-full lg:py-4 lg:pl-0">
        <FontAwesomeIcon
          icon={icon}
          className="mb-2 text-3xl xl:text-4xl"
        ></FontAwesomeIcon>
        <h3 className="mb-4 text-xl text-black xl:text-2xl">{description}</h3>
        {buttonText && (
          <span className="flex w-fit items-center justify-between rounded-xl bg-black p-2 text-base text-white sm:text-xl xl:text-2xl">
            {buttonText} &nbsp;
            <FontAwesomeIcon
              className="rotate-45 text-2xl"
              icon={faCircleArrowUp}
            />
          </span>
        )}
      </div>

      <div className="relative h-[30vh] w-full sm:w-1/2 lg:w-full">
        <Image
          src={image}
          className="rounded-xl"
          alt="ex1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></Image>
      </div>
    </motion.div>
  );
};
