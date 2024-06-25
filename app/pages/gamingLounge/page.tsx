"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faCircleArrowUp, faFileLines, faComments } from "@fortawesome/free-solid-svg-icons"
import YoutubeEmbed from "@/app/Components/YoutubeEmbed";
import Faq from "react-faq-component";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
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

const styles = {
    bgColor: '#d3d3d3',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    rowContentTextSize: '16px',
    rowContentPaddingTop: '8px',
    rowContentPaddingBottom: '0px',
    rowTitleTextSize: '24px',
};

const config = {
    animate: true,
    expandIcon: "+",
    collapseIcon: "-",
};

export default function Home() {

    const [raccoonInView, inView] = useInView({threshold: 0.25, triggerOnce: true});

    return (
    	<main className="relative">

      		<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[20vh] pb-[7.5vh]">
        		<div className="w-[75vw] items-center flex justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-50 z-[1]" src='/blob1.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col w-3/5 gap-6 text-white z-[2]">
						<p className="font-bold text-3xl text-red-500">Gamers&apos; Lounge</p>
						<p className="text-5xl font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2]" src='/real-logo.png' alt="ex1" width={250} height={250}></Image>
				</div>
      		</div>

			

			  <div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[5vh]">
			  	<div className="w-[75vw] mb-[8vh]">
					<span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] px-6 text-red-500 text-5xl font-extrabold">Our PCs</span>
                    </span>
				</div>
				<div className="w-[75vw] h-[60vh] flex text-black mb-[10vh]">
					<div className="w-[30%] h-full flex flex-col box-border gap-4">
						<div className="w-full h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">GPU and CPU</h2>
							<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
						<div className="w-full h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">Ram and Storage</h2>
							<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
					</div>
					
					<div className="w-[40%] h-full flex justify-center items-center">
						<img className="w-[80%] h-full" src="https://www.pngmart.com/files/23/Gaming-Pc-PNG-Isolated-Photo.png" alt="Gaming PC" />
					</div>

					<div className="w-[30%] h-full flex flex-col box-border gap-4">
						<div className="w-full h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">Peripherals</h2>
							<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
						<div className="w-full h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">Game Library</h2>
							<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pb-[5vh]">
				<div className="w-[75vw] mb-[8vh]">
					<span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] px-6 text-red-500 text-5xl font-extrabold">Location</span>
                    </span>
				</div>
			  	<div className="w-[75vw] flex h-[50vh] box-border gap-4">
					<div className="w-1/2 flex box-border">
						<div className="w-1/2 h-full flex flex-col justify-start">
							<p className="text-3xl font-bold text-black">We are located in the Student Union Building, level 2 room 2400</p><br />
						</div>
						<Image src="/sfuSnap.jpeg" width={0} height={0} sizes="100vw" className="w-1/2 h-full" alt="Map"/>
					</div>
					<div className="w-1/2">
						<YoutubeEmbed embedId="vtgDsTFrCE8"/>
					</div>
				</div>
			</div>

            <div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[6vh]">

                <div className="w-[75vw] mb-[12vh]">
					<span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] px-6 text-red-500 text-5xl font-extrabold">Schedule</span>
                    </span>
				</div>

				<div className="w-[75vw] h-[50vh] flex box-border gap-5 relative">
					<div className="w-1/3 h-full flex flex-col text-black gap-10 box-border pr-6 justify-start">
						<p className="text-2xl font-normal">A regulated schedule is currently under construction. Please stay tuned for announcements in our Discord server.</p>
					</div>
                    <div className="w-2/3 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] flex justify-center">
                            <img src="/raccoon_construction.png" id="constructraccoon" className="w-[25%] scale-x-[-1]" alt="Map" />
                        </div>
                        <WidgetBot className="w-full h-full" 
                            server= '1251409341676912660'
                            channel= '1251409341676912663'/>
                    </div>
				</div>
			</div>


			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[5vh] pb-[10vh]">
				<div className="w-[75vw] mb-[8vh]">
					<span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] px-6 text-red-500 text-5xl font-extrabold">Important Details</span>
                    </span>
				</div>

				<div className="w-[75vw] flex box-border text-black">
                    <div className="w-full flex box-border gap-4">
                        {/* <div className="w-full flex flex-col justify-start items-start mb-[4vh]">
                            <p className="text-2xl">You must bring and show your student ID to access the lounge</p>
                        </div> */}

                        <motion.div variants={fadeInAnimation} initial="initial" custom={1} whileInView={"animate"} viewport={{ once: true }} className="w-1/3 relative">
                            <article className="flex flex-col">
                                <div className="relative w-full h-[65%]">
                                    <Image src='/ex1.JPG' className="rounded-xl" alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                                </div>

                                <div className="py-4">
                                    <FontAwesomeIcon icon={faIdCard} className="text-3xl mb-2"></FontAwesomeIcon>
                                    <h3 className="text-xl text-black">You must bring and show your student ID to access the lounge</h3>
                                </div>
                            </article>
                        </motion.div>

                        <motion.div variants={fadeInAnimation} initial="initial" custom={3} whileInView={"animate"} viewport={{ once: true }} className="w-1/3 relative">
                            <article className="h-full flex flex-col">
                                <div className="relative w-full h-[65%]">
                                    <Image src='/ex2.JPG' className="rounded-xl" alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                                </div>

                                <div className="py-4">
                                    <FontAwesomeIcon icon={faFileLines} className="text-3xl mb-2"></FontAwesomeIcon>
                                    <h3 className="text-xl text-black mb-4">You must sign the SFUEA x SFSS Gamers&apos; Lounge Waiver and User Agreement</h3>
                                    <span className='w-fit text-xl p-2 rounded-xl flex items-center justify-between bg-black text-white'>
                                        Waiver Agreement &nbsp;
                                        <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                                    </span>
                                </div>
                                
                            </article>
                        </motion.div>

                        <motion.div variants={fadeInAnimation} initial="initial" custom={5} whileInView={"animate"} viewport={{ once: true }} className="w-1/3 relative">
                            <article className="h-full flex flex-col">
                                <div className="relative w-full h-[65%]">
                                    <Image src='/ex3.jpg' className="rounded-xl" alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                                </div>

                                <div className="py-4">
                                    <FontAwesomeIcon icon={faComments} className="text-3xl mb-2"></FontAwesomeIcon>
                                    <h3 className="text-xl text-black mb-4">Help us improve the lounge by doing the SFU Esports Gamers&apos; Lounge Experience Survey</h3>
                                    <span className='w-fit text-xl p-2 rounded-xl flex items-center justify-between bg-black text-white'>
                                        Feedback Survey &nbsp;
                                        <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                                    </span>
                                </div>
                            </article>
                        </motion.div>
                    </div>
				</div>

			</div>

			<div className="relative w-screen bg-[#d3d3d3] flex flex-col justify-center items-center pt-[7.5vh]">
				<div className="w-[75vw] mb-[8vh]">
					<span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] px-6 text-red-500 text-5xl font-extrabold">Lounge FAQ</span>
                    </span>
				</div>
                <div className="w-[75vw] flex box-border">
					<div className="w-1/2 box-border pr-8 pt-[14px]">
						<p className="text-3xl font-semibold text-black">If you have any more questions, please email us at EMAIL@EMAIL.com or chat with us in our discord</p>
					</div>
                    <div className="w-1/2">
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
