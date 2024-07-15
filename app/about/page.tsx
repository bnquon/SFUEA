"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AboutPeople } from "./AboutPeople";
import { SubPageBanner } from "../Components/SubPageBanner";
import { SubPageHeader } from "../Components/SubPageHeader";
import { Footer } from "@/app/Components/Footer";

const WidgetBot = dynamic(() => import("@widgetbot/react-embed"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative">
      <SubPageBanner
        pageTitle="About"
        pageDescription="SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION."
        blobImage="/blob2.webp"
      />

      <div className="relative box-border flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[5vh] pt-[5vh]">
        <SubPageHeader title="Who We Are" />

        <div className="box-border flex w-[90vw] flex-col gap-0 sm:w-[75vw] lg:gap-2 xl:gap-4">
          <div className="flex w-full flex-col gap-4 py-6 text-black lg:flex-row lg:gap-0">
            <div className="w-full text-2xl font-bold sm:text-3xl lg:w-2/5 xl:text-4xl">
              <p>How We Started</p>
            </div>
            <div className="w-full font-normal sm:text-xl lg:w-3/5 lg:text-2xl xl:text-3xl xl:leading-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                distinctio fugit minus molestias deserunt, reiciendis
                asperiores? Dolores cum distinctio ratione veritatis tenetur?
                Quibusdam ipsa vero reprehenderit dolorem veritatis dicta
                eveniet.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 border-y-[1px] border-[#999999] py-6 text-black lg:flex-row lg:gap-0">
            <div className="w-full text-2xl font-bold sm:text-3xl lg:w-2/5 xl:text-4xl">
              <p>Our Goals</p>
            </div>
            <div className="w-full font-normal sm:text-xl lg:w-3/5 lg:text-2xl xl:text-3xl xl:leading-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                distinctio fugit minus molestias deserunt, reiciendis
                asperiores? Dolores cum distinctio ratione veritatis tenetur?
                Quibusdam ipsa vero reprehenderit dolorem veritatis dicta
                eveniet.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 py-6 text-black lg:flex-row lg:gap-0">
            <div className="w-full text-2xl font-bold sm:text-3xl lg:w-2/5 xl:text-4xl">
              <p>Our Vision</p>
            </div>
            <div className="w-full font-normal sm:text-xl lg:w-3/5 lg:text-2xl xl:text-3xl xl:leading-10">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                distinctio fugit minus molestias deserunt, reiciendis
                asperiores? Dolores cum distinctio ratione veritatis tenetur?
                Quibusdam ipsa vero reprehenderit dolorem veritatis dicta
                eveniet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative box-border flex w-screen items-center justify-center bg-[#d3d3d3] pt-[6vh]">
        <div className="box-border flex w-[90vw] flex-col gap-5 sm:w-[75vw] lg:h-[50vh] lg:flex-row">
          <div className="box-border flex h-full w-full flex-col justify-start gap-5 pr-6 text-black lg:w-2/5 lg:gap-10">
            <p className="text-2xl font-bold sm:text-3xl xl:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-normal sm:text-xl lg:text-2xl xl:text-3xl xl:leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
          </div>
          <WidgetBot
            className="h-[45vh] w-full lg:h-full lg:w-3/5"
            server="1251409341676912660"
            channel="1251409341676912663"
          />
        </div>
      </div>

      <div className="flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[5vh] pt-[8vh] text-6xl">
        <SubPageHeader title="Our Leaders" />
      </div>

      <AboutPeople />

      <Footer />
    </main>
  );
}
