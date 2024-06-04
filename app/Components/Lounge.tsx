import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faLocationDot, faCircleExclamation, faCircleArrowUp, faCalendarDays, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

export const Lounge = () => {
  return (
    <div className='w-full relative pl-[12.5vw] bg-[#d3d3d3] flex flex-col pt-[7.5vh] pb-[7.5vh]'>

        <div className="w-[75vw] mb-[60px] text-black flex relative box-border">
            <div className="w-fit pr-8 flex items-center border-r-black border-r-2 flex-shrink-0">
                <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 whitespace-nowrap">GAMERS' LOUNGE</h1>
            </div>
            <div className="flex-grow flex items-center pl-8">
                <p className="text-xl font-semibold flex-grow">
                    Visit the hub for eSports and recreational gaming on SFU Burnaby campus!
                </p>
                <span className='h-fit text-xl p-3 rounded-xl flex flex-shrink-0 items-center text-white duration-200 cursor-pointer bg-black ml-4'>
                    Learn More &nbsp;
                    <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                </span>
            </div>
            </div>
        {/* <p className='text-xl w-2/5 font-semibold text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
    
        <div className='w-[75vw] flex relative box-border gap-4'>

            <div className="relative rounded-md w-[60%] h-[70vh] overflow-hidden">
                <img src="/gamerslounge3.jpg" className='object-cover w-full h-full' alt="Gamers Lounge" />
            </div>

            <div className='w-[40%] h-[70vh] relative flex box-border'>

                <div className="w-full h-full flex flex-col gap-4">

                    <div className='w-full h-1/2 flex gap-4'>
                        <div className='w-1/2 h-full bg-white rounded-md shadow-md text-black p-5 flex flex-col justify-between'>
                            <span className='flex items-center'>
                                <FontAwesomeIcon className='text-2xl' icon={faComputer}/>
                                <p className='text-3xl font-semibold'>&nbsp;PC SPECS</p>
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='w-fit text-xl p-3 rounded-xl flex items-center justify-between text-black duration-200 cursor-pointer hover:bg-black hover:text-white'>
                                Full Specs &nbsp;
                                <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                            </span>
                        </div>

                        <div className='w-1/2 h-full bg-white rounded-md shadow-md text-black p-5 flex flex-col justify-between'>
                            <span className='flex items-center'>
                                <FontAwesomeIcon className='text-2xl' icon={faLocationDot}/>
                                <p className='text-3xl font-semibold'>&nbsp;LOCATION</p>
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='w-fit text-xl p-3 rounded-xl flex items-center justify-between text-black duration-200 cursor-pointer hover:bg-black hover:text-white'>
                                Video Guide &nbsp;
                                <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                            </span>
                        </div>
                    </div>
                    
                    <div className='w-full h-1/2 flex gap-4'>
                        <div className='w-1/2 h-full bg-white rounded-md shadow-md text-black p-5 flex flex-col justify-between'>
                            <span className='flex items-center'>
                                <FontAwesomeIcon className='text-2xl' icon={faCalendarDays}/>
                                <p className='text-3xl font-semibold'>&nbsp;SCHEDULE</p>
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='w-fit text-xl p-3 rounded-xl flex items-center justify-between text-black duration-200 cursor-pointer hover:bg-black hover:text-white'>
                                Full Schedule &nbsp;
                                <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                            </span>
                        </div>

                        <div className='w-1/2 h-full bg-white rounded-md shadow-md text-black p-5 flex flex-col justify-between'>
                            <span className='flex items-center'>
                                <FontAwesomeIcon className='text-2xl' icon={faCircleExclamation}/>
                                <p className='text-3xl font-semibold'>&nbsp;NOTES</p>
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='w-fit text-xl p-3 rounded-xl flex items-center justify-between text-black duration-200 cursor-pointer hover:bg-black hover:text-white'>
                                Read More &nbsp;
                                <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                            </span>
                        </div>

                    </div>

                </div>
               
            </div>

            

        </div>
    
    </div>
  )
}
