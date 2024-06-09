import Image from "next/image";

export default function Home() {
    return (
    	<main className="flex flex-col max-w-full overflow-x-hidden pt-[15vh] bg-[#d3d3d3]">

      		<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center pb-[10vh]">
        		<div className="w-[75vw] items-center flex justify-evenly text-black py-10 px-10 rounded-xl overflow-hidden relative">
					<Image className="absolute brightness-50" src='/BWPattern.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col z-10 w-3/5 gap-6 text-white">
						<p className="font-bold text-2xl text-red-500">Who We Are</p>
						<p className="text-5xl font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-10" src='/real-logo.png' alt="ex1" width={250} height={250}></Image>
				</div>
				
      		</div>
				

    	</main>
  	);
}
