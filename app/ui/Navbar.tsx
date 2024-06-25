'use client'

import dynamic from 'next/dynamic';
import clsx from 'clsx'; // Conditional className functionalities
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

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

    return (
        <StickyHeadroom scrollHeight={100} pinStart={0}> 
            <div className='w-screen fixed z-50 flex bg-black px-[12.5vw]'>
                <div className='w-1/4 flex justify-start items-center py-[1.5vh]'>
                    <Image src={"/real-logo.png"} alt={'PLACEHOLDER'} width={50} height={50}></Image>
                </div>
                <div id="pageSwitcher" className="w-1/2 flex justify-center items-center relative">
                        {links.map((link) => {
                            if (link.name !== 'Teams') {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={clsx(
                                            'flex justify-center items-center px-6 h-full hover:bg-slate-200/20 max-w-fit text-xl font-bold',
                                            {
                                                'flex justify-center items-center px-6 h-full bg-red-500 text-white text-xl hover:bg-slate-200 font-bold max-w-fit': pathname === link.href,
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
                                            'flex justify-center items-center px-6 h-full hover:bg-slate-200/20 max-w-fit text-xl font-bold',
                                            {
                                                'flex justify-center items-center px-6 h-full bg-red-500 text-white text-xl hover:bg-slate-200 font-bold max-w-fit': pathname === link.href,
                                            },
                                        )}>
                                        <span>
                                            {link.name}&nbsp; <FontAwesomeIcon className='text-xl' icon={faCaretDown}/>
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
                <div className="w-1/4 flex justify-end items-center">
                    <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className='px-6 py-3 bg-red-500 max-w-fit rounded-xl text-xl font-bold'>JOIN NOW</motion.button>
                </div>
            </div>
        </StickyHeadroom>
    )
}

export default Navbar;
