import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faLocationDot, faCircleExclamation, faCircleArrowUp, faCalendarDays, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"


export default function Home() {
    return (
    	<main className="relative">

      		<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[20vh] pb-[7.5vh]">
        		<div className="w-[75vw] items-center flex justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-50 z-[1]" src='/blob1.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col w-3/5 gap-6 text-white z-[2]">
						<p className="font-bold text-3xl text-red-500">Gamers' Lounge</p>
						<p className="text-5xl font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2]" src='/real-logo.png' alt="ex1" width={250} height={250}></Image>
				</div>
      		</div>

			

			  <div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[5vh] pb-[5vh]">
			  	<div className="w-[75vw] my-8">
					<span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-[#d3d3d3] px-6 text-red-500 text-5xl font-extrabold">Our PCs</span>
                    </span>
				</div>
				<div className="w-[75vw] h-[60vh] flex text-black mb-[10vh]">
					<div className="w-[30%] h-full flex flex-col box-border gap-4">
						<div className="w-full h-1/2 flex flex-col items-center justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">GPU and CPU</h2>
							<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
						<div className="w-full h-1/2 flex flex-col items-center justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">Ram and Storage</h2>
							<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
					</div>
					
					<div className="w-[40%] h-full flex justify-center items-center">
						<img className="w-[80%] h-full" src="https://www.pngmart.com/files/23/Gaming-Pc-PNG-Isolated-Photo.png" alt="Gaming PC" />
					</div>

					<div className="w-[30%] h-full flex flex-col box-border gap-4">
						<div className="w-full h-1/2 flex flex-col items-center justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">Peripherals</h2>
							<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
						<div className="w-full h-1/2 flex flex-col items-center justify-start pt-4">
							<h2 className="text-2xl font-bold mb-2">Monitor</h2>
							<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
						</div>
					</div>
				</div>
			</div>


			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[5vh] pb-[10vh]">
				<div className="w-[75vw] rounded-xl flex flex-col justify-center items-center">
					<p className="text-5xl font-bold text-red-500 mb-[2vh]">Important Disclaimer</p>
					<div className="w-full bg-white p-6">
						<p className="text-xl text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					</div>
				</div>
			</div>
				

    	</main>
  	);
}
