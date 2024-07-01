'use client'

import dynamic from 'next/dynamic';
import clsx from 'clsx'; // Conditional className functionalities
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react';

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
            document.documentElement.classList.add('side-nav-open');
        }

        return () => {
            document.documentElement.classList.remove('side-nav-open');
        }
    }, [open]);
    
    const handleCloseClick = () => {
        setOpen(false);
        setTimeout(() => {
            setTeamsOpen(false);
            setExpandedChar('+');
        }, 500);
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
        <StickyHeadroom scrollHeight={120} pinStart={0}> 
            <div className='w-screen fixed z-[999999] flex justify-between bg-black sm:px-[12.5vw] px-[5vw]'>
                <div className='w-1/4 flex justify-start items-center py-[1vh] lg:py-[1.5vh]'>
                    <Image src={"/real-logo.png"} alt={'PLACEHOLDER'} width={60} height={60}></Image>
                </div>
                <div id="pageSwitcher" className="w-[60vw] sm:flex hidden justify-center items-center relative z-[99999999999999]">
                        {links.map((link) => {
                            if (link.name !== 'Teams') {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={clsx(
                                            'flex justify-center items-center lg:px-6 px-3 h-full hover:bg-slate-800 max-w-fit text-lg lg:text-xl xl:text-2xl font-bold z-[999999]',
                                            {
                                                'flex justify-center items-center lg:px-6 px-3 h-full bg-red-500 text-white text-lg lg:text-xl xl:text-2xl hover:bg-slate-200 font-bold max-w-fit z-[999999]': pathname === link.href,
                                            },
                                        )}>
                                        {link.name}
                                    </Link>
                                )    
                            }
                            return (
                                <div key={link.name} className='relative group h-full z-[999999]'>
                                    <Link
                                        href={link.href}
                                        className={clsx(
                                            'flex justify-center items-center lg:px-6 px-3 h-full hover:bg-slate-800 max-w-fit text-lg lg:text-xl xl:text-2xl font-bold z-[999999]',
                                            {
                                                'flex justify-center items-center lg:px-6 px-3 h-full bg-red-500 text-white text-lg lg:text-xl xl:text-2xl hover:bg-slate-200 font-bold max-w-fit z-[999999]': pathname === link.href,
                                            },
                                        )}>
                                        <span>
                                            {link.name}&nbsp; <FontAwesomeIcon className='text-base lg:text-xl z-[999999]' icon={faCaretDown}/>
                                        </span>
                                    </Link>
                                    <div className='absolute bottom-0 translate-y-[100%] left-0 hidden group-hover:block w-[30vw] z-[999999]'>
                                        <div className='text-lg lg:text-xl xl:text-2xl bg-black text-white grid grid-cols-2 grid-rows-6 relative'>
                                            {['Valorant', 'League of Legends', 'TFT', 'Overwatch', 'Fighting Games', 'FIFA', 'Rainbow Six Siege', 'Smite', 'Pokemon', 'Trading Card Games', 'Call of Duty', 'Destiny 2'].map((game, index) => (
                                                <Link href={`${link.href}#${game}`}  key={index}>
                                                    <div className='w-full h-full font-bold lg:py-6 py-2 lg:px-6 px-3 flex items-center justify-start hover:bg-slate-800 duration-150'>
                                                        {game}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>        
                                </div>
                            );
                        })}
                </div>

                <div id='mobile-nav' className='sm:hidden flex items-center relative z-[999999]'>
                    <FontAwesomeIcon onClick={() => setOpen(!open)} className='text-4xl' icon={faBars}/>
                        
                        <div className={`w-[100vw] h-[100dvh] fixed top-0 right-0 flex transform transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div onClick={() => handleCloseClick()} className={`flex-grow h-full bg-black/30`}></div>
                            <div className="w-[250px] h-full flex flex-col bg-black px-8 overflow-y-auto">
                                <div className='w-full h-[8vh] flex items-center box-border flex-shrink-0'>
                                    <FontAwesomeIcon onClick={() => handleCloseClick()} className='text-xl text-red-500' icon={faXmark}/>
                                </div>
                                
                                {links.map((link) => {
                                if (link.name !== 'Teams') {
                                    return (
                                        <div key={link.name} className='w-full h-[8vh] bg-black flex items-center justify-between box-border text-lg font-bold border-b-2 border-gray-800 flex-shrink-0'>
                                            <Link onClick={() => handleCloseClick()} className='text-red-500' href={link.href}>{link.name}</Link>
                                        </div>
                                    )    
                                }
                                return (
                                    <div key={link.name} className='w-full flex flex-col items-center box-border text-lg font-bold'>
                                        <div className='w-full h-[8vh] flex items-center justify-between flex-shrink-0 border-b-2 border-gray-800'>
                                            <Link onClick={() => handleCloseClick()} className='text-red-500' href={link.href}>{link.name}</Link>
                                            <div onClick={() => handleTeamsClick()} className='text-2xl text-red-500'>{expandedChar}</div>
                                        </div>

                                        <div className='w-full flex flex-col' style={{ display: teamsOpen ? 'block' : 'none' }}>
                                            {['Valorant', 'League of Legends', 'TFT', 'Overwatch', 'Fighting Games', 'FIFA', 'Rainbow Six Siege', 'Smite', 'Pokemon', 'Trading Card Games', 'Call of Duty', 'Destiny 2'].map((game, index) => (
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


                <div className="w-1/4 sm:flex hidden justify-end items-center z-[999999]">
                    <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className='lg:px-6 lg:py-3 px-2 py-3 bg-red-500 max-w-fit rounded-xl text-base lg:text-xl xl:text-2xl font-bold'>JOIN NOW</motion.button>
                </div>
            </div>
        </StickyHeadroom>
    )
}

export default Navbar;
function componentDidMount() {
    throw new Error('Function not implemented.');
}

