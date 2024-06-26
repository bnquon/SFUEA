"use client"
import Image from "next/image";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Footer } from "@/app/Components/Footer";

const localizer = momentLocalizer(moment);

export default function Home() {

	const events = [
		{
		  title: 'League In-house',
		  start: moment("2024-06-01T11:00:00").toDate(),
		  end: moment("2024-06-01T12:00:00").toDate(),
		}
	];

    return (
    	<main className="relative">

			<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[10vh]">
        		<div className="w-[75vw] items-center flex justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-[35%] z-[1]" src='/blob2.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col w-3/5 gap-6 text-white z-[2]">
						<p className="font-bold text-2xl lg:text-3xl text-red-500">Events</p>
						<p className="text-3xl lg:text-5xl font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2]" src='/real-logo.png' alt="ex1" width={0} height={0} sizes='100vw' style={{ width: '20%', height: '100%' }}></Image>
				</div>
      		</div>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pb-[5vh]">
				<div className="w-[75vw] mb-[8vh]">
					<span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] px-6 text-red-500 text-5xl font-extrabold">Schedule</span>
                    </span>
				</div>

				<div className="w-[75vw] h-[75vh] relative flex box-border mb-20">
					<div className='w-full h-full relative'>
					<Calendar 
						events={events}
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
