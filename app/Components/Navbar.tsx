"use client";

import dynamic from "next/dynamic";
import clsx from "clsx"; // Conditional className functionalities
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { games, Game } from "../data/Games";

// Dynamic import for StickyHeadroom with SSR disabled
const StickyHeadroom = dynamic(
  () => import("@integreat-app/react-sticky-headroom"),
  { ssr: false },
);

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
  { name: "Gamers Lounge", href: "/gamingLounge" },
  { name: "Events", href: "/events" },
];

function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);
  const [expandedChar, setExpandedChar] = useState("+");

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("side-nav-open");
    }

    return () => {
      document.documentElement.classList.remove("side-nav-open");
    };
  }, [open]);

  const handleCloseClick = () => {
    setOpen(false);
    setTimeout(() => {
      setTeamsOpen(false);
      setExpandedChar("+");
    }, 500);
  };

  const handleTeamsClick = () => {
    setExpandedChar(expandedChar === "+" ? "-" : "+");
    if (expandedChar === "+") {
      setTeamsOpen(true);
    } else {
      setTeamsOpen(false);
    }
  };

  return (
    <StickyHeadroom scrollHeight={120} pinStart={0}>
      <div className="fixed z-[999999] flex w-screen justify-between bg-black px-[5vw] sm:px-[12.5vw]">
        <div className="flex w-1/4 items-center justify-start py-[1vh] lg:py-[1.5vh]">
          <Link href={"/"}>
            <Image
              src={"/real-logo.webp"}
              alt={"placeholder"}
              width={60}
              height={60}
            ></Image>
          </Link>
        </div>
        <div
          id="pageSwitcher"
          className="relative z-[99999999999999] hidden w-[60vw] items-center justify-center sm:flex"
        >
          {links.map((link) => {
            if (link.name !== "Teams") {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "z-[999999] flex h-full max-w-fit items-center justify-center px-3 text-lg font-bold text-white hover:bg-slate-800 lg:px-6 lg:text-xl xl:text-2xl",
                    {
                      "z-[999999] flex h-full max-w-fit items-center justify-center bg-red-500 px-3 text-lg font-bold text-white hover:bg-slate-200 lg:px-6 lg:text-xl xl:text-2xl":
                        pathname === link.href,
                    },
                  )}
                >
                  {link.name}
                </Link>
              );
            }
            return (
              <div key={link.name} className="group relative z-[999999] h-full">
                <Link
                  href={link.href}
                  className={clsx(
                    "z-[999999] flex h-full max-w-fit items-center justify-center px-3 text-lg font-bold text-white hover:bg-slate-800 lg:px-6 lg:text-xl xl:text-2xl",
                    {
                      "z-[999999] flex h-full max-w-fit items-center justify-center bg-red-500 px-3 text-lg font-bold text-white hover:bg-slate-200 lg:px-6 lg:text-xl xl:text-2xl":
                        pathname === link.href,
                    },
                  )}
                >
                  <span>
                    {link.name}&nbsp;{" "}
                    <FontAwesomeIcon
                      className="z-[999999] text-base lg:text-xl"
                      icon={faCaretDown}
                    />
                  </span>
                </Link>
                <div className="absolute bottom-0 left-0 z-[999999] hidden w-[30vw] translate-y-[100%] group-hover:block">
                  <div className="relative grid grid-cols-2 grid-rows-6 bg-black text-lg text-white lg:text-xl xl:text-2xl">
                    {games.map((game: Game, index) => (
                      <Link href={`${link.href}#${game.title}`} key={index}>
                        <div className="flex h-full w-full items-center justify-start px-3 py-2 font-bold duration-150 hover:bg-slate-800 lg:px-6 lg:py-6">
                          {game.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          id="mobile-nav"
          className="relative z-[999999] flex items-center sm:hidden"
        >
          <FontAwesomeIcon
            onClick={() => setOpen(!open)}
            className="text-4xl text-white"
            icon={faBars}
          />

          <div
            className={`fixed right-0 top-0 flex h-[100dvh] w-[100vw] transform transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            <div
              onClick={() => handleCloseClick()}
              className={`h-full flex-grow bg-black/30`}
            ></div>
            <div className="flex h-full w-[250px] flex-col overflow-y-auto bg-black px-8">
              <div className="box-border flex h-[8vh] w-full flex-shrink-0 items-center">
                <FontAwesomeIcon
                  onClick={() => handleCloseClick()}
                  className="text-xl text-red-500"
                  icon={faXmark}
                />
              </div>

              {links.map((link) => {
                if (link.name !== "Teams") {
                  return (
                    <div
                      key={link.name}
                      className="box-border flex h-[8vh] w-full flex-shrink-0 items-center justify-between border-b-2 border-gray-800 bg-black text-lg font-bold"
                    >
                      <Link
                        onClick={() => handleCloseClick()}
                        className="text-red-500"
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </div>
                  );
                }
                return (
                  <div
                    key={link.name}
                    className="box-border flex w-full flex-col items-center text-lg font-bold"
                  >
                    <div className="flex h-[8vh] w-full flex-shrink-0 items-center justify-between border-b-2 border-gray-800">
                      <Link
                        onClick={() => handleCloseClick()}
                        className="text-red-500"
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                      <div
                        onClick={() => handleTeamsClick()}
                        className="text-2xl text-red-500"
                      >
                        {expandedChar}
                      </div>
                    </div>

                    <div
                      className="flex w-full flex-col"
                      style={{ display: teamsOpen ? "block" : "none" }}
                    >
                      {games.map((game: Game, index) => (
                        <Link
                          onClick={() => handleCloseClick()}
                          href={`${link.href}#${game.title}`}
                          key={index}
                        >
                          <div
                            key={index}
                            className="flex h-[8vh] w-full items-center justify-between border-b-2 border-gray-800 text-white"
                          >
                            {game.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="z-[999999] hidden w-1/4 items-center justify-end sm:flex">
          <a
            href="https://discord.gg/sfuesports"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="max-w-fit rounded-xl bg-red-500 px-2 py-3 text-base font-bold text-white lg:px-6 lg:py-3 lg:text-xl xl:text-2xl"
            >
              JOIN NOW
            </motion.button>
          </a>
        </div>
      </div>
    </StickyHeadroom>
  );
}

export default Navbar;
