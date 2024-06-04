"use client"

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { BasicCalendar } from "./Components/Calendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight, faSquareCaretLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
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
        dots: true,
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
            <div className="w-screen flex flex-col relative items-center bg-[#d3d3d3] text-white pt-[12.5vh] pb-[7.5vh]">
                <div className="w-[75vw] relative flex">
                    <div className="flex flex-col w-[60%] justify-center">
                        <p className="text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">SFU GAMING AND ESPORTS CLUB</p>
                        <p className="text-black text-4xl font-medium">Simon Fraser University's competitive and casual gaming community</p>
                    </div>
                    <div className="flex w-[40%] justify-end relative">
                        <img src="/real-logo.png" className="w-[40%]" alt="" />
                    </div>
                </div>

                <div className="w-[75vw] relative flex mt-4">
                    <div className="flex flex-col w-full justify-center">
                        <img src="/test-min.jpg" className="h-[45vh] rounded-3xl object-cover" alt="" />
                    </div>
                    <div id="cta-sub" className="text-black text-4xl font-bold bg-[#d3d3d3] absolute p-4 right-0">
                        <p>With over 5500 <br /> club members!</p>
                    </div>

                    <div id="cta-btn" className="text-black text-4xl font-bold bg-[#d3d3d3] absolute p-4 pl-0 bottom-0 left-0">
                        <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} id="btn-grad" className="text-3xl font-bold italic">
                            <span>
                                GAME WITH US &nbsp;
                                <FontAwesomeIcon className="-rotate-45" icon={faArrowCircleRight}/>
                            </span>
                        </motion.button>
                    </div>
                </div>

            </div>

            {/* ABOUT US PAGE */}
            <div className="pt-[7.5vh] pb-[5vh] w-screen text-6xl flex flex-col justify-center items-center bg-[#d3d3d3]">
                <div className="w-[75vw] mb-[60px] text-black flex relative box-border">
                    <div className="w-fit pr-8 flex items-center border-r-black border-r-2 flex-shrink-0">
                        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 whitespace-nowrap">WHO WE ARE.</h1>
                    </div>
                    <div className="flex-grow flex items-center pl-8 pr-2">
                        <p className="text-xl font-semibold flex-grow">
                            The SFU Gaming and Esports Club is a student-run nonprofit organization at Simon Fraser University that fosters a vibrant gaming community for both competitive and casual players.
                        </p>
                        <span className='h-fit text-xl p-3 rounded-xl flex flex-shrink-0 items-center text-white duration-200 cursor-pointer bg-black ml-4'>
                            Learn More &nbsp;
                            <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                        </span>
                    </div>
                </div>  

                <div className="w-[75vw] h-[50vh] flex justify-center gap-6 relative">
                    <div className="w-1/3 relative">
                        <article className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
                            <div className="relative w-full h-[65%]">
                                <Image src='/ex1.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                            </div>

                            <div className="bg-white p-2 sm:p-6 h-[35%] overflow-auto">

                                <h3 className="text-xl text-black">Game in the Gamers' Lounge!</h3>


                                <p className="mt-2 text-base text-gray-900">
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


                                <p className="mt-2 text-base text-gray-900">
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

                                <p className="mt-2 text-base text-gray-900">
                                    Participate in a variety of student-run events, ranging from competitive tournaments and 
                                    casual game nights to community meetups and themed gaming sessions.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            {/* GRID CONTAINER */}

            <div className="w-screen pt-[7.5vh] pb-[5vh] bg-[#d3d3d3] relative flex flex-col justify-center items-start pl-[12.5vw]">

                <div className="w-[75vw] mb-[60px] text-black flex relative box-border">
                    <div className="w-fit pr-8 flex items-center border-r-black border-r-2 flex-shrink-0">
                        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 whitespace-nowrap">GAMING TEAMS.</h1>
                    </div>
                    <div className="flex-grow flex items-center pl-8 pr-2">
                        <p className="text-xl font-semibold flex-grow">
                            Browse the games we have competitive teams, executives, or directors for!
                            The executives and directors run in-houses and events for their desired game to foster the community for each one!
                        </p>
                        <span className='h-fit text-xl p-3 rounded-xl flex flex-shrink-0 items-center text-white duration-200 cursor-pointer bg-black ml-4'>
                            Learn More &nbsp;
                            <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                        </span>
                    </div>
                </div>  

                <div className="w-[calc(85vw+40px)] h-[60vh] relative flex ml-[calc(-5vw-20px)]">
                    <div className="w-[5vw] h-full items-center flex justify-center">
                        <FontAwesomeIcon className="text-5xl cursor-pointer hover:brightness-75 duration-150"
                        onClick={() => slider?.current?.slickPrev()}
                        icon={faSquareCaretLeft} style={{color: "#ff0000",}}/>
                    </div>

                    <div className="w-[calc(75vw+40px)] h-full box-border relative">
                        <Slider ref={slider} {...settings}>
                            {games.map((game, index) => (
                                <div id="game-div" key={index} className="h-[60vh] flex flex-col items-center justify-center box-border relative cursor-pointer rounded-md overflow-hidden">
                                    <p id="game-title" className="z-10 flex justify-center items-end pb-[15%] pl-5 pr-5 absolute bottom-0 w-full text-4xl font-bold text-center h-[30%] bg-gradient-to-t from-red-600">{game.title}</p>
                                    <p className="z-10 absolute top-0 w-full h-[8%] bg-gradient-to-b from-red-500"></p>
                                    <Image 
                                        id="game-pic"
                                        className="duration-300"
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
