import React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

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

  const [headerInView, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true
  })

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
          <div ref={headerInView} className="w-fit pr-8 flex items-center border-r-black border-r-2 flex-shrink-0">
              <h1 style={{ 
                transform: inView ? 'translateY(0)' : 'translateY(100%)',
                transition: 'transform 0.5s ease'
                }} className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 whitespace-nowrap overflow-hidden">EVENT SCHEDULE.</h1>
          </div>
          <div className="flex-grow flex items-center pl-8">
              <p className="text-xl font-semibold flex-grow">
                Discover upcoming events and activities in our schedule. Stay informed and join us for exciting opportunities!
              </p>
              <span className='h-fit text-lg p-3 rounded-full flex flex-shrink-0 items-center text-white duration-200 cursor-pointer bg-black ml-4'>
                  Learn More &nbsp;
                  <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
              </span>
          </div>
      </div>  

      <div className="w-[75vw] h-[75vh] relative flex box-border mb-20">
        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={2.5} viewport={{ once: true }} className='w-full h-full relative'>
          <Calendar 
            events={events}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
          />
        </motion.div>
      </div>

      <p className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-600 mb-12'>RECENT EVENTS.</p>

      <div className='w-[75vw] h-[25vh] relative flex gap-5'>
        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={2} viewport={{ once: true }} id='event-card' className='w-1/3 h-full rounded-md overflow-hidden relative shadow-lg'>
          <img className='w-full h-full object-cover' src="/IMG_3779.jpg" alt="" />
          <p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </motion.div>
        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={3} viewport={{ once: true }} id='event-card' className='w-1/3 h-full rounded-md overflow-hidden relative shadow-lg'>
          <img className='w-full h-full object-cover' src="/IMG_7099.jpg" alt="" />
          <p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </motion.div>
        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={4} viewport={{ once: true }} id='event-card' className='w-1/3 h-full rounded-md overflow-hidden relative shadow-lg'>
          <img className='w-full h-full object-cover' src="/IMG_20230930_145502-min.jpg" alt="" />
          <p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </motion.div>
      </div>

    </div>
  );
}