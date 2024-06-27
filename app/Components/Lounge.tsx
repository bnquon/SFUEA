import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faLocationDot, faCircleExclamation, faCircleArrowUp, faCalendarDays, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from 'framer-motion'

const cardAnimation = {
    initial: { opacity: 0, x: 100},
    animate: (index: number) => ({
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.2
        }
    }),
};

const pictureAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: (index: number) => ({
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.2
        }
    }),
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

export const Lounge = () => {
  return (
    <div className='w-full relative sm:pl-[12.5vw] pl-[5vw] bg-[#d3d3d3] flex flex-col pt-[7.5vh] pb-[7.5vh]'>

        {/* <div className="sm:w-[75vw] w-[90vw] mb-[60px] text-black lg:flex lg:flex-row sm:grid sm:grid-cols-[auto] sm:grid-rows-2 flex flex-col relative box-border">
            <div className="col-span-2 row-span-1 duration-500 lg:w-fit w-[90vw] lg:pr-8 pr-0 flex items-center sm:text-left text-center lg:border-r-black border-r-0 lg:border-r-2 lg:border-b-0 flex-shrink-0 overflow-hidden">
                <h1 className="sm:text-7xl text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">
                    GAMERS&apos; LOUNGE
                </h1>
            </div>
            <div className="col-span-1 row-start-2 lg:flex lg:flex-grow overflow-hidden items-center justify-start sm:text-xl text-base">
                <p className="font-semibold box-border lg:pl-8 lg:pr-4 lg:pt-0 pr-2 pt-2">
                Browse the games we have competitive teams, executives, or directors for!
                The executives and directors run in-houses and events for their desired game to foster the community for each one!
                </p>
            </div>
            <div className="w-fit flex flex-grow flex-shrink-0 items-center justify-start sm:mt-0 mt-2">
                    <span className='h-fit sm:text-lg text-base p-2 sm:p-3 rounded-full flex flex-shrink-0 flex-grow items-center text-white duration-200 cursor-pointer bg-black'>
                    Learn More &nbsp;
                    <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                </span>
            </div>
        </div> */}
    
        <div className="sm:w-[75vw] w-[90vw] mb-[60px] text-black lg:flex lg:flex-row sm:grid sm:grid-cols-[auto] sm:grid-rows-2 flex flex-col relative box-border">
            <div className="col-span-2 row-span-1 duration-500 lg:w-fit w-full lg:pr-8 pr-0 flex items-center justify-center lg:border-r-black border-r-0 lg:border-r-2 lg:border-b-0 flex-shrink-0 overflow-hidden">
                <h1 className="sm:text-7xl text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">
                    GAMERS&apos; LOUNGE
                </h1>
            </div>
            <div className="col-span-1 row-start-2 lg:flex lg:flex-grow overflow-hidden items-center justify-start sm:text-xl text-base">
                <p className="font-semibold box-border lg:pl-8 lg:pr-4 lg:pt-0 pr-2 pt-2">
                Browse the games we have competitive teams, executives, or directors for!
                The executives and directors run in-houses and events for their desired game to foster the community for each one!
                </p>
            </div>
            <div className="w-fit flex flex-grow flex-shrink-0 items-center justify-start sm:mt-0 mt-2">
                <span className='h-fit sm:text-lg text-base p-2 sm:p-3 rounded-full flex flex-shrink-0 flex-grow items-center text-white duration-200 cursor-pointer bg-black'>
                    Learn More &nbsp;
                    <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                </span>
            </div>
        </div>

        <div className='sm:w-[75vw] w-[90vw] flex lg:flex-row flex-col relative box-border gap-4'>

            <motion.div variants={pictureAnimation} initial='initial' whileInView='animate' custom={1} viewport={{ once: true }} className="relative rounded-md lg:w-[60%] lg:h-[70vh] w-full h-[40vh] overflow-hidden shadow-lg">
                <img src="/gamerslounge3.jpg" className='object-cover w-full h-full' alt="Gamers Lounge" />
            </motion.div>

            <div className='lg:w-[40%] lg:h-[70vh] w-full relative flex box-border'>
                <motion.div variants={cardAnimation} initial='initial' whileInView='animate' custom={1} viewport={{ once: true }} className="w-full h-full flex flex-col gap-4">

                    <div className='w-full h-1/2 flex sm:flex-row flex-col gap-4'>
                        <div className='sm:w-1/2 w-full h-full bg-white rounded-md shadow-md text-black p-6 flex flex-col sm:gap-0 gap-2 justify-between'>
                            <span className='flex items-center'>
                                <FontAwesomeIcon className='sm:text-2xl text-xl' icon={faComputer}/>
                                <p className='sm:text-2xl text-xl font-semibold'>&nbsp;DEVICES</p>
                            </span>
                            <p className='sm:text-base text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='w-fit sm:text-xl text-md sm:p-2 p-1 rounded-xl flex items-center justify-between text-black border-black border-2 duration-200 cursor-pointer hover:bg-black hover:text-white'>
                                Full Specs &nbsp;
                                <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                            </span>
                        </div>

                        <div className='sm:w-1/2 w-full h-full bg-white rounded-md shadow-md text-black p-6 flex flex-col sm:gap-0 gap-2 justify-between'>
                            <span className='flex items-center'>
                                <FontAwesomeIcon className='sm:text-2xl text-xl' icon={faLocationDot}/>
                                <p className='sm:text-2xl text-xl font-semibold'>&nbsp;LOCATION</p>
                            </span>
                            <p className='sm:text-base text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='w-fit sm:text-xl text-md sm:p-2 p-1 rounded-xl flex items-center justify-between text-black border-black border-2 duration-200 cursor-pointer hover:bg-black hover:text-white'>
                                Video Guide &nbsp;
                                <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                            </span>
                        </div>
                    </div>
                    
                    <div className='w-full h-1/2 flex sm:flex-row flex-col gap-4'>
                        <div className='sm:w-1/2 w-full h-full bg-white rounded-md shadow-md text-black p-6 flex flex-col sm:gap-0 gap-2 justify-between'>
                            <span className='flex items-center'>
                                <FontAwesomeIcon className='sm:text-2xl text-xl' icon={faCalendarDays}/>
                                <p className='sm:text-2xl text-xl font-semibold'>&nbsp;SCHEDULE</p>
                            </span>
                            <p className='sm:text-base text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='w-fit sm:text-xl text-md sm:p-2 p-1 rounded-xl flex items-center justify-between text-black border-black border-2 duration-200 cursor-pointer hover:bg-black hover:text-white'>
                                Full Schedule &nbsp;
                                <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                            </span>
                        </div>

                        <div className='sm:w-1/2 w-full h-full bg-white rounded-md shadow-md text-black p-6 flex flex-col sm:gap-0 gap-2 justify-between'>
                            <span className='flex items-center'>
                                <FontAwesomeIcon className='sm:text-2xl text-xl' icon={faCircleExclamation}/>
                                <p className='sm:text-2xl text-xl font-semibold'>&nbsp;NOTES</p>
                            </span>
                            <p className='sm:text-base text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='w-fit sm:text-xl text-md sm:p-2 p-1 rounded-xl flex items-center justify-between text-black border-black border-2 duration-200 cursor-pointer hover:bg-black hover:text-white'>
                                Read More &nbsp;
                                <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                            </span>
                        </div>

                    </div>

                </motion.div>
               
            </div>

            

        </div>
    
    </div>
  )
}
