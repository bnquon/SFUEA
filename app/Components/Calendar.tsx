import React from 'react';
import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
			delay: index * 0.1
		}
	}),
  };
export const BasicCalendar = () => {

  const [TestEvents, setEvents] = useState<CalendarEvent[]>([]);

  const url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?key=${process.env.NEXT_PUBLIC_API_KEY}`

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
    triggerOnce: true
  })

  const events = [
    {
      title: 'League In-house',
      start: moment("2024-06-01T11:00:00").toDate(),
      end: moment("2024-06-01T12:00:00").toDate(),
    }
  ];

  return (
    <div className='pt-[7.5vh] pb-[10vh] w-screen flex flex-col justify-center items-center relative bg-[#d3d3d3]'>
    
        {/* <div className="sm:w-[75vw] w-[90vw] mb-[60px] text-black lg:flex lg:flex-row sm:grid sm:grid-cols-[auto] sm:grid-rows-2 flex flex-col relative box-border">
          <div ref={headerInView} className="col-span-2 row-span-1 duration-500 lg:w-fit w-[90vw] lg:pr-8 pr-0 flex items-center sm:text-left text-center lg:border-r-black border-r-0 lg:border-r-2 lg:border-b-0 flex-shrink-0 overflow-hidden">
              <h1 
              style={{ 
              transform: inView ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.5s ease'
              }}
              className="sm:text-7xl text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">
                  EVENT SCHEDULE.
              </h1>
          </div>
          <div className="col-span-1 row-start-2 lg:flex lg:flex-grow overflow-hidden items-center justify-start sm:text-xl text-base">
              <p className="font-semibold box-border lg:pl-8 lg:pr-4 lg:pt-0 pr-2 pt-2">
              Discover upcoming events and activities in our schedule. Stay informed and join us for exciting opportunities!
              </p>
          </div>
          <div className="w-fit flex flex-grow flex-shrink-0 items-center justify-start sm:mt-0 mt-2">
              <span className='h-fit sm:text-lg text-base p-2 sm:p-3 rounded-full flex flex-shrink-0 flex-grow items-center text-white duration-200 cursor-pointer bg-black'>
                  Learn More &nbsp;
                  <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
              </span>
          </div>
      </div> */}

      <div className="sm:w-[75vw] w-[90vw] mb-[60px] text-black xl:flex xl:flex-row sm:grid sm:grid-cols-[auto] sm:grid-rows-2 flex flex-col relative box-border">
          <div ref={headerInView} className="col-span-2 row-span-1 duration-500 xl:w-fit w-full xl:pr-8 pr-0 flex items-center justify-start xl:border-r-black border-r-0 xl:border-r-2 xl:border-b-0 flex-shrink-0 overflow-hidden">
              <h1 
              style={{ 
              transform: inView ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.5s ease'
              }}
              className="sm:text-7xl text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">
                  EVENT SCHEDULE.
              </h1>
          </div>
          <div className="col-span-1 row-start-2 lg:flex lg:flex-grow overflow-hidden items-center justify-start sm:text-xl text-base">
              <p className="font-semibold box-border xl:pl-8 xl:pr-4 xl:pt-0 pr-2 pt-2">
                Discover upcoming events and activities in our schedule. Stay informed and join us for exciting opportunities!
              </p>
          </div>
          <div className="w-fit flex flex-grow flex-shrink-0 items-center justify-start sm:mt-0 mt-2">
              <span className='h-fit sm:text-lg text-base p-2 sm:p-3 rounded-full flex flex-shrink-0 flex-grow items-center text-white duration-200 cursor-pointer bg-black'>
                  Learn More &nbsp;
                  <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
              </span>
          </div>
      </div>

      <div className="sm:w-[75vw] w-[90vw] h-[75vh] relative flex box-border">
        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={2.5} viewport={{ once: true }} className='w-full h-full relative'>
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
}