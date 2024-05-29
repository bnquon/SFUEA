'use client'

import clsx from 'clsx'; // Conditional className functionalities
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import StickyHeadroom from '@integreat-app/react-sticky-headroom'

const links = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/pages/events' },
    { name: 'Teams', href: '/pages/teams' },
    { name: 'About', href: '/pages/about' },
];

function Navbar() {
    const pathname = usePathname();

    return (
        <StickyHeadroom scrollHeight={100}> 
            <div id="container" className="fixed z-50">
                <div id="3sections" className="grid py-4 w-screen grid-rows-1 grid-cols-3">
                    <div id="logo">
                        <Image src={"/placeholderlogo.png"} alt={'PLACEHOLDER'} width={50} height={50} className="mx-6"></Image>
                    </div>

                    <div id="pageSwitcher" className="col-start-2 flex justify-center">
                        <div id="outerBorder" className="flex max-w-fit px-6 py-3 bg-slate-200/20 backdrop-blur-sm rounded-3xl gap-8 items-center">
                            { links.map((link) => {
                                return (
                                    <Link 
                                    key={ link.name }
                                    href={ link.href }
                                    className={clsx(
                                        // Render these classNames for non-selected paths
                                        'px-3 py-1 hover:bg-slate-200/20 max-w-fit rounded-xl',
                                        {
                                            // Render these classNames for selected path
                                            'px-3 py-1 bg-red-500 hover:bg-slate-200 text-neutral-800 font-bold max-w-fit rounded-xl' : pathname === link.href,
                                        },
                                    )}>
                                        { link.name }
                                    </Link>
                                )
                            })}
                            
                        </div>        
                    </div>
                </div>
            </div>
        </StickyHeadroom>   
    )
}

export default Navbar