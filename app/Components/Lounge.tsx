import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faLocationDot, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

export const Lounge = () => {
  return (
    <div className='w-full h-screen relative pl-[12.5vw] bg-[#d3d3d3] flex flex-col pt-[10vh] pb-[10vh]'>
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-14 from-red-700 to-red-400">GAMERS' LOUNGE.</h1>
        {/* <p className='text-xl w-2/5 font-semibold text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
    
        <div className='w-[75vw] flex relative box-border'>
            <div className='w-full h-[65vh] relative flex box-border gap-10'>

                <div className="w-[35%] h-full flex flex-col">

                    <div className="w-full h-1/3 text-black flex flex-col justify-center">
                        <span className='text-4xl font-bold mb-5'>
                            <FontAwesomeIcon icon={faComputer}/> PC Specs 
                        </span>
                        <ul className='list-disc list-inside text-xl'>
                            <li>RTX 4060</li>
                            <li>24" 165Hz IPS Monitor</li>
                            <li>Provided Peripherals</li>
                        </ul>
                    </div>

                    <div className="w-full h-1/3 text-black flex flex-col justify-center border-t-2 border-t-black border-b-2 border-b-black">
                        <span className='text-4xl font-bold mb-5'>
                            <FontAwesomeIcon icon={faLocationDot}/> Location  
                        </span>
                        <ul className='list-disc list-inside text-xl'>
                            <li>SUB 2400</li>
                        </ul>
                    </div>

                    <div className="w-full h-1/3 text-black flex flex-col justify-center">
                        <span className='text-4xl font-bold mb-5'>
                            <FontAwesomeIcon icon={faCircleExclamation}/> Must Bring 
                        </span>
                        <ul className='list-disc list-inside text-xl'>
                            <li>Student ID</li>
                            <li>sign waiver?</li>
                        </ul>
                    </div>

                </div>

                <img src="/gamerslounge3.jpg" className='w-[65%] h-[65vh]' alt="" />
               
            </div>

        </div>
    
    </div>
  )
}
