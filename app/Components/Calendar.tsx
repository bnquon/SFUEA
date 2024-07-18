"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { HomeHeader } from "./HomeHeader";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
};

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

export const BasicCalendar = () => {
  const [TestEvents, setEvents] = useState<CalendarEvent[]>([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [headerInView, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div className="relative flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[4vh] sm:pb-[5vh] sm:pt-[5vh]">

      <HomeHeader
        title="EVENT SCHEDULE"
        description="Discover upcoming events and activities in our schedule. 
                    Stay informed and join us for exciting opportunities!"
        toPage="events"
      />

      <div className="relative box-border flex h-[75vh] w-[90vw] sm:w-[75vw]">
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          custom={2.5}
          viewport={{ once: true }}
          className="relative h-full w-full"
        >
          <Calendar
            events={TestEvents}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
          />
        </motion.div>
      </div>
    </div>
  );
};
