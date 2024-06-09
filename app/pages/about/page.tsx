import Image from "next/image";

export default function Home() {
    return (
    	<main className="flex flex-col max-w-full overflow-x-hidden pt-[15vh] bg-[#d3d3d3]">

      		<div id="section1" className="w-screen relative bg-[#d3d3d3] flex justify-center items-center pb-[10vh]">
        		<div className="w-[75vw] items-center flex text-black py-4 gap-[5%]">
					<p className="[writing-mode:vertical-rl] font-bold text-xl rotate-180">Who We Are</p>
					<p className="text-5xl font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
				</div>
      		</div>

    	</main>
  	);
}
