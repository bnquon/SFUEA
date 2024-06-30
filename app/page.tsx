"use client"
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight, faSquareCaretLeft, faArrowCircleRight, faTrophy, faHeadset, faUsers, faAnglesDown } from "@fortawesome/free-solid-svg-icons"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BasicCalendar } from "./Components/Calendar";
import { Footer } from "./Components/Footer";
import { Lounge } from "./Components/Lounge";
import Faq from "react-faq-component";
import '@fortawesome/fontawesome-svg-core/styles.css'

import SEO from "./Components/seo";

const data = {
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};


const config = {
    animate: true,
    expandIcon: "+",
    collapseIcon: "-",
};

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

const iconAnimation = {
    initial: { opacity: 0, x: -100 },
    animate: (index: number) => ({
        opacity: 1, 
        x: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.1
        }
    }),
};

const pictureAnimation = {
    initial: { scale: 0.2, opacity: 0 },
    animate: (index: number) => ({ scale: 1, opacity: 1, transition: { duration: 0.5, delay: index * 0.1 } }),
}

// TODO: Make headers their own component, change the gamers lounge card text size, fix jersey card

export default function Home() {    

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getResponsiveStyles = () => {
        if (windowWidth >= 1200) { // lg breakpoint
          return {
            rowContentTextSize: '16px',
            rowTitleTextSize: '24px',
          };
        } else if (windowWidth >= 610) { // sm breakpoint
          return {
            rowContentTextSize: '14px',
            rowTitleTextSize: '20px',
          };
        } else {
          return {
            rowContentTextSize: '14px',
            rowTitleTextSize: '16px',
          };
        }
      };

        const styles = {
        bgColor: '#d3d3d3',
        titleTextColor: "black",
        rowTitleColor: "black",
        rowContentPaddingTop: '8px',
        rowContentPaddingBottom: '8px',
        ...getResponsiveStyles(),
      };

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
        let height;
        if (typeof window !== 'undefined') { 
            height = window.scrollY;
        }
        
        if (height === 0) {
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
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: true,
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  autoplay: true,
                  autoplaySpeed: 4000,
                  dots: true,
                }
              },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: false,
              }
            }
        ]
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

    return (
        <>
            <main id="mainPage" className="relative">
                <SEO></SEO>

                {/* HOME PAGE */}
                <div id="container" className="w-screen h-screen flex flex-col items-center relative bg-[#d3d3d3] text-white box-border sm:pt-[18vh] pt-[18vh] sm:gap-[8vh] gap-[4vh]">

                    <div className="w-[90vw] sm:w-[75vw] lg:h-[70%] relative flex lg:flex-row flex-col box-border lg:gap-0 gap-10">
                        <div className="flex flex-col lg:w-[45%] w-[100%] lg:text-left text-center justify-center relative lg:pr-6">
                            <p className="text-4xl sm:text-6xl xl:text-7xl font-bold sm:mb-8 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 leading-tight">SFU GAMING AND ESPORTS CLUB</p>
                            <p className="w-full lg:w-full text-black text-base sm:text-xl font-medium sm:mb-8 mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation. 
                            </p>

                            <div className="flex gap-8 box-border items-center lg:justify-start justify-center">
                                <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} id="btn-grad" className="w-fit lg:px-6 lg:py-4 px-4 py-3 text-lg sm:text-2xl font-bold italic sm:mr-8">
                                    <span>
                                        GAME WITH US &nbsp;
                                    </span>
                                </motion.button>
                                <div className="flex flex-col text-black">
                                    <p className="sm:text-3xl text-2xl font-bold">3800+</p>
                                    <p className="sm:text-xl text-lg font-light">Members</p>
                                </div>

                            </div>
                        </div>

                        <div className="flex w-full lg:w-[55%] sm:w-full box-border gap-4 justify-center relative">
                            {/* Right Column */}
                            <div className="lg:w-[60%] sm:w-[50%] w-full h-full flex flex-col relative">    
                                <div className="w-full h-full flex flex-col relative box-border gap-4">
                                    <motion.div 
                                        variants={pictureAnimation} 
                                        initial='initial' 
                                        whileInView='animate' 
                                        custom={1} 
                                        viewport={{ once: true }} 
                                        className="h-1/2 bg-black rounded-xl overflow-hidden shadow-lg"
                                    >
                                        <img src="/test-min.JPG" className="h-full w-full object-cover" alt="" />
                                    </motion.div>
                                    <motion.div 
                                        variants={pictureAnimation} 
                                        initial='initial' 
                                        whileInView='animate' 
                                        custom={3} 
                                        viewport={{ once: true }} 
                                        className="h-1/2 bg-black rounded-xl overflow-hidden shadow-lg"
                                    >
                                        <img src="/test2.JPG" className="h-full w-full object-cover" alt="" />
                                    </motion.div>
                                </div>
                            </div>
                            
                            {/* Left Column */}
                            <div className="lg:w-[40%] sm:w-[50%] w-0 lg:flex sm:flex flex-col hidden relative box-border gap-4">
                                <motion.div 
                                    variants={pictureAnimation} 
                                    initial='initial' 
                                    whileInView='animate' 
                                    custom={5} 
                                    viewport={{ once: true }} 
                                    className="h-[50%] bg-black rounded-xl overflow-hidden shadow-lg"
                                >
                                    <img src="/test3-min.JPG" className="h-full w-full object-cover" alt="" />
                                </motion.div>
                                <motion.div 
                                    variants={pictureAnimation} 
                                    initial='initial' 
                                    whileInView='animate' 
                                    custom={7} 
                                    viewport={{ once: true }} 
                                    className="h-[50%] bg-black rounded-xl overflow-hidden shadow-lg"
                                >
                                    <img src="/UNUSEDGOODPIC.JPG" className="h-full w-full object-cover" alt="" />
                                </motion.div>
                            </div>
                        </div>


                    </div>

                    <div className="sm:w-[75vw] w-[90vw] sm:h-[15vh] border-t-black border-t-2 flex lg:pt-0 pt-4">
                        <div className="w-1/3 flex items-center sm:justify-start justify-center xl:text-3xl sm:text-2xl text-base text-black">
                            <motion.p variants={iconAnimation} initial='initial' whileInView='animate' custom={5} viewport={{ once: true }} className="flex sm:flex-row flex-col items-center">
                                <FontAwesomeIcon className="text-black" icon={faTrophy}/> &nbsp;
                                Tournaments
                            </motion.p>
                        </div>
                        <div className="w-1/3 flex items-center justify-center xl:text-3xl sm:text-2xl text-base text-black">
                            <motion.p variants={iconAnimation} initial='initial' whileInView='animate' custom={7} viewport={{ once: true }} className="flex sm:flex-row flex-col items-center">
                                <FontAwesomeIcon className="text-black" icon={faHeadset}/> &nbsp;
                                In-Houses
                            </motion.p>
                        </div>
                        <div className="w-1/3 flex items-center sm:justify-end justify-center xl:text-3xl sm:text-2xl text-base text-black">
                            <motion.p variants={iconAnimation} initial='initial' whileInView='animate' custom={9} viewport={{ once: true }} className="flex sm:flex-row flex-col items-center">
                                <FontAwesomeIcon className="text-black" icon={faUsers}/> &nbsp;
                                Events
                            </motion.p>
                        </div>
                    </div>

                </div>

                {/* ABOUT US PAGE */}
                <div className="lg:pt-[8vh] sm:pt-[70vh] pt-[60vh] pb-[5vh] w-screen text-6xl flex flex-col justify-center items-center bg-[#d3d3d3]">

                    <div className="sm:w-[75vw] w-[90vw] mb-[60px] text-black xl:flex xl:flex-row sm:grid sm:grid-cols-[auto] sm:grid-rows-2 flex flex-col relative box-border">
                        <div ref={headerInView2} className="col-span-2 row-span-1 duration-500 xl:w-fit w-full xl:pr-8 pr-0 flex items-center justify-start xl:border-r-black border-r-0 xl:border-r-2 xl:border-b-0 flex-shrink-0 overflow-hidden">
                            <h1 
                            style={{ 
                            transform: inView2 ? 'translateY(0)' : 'translateY(100%)',
                            transition: 'transform 0.5s ease'
                            }}
                            className="sm:text-7xl text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">
                                WHO WE ARE.
                            </h1>
                        </div>
                        <div className="col-span-1 row-start-2 lg:flex lg:flex-grow overflow-hidden items-center justify-start sm:text-xl text-base">
                            <p className="font-semibold box-border xl:pl-8 xl:pr-4 xl:pt-0 pr-2 pt-2">
                                The SFU Gaming and Esports Club is a student-run nonprofit organization at Simon Fraser University that fosters a vibrant gaming community for both competitive and casual players.
                            </p>
                        </div>
                        <div className="w-fit flex flex-grow flex-shrink-0 items-center justify-start sm:mt-0 mt-2">
                            <span className='h-fit sm:text-lg text-base p-2 sm:p-3 rounded-full flex flex-shrink-0 flex-grow items-center text-white duration-200 cursor-pointer bg-black'>
                                Learn More &nbsp;
                                <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                            </span>
                        </div>
                    </div>

                    

                    <div className="sm:w-[75vw] w-[90vw] flex sm:flex-row flex-col justify-center gap-6 relative">
                        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={1} viewport={{ once: true }} className="w-full lg:w-1/3 relative">
                            <article className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
                                <div className="relative w-full lg:h-[35vh] h-[25vh]">
                                    <Image src='/ex1.JPG' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                                </div>

                                <div className="bg-white p-4 sm:p-6 lg:h-fit xl:h-[35%] overflow-hidden flex flex-col flex-grow">

                                    <h3 className="sm:text-xl text-lg text-black">Game in the Gamers&apos; Lounge!</h3>


                                    <p className="mt-2 sm:text-base text-sm text-gray-900">
                                    Drop into the Gamers&apos; Lounge on campus to play on one of our 16 high-performance PCs or enjoy console gaming on a big-screen TV.
                                    </p>
                                </div>
                            </article>
                        </motion.div>

                        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={3} viewport={{ once: true }} className="w-full lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
                                <div className="relative w-full lg:h-[35vh] h-[25vh]">
                                    <Image src='/ex2.JPG' alt="ex2" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                                </div>

                                <div className="bg-white p-4 sm:p-6 lg:h-fit xl:h-[35%] overflow-hidden flex flex-col flex-grow">

                                    <h3 className="sm:text-xl text-lg text-black">Connect with Like-Minded Gamers!</h3>


                                    <p className="mt-2 sm:text-base text-sm text-gray-900">
                                        Forge friendships and bond over shared interests at our gatherings. 
                                        Join us for the chance to meet others who share your passion for gaming.
                                    </p>
                                </div>
                            </article>
                        </motion.div>

                        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={5} viewport={{ once: true }} className="w-full lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
                                <div className="relative w-full lg:h-[35vh] h-[25vh]">
                                    <Image src='/ex3.jpg' alt="ex3" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                                </div>

                                <div className="bg-white p-4 sm:p-6 lg:h-fit xl:h-[35%] overflow-hidden flex flex-col flex-grow">

                                    <h3 className="sm:text-xl text-lg text-black">Engage in Diverse Student-Run Events!</h3>

                                    <p className="mt-2 sm:text-base text-sm text-gray-900">
                                        Participate in a variety of student-run events, ranging from competitive tournaments and 
                                        casual game nights to community meetups.
                                    </p>
                                </div>
                            </article>
                        </motion.div>
                    </div>
                </div>

                {/* GRID CONTAINER */}

                <div className="lg:pt-[8vh] sm:pt-[0vh] pb-[5vh] w-screen text-6xl flex flex-col justify-center items-center bg-[#d3d3d3]">

                    <div className="">

                        <div className="sm:w-[75vw] w-[90vw] text-black xl:flex xl:flex-row sm:grid sm:grid-cols-[auto] sm:grid-rows-2 flex flex-col relative box-border mb-8">
                            <div ref={headerInView} className="col-span-2 row-span-1 duration-500 xl:w-fit w-full xl:pr-8 pr-0 flex items-center justify-start xl:border-r-black border-r-0 xl:border-r-2 xl:border-b-0 flex-shrink-0 overflow-hidden">
                                <h1 
                                style={{ 
                                transform: inView ? 'translateY(0)' : 'translateY(100%)',
                                transition: 'transform 0.5s ease'
                                }}
                                className="sm:text-7xl text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 whitespace-nowrap">
                                    OUR TEAMS.
                                </h1>
                            </div>
                            <div className="col-span-1 row-start-2 lg:flex lg:flex-grow overflow-hidden items-center justify-start sm:text-xl text-base">
                                <p className="font-semibold box-border xl:pl-8 xl:pr-4 xl:pt-0 pr-6 pt-2">
                                    Browse the games we have competitive teams, executives, or directors for!
                                    The executives and directors run in-houses and events for their desired game!
                                </p>
                            </div>
                            <div className="w-fit flex flex-grow flex-shrink-0 items-center justify-start sm:mt-0 mt-2">
                                <span className='h-fit sm:text-lg text-base p-2 sm:p-3 rounded-full flex flex-shrink-0 flex-grow items-center text-white duration-200 cursor-pointer bg-black'>
                                    Learn More &nbsp;
                                    <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[calc(85vw+60px)] h-[60vh] relative flex justify-center">
                        <div className="sm:w-[5vw] w-[10vw] h-full items-center flex justify-center">
                            <FontAwesomeIcon className="sm:text-5xl text-3xl cursor-pointer hover:brightness-75 duration-150"
                            onClick={() => slider?.current?.slickPrev()}
                            icon={faSquareCaretLeft} style={{color: "#ff0000",}}/>
                        </div>

                        <div className="sm:w-[calc(75vw+60px)] w-[70vw] h-full box-border relative">
                            <Slider ref={slider} {...settings}>
                                {games.map((game, index) => (
                                    <div id="game-div" key={index} className="h-[60vh] flex flex-col items-center justify-center box-border relative cursor-pointer rounded-md overflow-hidden shadow-md">
                                        <p id="game-title" className="z-10 flex justify-center items-end pb-[15%] pl-5 pr-5 absolute bottom-0 w-full sm:text-4xl text-3xl font-bold text-center h-[30%] bg-gradient-to-t from-red-600 text-white">{game.title}</p>
                                        <p className="z-10 absolute top-0 w-full h-[8%] bg-gradient-to-b from-red-500"></p>
                                        <Image 
                                            id="game-pic"
                                            className="duration-300 object-cover"
                                            width={0}
                                            height={0}
                                            src={game.picture} 
                                            alt={game.title}
                                            sizes="100vw"  
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        <div className="sm:w-[5vw] w-[10vw] h-full items-center flex justify-center">
                            <FontAwesomeIcon className="sm:text-5xl text-3xl cursor-pointer hover:brightness-75 duration-150"
                            onClick={() => slider?.current?.slickNext()}
                            icon={faSquareCaretRight} style={{color: "#ff0000",}}/>
                        </div>
                    </div>

                    
                </div>
                
                <Lounge/>

                <BasicCalendar/>

                <div className="pt-[7.5vh] pb-[5vh] w-screen flex flex-col justify-center items-center bg-[#d3d3d3]">
                    <div className="sm:w-[75vw] w-[90vw] sm:h-fit flex lg:flex-row flex-col lg:items-center relative rounded-xl box-border sm:bg-gradient-to-r bg-gradient-to-br from-red-500 from-20% via-black to-black px-3 sm:px-6 shadow-md">
                        <div className="lg:w-[30%] w-full flex flex-col flex-grow sm:items-start items-start justify-center box-border lg:gap-4 sm:gap-2 gap-0 text-white py-4">
                            <p className="text-3xl xl:text-4xl font-bold">BUY A JERSEY!</p>
                            <p className="xl:text-2xl text-xl">Club staff and competitive players get 10% off!</p>
                            <span className='w-fit lg:text-xl text-lg xl:px-4 xl:py-2 px-2 py-1 mt-2 rounded-xl flex items-center bg-black text-white'>
                                SHOP NOW &nbsp;
                                <FontAwesomeIcon className='-rotate-90 text-2xl' icon={faAnglesDown}/>
                            </span>
                        </div>
                        
                        <div className="h-full lg:w-[70%] w-full relative box-border">
                            <div className="h-full flex relative box-border gap-0">
                                <div className="h-full sm:w-1/3 w-full relative flex">
                                    <Image alt="forced" className="absolute scale-x-125 scale-y-110" src='/blackJerseyBack.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                                    <Image id="front-image" alt="forced" className="hover:opacity-0 duration-200 scale-x-125 scale-y-110" src='/blackJerseyFront.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                                </div>

                                <div className="h-full w-1/3 relative sm:flex hidden">
                                    <Image alt="forced" className="absolute  scale-x-125 scale-y-110" src='/pinkJerseyBack.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                                    <Image id="front-image" alt="forced" className="hover:opacity-0 duration-200  scale-x-125 scale-y-110" src='/pinkJerseyFront.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                                </div>

                                <div className="h-full w-1/3 relative sm:flex hidden">
                                    <Image alt="forced" className="absolute scale-x-125 scale-y-110" src='/whiteJerseyBack.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                                    <Image id="front-image" alt="forced" className="hover:opacity-0 duration-200 scale-x-125 scale-y-110" src='/whiteJerseyFront.webp' width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%'}}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                
                <div className="relative w-screen bg-[#d3d3d3] flex justify-center sm:pt-[5vh] pt-[4vh]">
                    <div className="sm:w-[75vw] w-[90vw] flex lg:flex-row flex-col">
                        <div className="lg:w-1/2 w-full flex flex-col box-border pr-5 pt-[14px]">
                            <p className="text-5xl font-bold text-red-500">FAQ</p> <br />
                            <p className="sm:text-2xl text-xl font-semibold text-black">If you don&apos;t see your question here, reach out in the discord or email EMAIL@EMAIL.COM</p>
                        </div>
                        <div className="lg:w-1/2 w-full bg-black">
                            <Faq
                                data={data}
                                styles={styles}
                                config={config}
                            />
                        </div>
                    </div>
                </div>

                <Footer/>

            </main>
        </>
    );
}
