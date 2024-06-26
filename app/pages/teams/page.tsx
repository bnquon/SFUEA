import Image from "next/image";
import { Footer } from "@/app/Components/Footer";
export default function Home() {

    type Person = {
		name: string;
		role: string;
	}
	
	const people: Person[] = [
		{
			name: "John Doe",
			role: "Software Engineer"
		},
		{
			name: "Jane Smith",
			role: "Product Manager"
		},
		{
			name: "Alex Johnson",
			role: "UX Designer"
		},
		{
			name: "Emily Brown",
			role: "Marketing Specialist"
		}
	];

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

            <div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[10vh]">
        		<div className="w-[75vw] items-center flex justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-[35%] z-[1]" src='/blob2.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col w-3/5 gap-6 text-white z-[2]">
						<p className="font-bold text-2xl lg:text-3xl text-red-500">Our Teams</p>
						<p className="text-3xl lg:text-5xl font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2]" src='/real-logo.png' alt="ex1" width={0} height={0} sizes='100vw' style={{ width: '22.5%', height: '80%' }}></Image>
				</div>
      		</div>

            <div className="w-screen bg-[#d3d3d3] pb-[5vh]">
                
                {/* <div className="flex items-center justify-center w-[75vw] my-8">
					<div className="flex-grow border-t border-black"></div>
					<span className="mx-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">Our Supported Teams</span>
					<div className="flex-grow border-t border-black"></div>
				</div> */}
            </div>

            <div className="w-screen bg-[#d3d3d3] flex justify-center items-center pb-[8vh]">
                <div className="w-[75vw]">
                    <span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] px-6 text-red-500 text-5xl font-extrabold">Meet our Gaming Teams</span>
                    </span>
                </div>
            </div>

			<div className="w-screen bg-[#d3d3d3] flex flex-col pl-[12.5vw]">
                {games.map((game, gameIndex) => (
                    <div className="w-screen" key={gameIndex}>
                        <div className="w-[75vw] h-[20vh] rounded-xl overflow-hidden relative flex justify-center items-center mb-[6vh]" style={{marginTop: gameIndex === 0 ? '0': '12vh'}}>
                            <Image className="brightness-75" src={game.picture} alt={game.title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                            <p id="game-title" className="absolute text-white text-5xl font-bold">{game.title}</p>
                        </div>
                        
                        <div className="w-[75vw] grid grid-flow-row lg:grid-cols-4 grid-cols-3 relative box-border gap-8">
                            {people.map((person, personIndex) => (
                                <div key={personIndex} className="h-[15vh] flex flex-col justify-center items-center bg-gradient-to-t from-black to-gray-700 rounded-xl shadow-md">
                                    <p className="text-3xl font-bold">{person.name}</p>
                                    <p className="text-xl text-red-500 font-semibold">{person.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Footer />

    	</main>
  	);
}
