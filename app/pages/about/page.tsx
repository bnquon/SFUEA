"use client"
import dynamic from 'next/dynamic';
import Image from "next/image";
import { motion } from "framer-motion";
import { Footer } from '@/app/Components/Footer';

const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), { ssr: false });

const cardAnimation = {
	initial: {
		opacity: 0,
		y: 100
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2,
			duration: 0.3
		}
	}
}

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
		},
		{
			name: "Michael Lee",
			role: "Data Analyst"
		},
		{
			name: "Sarah Wilson",
			role: "Graphic Designer"
		},
		{
			name: "David Martinez",
			role: "Project Manager"
		},
		{
			name: "Jennifer Taylor",
			role: "Content Writer"
		},
		{
			name: "Robert Anderson",
			role: "Sales Representative"
		},
		{
			name: "Michelle Garcia",
			role: "HR Coordinator"
		},
		{
			name: "William Hernandez",
			role: "Customer Support Specialist"
		},
		{
			name: "Samantha Young",
			role: "Financial Analyst"
		}
	];
	
    return (
    	<main className="relative">

			<div id="section1" className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[10vh]">
        		<div className="sm:w-[75vw] w-[90vw] sm:items-center items-start flex sm:flex-row flex-col justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
					<Image className="absolute brightness-[35%] z-[1]" src='/blob2.jpg' alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
					<div className="flex flex-col sm:w-3/5 w-[90%] pl-[5%] sm:pl-0 gap-6 text-white z-[2]">
						<p className="font-bold sm:text-2xl lg:text-3xl text-base text-red-500">Events</p>
						<p className="sm:text-[27px] lg:text-4xl xl:text-5xl text-[21px] font-extrabold">SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION.</p>
					</div>
					<Image className="z-[2] sm:w-[20%] xl:w-[17.5%] w-[150px] h-auto mt-5 pl-[5%] sm:pl-0 sm:mt-0" src='/real-logo.png' alt="ex1" width={0} height={0} sizes='100vw'></Image>
				</div>
      		</div>

			<div className="w-screen relative bg-[#d3d3d3] flex justify-center items-center box-border flex-col pt-[5vh] pb-[5vh]">
				<div className="sm:w-[75vw] w-[90vw] mb-[8vh]">
					<span className="relative flex justify-center sm:text-left text-center">
                    <div
                        className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    ></div>

                    <span className="relative z-1 bg-[#d3d3d3] sm:px-6 px-0 text-red-500 text-4xl sm:text-6xl font-extrabold">Who We Are</span>
                    </span>
				</div>

				<div className="sm:w-[75vw] w-[90vw] flex flex-col box-border">
					<div className="w-full flex lg:flex-row lg:gap-0 gap-4 flex-col text-black py-6">
						<div className="lg:w-2/5 w-full sm:text-3xl xl:text-4xl text-2xl font-bold">
							<p>How We Started</p>
						</div>
						<div className="lg:w-3/5 w-full sm:text-xl lg:text-2xl xl:text-3xl font-normal">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio fugit minus molestias deserunt, reiciendis asperiores? Dolores cum distinctio ratione veritatis tenetur? Quibusdam ipsa vero reprehenderit dolorem veritatis dicta eveniet.</p>
						</div>
					</div>
					<div className="w-full flex lg:flex-row lg:gap-0 gap-4 flex-col text-black border-y-[1px] border-[#999999] py-6">
						<div className="lg:w-2/5 w-full sm:text-3xl xl:text-4xl text-2xl font-bold">
							<p>Our Goals</p>
						</div>
						<div className="lg:w-3/5 w-full sm:text-xl lg:text-2xl xl:text-3xl font-normal">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio fugit minus molestias deserunt, reiciendis asperiores? Dolores cum distinctio ratione veritatis tenetur? Quibusdam ipsa vero reprehenderit dolorem veritatis dicta eveniet.</p>
						</div>
					</div>
					<div className="w-full flex lg:flex-row lg:gap-0 gap-4 flex-col text-black py-6">
						<div className="lg:w-2/5 w-full sm:text-3xl xl:text-4xl text-2xl font-bold">
							<p>Our Vision</p>
						</div>
						<div className="lg:w-3/5 w-full sm:text-xl lg:text-2xl xl:text-3xl font-normal">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio fugit minus molestias deserunt, reiciendis asperiores? Dolores cum distinctio ratione veritatis tenetur? Quibusdam ipsa vero reprehenderit dolorem veritatis dicta eveniet.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-screen relative bg-[#d3d3d3] flex justify-center items-center box-border pt-[6vh]">

				<div className="sm:w-[75vw] w-[90vw] lg:h-[50vh] flex lg:flex-row flex-col box-border gap-5">
					<div className="lg:w-2/5 w-full h-full flex flex-col text-black lg:gap-10 gap-5 box-border pr-6 justify-start">
						<p className="sm:text-3xl xl:text-4xl text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className="sm:text-xl lg:text-2xl xl:text-3xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
					</div>
					<WidgetBot className="lg:w-3/5 w-full h-[45vh] lg:h-full"
						server= '1251409341676912660'
						channel= '1251409341676912663'/>
				</div>
			</div>

			<div className="pt-[8vh] pb-[5vh] w-screen text-6xl flex flex-col justify-center items-center bg-[#d3d3d3]">
				<div className="sm:w-[75vw] w-[90vw] mb-[8vh]">
					<span className="relative flex justify-center items-center sm:text-left text-center">
                    	<div
                        className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                    	></div>

                    	<span className="relative z-1 bg-[#d3d3d3] sm:px-6 px-0 text-red-500 text-4xl sm:text-6xl font-extrabold">Meet our Leaders</span>
                    </span>
				</div>

				<div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-flow-row sm:w-[75vw] w-[90vw] box-border relative gap-[4vw]">
					{people.map((person, index) => (	
						<motion.div variants={cardAnimation} initial='initial' whileInView='visible' viewport={{ once: true }} key={index} className="w-full sm:h-[30vh] h-[30vh] bg-white rounded-lg shadow-md flex flex-col items-center gap-5 relative box-border sm:py-6 py-2 overflow-hidden">
							<div className="absolute w-full lg:h-1/3 h-[30%] bg-black top-0 left-0 z-0"></div>
							<div className="w-full flex items-center justify-center relative">
								<div className="aspect-square rounded-full bg-gray-500 lg:w-1/2 sm:w-2/5 w-1/2"></div>
							</div>
							<div className="w-full text-xl sm:px-2 px-1 flex flex-col items-center justify-center text-center">
								<p className="sm:text-3xl xl:text-4xl text-xl text-black font-bold">{person.name}</p>
								<p className="lg:text-xl sm:text-lg xl:text-2xl text-base sm:leading-6 leading-5 text-black font-normal">{person.role}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<Footer/>

    	</main>
  	);
}
