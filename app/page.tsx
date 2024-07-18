"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faHeadset,
  faUsers,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";
import { HomeHeader } from "./Components/HomeHeader";
import { BasicCalendar } from "./Components/Calendar";
import { Footer } from "./Components/Footer";
import { Lounge } from "./Components/Lounge";
import { FAQ } from "./Components/FAQ";
import { GameCarousel } from "./homePage/GameCarousel";
import "@fortawesome/fontawesome-svg-core/styles.css";

import SEO from "./Components/seo";

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

const iconAnimation = {
  initial: { opacity: 0, x: -100 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
    },
  }),
};

const pictureAnimation = {
  initial: { scale: 0.2, opacity: 0 },
  animate: (index: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};

export default function Home() {
  return (
    <>
      <main id="mainPage" className="relative">
        <SEO></SEO>

        {/* HOME PAGE */}

        <div
          id="container"
          className="relative box-border flex h-screen w-screen flex-col items-center gap-[4vh] bg-[#d3d3d3] pt-[16vh] text-white sm:gap-[8vh] sm:pt-[18vh] lg:pt-[18vh] xl:pt-[15vh]"
        >
          <div className="relative box-border flex w-[90vw] flex-col gap-10 sm:w-[75vw] lg:h-[75%] lg:flex-row lg:gap-0">
            <div className="relative flex w-[100%] flex-col justify-center text-center lg:w-[45%] lg:pr-6 lg:text-left">
              <p className="mb-2 w-full bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:mb-8 sm:px-8 sm:text-6xl lg:w-full lg:px-0 xl:text-[80px]">
                SFU GAMING AND ESPORTS CLUB
              </p>
              <p className="mb-2 w-full text-base font-medium text-black sm:mb-8 sm:text-xl lg:w-full xl:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>

              <div className="box-border flex items-center justify-evenly sm:gap-4 lg:justify-start">
                <div className="flex justify-center sm:mr-6 sm:w-[50%] sm:justify-end lg:mr-6 lg:w-fit lg:justify-start xl:mr-12">
                  <a
                    href="http://discord.gg/sfuesports"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                      id="btn-grad"
                      className="w-fit px-4 py-3 text-lg font-bold italic sm:text-2xl lg:px-6 lg:py-4 xl:text-4xl"
                    >
                      <span>GAME WITH US &nbsp;</span>
                    </motion.button>
                  </a>
                </div>
                <div className="flex flex-col items-center text-black sm:ml-6 sm:w-[50%] sm:items-start lg:w-fit">
                  <p className="text-2xl font-bold sm:text-3xl xl:text-4xl">
                    3800+
                  </p>
                  <p className="text-lg font-normal sm:text-xl">Members</p>
                </div>
              </div>
            </div>

            <div className="relative box-border flex w-full justify-center gap-4 sm:w-full lg:w-[55%]">
              {/* Right Column */}

              <div className="relative flex h-full w-full flex-col sm:w-[50%] lg:w-[60%]">
                <div className="relative box-border flex h-full w-full flex-col gap-4">
                  <motion.div
                    variants={pictureAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={1}
                    viewport={{ once: true }}
                    className="h-1/2 overflow-hidden rounded-xl bg-black shadow-lg"
                  >
                    <Image
                      src={"/Home1x1.webp"}
                      priority={true}
                      className="rounded-xl"
                      alt="ex1"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    ></Image>
                  </motion.div>
                  <motion.div
                    variants={pictureAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={3}
                    viewport={{ once: true }}
                    className="h-1/2 overflow-hidden rounded-xl bg-black shadow-lg"
                  >
                    <Image
                      src={"/Home2x1.webp"}
                      priority={true}
                      className="rounded-xl"
                      alt="ex1"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    ></Image>
                  </motion.div>
                </div>
              </div>

              {/* Left Column */}

              <div className="relative box-border hidden w-0 flex-col gap-4 sm:flex sm:w-[50%] lg:flex lg:w-[40%]">
                <motion.div
                  variants={pictureAnimation}
                  initial="initial"
                  whileInView="animate"
                  custom={5}
                  viewport={{ once: true }}
                  className="h-[50%] overflow-hidden rounded-xl bg-black shadow-lg"
                >
                  <Image
                    src={"/Home1x2.webp"}
                    priority={true}
                    className="rounded-xl"
                    alt="ex1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></Image>
                </motion.div>
                <motion.div
                  variants={pictureAnimation}
                  initial="initial"
                  whileInView="animate"
                  custom={7}
                  viewport={{ once: true }}
                  className="h-[50%] overflow-hidden rounded-xl bg-black shadow-lg"
                >
                  <Image
                    src={"/Home2x2.webp"}
                    priority={true}
                    className="rounded-xl"
                    alt="ex1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></Image>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex w-[90vw] border-t-2 border-t-black pt-4 sm:h-[15vh] sm:w-[75vw] lg:pt-0">
            <div className="flex w-1/3 items-center justify-center text-base text-black sm:justify-start sm:text-2xl xl:text-4xl">
              <motion.p
                variants={iconAnimation}
                initial="initial"
                whileInView="animate"
                custom={5}
                viewport={{ once: true }}
                className="flex flex-col items-center sm:flex-row"
              >
                <FontAwesomeIcon className="text-black" icon={faTrophy} />{" "}
                &nbsp; Tournaments
              </motion.p>
            </div>
            <div className="flex w-1/3 items-center justify-center text-base text-black sm:text-2xl xl:text-4xl">
              <motion.p
                variants={iconAnimation}
                initial="initial"
                whileInView="animate"
                custom={7}
                viewport={{ once: true }}
                className="flex flex-col items-center sm:flex-row"
              >
                <FontAwesomeIcon className="text-black" icon={faHeadset} />{" "}
                &nbsp; In-Houses
              </motion.p>
            </div>
            <div className="flex w-1/3 items-center justify-center text-base text-black sm:justify-end sm:text-2xl xl:text-4xl">
              <motion.p
                variants={iconAnimation}
                initial="initial"
                whileInView="animate"
                custom={9}
                viewport={{ once: true }}
                className="flex flex-col items-center sm:flex-row"
              >
                <FontAwesomeIcon className="text-black" icon={faUsers} /> &nbsp;
                Events
              </motion.p>
            </div>
          </div>
        </div>

        {/* ABOUT US PAGE */}

        <div className="flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[5vh] pt-[45vh] text-6xl sm:pt-[70vh] lg:pt-[8vh]">
          <HomeHeader
            title="WHO WE ARE"
            description="The SFU Gaming and Esports Club is a student-run nonprofit
                        organization at Simon Fraser University that fosters a vibrant
                        gaming community for both competitive and casual players."
            toPage="about"
          />

          <div className="relative flex w-[90vw] flex-col justify-center gap-6 sm:w-[75vw] sm:flex-row">
            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={1}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[25vh] w-full lg:h-[35vh]">
                  <Image
                    src="/ex1.webp"
                    alt="ex1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></Image>
                </div>

                <div className="flex flex-grow flex-col bg-white p-4 sm:p-6">
                  <h3 className="text-lg text-black sm:text-xl lg:text-2xl">
                    Game in the Gamers&apos; Lounge!
                  </h3>
                  <p className="mt-2 text-sm text-gray-900 sm:text-base lg:text-lg">
                    Drop into the Gamers&apos; Lounge on campus to play on one
                    of our 16 high-performance PCs or enjoy console gaming on a
                    big-screen TV.
                  </p>
                </div>
              </article>
            </motion.div>

            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={3}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[25vh] w-full lg:h-[35vh]">
                  <Image
                    src="/ex2.webp"
                    alt="ex2"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></Image>
                </div>

                <div className="flex flex-grow flex-col bg-white p-4 sm:p-6">
                  <h3 className="text-lg text-black sm:text-xl lg:text-2xl">
                    Connect with Like-Minded Gamers!
                  </h3>
                  <p className="mt-2 text-sm text-gray-900 sm:text-base lg:text-lg">
                    Forge friendships and bond over shared interests at our
                    gatherings. Join us for the chance to meet others who share
                    your passion for gaming.
                  </p>
                </div>
              </article>
            </motion.div>

            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={5}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[25vh] w-full lg:h-[35vh]">
                  <Image
                    src="/ex3.webp"
                    alt="ex3"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></Image>
                </div>

                <div className="flex flex-grow flex-col bg-white p-4 sm:p-6">
                  <h3 className="text-lg text-black sm:text-xl lg:text-2xl">
                    Engage in Diverse Student-Run Events!
                  </h3>
                  <p className="mt-2 text-sm text-gray-900 sm:text-base lg:text-lg">
                    Participate in a variety of student-run events, ranging from
                    competitive tournaments and casual game nights to community
                    meetups.
                  </p>
                </div>
              </article>
            </motion.div>
          </div>
        </div>

        {/* GRID CONTAINER */}

        <div className="flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[5vh] text-6xl sm:pt-[0vh] lg:pt-[8vh]">
          <HomeHeader
            title="OUR TEAMS"
            description="Browse the games we have competitive teams, executives, or
                        directors for! The executives and directors run in-houses and
                        events for their desired game!"
            toPage="teams"
          />

          <GameCarousel />
        </div>

        <Lounge />

        <BasicCalendar />

        <div className="flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[5vh] pt-[7.5vh]">
          <div className="relative box-border flex w-[90vw] flex-col rounded-xl bg-gradient-to-br from-red-500 from-20% via-black to-black px-3 shadow-md sm:h-fit sm:w-[75vw] sm:bg-gradient-to-r sm:pl-6 lg:flex-row lg:items-center xl:pl-12">
            <div className="box-border flex w-full flex-grow flex-col items-start justify-center gap-0 py-4 text-white sm:items-start sm:gap-2 lg:w-[30%] lg:gap-4">
              <p className="text-3xl font-bold xl:text-5xl">BUY A JERSEY!</p>
              <p className="text-xl xl:text-3xl">
                Club staff and competitive players get 10% off!
              </p>
              <motion.a
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                href="https://esportsgear.com/search?q=Simon+Fraser+University&options%5Bprefix%5D=last&type=product"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="xl:p mt-2 flex w-fit items-center rounded-xl bg-black px-2 py-1 text-lg text-white lg:text-xl xl:px-4 xl:py-2 xl:text-2xl">
                  SHOP NOW &nbsp;
                  <FontAwesomeIcon
                    className="-rotate-90 text-2xl"
                    icon={faAnglesDown}
                  />
                </span>
              </motion.a>
            </div>

            <div className="relative box-border h-full w-full lg:w-[70%]">
              <div className="relative box-border flex h-full gap-0">
                <div className="relative flex h-full w-full sm:w-1/3">
                  <Image
                    alt="forced"
                    className="absolute scale-x-125 scale-y-110"
                    src="/blackJerseyBack.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  ></Image>
                  <Image
                    id="front-image"
                    alt="forced"
                    className="scale-x-125 scale-y-110 duration-200 hover:opacity-0"
                    src="/blackJerseyFront.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  ></Image>
                </div>

                <div className="relative hidden h-full w-1/3 sm:flex">
                  <Image
                    alt="forced"
                    className="absolute scale-x-125 scale-y-110"
                    src="/pinkJerseyBack.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  ></Image>
                  <Image
                    id="front-image"
                    alt="forced"
                    className="scale-x-125 scale-y-110 duration-200 hover:opacity-0"
                    src="/pinkJerseyFront.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  ></Image>
                </div>

                <div className="relative hidden h-full w-1/3 sm:flex">
                  <Image
                    alt="forced"
                    className="absolute scale-x-125 scale-y-110"
                    src="/whiteJerseyBack.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  ></Image>
                  <Image
                    id="front-image"
                    alt="forced"
                    className="scale-x-125 scale-y-110 duration-200 hover:opacity-0"
                    src="/whiteJerseyFront.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-screen justify-center bg-[#d3d3d3] pt-[4vh] sm:pt-[5vh]">
          <div className="flex w-[90vw] flex-col sm:w-[75vw] lg:flex-row">
            <div className="box-border flex w-full flex-col pr-5 pt-[14px] lg:w-1/2">
              <p className="text-5xl font-bold text-red-600 xl:text-6xl">FAQ</p>{" "}
              <br />
              <p className="text-xl font-semibold text-black sm:text-2xl xl:text-3xl">
                If you don&apos;t see your question here, reach out in the
                discord or email EMAIL@EMAIL.COM
              </p>
            </div>
            <div className="w-full bg-black lg:w-1/2">
              <FAQ onWhatPage="home" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
