import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faLocationDot,
  faCircleExclamation,
  faCircleArrowUp,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";

const cardAnimation = {
  initial: { opacity: 0, x: 100 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
    },
  }),
};

const pictureAnimation = {
  initial: { opacity: 0, x: -100 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
    },
  }),
};

export const Lounge = () => {
  return (

      <div className="relative box-border flex w-[90vw] flex-col gap-4 sm:w-[75vw] lg:flex-row">
        <motion.div
          variants={pictureAnimation}
          initial="initial"
          whileInView="animate"
          custom={1}
          viewport={{ once: true }}
          className="relative h-[40vh] w-full overflow-hidden rounded-md shadow-lg lg:h-[70vh] lg:w-[50%] xl:w-[60%]"
        >
          <Image
            src={"/gamerslounge3.webp"}
            className="rounded-xl"
            alt="ex1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></Image>
        </motion.div>

        <div className="relative box-border flex w-full lg:h-[70vh] lg:w-[50%] xl:w-[40%]">
          <motion.div
            variants={cardAnimation}
            initial="initial"
            whileInView="animate"
            custom={1}
            viewport={{ once: true }}
            className="flex h-full w-full flex-col gap-4"
          >
            <div className="flex h-1/2 w-full flex-col gap-4 sm:flex-row">
              <div className="flex h-full w-full flex-col justify-between gap-2 rounded-md bg-white p-4 text-black shadow-md sm:w-1/2 sm:gap-4 lg:gap-0 xl:p-6">
                <span className="flex items-center text-xl sm:text-2xl xl:text-4xl">
                  <FontAwesomeIcon className="" icon={faComputer} />
                  <p className="font-semibold">&nbsp;DEVICES</p>
                </span>
                <p className="text-sm sm:text-base xl:text-xl xl:font-semibold font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <Link href="/gamingLounge#specs">
                  <span className="text-md mt-2 flex w-fit cursor-pointer items-center justify-between rounded-xl border-2 border-black px-2 py-1 text-black duration-200 hover:bg-black hover:text-white sm:text-lg xl:px-4 xl:py-2 xl:text-xl">
                    Full Specs &nbsp;
                    <FontAwesomeIcon
                      className="rotate-45 text-2xl"
                      icon={faCircleArrowUp}
                    />
                  </span>
                </Link>
              </div>

              <div className="hidden h-full w-full flex-col justify-between gap-2 rounded-md bg-white p-4 text-black shadow-md sm:flex sm:w-1/2 sm:gap-4 lg:gap-0 xl:p-6">
                <span className="flex items-center text-xl sm:text-2xl xl:text-4xl">
                  <FontAwesomeIcon className="" icon={faLocationDot} />
                  <p className="font-semibold">&nbsp;LOCATION</p>
                </span>
                <p className="text-sm sm:text-base xl:text-xl xl:font-semibold font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <Link href="/gamingLounge#location">
                  <span className="text-md mt-2 flex w-fit cursor-pointer items-center justify-between rounded-xl border-2 border-black px-2 py-1 text-black duration-200 hover:bg-black hover:text-white sm:text-lg xl:px-4 xl:py-2 xl:text-xl">
                    Video Guide &nbsp;
                    <FontAwesomeIcon
                      className="rotate-45 text-2xl"
                      icon={faCircleArrowUp}
                    />
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex h-1/2 w-full flex-col gap-4 sm:flex-row">
              <div className="hidden h-full w-full flex-col justify-between gap-2 rounded-md bg-white p-4 text-black shadow-md sm:flex sm:w-1/2 sm:gap-4 lg:gap-0 xl:p-6">
                <span className="flex items-center text-xl sm:text-2xl xl:text-4xl">
                  <FontAwesomeIcon className="" icon={faCalendarDays} />
                  <p className="font-semibold">&nbsp;SCHEDULE</p>
                </span>
                <p className="text-sm sm:text-base xl:text-xl xl:font-semibold font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <Link href="/gamingLounge#schedule">
                  <span className="text-md mt-2 flex w-fit cursor-pointer items-center justify-between rounded-xl border-2 border-black px-2 py-1 text-black duration-200 hover:bg-black hover:text-white sm:text-lg xl:px-4 xl:py-2 xl:text-xl">
                    Full Schedule &nbsp;
                    <FontAwesomeIcon
                      className="rotate-45 text-2xl"
                      icon={faCircleArrowUp}
                    />
                  </span>
                </Link>
              </div>

              <div className="flex h-full w-full flex-col justify-between gap-2 rounded-md bg-white p-4 text-black shadow-md sm:w-1/2 sm:gap-4 lg:gap-0 xl:p-6">
                <span className="flex items-center text-xl sm:text-2xl xl:text-4xl">
                  <FontAwesomeIcon className="" icon={faCircleExclamation} />
                  <p className="font-semibold">&nbsp;NOTES</p>
                </span>
                <p className="text-sm sm:text-base xl:text-xl xl:font-semibold font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <Link href="/gamingLounge#important">
                  <span className="text-md mt-2 flex w-fit cursor-pointer items-center justify-between rounded-xl border-2 border-black px-2 py-1 text-black duration-200 hover:bg-black hover:text-white sm:text-lg xl:px-4 xl:py-2 xl:text-xl">
                    Read More &nbsp;
                    <FontAwesomeIcon
                      className="rotate-45 text-2xl"
                      icon={faCircleArrowUp}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

  );
};
