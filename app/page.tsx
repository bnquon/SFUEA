"use client"
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight, faSquareCaretLeft, faArrowCircleRight, faTrophy, faHeadset, faUsers, faAnglesDown } from "@fortawesome/free-solid-svg-icons"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BasicCalendar } from "./Components/Calendar";
import { Footer } from "./Components/Footer";
import { Lounge } from "./Components/Lounge";

const fadeInAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.1
        }
    }),
};

const jerseyAnimation = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };


const pictureAnimation = {
    initial: { scale: 0.2, opacity: 0 },
    animate: (index: number) => ({ scale: 1, opacity: 1, transition: { duration: 0.5, delay: index * 0.1 } }),
}

export default function Home() {    

    
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    const [isVisible, setIsVisible] = useState(true);

  	useEffect(() => {
    	const timer = setTimeout(() => {
      		setIsVisible(false);
    }, 2000); // Duration matches the total duration of the animation

    	return () => clearTimeout(timer);
  	}, []);


    useEffect(() => {
        const animation = animate(count, 3800, { duration: 2, delay: 2 });

        return animation.stop;
    }, []);

    const [headerInView, inView] = useInView({
        threshold: 0.15,
        triggerOnce: true
    })

    const [headerInView2, inView2] = useInView({
        threshold: 0.15,
        triggerOnce: true
    })

    const [atTop, setAtTop] = useState(true);
  
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY === 0) {
            setAtTop(true);
        } else {
            setAtTop(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const slider = useRef<Slider | null>(null);

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


	// NEED ANOTHER FIXED PAGE ABOVE THE GAMING TEAM PAGE TO MAKE IT SCROLL UP ON REVEAL AND HAVE THE MASK IN A FIXED CENTER POSITION

    return (
        <main className="relative">

            {/* <AnimatePresence>
				{isVisible && (
					<motion.div
					className="w-screen h-screen bg-black z-[100] flex justify-center items-center fixed top-0 left-0"
					initial={{ y: 0 }}
					animate={{ y: [0, -1500] }}
					exit={{ y: -1500 }}
					transition={{
						times: [0.5, 0.75],
						duration: 2, // Total duration
						ease: "easeInOut"
					}}
					>
					<Image
						className="z-[2]"
						src={'/real-logo.png'}
						alt="ex1"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '20%', height: 'auto' }}
					/>
					</motion.div>
				)}
			</AnimatePresence> */}

            {/* HOME PAGE */}
            <div id="container" className="w-screen h-screen flex flex-col relative items-center bg-[#d3d3d3] text-white box-border pt-[15vh] gap-[8vh]">

                <div className="w-[75vw] h-[70%] relative flex box-border">
                    <div className="flex flex-col w-[45%] justify-center relative">
                        <p className="text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 leading-tight">SFU GAMING AND ESPORTS CLUB</p>
                        <motion.p variants={fadeInAnimation} initial='initial' whileInView='animate' custom={1} viewport={{ once: true }} className="w-4/5 text-black text-xl font-medium mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation. 
                        </motion.p>

                        <div className="flex gap-8 box-border items-center p-4 pl-0">
                            <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} id="btn-grad" className="w-fit text-3xl font-bold italic mr-10">
                                <span>
                                    GAME WITH US &nbsp;
                                </span>
                            </motion.button>
                            <div className="flex flex-col text-black">
                                <motion.p className="text-3xl font-bold tabular-nums">{rounded}</motion.p>
                                <p className="text-xl font-light">Members</p>
                            </div>

                        </div>
                    </div>

                    <div className="flex w-[55%] box-border gap-4 justify-center relative">
                        {/* Right Column */}
                        <div className="w-[60%] h-full flex flex-col relative">    
                            <div className="w-full h-full flex flex-col relative box-border gap-4">
                                <motion.div variants={pictureAnimation} initial='initial' whileInView='animate' custom={1} viewport={{ once: true }} className="h-1/2 bg-black rounded-xl overflow-hidden shadow-lg">
                                    <img src="/test-min.jpg" className="h-full w-full object-cover" alt="" />
                                </motion.div>
                                {/* <div className="h-1/5 bg-black rounded-xl"></div> */}
                                <motion.div variants={pictureAnimation} initial='initial' whileInView='animate' custom={2} viewport={{ once: true }} className="h-1/2 bg-black rounded-xl overflow-hidden shadow-lg">
                                    <img src="/test2.jpg" className="h-full w-full object-cover" alt="" />
                                </motion.div>
                            </div>
                        </div>
                        
                        {/* Left Column */}
                        <div className="w-[40%] h-full flex justify-center flex-col relative box-border gap-4">
                            <motion.div variants={pictureAnimation} initial='initial' whileInView='animate' custom={3} viewport={{ once: true }} className="h-[50%] bg-black rounded-xl overflow-hidden shadow-lg"><img src="/test3-min.jpg" className="h-full w-full object-cover" alt="" /></motion.div>
                
                            <motion.div variants={pictureAnimation} initial='initial' whileInView='animate' custom={4} viewport={{ once: true }} className="h-[50%] bg-black rounded-xl overflow-hidden shadow-lg"><img src="/UNUSEDGOODPIC.jpg" className="h-full w-full object-cover" alt="" /></motion.div>
                        </div>

                    </div>

                </div>

                <div className="w-[75vw] h-[15vh] border-t-black border-t-2 flex">
                    <div className="w-1/4 flex items-center text-3xl text-black">
                        <p className="flex items-center">
                            <FontAwesomeIcon className="text-black" icon={faTrophy}/> &nbsp;
                            Tournaments
                        </p>
                    </div>
                    <div className="w-1/4 flex items-center text-3xl text-black">
                        <p className="flex items-center">
                            <FontAwesomeIcon className="text-black" icon={faHeadset}/> &nbsp;
                            In-Houses
                        </p>
                    </div>
                    <div className="w-1/4 flex items-center text-3xl text-black">
                        <p className="flex items-center">
                            <FontAwesomeIcon className="text-black" icon={faUsers}/> &nbsp;
                            In-Person Events
                        </p>
                    </div>
                    <motion.div className="w-1/4 flex items-center justify-end text-3xl text-black"
                    animate={{
                        y: [0, -10, 0] // Keyframes for the jump effect
                    }}
                    transition={{
                        duration: 1.5, // Duration for one cycle of the animation
                        repeat: Infinity, // Repeat the animation infinitely
                        repeatType: 'loop', // Loop the animation
                        ease: 'easeInOut' // Easing function
                    }}>
                        <FontAwesomeIcon className="text-black duration-200" style={{ opacity: atTop? '1': '0'}} icon={faAnglesDown}/>
                    </motion.div>
                </div>

            </div>

            {/* ABOUT US PAGE */}
            <div className="pt-[7.5vh] pb-[5vh] w-screen text-6xl flex flex-col justify-center items-center bg-[#d3d3d3]">
                <div className="w-[75vw] mb-[60px] text-black flex relative box-border overflow-hidden">
                    <div ref={headerInView} className="duration-500 w-fit pr-8 flex items-center border-r-black border-r-2 flex-shrink-0 overflow-hidden">
                        <h1 style={{ 
                            transform: inView ? 'translateY(0)' : 'translateY(100%)',
                            transition: 'transform 0.5s ease'
                            }}  className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 whitespace-nowrap">WHO WE ARE.</h1>
                    </div>
                    <div className="flex-grow flex items-center pl-8 overflow-hidden">
                        <p className="duration-500 text-xl font-semibold flex-grow">
                            The SFU Gaming and Esports Club is a student-run nonprofit organization at Simon Fraser University that fosters a vibrant gaming community for both competitive and casual players.
                        </p>
                        <span className='h-fit text-lg p-3 rounded-full flex flex-shrink-0 items-center text-white duration-200 cursor-pointer bg-black ml-4'>
                            Learn More &nbsp;
                            <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                        </span>
                    </div>
                </div>  

                <div className="w-[75vw] h-[50vh] flex justify-center gap-6 relative">
                    <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={1} viewport={{ once: true }} className="w-1/3 relative">
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
                    </motion.div>

                    <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={2} viewport={{ once: true }} className="w-1/3">
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
                    </motion.div>

                    <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={3} viewport={{ once: true }} className="w-1/3">
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
                    </motion.div>
                </div>
            </div>

            {/* GRID CONTAINER */}

            <div className="w-screen pt-[7.5vh] pb-[5vh] bg-[#d3d3d3] relative flex flex-col justify-center items-start pl-[12.5vw]">

                <div className="w-[75vw] mb-[60px] text-black flex relative box-border">
                    <div ref={headerInView2} className="w-fit pr-8 flex items-center border-r-black border-r-2 flex-shrink-0 overflow-hidden">
                        <h1 style={{ 
                            transform: inView2 ? 'translateY(0)' : 'translateY(100%)',
                            transition: 'transform 0.5s ease'
                            }} className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 whitespace-nowrap">OUR TEAMS.</h1>
                    </div>
                    <div className="flex-grow flex items-center justify-between pl-8">
                        <p className="text-xl font-semibold flex-grow">
                            Browse the games we have competitive teams, executives, or directors for!
                            The executives and directors run in-houses and events for their desired game to foster the community for each one!
                        </p>
                        <span className='h-fit text-lg p-3 rounded-full flex flex-shrink-0 items-center text-white duration-200 cursor-pointer bg-black ml-4'>
                            Learn More &nbsp;
                            <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                        </span>
                    </div>
                </div>  

                <div className="w-[calc(85vw+60px)] h-[60vh] relative flex ml-[calc(-5vw-30px)]">
                    <div className="w-[5vw] h-full items-center flex justify-center">
                        <FontAwesomeIcon className="text-5xl cursor-pointer hover:brightness-75 duration-150"
                        onClick={() => slider?.current?.slickPrev()}
                        icon={faSquareCaretLeft} style={{color: "#ff0000",}}/>
                    </div>

                    <div className="w-[calc(75vw+60px)] h-full box-border relative">
                        <Slider ref={slider} {...settings}>
                            {games.map((game, index) => (
                                <div id="game-div" key={index} className="h-[60vh] flex flex-col items-center justify-center box-border relative cursor-pointer rounded-md overflow-hidden shadow-md">
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

            <div className="pt-[7.5vh] pb-[5vh] w-screen flex flex-col justify-center items-center bg-[#d3d3d3]">
                <div className="w-[75vw] h-[35vh] flex relative rounded-xl box-border bg-gradient-to-r from-red-500 from-20% via-black to-black px-[5%] shadow-md">
                    <div className="w-[30%] h-full flex flex-col items-start justify-center box-border gap-5 text-white">
                        <p className="text-4xl font-bold">BUY A JERSEY!</p>
                        <p className="text-2xl">Club staff and competitive players get 10% off!</p>
                        <span className='w-fit text-xl px-4 py-2 mt-2 rounded-xl flex items-center bg-black text-white'>
                            SHOP NOW &nbsp;
                            <FontAwesomeIcon className='-rotate-90 text-2xl' icon={faAnglesDown}/>
                        </span>
                    </div>
                    
                    <div className="h-full relative box-border">
                        <div className="h-full flex relative box-border gap-0">
                            <div className="h-full w-1/3 relative flex">
                                <Image alt="forced" className="absolute scale-x-125 scale-y-110" src='/blackJerseyBack.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                                <Image id="front-image" alt="forced" className="hover:opacity-0 duration-200 scale-x-125 scale-y-110" src='/blackJerseyFront.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                            </div>

                            <div className="h-full w-1/3 relative flex">
                                <Image alt="forced" className="absolute  scale-x-125 scale-y-110" src='/pinkJerseyBack.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                                <Image id="front-image" alt="forced" className="hover:opacity-0 duration-200  scale-x-125 scale-y-110" src='/pinkJerseyFront.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                            </div>

                            <div className="h-full w-1/3 relative flex">
                                <Image alt="forced" className="absolute scale-x-125 scale-y-110" src='/whiteJerseyBack.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                                <Image id="front-image" alt="forced" className="hover:opacity-0 duration-200 scale-x-125 scale-y-110" src='/whiteJerseyFront.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </main>
    );
}
