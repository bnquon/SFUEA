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
				<div className="w-[75vw] py-8 text-black">
					<p className="text-red-500 text-xl">Icon here</p>
					<p className="text-5xl mb-[5vh]">Tech Specs</p>
					<div className="w-full flex gap-6 box-border">
						<div className="w-1/2 h-[25vh]">
							<Image className="rounded-xl" src='https://images.unsplash.com/photo-1626218174358-7769486c4b79?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
						</div>
						<div className="w-1/2 h-[25vh] flex justify-center items-start text-xl">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
								labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						</div>
					</div>
				</div>

				<div className="w-[75vw] py-8 border-t-2 border-b-2 border-black text-black">
					<p className="text-red-500 text-xl">Icon here</p>
					<p className="text-5xl mb-[5vh]">Tech Specs</p>
					<div className="w-full flex gap-6 box-border">
						<div className="w-1/2 h-[25vh] flex justify-center items-start text-xl">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
								labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						</div>
						<div className="w-1/2 h-[25vh]">
							<Image className="rounded-xl" src='https://images.unsplash.com/photo-1626218174358-7769486c4b79?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
						</div>
					</div>
				</div>

				<div className="w-[75vw] py-8 text-black">
					<p className="text-red-500 text-xl">Icon here</p>
					<p className="text-5xl mb-[5vh]">Tech Specs</p>
					<div className="w-full flex gap-6 box-border">
						<div className="w-1/2 h-[25vh]">
							<Image className="rounded-xl" src='https://images.unsplash.com/photo-1626218174358-7769486c4b79?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
						</div>
						<div className="w-1/2 h-[25vh] flex justify-center items-start text-xl">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
								labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[5vh] pb-[10vh]">
				<div className="w-[75vw] h-[35vh] rounded-xl bg-red-500 flex flex-col justify-center items-center p-6">
					<p className="text-5xl font-bold">Title</p>
					<p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
			</div>
				

    	</main>
  	);
}
