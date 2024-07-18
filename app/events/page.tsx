"use client";
import { EventCalendar } from "../Components/EventCalendar";
import { Footer } from "@/app/Components/Footer";
import { SubPageBanner } from "../Components/SubPageBanner";
import { SubPageHeader } from "../Components/SubPageHeader";
import { RecentEventCard } from "./RecentEventCard";


export default function Home() {

  return (
    <main className="relative bg-[#d3d3d3]">
      <SubPageBanner
        pageTitle="Events"
        pageDescription="SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION."
        blobImage="/blob2.webp"
      />

      <div className="relative box-border flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[5vh]">
        <SubPageHeader title="Event Schedule" />

        <div className="relative mb-20 box-border flex h-[75vh] w-[90vw] sm:w-[75vw]">
          <div className="relative h-full w-full">
            <EventCalendar />
          </div>
        </div>
      </div>

      <div className="relative ml-[5vw] box-border w-[90vw] sm:ml-[12.5vw] sm:w-[75vw]">
        <p className="mb-4 bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-4xl font-bold text-transparent sm:mb-12 sm:text-6xl">
          RECENT EVENTS.
        </p>
      </div>

      <div className="relative ml-[5vw] flex h-[45vh] w-[90vw] flex-col gap-5 sm:ml-[12.5vw] sm:h-[35vh] sm:w-[75vw] sm:flex-row lg:h-[35vh]">
        <RecentEventCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="/recentEvent1.webp"
          delay={1}
        />

        <RecentEventCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="/recentEvent2.webp"
          delay={3}
        />

        <RecentEventCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="/recentEvent3.webp"
          delay={5}
        />
      </div>

      <Footer />
    </main>
  );
}
