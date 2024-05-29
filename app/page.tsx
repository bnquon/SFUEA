"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';

export default function Home() {

    const [mousePosition, setMousePosition] = useState(0);

    const handleScroll = () => {
        setMousePosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.2,
    });

    if (inView) {
        console.log(inView);
    }

    return (
        <main className="relative">
            <div className="h-screen w-screen fixed top-0 z-10">
                <motion.div  
                    animate={{
                        WebkitMaskSize: `${mousePosition*3}px`,
                    }}
                    id="mask" className="h-screen w-screen text-6xl flex justify-center items-center absolute top-0 bg-emerald-500"> 
                    <p className="w-1/2"> A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.</p>
                </motion.div >

                <div className="h-screen w-screen text-6xl flex justify-center items-center bg-blue-500">
                    <p className="w-1/2">I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
                </div>

            </div>
            <div className="h-screen w-screen bg-black flex justify-center items-center absolute top-[100vh]">
                SAMPLE TEXT SAMPLE TEXT
            </div>
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