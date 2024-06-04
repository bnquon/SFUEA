import React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export const BasicCalendar = () => {

  type Events = {
    title: string;
    picture: string;
  }

  const events = [
    {
      title: 'League In-house',
      start: moment("2024-06-01T11:00:00").toDate(),
      end: moment("2024-06-01T12:00:00").toDate(),
    }
  ];

  return (
    <div className='pt-[7.5vh] pb-[10vh] w-screen flex flex-col justify-center items-start relative bg-[#d3d3d3] pl-[12.5vw]'>
      <div className="w-[75vw] mb-[80px] text-black flex relative box-border">
          <div className="w-fit pr-8 flex items-center border-r-black border-r-2 flex-shrink-0">
              <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 whitespace-nowrap">EVENT SCHEDULE.</h1>
          </div>
          <div className="flex-grow flex items-center pl-8 pr-2">
              <p className="text-xl font-semibold flex-grow">
                Discover upcoming events and activities in our schedule. Stay informed and join us for exciting opportunities!
              </p>
              <span className='h-fit text-xl p-3 rounded-xl flex flex-shrink-0 items-center text-white duration-200 cursor-pointer bg-black ml-4'>
                  Learn More &nbsp;
                  <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
              </span>
          </div>
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

      <p className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-600 mb-12'>RECENT EVENTS.</p>

      <div className='w-[75vw] h-[25vh] relative flex gap-5'>
        <div id='event-card' className='w-1/3 h-full rounded-md overflow-hidden relative'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1601247387326-f8bcb5a234d4?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div id='event-card' className='w-1/3 h-full rounded-md overflow-hidden relative'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div id='event-card' className='w-1/3 h-full rounded-md overflow-hidden relative'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1577411726054-04c5b721b367?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

    </div>
  );
}