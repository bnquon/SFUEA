"use client"
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
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

			<SubPageBanner pageTitle="Events" pageDescription="SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION." blobImage="/blob2.webp"/>

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
				
				<RecentEventCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="/recentEvent1.webp" delay={1}/>

				<RecentEventCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="/recentEvent2.webp" delay={3}/>

				<RecentEventCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="/recentEvent3.webp" delay={5}/>

			</div>

			<Footer />

    	</main>
  	);
}
