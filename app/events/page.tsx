"use client";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Footer } from "@/app/Components/Footer";
import { SubPageBanner } from "../Components/SubPageBanner";
import { SubPageHeader } from "../Components/SubPageHeader";
import { RecentEventCard } from "./RecentEventCard";

const localizer = momentLocalizer(moment);

type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
};

export default function Home() {

  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?key=${process.env.NEXT_PUBLIC_API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        const temp: CalendarEvent[] = data.items.map((item: any) => ({
          title: item.summary,
          start: new Date(item.start.dateTime || item.start.date),
          end: new Date(item.end.dateTime || item.end.date),
        }));
        setEvents(temp);
      }
    }

    fetchData();
  }, [url]);

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
            <Calendar
              events={events}
              localizer={localizer}
              startAccessor="start"
              endAccessor="end"
            />
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
