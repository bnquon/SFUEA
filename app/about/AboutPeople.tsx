import React from "react";
import { Person, people } from "../data/AboutPeople";
import { motion } from "framer-motion";

const cardAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
};

export const AboutPeople = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#d3d3d3]">
      <div className="relative box-border grid w-[90vw] grid-flow-row grid-cols-2 gap-[4vw] sm:w-[75vw] sm:grid-cols-3 lg:grid-cols-4">
        {people.map((person: Person, index) => (
          <motion.div
            variants={cardAnimation}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            className="relative box-border flex h-[30vh] w-full flex-col items-center gap-5 overflow-hidden rounded-lg bg-white py-2 shadow-md sm:h-[30vh] sm:py-6"
          >
            <div className="absolute left-0 top-0 z-0 h-[30%] w-full bg-black lg:h-1/3"></div>
            <div className="relative flex w-full items-center justify-center">
              <div className="aspect-square w-1/2 rounded-full bg-gray-500 sm:w-2/5 lg:w-1/2"></div>
            </div>
            <div className="flex w-full flex-col items-center justify-center px-1 text-center text-xl sm:px-2">
              <p className="text-xl font-bold text-black sm:text-3xl xl:text-4xl">
                {person.name}
              </p>
              <p className="text-base font-normal leading-5 text-black sm:text-lg sm:leading-6 lg:text-xl xl:text-2xl">
                {person.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
