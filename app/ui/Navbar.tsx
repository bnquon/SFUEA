'use client'

import clsx from 'clsx'; // Conditional className functionalities
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import StickyHeadroom from '@integreat-app/react-sticky-headroom'

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/pages/about' },
    { name: 'Teams', href: '/pages/teams' },
    { name: "Gamers Lounge", href: '/pages/gamingLounge' },
    { name: 'Events', href: '/pages/events' },
];

function Navbar() {
    const pathname = usePathname();

    return (
        <StickyHeadroom scrollHeight={100}> 
            <div className='w-screen fixed z-30 flex bg-black px-[12.5vw] py-[1.5vh]'>
                <div className='w-1/4 flex justify-start items-center'>
                    <Image src={"/real-logo.png"} alt={'PLACEHOLDER'} width={50} height={50}></Image>
                </div>
                <div id="pageSwitcher" className="w-1/2 flex justify-center items-center">
                    <div id="outerBorder" className="flex max-w-fit px-6 py-3 bg-slate-200/20 backdrop-blur-sm rounded-[20px] gap-8 items-center">
                        {links.map((link) => {
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        // Render these classNames for non-selected paths
                                        'px-3 py-1 hover:bg-slate-200/20 max-w-fit rounded-xl text-xl font-bold',
                                        {
                                            // Render these classNames for selected path
                                            'px-3 py-1 bg-red-500 text-black hover:bg-slate-200 font-bold max-w-fit rounded-xl': pathname === link.href,
                                        },
                                    )}>
                                    {link.name}
                                </Link>
                            )
                        })}
                    </div>        
                </div>

                <div className="w-1/4 flex justify-end items-center">
                    <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className='px-6 py-3 bg-red-500 max-w-fit rounded-xl text-xl font-bold'>JOIN NOW</motion.button>
                </div>
            </div>
        </StickyHeadroom>
    )
}

export default Navbar;
