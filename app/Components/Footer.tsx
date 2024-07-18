import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faFacebookF,
  faXTwitter,
  faTwitch,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
  { name: "Gamers Lounge", href: "/gamingLounge" },
  { name: "Events", href: "/events" },
];

const socialsIcons = [
  { website: "https://discord.gg/sfuesports", icon: faDiscord },
  { website: "https://www.instagram.com/official_sfuesports/", icon: faInstagram },
  { website: "https://www.facebook.com/sfuesports/", icon: faFacebookF },
  { website: "https://x.com/sfuesports?lang=en", icon: faXTwitter },
  { website: "https://www.twitch.tv/sfuea", icon: faTwitch },
  { website: "https://www.tiktok.com/@sfuesports", icon: faTiktok },
]

export const Footer = () => {
  return (
    <div className="relative bg-[#d3d3d3] pt-[20vh]">
      <div className="relative w-full bg-black pl-[5vw] sm:pl-[12.5vw] lg:h-[50vh]">
        <div className="relative box-border flex w-[90vw] -translate-y-1/3 flex-col justify-between rounded-3xl bg-red-500 px-3 py-6 text-white sm:w-[75vw] sm:p-10 lg:w-[37.5vw]">
          <div>
            <p className="text-3xl font-bold sm:text-5xl">JOIN THE CLUB.</p>{" "}
            <br />
            <p className="mb-4 text-xl sm:text-2xl xl:mb-8 xl:text-3xl">
              We want to see you in the Gamers&apos; Lounge or the next
              in-house!
            </p>
          </div>
          <a
            href="http://discord.gg/sfuesports"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              id="footer-btn"
              className="w-fit rounded-full bg-black px-6 py-3 text-lg duration-200 hover:bg-white hover:text-black sm:px-10 sm:py-5 sm:text-2xl"
            >
              Get Started
            </button>
          </a>
        </div>

        <div className="relative mt-[-20px] flex w-[90vw] flex-col items-center justify-center text-white sm:w-[75vw] lg:items-start lg:justify-start">
          <h1 className="mb-8 text-2xl font-bold xl:text-4xl">
            SFU Gaming and Esports Club
          </h1>

          <ul className="mb-10 flex gap-8 text-xl xl:text-2xl">
            {footerLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <li className="text-white duration-150 hover:text-red-500">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>

          <div className="relative flex h-[8vh] gap-4 lg:w-fit">

            {socialsIcons.map((social) => (
              <a
                href={social.website}
                target="_blank"
                rel="noopener noreferrer"
                key={social.website}
                className="group box-border flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white p-2 hover:bg-red-500 xl:h-[50px] xl:w-[50px] duration-150 cursor-pointer"
              >
                <FontAwesomeIcon
                  className="text-2xl text-black group-hover:text-white xl:text-3xl duration-150"
                  icon={social.icon}
                ></FontAwesomeIcon>
              </a>
            ))}

          </div>

          <div className="h-[4vh] w-fit text-lg text-white">
            <span>
              Created by:{" "}
              <a
                className="underline"
                href="https://www.linkedin.com/in/brandon-quon/"
                target="_blank"
              >
                Brandon Quon
              </a>
            </span>
          </div>

          <div className="right-0 top-0 mt-4 flex flex-col items-center justify-center gap-10 sm:mt-4 lg:absolute lg:mb-5 lg:flex lg:translate-y-[-75%] lg:flex-col lg:items-center lg:justify-center lg:gap-4 xl:translate-y-[-50%] xl:gap-14">
            <Image
              src="/real-logo.webp"
              width={250}
              height={250}
              alt="logo"
            ></Image>
            <p className="text-center text-xl text-white xl:text-2xl">
              Contact us: EMAIL@EMAIL.COM
            </p>
          </div>

          <div className="flex flex-col items-center justify-center sm:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-[calc(50%+20px)]">
            <Image src="/racc.webp" width={175} height={175} alt="logo"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
