import Image from "next/image";




export default function Home() {

	type Game = {
        title: string;
        picture: string;
    }

    const games: Game[] = [
        {
            title: "Valorant",
            picture: '/val.jpg'
        },
        {
            title: "League of Legends",
            picture: '/crank.jpg'
        },
        {
            title: "TFT",
            picture: '/tft.jpg'
        },
		{
			title: 'Overwatch',
			picture: '/overwatch.jpeg'
		},
        {
            title: 'Fighting Games',
            picture: '/fighting.jpg'
        },
        {
            title: 'Trading Card Games',
            picture: '/pokemon.jpg'
        },
        {
            title: 'Destiny 2',
            picture: '/destiny.jpg'
        },
        {
            title: 'Rainbow Six Siege',
            picture: '/r6.jpg'
        },
        {
            title: 'FIFA',
            picture: '/fifa.jpg'
        },
        {
            title: 'Call of Duty',
            picture: '/cod.jpg'
        },
        {
            title: 'Smite',
            picture: '/smite.jpg'
        },
        {
            title: 'Pokemon',
            picture: '/pokemon1.jpg'
        }
    ];

    return (
    	<main className="relative">

			<div className="fixed left-[7.5vw] top-[15vh] h-[75vh] w-[2vw] z-10 bg-white overflow-y-auto flex flex-col justify-evenly">
				{games.map((game) => (
					<button key={game.title} className="block w-full p-4 bg-red-500 text-black hover:bg-gray-100">{game.title[0]}</button>
				))}
			</div>

      		<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[7.5vh]">
        		<div className="w-[75vw] items-center flex justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-50 z-[1]" src='/blob1.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col w-3/5 gap-6 text-white z-[2]">
						<p className="font-bold text-3xl text-red-500">Gamers' Lounge</p>
						<p className="text-5xl font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2]" src='/real-logo.png' alt="ex1" width={250} height={250}></Image>
				</div>
      		</div>

			<div className="w-screen bg-[#d3d3d3] flex flex-col justify-center items-center">
				{games.map((game, index) => (
					<div key={index} className="w-[75vw] h-[20vh] rounded-xl overflow-hidden relative flex justify-center items-center">
						<Image src={game.picture} alt={game.title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
						<p id="game-title" className="absolute text-white text-5xl font-bold z-10">{game.title}</p>
					</div>
				))}
			</div>
    	</main>
  	);
}
