"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  faIdCard,
  faFileLines,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import YoutubeEmbed from "./YoutubeEmbed";
import { Footer } from "@/app/Components/Footer";

import { SubPageBanner } from "../Components/SubPageBanner";
import { SubPageHeader } from "../Components/SubPageHeader";
import { ImportantDetailCard } from "./ImportantDetailCard";
import { FAQ } from "../Components/FAQ";

const WidgetBot = dynamic(() => import("@widgetbot/react-embed"), {
  ssr: false,
});

export default function Home() {

  return (
    <main className="relative">
      <SubPageBanner
        pageTitle="Gaming Lounge"
        pageDescription="SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION."
        blobImage="/blob2.webp"
      />

      <div className="relative box-border flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pt-[5vh]">
        <SubPageHeader title="Our PCs" />

        <div id="specs" className="mb-[10vh] flex w-[90vw] flex-col text-black sm:h-[60vh] sm:w-[75vw] sm:flex-row">
          <div className="box-border flex h-fit w-full flex-col gap-0 sm:h-full sm:w-[30%] sm:gap-4">
            <div className="flex w-full flex-col justify-start pt-4 sm:h-1/2">
              <h2 className="mb-2 text-2xl font-bold xl:text-4xl">
                GPU and CPU
              </h2>
              <p className="text-lg xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
            <div className="flex w-full flex-col justify-start pt-4 sm:h-1/2">
              <h2 className="mb-2 text-2xl font-bold xl:text-4xl">
                Ram and Storage
              </h2>
              <p className="text-lg xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>

          <div className="order-first flex h-full items-center justify-center sm:order-none sm:w-[40%]">
            <Image
              src={"/gamingPC.webp"}
              priority={true}
              className="rounded-xl"
              alt="ex1"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "80%", height: "100%", objectFit: "cover" }}
            ></Image>
          </div>

          <div className="box-border flex h-fit w-full flex-col gap-0 sm:h-full sm:w-[30%] sm:gap-4">
            <div className="flex w-full flex-col justify-start pt-4 sm:h-1/2">
              <h2 className="mb-2 text-2xl font-bold xl:text-4xl">
                Peripherals
              </h2>
              <p className="text-lg xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
            <div className="flex w-full flex-col justify-start pt-4 sm:h-1/2">
              <h2 className="mb-2 text-2xl font-bold xl:text-4xl">
                Game Library
              </h2>
              <p className="text-lg xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="location" className="relative box-border flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[5vh]">
        <SubPageHeader title="Location" />

        <div className="box-border flex w-[90vw] flex-col gap-4 sm:w-[75vw] sm:flex-row">
          <div className="box-border flex w-full flex-col sm:w-1/2 sm:flex-row">
            <div className="flex h-full flex-col justify-start sm:w-1/2 xl:pr-4">
              <p className="text-xl font-normal text-black sm:text-2xl xl:text-4xl">
                We are located in the Student Union Building, level 2 room 2400
              </p>
              <br />
            </div>
            <Image
              src="/sfuSnap.webp"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full sm:w-1/2"
              alt="Map"
            />
          </div>
          <div className="aspect-video sm:w-1/2">
            <YoutubeEmbed embedId="vtgDsTFrCE8" />
          </div>
        </div>
      </div>

      <div id="schedule" className="relative box-border flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pt-[6vh]">
        <SubPageHeader title="Schedule" />

        <div className="relative box-border flex w-[90vw] flex-col gap-5 sm:w-[75vw] lg:h-[50vh] lg:flex-row">
          <div className="mb-[8vh] box-border flex h-full w-full flex-col justify-start gap-10 pr-4 text-black lg:mb-0 lg:w-1/3">
            <p className="text-xl font-normal sm:text-2xl xl:text-4xl">
              A regulated schedule is currently under construction. Please stay
              tuned for announcements in our Discord server.
            </p>
          </div>
          <div className="relative w-full lg:w-2/3">
            <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-[100%] justify-center">
              <img
                src="/raccoon_construction.webp"
                id="constructraccoon"
                className="w-[40%] scale-x-[-1] sm:w-[25%]"
                alt="Map"
              />
            </div>
            <WidgetBot
              className="h-[45vh] w-full lg:h-full"
              server="1251409341676912660"
              channel="1251409341676912663"
            />
          </div>
        </div>
      </div>

      <div id="important" className="relative box-border flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pt-[6vh]">
        <SubPageHeader title="Important Details" />

        <div className="box-border flex w-[90vw] text-black sm:w-[75vw]">
          <div className="box-border flex w-full flex-col gap-4 lg:flex-row">
            <ImportantDetailCard
              description="You must bring and show your student ID to access the lounge"
              image="/ex1.webp"
              icon={faIdCard}
              buttonText={null}
              delay={0}
            />

            <ImportantDetailCard
              description="Sign the SFUEA x SFSS Gamers' Lounge Waiver and User Agreement"
              image="/ex2.webp"
              icon={faFileLines}
              buttonText="Waiver Agreement"
              delay={1}
            />

            <ImportantDetailCard
              description="Help us improve the lounge by doing the SFU Esports Gamers' Lounge Experience Survey"
              image="/ex3.webp"
              icon={faComments}
              buttonText="Feedback Survey"
              delay={2}
            />
          </div>
        </div>
      </div>

      <div className="relative flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pt-[7.5vh]">
        <SubPageHeader title="Lounge FAQ" />

        <div className="box-border flex w-[90vw] flex-col sm:w-[75vw] lg:flex-row">
          <div className="mb-5 box-border w-full lg:mb-0 lg:w-1/2 lg:pr-8 lg:pt-[14px]">
            <p className="text-xl font-semibold text-black sm:text-2xl xl:text-3xl">
              If you have any more questions, please email us at EMAIL@EMAIL.com
              or chat with us in our discord
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <FAQ onWhatPage="lounge" />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
