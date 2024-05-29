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
                        display: mousePosition > 0? 'block': 'none'
                    }}
                    animate={{
                        WebkitMaskSize: `${mousePosition*3}px`,
                    }}
                    transition={{ type: "spring",
                    ease: "easeOut",
                    stiffness: 0, 
                    damping: 0 }}
                    id="mask" className="h-screen w-screen text-6xl flex justify-center items-center absolute top-0 bg-emerald-500"> 
                    <Image src='/racc.png' height={80} width={80} alt="racc"></Image>
                </motion.div >

                <div className="h-screen w-screen text-6xl flex justify-center items-center bg-blue-500">
                    <p className="w-1/2">I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
                </div>

            </div>

            <div className="h-screen w-screen bg-transparent flex justify-center items-center relative"></div>

        </main>
    );
}

{/* <div id="section1" className="h-screen w-screen bg-blue-500 flex justify-center items-center relative">
                Raleway
                RALEWAY
                section1
            </div>

            <div className="sticky top-0 h-screen bg-red-500 flex justify-center items-center z-10">
                SAMPLE TEXT SAMPLE TEXT
                <div className="w-28 h-28 rounded-full bg-white overflow-hidden flex justify-center items-end absolute duration-300" style={{opacity: inView? '1': '0'}}>
                    <Image src='/racc.png' width={75} height={60} alt="raccoon"></Image>
                </div>   
            </div>

            <div ref={ref} className="h-screen w-screen bg-blue-500 flex justify-center items-center relative">
                SAMPLE TEXT SAMPLE TEXT
            </div> */}