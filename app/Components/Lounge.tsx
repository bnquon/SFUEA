import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faLocationDot, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

export const Lounge = () => {
  return (
    <div className='w-full relative pl-[12.5vw] bg-[silver] flex flex-col pt-[10vh] pb-[10vh]'>
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-10 from-red-700 to-red-400">GAMERS' LOUNGE.</h1>
        {/* <p className='text-xl w-2/5 font-semibold text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
    
        <div className='w-[75vw] flex relative box-border flex-col'>
            <div className='w-full h-[65vh] relative flex box-border gap-14'>
                <img src="/gamerslounge.jpg" className='w-[65%] h-[65vh] z-0 rounded-xl' alt="" />
                <img src="/gamerslounge2.jpg" className='w-[35%] h-[65vh] z-0 rounded-xl' alt="" />
            </div>

            {/* <div className='w-full relative flex box-border gap-14 justify-center mt-8'>
                <div className="w-1/4 h-[15vh] bg-white z-10 rounded-xl text-black p-6">
                    <span className='text-4xl font-bold'>
                        <FontAwesomeIcon icon={faComputer}/> PC Specs 
                    </span>
                </div>
                
                <div className="w-1/4 h-[15vh] bg-white z-10 rounded-xl text-black p-6">
                    <span className='text-4xl font-bold'>
                        <FontAwesomeIcon icon={faLocationDot}/> Location 
                    </span>
                </div>

                <div className="w-1/4 h-[15vh] bg-white z-10 rounded-xl text-black p-6">
                    <span className='text-4xl font-bold'>
                        <FontAwesomeIcon icon={faCircleExclamation}/> How to access 
                    </span>
                </div>

                <div className="w-1/4 h-[15vh] bg-white z-10 rounded-xl text-black p-6">
                    <span className='text-4xl font-bold'>
                        <FontAwesomeIcon icon={faCircleExclamation}/> How to access 
                    </span>
                </div>
            </div> */}

        </div>
    
    </div>
  )
}
