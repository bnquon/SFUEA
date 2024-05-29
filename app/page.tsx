"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

export default function Home() {

    const [mousePosition, setMousePosition] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY - 1.15*window.innerHeight;
        console.log(scrollPosition);
        setMousePosition(scrollPosition > 0 ? scrollPosition : 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <main className="relative">

            <div className="h-screen w-screen bg-black flex flex-col justify-center items-center relative text-white text-center">
                <p className="text-5xl font-semibold mb-8">JOIN SFU'S LARGEST GAMING CLUB <br /> WITH OVER <span className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">5500</span> MEMBERS</p>
                <button id="btn-grad" className="text-3xl font-bold">GAME WITH US</button>
            </div>

            <div className="h-screen w-screen sticky top-0 z-0">
                <motion.div  
                    style={{
                        visibility: mousePosition > 0? 'visible': 'hidden'
                    }}
                    animate={{
                        WebkitMaskSize: `${mousePosition*3.5}px`,
                    }}
                    transition={{ type: "spring",
                    ease: "easeOut",
                    stiffness: 0, 
                    damping: 0 }}
                    id="mask" className="h-screen w-screen text-6xl flex justify-center items-center absolute top-0 bg-[#131313]"> 
                    <Image src='/racc.png' height={80} width={80} alt="racc"></Image>
                </motion.div >

                <div className="h-screen w-screen text-6xl flex justify-center items-center bg-[#C0C0C0]">
                    <p className="w-1/2 text-[#131313]">I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
                </div>

            </div>

            <div className="h-screen w-screen bg-transparent flex justify-center items-center relative"></div>

        </main>
    );
}