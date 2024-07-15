import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface RecentEventCardProps {
  description: string;
  image: string;
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

export const RecentEventCard: React.FC<RecentEventCardProps> = ({
  description,
  image,
  delay,
}) => {
  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      custom={delay}
      viewport={{ once: true }}
      id="event-card"
      className="relative h-full w-full overflow-hidden rounded-md shadow-lg lg:w-1/3"
    >
      <Image
        className="h-full w-full object-cover"
        src={image}
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <p
        id="event-info"
        className="absolute bottom-0 w-full translate-y-[100%] p-2 text-base font-medium text-white duration-200 sm:text-xl xl:text-2xl"
      >
        {description}
      </p>
    </motion.div>
  );
};
