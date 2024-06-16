import Image from "next/image";



export default function Home() {
    return (
    	<main className="relative">

      		<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[10vh]">
        		<div className="w-[75vw] items-center flex justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-50 z-[1]" src='/blob1.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col w-3/5 gap-6 text-white z-[2]">
						<p className="font-bold text-3xl text-red-500">Gamers' Lounge</p>
						<p className="text-5xl font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2]" src='/real-logo.png' alt="ex1" width={250} height={250}></Image>
				</div>
      		</div>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[5vh] pb-[10vh]">
				<div className="w-[75vw] flex box-border justify-between relative text-black h-[75vh]">
					<div className="w-2/5 flex flex-col relative h-full gap-2 box-border">
						<div className="w-full h-1/3 flex-grow flex flex-col py-6">
							<h2 className="text-3xl font-bold">ICON HERE</h2>
							<h2 className="text-3xl font-bold">Our Mission</h2>
							<p className="text-xl">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
						<Image
							className="rounded-xl flex-grow"
							src="https://images.unsplash.com/photo-1716249738093-623a70ad6531?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="ex1"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: '66.667%', objectFit: 'cover' }}
						/>
					</div>
					<div className="w-1/2 h-full relative flex flex-col box-border gap-2">
						<div className="w-full h-1/3 flex-grow flex flex-col p-6 bg-white rounded-xl relative">
							<h2 className="h-1/4 text-3xl font-bold">ICON HERE</h2>
							<h2 className="h-1/4 text-3xl font-bold">Our Mission</h2>
							<p className="h-1/2 text-xl">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
						<div className="w-full h-1/3 flex-grow flex flex-col p-6 bg-white rounded-xl">
							<h2 className="h-1/4 text-3xl font-bold">ICON HERE</h2>
							<h2 className="h-1/4 text-3xl font-bold">Our Mission</h2>
							<p className="h-1/2 text-xl">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							</p>
						</div>
						<div className="w-full h-1/3 flex-grow flex flex-col p-6 bg-white rounded-xl">
							<h2 className="h-1/4 text-3xl font-bold">ICON HERE</h2>
							<h2 className="h-1/4 text-3xl font-bold">Our Mission</h2>
							<p className="h-1/2 text-xl">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[5vh] pb-[10vh]">
				<div className="w-[75vw] h-[35vh] rounded-xl bg-red-500">

				</div>
			</div>
				

    	</main>
  	);
}
