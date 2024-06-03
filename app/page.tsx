"use client"

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { BasicCalendar } from "./Components/Calendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight, faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./Components/Footer";
import { Lounge } from "./Components/Lounge";

export default function Home() {    

    const slider = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    };

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
        },
		{
			title: 'Overwatch',
			picture: '/overwatch.jpeg'
		},
        {
            title: 'Fighting Games',
            picture: '/fighting.jpg'
        },
        {
            title: 'Trading Card Games',
            picture: '/pokemon.jpg'
        },
        {
            title: 'Destiny 2',
            picture: '/destiny.jpg'
        },
        {
            title: 'Rainbow Six Siege',
            picture: '/r6.jpg'
        },
        {
            title: 'FIFA',
            picture: '/fifa.jpg'
        },
        {
            title: 'Call of Duty',
            picture: '/cod.jpg'
        },
        {
            title: 'Smite',
            picture: '/smite.jpg'
        },
        {
            title: 'Pokemon',
            picture: '/pokemon1.jpg'
        }
    ];

    const count = useMotionValue(1000);
    const rounded = useTransform(count, Math.round);
    const [mousePosition, setMousePosition] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY - 1.15 * window.innerHeight;
        console.log(scrollPosition);
        setMousePosition(scrollPosition > 0 ? scrollPosition : 0);
    };

    useEffect(() => {
        const animation = animate(count, 5500, {
            duration: 3
        });

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

	// NEED ANOTHER FIXED PAGE ABOVE THE GAMING TEAM PAGE TO MAKE IT SCROLL UP ON REVEAL AND HAVE THE MASK IN A FIXED CENTER POSITION

    return (
        <main className="relative">

            {/* HOME PAGE */}
            <div className="h-screen w-screen flex flex-col justify-center items-center relative text-white text-center">
                <Image src='/homebg.png' alt="homebg" width={0} height={0} className="absolute top-0 left-0 -z-10 scale-125" sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                <p className="text-5xl font-normal mb-8">
                    JOIN SFU'S LARGEST GAMING CLUB <br />
                    WITH OVER <motion.span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">{rounded}</motion.span> MEMBERS
                </p>
                <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} id="btn-grad" className="text-3xl font-bold italic">GAME WITH US</motion.button>
            </div>

            {/* ABOUT US PAGE */}
            <div className="h-screen w-screen text-6xl flex flex-col justify-center items-center bg-[#d3d3d3]">
                <div className="w-[75vw] mb-10 text-black">
                    <h1 className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">ABOUT US.</h1>
                    <p className="text-xl font-semibold w-2/5">
                        The SFU Gaming and Esports Club is a student-run nonprofit organization at Simon Fraser University that fosters a vibrant gaming community for both competitive and casual players. 
                        Join us for exciting tournaments, in-houses, in-person events, and more!
                    </p>
                </div>

                <div className="w-[75vw] h-[50vh] flex justify-center gap-6 relative">
                    <div className="w-1/3 relative">
                        <article className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
                            <div className="relative w-full h-[65%]">
                                <Image src='/ex1.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                            </div>

                            <div className="bg-white p-2 sm:p-6 h-[35%] overflow-auto">

                                <h3 className="text-xl text-black">Game in the Gamers' Lounge!</h3>


                                <p className="mt-2 text-base text-gray-500">
                                Drop into the Gamer' Lounge on campus to play on one of our 16 high-performance PCs or enjoy console gaming on a big-screen TV.
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
                            <div className="relative w-full h-[65%]">
                                <Image src='/ex2.jpg' alt="ex2" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                            </div>

                            <div className="bg-white p-2 sm:p-6 h-[35%] overflow-auto">

                                <h3 className="text-xl text-black">Connect with Like-Minded Gamers!</h3>


                                <p className="mt-2 text-base text-gray-500">
                                    Forge friendships and bond over shared interests at our gatherings. 
                                    Join us for lively conversations, and the chance to meet others who share your passion for gaming.
                                </p>
                            </div>
                        </article>
                    </div>

                    <div className="w-1/3">
                        <article className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
                            <div className="relative w-full h-[65%]">
                                <Image src='/ex3.jpg' alt="ex3" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                            </div>

                            <div className="bg-white p-2 sm:p-6 h-[35%] overflow-auto">

                                <h3 className="text-xl text-black">Engage in Diverse Student-Run Events!</h3>

                                <p className="mt-2 text-base text-gray-500">
                                    Participate in a variety of student-run events, ranging from competitive tournaments and 
                                    casual game nights to community meetups and themed gaming sessions.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            {/* GRID CONTAINER */}
            <div className="w-screen h-screen bg-[#131313] relative flex flex-col justify-center items-start pl-[12.5vw]">
                <h1 className="w-[75%] text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">
                    GAMING TEAMS.
                </h1>

                <p className="text-xl font-semibold mb-10 w-2/5">
                    Browse the games we have competitive teams, executives, or directors for!
                    The executives and directors run in-houses and events for their desired game to foster the community for each one!
                </p>

                <div className="w-[calc(85vw+40px)] h-[60vh] relative flex ml-[calc(-5vw-20px)]">
                    <div className="w-[5vw] h-full items-center flex justify-center">
                        <FontAwesomeIcon className="text-5xl cursor-pointer hover:brightness-75 duration-150"
                        onClick={() => slider?.current?.slickPrev()}
                        icon={faSquareCaretLeft} style={{color: "#ff0000",}}/>
                    </div>

                    <div className="w-[calc(75vw+40px)] h-full box-border relative">
                        <Slider ref={slider} {...settings}>
                            {games.map((game, index) => (
                                <div key={index} className="h-[60vh] flex flex-col items-center justify-center box-border relative cursor-pointer">
                                    <p id="game-title" className="z-10 flex justify-center items-end pb-[15%] pl-5 pr-5 absolute bottom-0 w-full text-4xl font-bold text-center h-[30%] bg-gradient-to-t from-red-600">{game.title}</p>
                                    <p className="z-10 absolute top-0 w-full h-[8%] bg-gradient-to-b from-red-500"></p>
                                    <Image 
                                        src={game.picture} 
                                        alt={game.title} 
                                        layout="fill" 
                                        objectFit="cover" 
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="w-[5vw] h-full items-center flex justify-center">
                        <FontAwesomeIcon className="text-5xl cursor-pointer hover:brightness-75 duration-150"
                        onClick={() => slider?.current?.slickNext()}
                        icon={faSquareCaretRight} style={{color: "#ff0000",}}/>
                    </div>
                </div>


            </div>
            
            
            <Lounge/>

            <BasicCalendar/>

            <Footer/>

        </main>
    );
}
