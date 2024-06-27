import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

export const Hamburger = () => {
  
  const [open, setOpen] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);
  const [expandedChar, setExpandedChar] = useState("+");

  const toggleHamburger = () => {
    setOpen(!open);
    if (!open) {
        setTeamsOpen(false);
    }
    console.log(open);
  }

  const toggleTeams = () => {
    setTeamsOpen(!teamsOpen);
    setExpandedChar(teamsOpen ? "+" : "-");
    console.log(teamsOpen);
  }

  return (
    <div className='pt-[7.5vh] pb-[10vh] w-screen flex flex-col justify-center items-start relative bg-[#d3d3d3] pl-[12.5vw] text-black'>
        <div className='border-2 border-red-500 relative w-[15vw] flex flex-col items-end'>
            <Image
            onClick={toggleHamburger} className='absolute top-0 right-0'
            src={'/hamburger.png'} alt={'Hamburger'} width={30} height={30}></Image>
            <div className={`w-full flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`} style={{ visibility: open ? 'visible' : 'hidden' }}>
                <div className="h-[4vh] w-full bg-white text-xl flex items-center relative">
                    <Image
                        onClick={toggleHamburger} className='absolute top-0 left-0'
                        src={'/close.png'} alt={'Hamburger'} width={30} height={30}></Image>
                </div>
                <div className="h-[8vh] w-full bg-white text-xl flex items-center">
                    <p>Lorem ipsum</p>
                </div>
                <div className="h-[8vh] w-full bg-white text-xl flex items-center border-y-2 border-black">
                    <p>Lorem ipsum</p>
                </div>
                <div className="h-[8vh] w-full bg-white text-xl flex justify-between items-center border-b-2 border-black">
                    <p>Lorem ipsum</p>
                    <button onClick={toggleTeams} className='w-fit border-2 border-black'>{expandedChar}</button>
                </div>
                {teamsOpen && (
                    <div className="w-full flex flex-col"> 
                        <div className="h-[8vh] w-full bg-red-200 text-xl flex items-center border-y-2 border-black">
                            <p>Lorem ipsum</p>
                        </div>
                        <div className="h-[8vh] w-full bg-red-200 text-xl flex items-center border-y-2 border-black">
                            <p>Lorem ipsum</p>
                        </div>
                        <div className="h-[8vh] w-full bg-red-200 text-xl flex items-center border-y-2 border-black">
                            <p>Lorem ipsum</p>
                        </div>
                        <div className="h-[8vh] w-full bg-red-200 text-xl flex items-center border-y-2 border-black">
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                )}
                <div className="h-[8vh] w-full bg-white text-xl flex items-center">
                    <p>Lorem ipsum</p>
                </div>

                <div className="w-full flex justify-start items-center">
                    <button className='lg:px-6 lg:py-3 px-2 py-2 bg-red-500 max-w-fit rounded-xl text-sm lg:text-xl font-bold'>JOIN NOW</button>
                </div>
            </div>
        </div>
    </div>
  )
}
