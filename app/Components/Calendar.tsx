import React from "react";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
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
      console.log(data.items);

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
  }, []);

  const [headerInView, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const events = [
    {
      title: "League In-house",
      start: moment("2024-06-01T11:00:00").toDate(),
      end: moment("2024-06-01T12:00:00").toDate(),
    },
  ];

  return (
    <div className="relative flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[4vh] sm:pb-[5vh] sm:pt-[5vh]">
      <div className="relative mb-[60px] box-border flex w-[90vw] flex-col text-black sm:grid sm:w-[75vw] sm:grid-cols-[auto] sm:grid-rows-2 xl:flex xl:flex-row">
        <div
          ref={headerInView}
          className="col-span-2 row-span-1 flex w-full flex-shrink-0 items-center justify-start overflow-hidden border-r-0 pr-0 duration-500 xl:w-fit xl:border-b-0 xl:border-r-2 xl:border-r-black xl:pr-8"
        >
          <h1
            style={{
              transform: inView ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.5s ease",
            }}
            className="bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl xl:text-8xl"
          >
            EVENT SCHEDULE.
          </h1>
        </div>
        <div className="col-span-1 row-start-2 items-center justify-start overflow-hidden text-base sm:text-xl lg:flex lg:flex-grow lg:text-2xl">
          <p className="box-border pr-6 pt-2 font-semibold xl:pl-8 xl:pr-4 xl:pt-0">
            Discover upcoming events and activities in our schedule. Stay
            informed and join us for exciting opportunities!
          </p>
        </div>
        <div className="mt-2 flex w-fit flex-shrink-0 flex-grow items-center justify-start sm:mt-0">
          <span className="flex h-fit flex-shrink-0 flex-grow cursor-pointer items-center rounded-full bg-black p-2 text-base text-white duration-200 sm:p-3 sm:text-lg lg:text-xl">
            Learn More &nbsp;
            <FontAwesomeIcon
              className="-rotate-45 text-2xl"
              icon={faArrowCircleRight}
            />
          </span>
        </div>
      </div>

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
