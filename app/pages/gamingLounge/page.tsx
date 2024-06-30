"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faCircleArrowUp, faFileLines, faComments } from "@fortawesome/free-solid-svg-icons"
import YoutubeEmbed from "@/app/Components/YoutubeEmbed";
import Faq from "react-faq-component";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Footer } from "@/app/Components/Footer";

const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), { ssr: false });

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
        if (windowWidth >= 1024) { // lg breakpoint
          return {
            rowContentTextSize: '16px',
            rowTitleTextSize: '24px',
          };
        } else if (windowWidth >= 640) { // sm breakpoint
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

    return (
    	<main className="relative">

            <div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[10vh]">
        		<div className="sm:w-[75vw] w-[90vw] sm:items-center items-start flex sm:flex-row flex-col justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-[35%] z-[1]" src='/blob2.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col sm:w-3/5 w-[90%] pl-[5%] sm:pl-0 gap-6 text-white z-[2]">
						<p className="font-bold sm:text-2xl lg:text-3xl text-base text-red-500">Events</p>
						<p className="sm:text-[27px] lg:text-4xl xl:text-5xl text-[21px] font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2] sm:w-[20%] xl:w-[17.5%] w-[150px] h-auto mt-5 pl-[5%] sm:pl-0 sm:mt-0" src='/real-logo.png' alt="ex1" width={0} height={0} sizes='100vw'></Image>
				</div>
      		</div>


			

			  <div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[5vh]">
                <div className="sm:w-[75vw] w-[90vw] mb-[8vh]">
					<span className="relative flex justify-center sm:text-left text-center">
                    <div
                        className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] sm:px-6 px-2 text-red-500 text-5xl font-extrabold">Our PCs</span>
                    </span>
				</div>
				<div className="sm:w-[75vw] w-[90vw] sm:h-[60vh] flex sm:flex-row flex-col text-black mb-[10vh]">
					<div className="sm:w-[30%] w-full sm:h-full h-fit flex flex-col box-border sm:gap-4 gap-0">
						<div className="w-full sm:h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">GPU and CPU</h2>
							<p className="text-lg xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
						<div className="w-full sm:h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">Ram and Storage</h2>
							<p className="text-lg xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
					</div>
					
					<div className="sm:w-[40%] h-full flex justify-center items-center order-first sm:order-none">
						<img className="w-[80%] h-full" src="https://www.pngmart.com/files/23/Gaming-Pc-PNG-Isolated-Photo.png" alt="Gaming PC" />
					</div>

					<div className="sm:w-[30%] w-full sm:h-full h-fit flex flex-col box-border sm:gap-4 gap-0">
						<div className="w-full sm:h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">Peripherals</h2>
							<p className="text-lg xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
						<div className="w-full sm:h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">Game Library</h2>
							<p className="text-lg xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pb-[5vh]">
                <div className="sm:w-[75vw] w-[90vw] mb-[8vh]">
					<span className="relative flex justify-center sm:text-left text-center">
                    <div
                        className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] sm:px-6 px-2 text-red-500 text-5xl font-extrabold">Location</span>
                    </span>
				</div>
			  	<div className="sm:w-[75vw] w-[90vw] flex sm:flex-row flex-col box-border gap-4">
					<div className="sm:w-1/2 w-full flex sm:flex-row flex-col box-border">
						<div className="sm:w-1/2 h-full flex flex-col justify-start">
							<p className="sm:text-2xl text-xl font-normal text-black">We are located in the Student Union Building, level 2 room 2400</p><br />
						</div>
						<Image src="/sfuSnap.jpeg" width={0} height={0} sizes="100vw" className="sm:w-1/2 w-full h-full" alt="Map"/>
					</div>
					<div className="sm:w-1/2 aspect-video">
						<YoutubeEmbed embedId="vtgDsTFrCE8"/>
					</div>
				</div>
			</div>

            <div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[6vh]">

                <div className="w-[75vw] lg:mb-[12vh] mb-[6vh]">
					<span className="relative flex justify-center">
                    <div
                        className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] sm:px-6 py-1 text-red-500 text-5xl font-extrabold">Schedule</span>
                    </span>
				</div>

				<div className="sm:w-[75vw] w-[90vw] lg:h-[50vh] flex lg:flex-row flex-col box-border gap-5 relative">
					<div className="lg:w-1/3 w-full h-full flex flex-col text-black gap-10 box-border pr-6 justify-start lg:mb-0 mb-[8vh]">
						<p className="sm:text-2xl text-xl font-normal">A regulated schedule is currently under construction. Please stay tuned for announcements in our Discord server.</p>
					</div>
                    <div className="lg:w-2/3 w-full relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] flex justify-center">
                            <img src="/raccoon_construction.png" id="constructraccoon" className="sm:w-[25%] w-[40%] scale-x-[-1]" alt="Map" />
                        </div>
                        <WidgetBot className="w-full h-[45vh] lg:h-full" 
                            server= '1251409341676912660'
                            channel= '1251409341676912663'/>
                    </div>
				</div>
			</div>


			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[6vh]">
                <div className="sm:w-[75vw] w-[90vw] lg:mb-[12vh] mb-[6vh] sm:text-left text-center">
					<span className="relative flex justify-center">
                    <div
                        className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] sm:px-6 py-1  text-red-500 text-5xl font-extrabold">Important Details</span>
                    </span>
				</div>

				<div className="sm:w-[75vw] w-[90vw] flex box-border text-black">
                    <div className="w-full flex lg:flex-row flex-col box-border gap-4">
                        {/* <div className="w-full flex flex-col justify-start items-start mb-[4vh]">
                            <p className="text-2xl">You must bring and show your student ID to access the lounge</p>
                        </div> */}

                        <motion.div variants={fadeInAnimation} initial="initial" custom={1} whileInView={"animate"} viewport={{ once: true }} className="lg:w-1/3 flex lg:flex-col-reverse lg:items-start lg:justify-end sm:flex-row flex-col-reverse w-full relative">
                            <div className="lg:py-4 sm:py-0 py-4 lg:pl-0 pr-5 sm:w-1/2 w-full lg:w-full">
                                <FontAwesomeIcon icon={faIdCard} className="text-3xl mb-2"></FontAwesomeIcon>
                                <h3 className="text-xl text-black">You must bring and show your student ID to access the lounge</h3>
                            </div>

                            <div className="relative lg:w-full sm:w-1/2 w-full h-[30vh]">
                                <Image src='/ex1.JPG' className="rounded-xl" alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                            </div>

                        </motion.div>

                        <motion.div variants={fadeInAnimation} initial="initial" custom={3} whileInView={"animate"} viewport={{ once: true }} className="lg:w-1/3 flex lg:flex-col-reverse lg:items-start lg:justify-end sm:flex-row flex-col-reverse w-full relative">
                                <div className="lg:py-4 sm:py-0 py-4 lg:pl-0 pr-5 sm:w-1/2 w-full lg:w-full">
                                    <FontAwesomeIcon icon={faFileLines} className="text-3xl mb-2"></FontAwesomeIcon>
                                    <h3 className="text-xl text-black mb-4">You must sign the SFUEA x SFSS Gamers&apos; Lounge Waiver and User Agreement</h3>
                                    <span className='w-fit text-xl p-2 rounded-xl flex items-center justify-between bg-black text-white'>
                                        Waiver Agreement &nbsp;
                                        <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                                    </span>
                                </div>

                                <div className="relative lg:w-full sm:w-1/2 w-full h-[30vh]">
                                    <Image src='/ex2.JPG' className="rounded-xl" alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                                </div>
                                
                        </motion.div>

                        <motion.div variants={fadeInAnimation} initial="initial" custom={5} whileInView={"animate"} viewport={{ once: true }} className="lg:w-1/3 flex lg:flex-col-reverse lg:items-start lg:justify-end sm:flex-row flex-col-reverse w-full relative">
                                <div className="lg:py-4 sm:py-0 py-4 lg:pl-0 pr-5 sm:w-1/2 w-full lg:w-full">
                                    <FontAwesomeIcon icon={faComments} className="text-3xl mb-2"></FontAwesomeIcon>
                                    <h3 className="text-xl text-black mb-4">Help us improve the lounge by doing the SFU Esports Gamers&apos; Lounge Experience Survey</h3>
                                    <span className='w-fit text-xl p-2 rounded-xl flex items-center justify-between bg-black text-white'>
                                        Feedback Survey &nbsp;
                                        <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                                    </span>
                                </div>

                                <div className="relative lg:w-full sm:w-1/2 w-full h-[30vh]">
                                    <Image src='/ex3.jpg' className="rounded-xl" alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                                </div>
                        </motion.div>
                    </div>
				</div>

			</div>

			<div className="relative w-screen bg-[#d3d3d3] flex flex-col justify-center items-center pt-[7.5vh]">
				<div className="sm:w-[75vw] w-[90vw] mb-[8vh]">
					<span className="relative flex justify-center">
                    <div
                        className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] px-6 text-red-500 text-5xl font-extrabold">Lounge FAQ</span>
                    </span>
				</div>
                <div className="sm:w-[75vw] w-[90vw] flex lg:flex-row flex-col box-border">
					<div className="lg:w-1/2 w-full box-border lg:pr-8 lg:pt-[14px] mb-5 lg:mb-0">
						<p className="sm:text-2xl text-xl font-semibold text-black">If you have any more questions, please email us at EMAIL@EMAIL.com or chat with us in our discord</p>
					</div>
                    <div className="lg:w-1/2 w-full">
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
  	);
}
