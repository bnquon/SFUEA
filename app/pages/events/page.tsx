"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Footer } from "@/app/Components/Footer";

const localizer = momentLocalizer(moment);

type CalendarEvent = {
	title: string;
	start: Date;
	end: Date;
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
    	<main className="relative">

			<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[10vh]">
        		<div className="sm:w-[75vw] w-[90vw] sm:items-center items-start flex sm:flex-row flex-col justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-[35%] z-[1]" src='/blob2.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col sm:w-3/5 w-[90%] pl-[5%] sm:pl-0 gap-6 text-white z-[2]">
						<p className="font-bold sm:text-2xl lg:text-3xl text-base text-red-500">Events</p>
						<p className="sm:text-2xl lg:text-5xl text-lg font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2] sm:w-[20%] w-[150px] h-auto mt-5 pl-[5%] sm:pl-0 sm:mt-0" src='/real-logo.png' alt="ex1" width={0} height={0} sizes='100vw'></Image>
				</div>
      		</div>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pb-[5vh]">
				<div className="sm:w-[75vw] w-[90vw] mb-[8vh]">
					<span className="relative flex justify-center sm:text-left text-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
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

			<Footer />

    	</main>
  	);
}
