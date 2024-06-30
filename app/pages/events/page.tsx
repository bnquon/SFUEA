"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Footer } from "@/app/Components/Footer";
import { motion } from 'framer-motion';

  

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

			<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[10vh]">
        		<div className="sm:w-[75vw] w-[90vw] sm:items-center items-start flex sm:flex-row flex-col justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-[35%] z-[1]" src='/blob2.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col sm:w-3/5 w-[90%] pl-[5%] sm:pl-0 gap-6 text-white z-[2]">
						<p className="font-bold sm:text-2xl lg:text-3xl text-base text-red-500">Events</p>
						<p className="sm:text-[27px] lg:text-4xl xl:text-5xl text-[21px] font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2] sm:w-[20%] xl:w-[17.5%] w-[150px] h-auto mt-5 pl-[5%] sm:pl-0 sm:mt-0" src='/real-logo.png' alt="ex1" width={0} height={0} sizes='100vw'></Image>
				</div>
      		</div>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pb-[5vh]">
				<div className="sm:w-[75vw] w-[90vw] mb-[8vh]">
					<span className="relative flex justify-center sm:text-left text-center">
                    <div
                        className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] sm:px-6 px-2 text-red-500 text-5xl font-extrabold">Schedule</span>
                    </span>
				</div>

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
				<p className='sm:text-5xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-600 sm:mb-12 mb-4'>RECENT EVENTS.</p>
			</div>

			<div className='sm:w-[75vw] w-[90vw] lg:h-[35vh] sm:h-[35vh] h-[45vh] relative flex sm:flex-row flex-col gap-5 sm:ml-[12.5vw] ml-[5vw]'>
				<motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={1} viewport={{ once: true }} id='event-card' className='lg:w-1/3 w-full h-full rounded-md overflow-hidden relative shadow-lg'>
					<img className='w-full h-full object-cover' src="/IMG_3779.jpg" alt="" />
					<p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium sm:text-xl text-base text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</motion.div>

				<motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={3} viewport={{ once: true }} id='event-card' className='lg:w-1/3 w-full h-full rounded-md overflow-hidden relative shadow-lg'>
					<img className='w-full h-full object-cover' src="/IMG_7099.jpg" alt="" />
					<p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium sm:text-xl text-base text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</motion.div>

				<motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={5} viewport={{ once: true }} id='event-card' className='lg:w-1/3 w-full h-full lg:block hidden rounded-md overflow-hidden relative shadow-lg'>
					<img className='w-full h-full object-cover' src="/IMG_20230930_145502-min.jpg" alt="" />
					<p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium sm:text-xl text-base text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</motion.div>
			</div>

			<Footer />

    	</main>
  	);
}
