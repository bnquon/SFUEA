"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import { faIdCard, faFileLines, faComments } from "@fortawesome/free-solid-svg-icons"
import YoutubeEmbed from "@/app/Components/YoutubeEmbed";
import Faq from "react-faq-component";
import { useState, useEffect } from "react";
import { Footer } from "@/app/Components/Footer";

import { SubPageBanner } from "../Components/SubPageBanner";
import { SubPageHeader } from "../Components/SubPageHeader";
import { ImportantDetailCard } from "./ImportantDetailCard";
import { FAQ } from "../Components/FAQ";

const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), { ssr: false });

// const data = {
//     rows: [
//         {
//             title: "Lorem ipsum dolor sit amet,",
//             content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
//               ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
//               In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
//               Fusce sed commodo purus, at tempus turpis.`,
//         },
//         {
//             title: "Nunc maximus, magna at ultricies elementum",
//             content:
//                 "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
//         },
//         {
//             title: "Curabitur laoreet, mauris vel blandit fringilla",
//             content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
//             Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
//             Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
//             Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
//         },
//         {
//             title: "What is the package version",
//             content: <p>current version is 1.2.1</p>,
//         },
// 		{
//             title: "Lorem ipsum dolor sit amet,",
//             content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
//               ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
//               In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
//               Fusce sed commodo purus, at tempus turpis.`,
//         },
//         {
//             title: "Nunc maximus, magna at ultricies elementum",
//             content:
//                 "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
//         },
//         {
//             title: "Curabitur laoreet, mauris vel blandit fringilla",
//             content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
//             Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
//             Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
//             Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
//         },
//         {
//             title: "What is the package version",
//             content: <p>current version is 1.2.1</p>,
//         },
//     ],
// };

// const config = {
//     animate: true,
//     expandIcon: "+",
//     collapseIcon: "-",
// };

export default function Home() {

    // const [windowWidth, setWindowWidth] = useState(0);

    // useEffect(() => {
    //     setWindowWidth(window.innerWidth);
    // }, [])

    // useEffect(() => {
    //     const handleResize = () => {
    //       setWindowWidth(window.innerWidth);
    //     };
    
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    // const getResponsiveStyles = () => {
    //     if (windowWidth >= 1200) { // lg breakpoint
    //       return {
    //         rowContentTextSize: '20px',
    //         rowTitleTextSize: '28px',
    //       };
    //     } else if (windowWidth >= 610) { // sm breakpoint
    //       return {
    //         rowContentTextSize: '16px',
    //         rowTitleTextSize: '24px',
    //       };
    //     } else {
    //       return {
    //         rowContentTextSize: '14px',
    //         rowTitleTextSize: '20px',
    //       };
    //     }
    //   };

    //     const styles = {
    //     bgColor: '#d3d3d3',
    //     titleTextColor: "black",
    //     rowTitleColor: "black",
    //     rowContentPaddingTop: '8px',
    //     rowContentPaddingBottom: '8px',
    //     ...getResponsiveStyles(),
    //   };

    return (
    	<main className="relative">

            <SubPageBanner pageTitle="Gaming Lounge" pageDescription="SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION." blobImage="/blob2.jpg" />

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[5vh]">
                
                <SubPageHeader title="Our PCs" />

				<div className="sm:w-[75vw] w-[90vw] sm:h-[60vh] flex sm:flex-row flex-col text-black mb-[10vh]">
					<div className="sm:w-[30%] w-full sm:h-full h-fit flex flex-col box-border sm:gap-4 gap-0">
						<div className="w-full sm:h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl xl:text-4xl font-bold mb-2">GPU and CPU</h2>
							<p className="text-lg xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
						<div className="w-full sm:h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl xl:text-4xl font-bold mb-2">Ram and Storage</h2>
							<p className="text-lg xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
					</div>
					
					<div className="sm:w-[40%] h-full flex justify-center items-center order-first sm:order-none">
						<img className="w-[80%] h-full" src="https://www.pngmart.com/files/23/Gaming-Pc-PNG-Isolated-Photo.png" alt="Gaming PC" />
					</div>

					<div className="sm:w-[30%] w-full sm:h-full h-fit flex flex-col box-border sm:gap-4 gap-0">
						<div className="w-full sm:h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl xl:text-4xl font-bold mb-2">Peripherals</h2>
							<p className="text-lg xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
						<div className="w-full sm:h-1/2 flex flex-col justify-start pt-4">
							<h2 className="text-2xl xl:text-4xl font-bold mb-2">Game Library</h2>
							<p className="text-lg xl:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pb-[5vh]">
                
                <SubPageHeader title="Location" />
			  	
                <div className="sm:w-[75vw] w-[90vw] flex sm:flex-row flex-col box-border gap-4">
					<div className="sm:w-1/2 w-full flex sm:flex-row flex-col box-border">
						<div className="sm:w-1/2 h-full flex flex-col justify-start xl:pr-4">
							<p className="sm:text-2xl text-xl xl:text-4xl font-normal text-black">We are located in the Student Union Building, level 2 room 2400</p><br />
						</div>
						<Image src="/sfuSnap.jpeg" width={0} height={0} sizes="100vw" className="sm:w-1/2 w-full h-full" alt="Map"/>
					</div>
					<div className="sm:w-1/2 aspect-video">
						<YoutubeEmbed embedId="vtgDsTFrCE8"/>
					</div>
				</div>
			</div>

            <div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[6vh]">

                <SubPageHeader title="Schedule" />

				<div className="sm:w-[75vw] w-[90vw] lg:h-[50vh] flex lg:flex-row flex-col box-border gap-5 relative">
					<div className="lg:w-1/3 w-full h-full flex flex-col text-black gap-10 box-border pr-4 justify-start lg:mb-0 mb-[8vh]">
						<p className="sm:text-2xl text-xl xl:text-4xl font-normal">A regulated schedule is currently under construction. Please stay tuned for announcements in our Discord server.</p>
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
                
                <SubPageHeader title="Important Details" />

				<div className="sm:w-[75vw] w-[90vw] flex box-border text-black">
                    <div className="w-full flex lg:flex-row flex-col box-border gap-4">

                        <ImportantDetailCard description="You must bring and show your student ID to access the lounge" image="/ex1.JPG" icon={faIdCard} buttonText={null} delay={0}/>

                        <ImportantDetailCard description="Sign the SFUEA x SFSS Gamers' Lounge Waiver and User Agreement" image="/ex2.JPG" icon={faFileLines} buttonText="Waiver Agreement" delay={1}/>

                        <ImportantDetailCard description="Help us improve the lounge by doing the SFU Esports Gamers' Lounge Experience Survey" image="/ex3.JPG" icon={faComments} buttonText="Feedback Survey" delay={2}/>
                        
    
                    </div>
				</div>

			</div>

			<div className="relative w-screen bg-[#d3d3d3] flex flex-col justify-center items-center pt-[7.5vh]">
                
                <SubPageHeader title="Lounge FAQ" />
                
                <div className="sm:w-[75vw] w-[90vw] flex lg:flex-row flex-col box-border">
					<div className="lg:w-1/2 w-full box-border lg:pr-8 lg:pt-[14px] mb-5 lg:mb-0">
						<p className="sm:text-2xl text-xl xl:text-3xl font-semibold text-black">If you have any more questions, please email us at EMAIL@EMAIL.com or chat with us in our discord</p>
					</div>
                    <div className="lg:w-1/2 w-full">
                        <FAQ onWhatPage="lounge"/>
                    </div>
                </div>
            </div>
				
			<Footer/>

    	</main>
  	);
}
