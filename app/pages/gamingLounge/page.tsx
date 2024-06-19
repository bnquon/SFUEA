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
				<div className="w-[75vw] text-black mb-[10vh]">
					<div className="w-full flex box-border">
						<div className="w-1/2 h-[40vh]">
							<Image className="rounded-xl" src='https://images.unsplash.com/photo-1626218174358-7769486c4b79?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
						</div>
						<div className="w-1/2 h-[40vh] flex flex-col text-xl box-border pl-8 relative">
							<div className="w-full h-1/2">
								<p className="text-5xl font-bold mb-6">Tech Specs</p>
								<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
							<ul className="w-full flex flex-col justify-start gap-4 list-disc list-outside ml-5">
								<li>GPU: GeForce RTX 4060</li>
								<li>CPU: Intel Core i5-12400F</li>
								<li>Other: 16GB DDR4, 1TB M.2 SSD</li>
								<li>Monitor: 24" 165Hz</li>
								<li>Peripherals: NZXT TKL Keyboard, SteelSeries Aerox 3 Mouse, SteelSeries Arctis Nova 1 Headset</li>
							</ul>
						</div>
					</div>
				</div>


				<div className="w-[75vw] text-black mb-[10vh]">
					<div className="w-full flex box-border">
						<div className="w-1/2 h-[40vh] flex flex-col text-xl box-border pr-8 relative">
							<div className="w-full h-1/2">
								<p className="text-5xl font-bold mb-6">Tech Specs</p>
								<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
						<div className="w-1/2 h-[40vh]">
							<Image className="rounded-xl" src='https://images.unsplash.com/photo-1626218174358-7769486c4b79?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
						</div>
					</div>
				</div>

				<div className="w-[75vw] text-black mb-[10vh]">
					<div className="w-full flex box-border">
						<div className="w-1/2 h-[40vh]">
							<Image className="rounded-xl" src='https://images.unsplash.com/photo-1626218174358-7769486c4b79?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
						</div>
						<div className="w-1/2 h-[40vh] flex flex-col text-xl box-border pl-8 relative">
							<div className="w-full h-1/2">
								<p className="text-5xl font-bold mb-6">Tech Specs</p>
								<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
							<ul className="w-full flex flex-col justify-start gap-4 list-disc list-outside ml-5">
								<li>GPU: GeForce RTX 4060</li>
								<li>CPU: Intel Core i5-12400F</li>
								<li>Other: 16GB DDR4, 1TB M.2 SSD</li>
								<li>Monitor: 24" 165Hz</li>
								<li>Peripherals: NZXT TKL Keyboard, SteelSeries Aerox 3 Mouse, SteelSeries Arctis Nova 1 Headset</li>
							</ul>
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
