"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Footer } from "@/app/Components/Footer";
import { motion } from 'framer-motion';
import { SubPageBanner } from "../Components/SubPageBanner";
import { SubPageHeader } from "../Components/SubPageHeader";
  

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

export default function Home() {

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

    return (
    	<main className="relative bg-[#d3d3d3]">

			<SubPageBanner pageTitle="Events" pageDescription="SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION." blobImage="/blob2.jpg"/>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pb-[5vh]">
				<SubPageHeader title="Event Schedule" />

				<div className="sm:w-[75vw] w-[90vw] h-[75vh] relative flex box-border mb-20">
					<div className='w-full h-full relative'>
					<Calendar 
						events={TestEvents}
						localizer={localizer}
						startAccessor="start"
						endAccessor="end"
					/>
					</div>
				</div>
			</div>

			<div className="sm:w-[75vw] w-[90vw] relative box-border sm:ml-[12.5vw] ml-[5vw]">
				<p className='text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-600 sm:mb-12 mb-4'>RECENT EVENTS.</p>
			</div>

			<div className='sm:w-[75vw] w-[90vw] lg:h-[35vh] sm:h-[35vh] h-[45vh] relative flex sm:flex-row flex-col gap-5 sm:ml-[12.5vw] ml-[5vw]'>
				<motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={1} viewport={{ once: true }} id='event-card' className='lg:w-1/3 w-full h-full rounded-md overflow-hidden relative shadow-lg'>
					<img className='w-full h-full object-cover' src="/IMG_3779.jpg" alt="" />
					<p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium sm:text-xl xl:text-2xl text-base text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</motion.div>

				<motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={3} viewport={{ once: true }} id='event-card' className='lg:w-1/3 w-full h-full rounded-md overflow-hidden relative shadow-lg'>
					<img className='w-full h-full object-cover' src="/IMG_7099.jpg" alt="" />
					<p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium sm:text-xl xl:text-2xl text-base text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</motion.div>

				<motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={5} viewport={{ once: true }} id='event-card' className='lg:w-1/3 w-full h-full lg:block hidden rounded-md overflow-hidden relative shadow-lg'>
					<img className='w-full h-full object-cover' src="/IMG_20230930_145502-min.jpg" alt="" />
					<p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium sm:text-xl xl:text-2xl text-base text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</motion.div>
			</div>

			<Footer />

    	</main>
  	);
}
