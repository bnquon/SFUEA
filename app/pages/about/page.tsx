import Image from "next/image";

export default function Home() {
    return (
    	<main className="relative">

      		<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[10vh]">
        		<div className="w-[75vw] items-center flex justify-evenly text-black py-10 px-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-[35%] z-[1]" src='/blob2.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col w-3/5 gap-6 text-white z-[2]">
						<p className="font-bold text-3xl text-red-500">Who We Are</p>
						<p className="text-5xl font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2]" src='/real-logo.png' alt="ex1" width={250} height={250}></Image>
				</div>
      		</div>

			

			<div className="pt-[7.5vh] pb-[5vh] w-screen text-6xl flex flex-col justify-center items-center bg-[#d3d3d3]">
				<div className="grid grid-cols-4 grid-flow-row w-[75vw] box-border gap-[6vw] relative">
					<div className="w-full h-[30vh] bg-white rounded-lg shadow-md flex flex-col items-center gap-5 relative box-border py-6 overflow-hidden">
					<img className="z-0 w-full left-0 top-0 absolute h-1/3 object-cover" src="https://images.hdqwalls.com/download/abstract-dark-red-line-5k-bo-800x480.jpg" alt="" />
						<div className="w-full flex items-center justify-center relative">
							<div className="aspect-square rounded-full bg-gray-500 w-1/2"></div>
						</div>
						<div className="w-full text-xl px-4 flex flex-col items-center justify-center text-center">
							<p className="text-2xl text-black font-bold">BRANDON QUON</p>
							<p className="text-xl text-black font-normal">CEO TO TEST LINE BREAK LINE BREAK </p>
						</div>
					</div>
					<div className="w-full h-[30vh] bg-white rounded-lg shadow-md flex flex-col items-center gap-5 relative box-border py-6 overflow-hidden">
						<img className="z-0 w-full left-0 top-0 absolute h-1/3 object-cover" src="https://i.pinimg.com/originals/c3/c2/28/c3c228e24f7e35c854e27f90145fed0a.jpg" alt="" />
						<div className="w-full flex items-center justify-center relative">
							<div className="aspect-square rounded-full bg-gray-500 w-1/2"></div>
						</div>
						<div className="w-full text-xl px-4 flex flex-col items-center justify-center text-center">
							<p className="text-2xl text-black font-bold">BRANDON QUON</p>
							<p className="text-xl text-black font-normal">CEO TO TEST LINE BREAK LINE BREAK </p>
						</div>
					</div>
					<div className="w-full h-[30vh] bg-white rounded-lg shadow-md flex flex-col items-center gap-5 relative box-border py-6 overflow-hidden">
						<img className="z-0 w-full left-0 top-0 absolute h-1/3 object-cover" src="https://thumbs.dreamstime.com/b/glitter-textured-red-black-shaded-background-wallpaper-book-page-paintings-printing-mobile-backgrounds-book-covers-screen-149883195.jpg" alt="" />
						<div className="w-full flex items-center justify-center relative">
							<div className="aspect-square rounded-full bg-gray-500 w-1/2"></div>
						</div>
						<div className="w-full text-xl px-4 flex flex-col items-center justify-center text-center">
							<p className="text-2xl text-black font-bold">BRANDON QUON</p>
							<p className="text-xl text-black font-normal">CEO TO TEST LINE BREAK LINE BREAK </p>
						</div>
					</div>
					<div className="w-full h-[30vh] bg-white rounded-lg shadow-md flex flex-col items-center gap-5 relative box-border py-6 overflow-hidden">
						<img className="z-0 w-full left-0 top-0 absolute h-1/3 object-cover" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqo1gJ3wk534Te8sSGXOt_Xmy_BLkJUjLzWyfIjGm9veFfX8akQEIEO5khmZryADJavKJd-gEV2-vSsyQg7V0w8B6koK6c6ZMyhEbfAt3eOazttsQB0a_iet4GB81kS3TeEVKz5QGwqh8n/w2880-h1800-c/black-red-abstract-polygon-3d-4k-45.jpg" alt="" />
						<div className="w-full flex items-center justify-center relative">
							<div className="aspect-square rounded-full bg-gray-500 w-1/2"></div>
						</div>
						<div className="w-full text-xl px-4 flex flex-col items-center justify-center text-center">
							<p className="text-2xl text-black font-bold">BRANDON QUON</p>
							<p className="text-xl text-black font-normal">CEO TO TEST LINE BREAK LINE BREAK </p>
						</div>
					</div>
				</div>
			</div>

    	</main>
  	);
}
