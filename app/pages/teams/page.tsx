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
        		<div className="sm:w-[75vw] w-[90vw] sm:items-center items-start flex sm:flex-row flex-col justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-[35%] z-[1]" src='/blob2.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col sm:w-3/5 w-[90%] pl-[5%] sm:pl-0 gap-6 text-white z-[2]">
						<p className="font-bold sm:text-2xl lg:text-3xl text-base text-red-500">About Us</p>
						<p className="sm:text-[27px] lg:text-4xl xl:text-5xl text-[21px] font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2] sm:w-[20%] xl:w-[17.5%] w-[150px] h-auto mt-5 pl-[5%] sm:pl-0 sm:mt-0" src='/real-logo.png' alt="ex1" width={0} height={0} sizes='100vw'></Image>
				</div>
      		</div>

            <div className="w-screen bg-[#d3d3d3] flex justify-center items-center pb-[8vh]">
                <div className="sm:w-[75vw] w-[90vw]">
					<span className="relative flex justify-center sm:text-left text-center">
                    <div
                        className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] sm:px-6 px-0 text-red-500 text-5xl font-extrabold">Our Teams</span>
                    </span>
				</div>
            </div>

			<div className="w-screen bg-[#d3d3d3] flex flex-col sm:pl-[12.5vw] pl-[5vw]">
                {games.map((game, gameIndex) => (
                    <div className="w-screen" key={gameIndex}>
                        <div className="sm:w-[75vw] w-[90vw] sm:h-[20vh] h-[15vh] rounded-xl overflow-hidden relative flex justify-center items-center sm:mb-[6vh] mb-[4vh]">
                            <Image className="brightness-75" src={game.picture} alt={game.title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                            <p id="game-title" className="absolute text-white sm:text-5xl text-4xl font-bold text-center px-2">{game.title}</p>
                        </div>
                        
                        <div className="sm:w-[75vw] w-[90vw] grid grid-flow-row lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 relative box-border sm:gap-8 gap-2 sm:mb-[6vh] mb-[4vh]">
                            {people.map((person, personIndex) => (
                                <div key={personIndex} className="h-[15vh] flex flex-col justify-center text-center items-center bg-gradient-to-t from-black to-gray-700 rounded-xl shadow-md px-2">
                                    <p className="sm:text-3xl text-xl font-bold">{person.name}</p>
                                    <p className="sm:text-xl text-lg leading-5 text-red-500 font-semibold">{person.role}</p>
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
