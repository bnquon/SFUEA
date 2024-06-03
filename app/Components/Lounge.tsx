import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faLocationDot, faCircleExclamation, faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const Lounge = () => {
  return (
    <div className='w-full relative pl-[12.5vw] bg-[#d3d3d3] flex flex-col pt-[10vh] pb-[10vh]'>

        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 mb-10">GAMERS' LOUNGE.</h1>
        {/* <p className='text-xl w-2/5 font-semibold text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
    
        <div className='w-[75vw] flex relative box-border gap-4'>

            <div className="relative rounded-md w-[60%] h-[70vh] overflow-hidden">
                <img src="/gamerslounge3.jpg" className='object-cover w-full h-full' alt="Gamers Lounge" />
            </div>

            <div className='w-[40%] h-[70vh] relative flex box-border'>

                <div className="w-full h-full flex flex-col gap-4">

                    <div className='w-full h-1/2 flex gap-4'>
                        <div className='w-1/2 h-full bg-white rounded-md shadow-md text-black p-5 flex flex-col justify-between'>
                            <p className='mb-5 text-4xl font-semibold'>PC SPECS</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='text-xl bg-black w-fit p-2 rounded-xl text-white flex items-center duration-200 hover:bg-red-500'>
                                Full Specs &nbsp;
                                <FontAwesomeIcon className='text-2xl' icon={faArrowRight}/>
                            </span>
                        </div>

                        <div className='w-1/2 h-full bg-white rounded-md shadow-md text-black p-5 flex flex-col justify-between'>
                            <p className='mb-5 text-4xl font-semibold'>LOCATION</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='text-xl bg-black w-fit p-2 rounded-xl text-white duration-200 hover:bg-red-500'>
                                Video Guide &nbsp;
                                <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowRight}/>
                            </span>
                        </div>
                    </div>
                    
                    <div className='w-full h-1/2 flex gap-4'>
                        <div className='w-1/2 h-full bg-white rounded-md shadow-md text-black p-5 flex flex-col justify-between'>
                            <p className='mb-5 text-4xl font-semibold'>SCHEDULE</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='text-xl bg-black w-fit p-2 rounded-xl text-white duration-200 hover:bg-red-500'>
                                Full Schedule &nbsp;
                                <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowRight}/>
                            </span>
                        </div>

                        <div className='w-1/2 h-full bg-white rounded-md shadow-md text-black p-5 flex flex-col justify-between'>
                            <p className='mb-5 text-4xl text-red-600 font-semibold'>IMPORTANT DETAILS</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                            <span className='text-xl bg-black w-fit p-2 rounded-xl text-white duration-200 hover:bg-red-500'>
                                Read More &nbsp;
                                <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowRight}/>
                            </span>
                        </div>

                    </div>

                </div>
               
            </div>

            

        </div>
    
    </div>
  )
}
