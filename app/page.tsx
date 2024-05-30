"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export default function Home() {

    type Game = {
        title: string;
        picture: string;
    }

    const games: Game[] = [
        {
            title: "Valorant",
            picture: '/val.jpg'
        },
        {
            title: "League of Legends",
            picture: '/crank.jpg'
        },
        {
            title: "TFT",
            picture: '/tft.jpg'
        }
    ];

    const count = useMotionValue(1000)
    const rounded = useTransform(count, Math.round);
    const [mousePosition, setMousePosition] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY - 1.15*window.innerHeight;
        console.log(scrollPosition);
        setMousePosition(scrollPosition > 0 ? scrollPosition : 0);
    };

    useEffect(() => {
        const animation = animate(count, 5500, {
            duration: 3
        })

        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <main className="relative">

            <div className="h-screen w-screen bg-black flex flex-col justify-center items-center relative text-white text-center">
                <p className="text-5xl font-normal mb-8">JOIN SFU'S LARGEST GAMING CLUB <br /> WITH OVER <motion.span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">{rounded}</motion.span> MEMBERS</p>
                <motion.button whileTap={{scale: 0.95}} whileHover={{scale: 1.05}} id="btn-grad" className="text-3xl font-bold">GAME WITH US</motion.button>
            </div>

            <div className="h-screen w-screen sticky top-0 z-0">

                {/* THIS MOTION DIV IS THE PAGE UNDERNEATH */}

                <motion.div  
                    style={{
                        zIndex: mousePosition > 0? '10': '-10',
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
                    <Image className="absolute top-[40vh] left-1/2 -translate-x-1/2" src='/racc.png' height={120} width={120} alt="racc"></Image>
                    <p className="absolute top-[20vh] left-1/2 -translate-x-1/2 text-8xl text-white font-bold">GAMING TEAMS</p>
                    <div className="w-[80vw] h-[40vh] absolute bottom-[10vh] bg-slate-200 flex gap-3">
                        {games.map((game, index) => (
                            <div key={index} id="game-card" className="relative w-[12vw] duration-300 cursor-pointer hover:w-[20vw]">
                                <Image id="game-picture" className="w-full h-full object-cover brightness-50 hover:brightness-100" src={game.picture} alt={game.title} layout="fill" />
                                {/* I WANT VERTICAL TEXT LIKE BOOKS */}
                                <h2 className="absolute bottom-0 left-0 h-full bg-black bg-opacity-50 text-white text-center px-2 font-semibold" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{game.title}</h2>
                            </div>
                        ))}
                    </div>
                </motion.div >

                {/* THIS DIV IS THE PAGE ONTOP */}
                
                <div className="h-screen w-screen text-6xl flex flex-col justify-center items-center bg-[#e5e5e5]">
                    <div className="w-1/2 mb-10 mr-[27%] text-black">
                        <h1 className="text-7xl font-bold mb-6">ABOUT US.</h1>
                        <p className="text-xl w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus sapiente commodi. Aliquid sunt tempore iste repellendus explicabo dignissimos placeat, autem harum dolore reprehenderit quis! Quo totam dignissimos earum.</p>
                    </div>

                    <div className="w-screen h-[40vh] flex justify-center gap-6 relative">
                        <div className="w-[25%] bg-white text-2xl text-black p-5 shadow-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className="w-[25%] bg-white text-2xl text-black p-5 shadow-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className="w-[25%] bg-white text-2xl text-black p-5 shadow-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    
                </div>

            </div>

            {/* THIS DIV IS THE PAGE BELOW NEEDED FOR MORE SCROLLING SPACE */}

            <div className="h-screen w-screen bg-transparent flex justify-center items-center relative -z-40"></div>

        </main>
    );
}