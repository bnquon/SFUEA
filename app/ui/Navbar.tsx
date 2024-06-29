'use client'

import dynamic from 'next/dynamic';
import clsx from 'clsx'; // Conditional className functionalities
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react';

// Dynamic import for StickyHeadroom with SSR disabled
const StickyHeadroom = dynamic(() => import('@integreat-app/react-sticky-headroom'), { ssr: false });

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/pages/about' },
    { name: 'Teams', href: '/pages/teams' },
    { name: 'Gamers Lounge', href: '/pages/gamingLounge' },
    { name: 'Events', href: '/pages/events' },
];

function Navbar() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [teamsOpen, setTeamsOpen] = useState(false);
    const [expandedChar, setExpandedChar] = useState('+');

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to reset the overflow when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);
    
    const handleCloseClick = () => {
        setOpen(false);
        setTeamsOpen(false);
        setExpandedChar('+');
    }

    const handleTeamsClick = () => {
        setExpandedChar(expandedChar === '+' ? '-' : '+');
        if (expandedChar === '+') {
            setTeamsOpen(true);
        } else {
            setTeamsOpen(false);
        }
    }

    return (
        <StickyHeadroom scrollHeight={100} pinStart={0}> 
            <div className='w-screen fixed z-50 flex justify-between bg-black sm:px-[12.5vw] px-[5vw]'>
                <div className='w-1/4 flex justify-start items-center py-[1vh] lg:py-[1.5vh]'>
                    <Image src={"/real-logo.png"} alt={'PLACEHOLDER'} width={50} height={50}></Image>
                </div>
                <div id="pageSwitcher" className="w-[60vw] sm:flex hidden justify-center items-center relative">
                        {links.map((link) => {
                            if (link.name !== 'Teams') {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={clsx(
                                            'flex justify-center items-center lg:px-6 px-3 h-full hover:bg-slate-200/20 max-w-fit text-sm lg:text-xl font-bold',
                                            {
                                                'flex justify-center items-center lg:px-6 px-3 h-full bg-red-500 text-white text-sm lg:text-xl hover:bg-slate-200 font-bold max-w-fit': pathname === link.href,
                                            },
                                        )}>
                                        {link.name}
                                    </Link>
                                )    
                            }
                            return (
                                <div key={link.name} className='relative group h-full'>
                                    <Link
                                        href={link.href}
                                        className={clsx(
                                            'flex justify-center items-center lg:px-6 px-3 h-full hover:bg-slate-200/20 max-w-fit text-sm lg:text-xl font-bold',
                                            {
                                                'flex justify-center items-center lg:px-6 px-3 h-full bg-red-500 text-white text-sm lg:text-xl hover:bg-slate-200 font-bold max-w-fit': pathname === link.href,
                                            },
                                        )}>
                                        <span>
                                            {link.name}&nbsp; <FontAwesomeIcon className='text-sm lg:text-xl' icon={faCaretDown}/>
                                        </span>
                                    </Link>
                                    <div className='absolute bottom-0 translate-y-[100%] left-0 hidden group-hover:block w-[30vw] z-50'>
                                        <div className='text-xl bg-black text-white grid grid-cols-2 grid-rows-6 relative'>
                                            {['Valorant', 'League', 'TFT', 'Overwatch', 'Fighting Games', 'Fifa', 'Rainbow 6', 'Smite', 'Pokemon', 'Trading Card Games', 'COD', 'Destiny 2'].map((game, index) => (
                                                <div key={index} className='w-full h-full font-bold py-4 px-6 flex items-center justify-start'>
                                                    {game}
                                                </div>
                                            ))}
                                        </div>
                                    </div>        
                                </div>
                            );
                        })}
                </div>

                <div className='sm:hidden flex items-center relative'>
                    <FontAwesomeIcon onClick={() => setOpen(!open)} className='text-4xl' icon={faBars}/>
                    <div className={`w-[100vw] h-[100vh] absolute top-0 right-[-5vw] flex transform transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div onClick={() => handleCloseClick()} className={`flex-grow h-full bg-black/30`}></div>
                        <div className="w-[275px] h-full flex flex-col bg-black px-8 overflow-y-auto">
                            <div className='w-full h-[8vh] flex items-center box-border flex-shrink-0'>
                                <FontAwesomeIcon onClick={() => handleCloseClick()} className='text-2xl' icon={faXmark}/>
                            </div>
                            
                            {links.map((link) => {
                            if (link.name !== 'Teams') {
                                return (
                                    <div key={link.name} className='w-full h-[8vh] bg-black flex items-center justify-between box-border text-lg font-bold border-b-2 border-gray-800 flex-shrink-0'>
                                        <Link className='text-red-500' href={link.href}>{link.name}</Link>
                                    </div>
                                )    
                            }
                            return (
                                <div key={link.name} className='w-full flex flex-col items-center box-border text-lg font-bold border-b-2 border-gray-800'>
                                    <div className='w-full h-[8vh] flex items-center justify-between flex-shrink-0'>
                                        <Link className='text-red-500' href={link.href}>{link.name}</Link>
                                        <div onClick={() => handleTeamsClick()} className='text-2xl text-red-500'>{expandedChar}</div>
                                    </div>

                                    <div className='w-full flex flex-col' style={{ display: teamsOpen ? 'block' : 'none' }}>
                                        {['Valorant', 'League', 'TFT', 'Overwatch', 'Fighting Games', 'Fifa', 'Rainbow 6', 'Smite', 'Pokemon', 'Trading Card Games', 'COD', 'Destiny 2'].map((game, index) => (
                                            <div key={index} className='w-full h-[8vh] flex items-center justify-between border-b-2 border-gray-800'>
                                                {game}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            );
                        })}

                        </div>
                    </div>
                </div>


                <div className="w-1/4 sm:flex hidden justify-end items-center">
                    <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className='lg:px-6 lg:py-3 px-2 py-2 bg-red-500 max-w-fit rounded-xl text-sm lg:text-xl font-bold'>JOIN NOW</motion.button>
                </div>
            </div>
        </StickyHeadroom>
    )
}

export default Navbar;
