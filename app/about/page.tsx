"use client"
import dynamic from 'next/dynamic';
import Image from "next/image";
import { AboutPeople } from './AboutPeople';
import { SubPageBanner } from '../Components/SubPageBanner';
import { SubPageHeader } from '../Components/SubPageHeader';
import { Footer } from '@/app/Components/Footer';

const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), { ssr: false });

export default function Home() {
	
    return (
    	<main className="relative">

			<SubPageBanner pageTitle="About" pageDescription="SFU GAMING AND ESPORTS CLUB IS THE PREMIUM LIFESTYLE BRAND FOR THE GAMING GENERATION." blobImage="/blob2.webp" />

			<div className="w-screen relative bg-[#d3d3d3] flex justify-center items-center box-border flex-col pt-[5vh] pb-[5vh]">

				<SubPageHeader title="Who We Are" />

				<div className="sm:w-[75vw] w-[90vw] flex flex-col box-border gap-0 lg:gap-2 xl:gap-4">
					<div className="w-full flex lg:flex-row lg:gap-0 gap-4 flex-col text-black py-6">
						<div className="lg:w-2/5 w-full sm:text-3xl xl:text-4xl text-2xl font-bold">
							<p>How We Started</p>
						</div>
						<div className="lg:w-3/5 w-full sm:text-xl lg:text-2xl xl:text-3xl xl:leading-10 font-normal">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio fugit minus molestias deserunt, reiciendis asperiores? Dolores cum distinctio ratione veritatis tenetur? Quibusdam ipsa vero reprehenderit dolorem veritatis dicta eveniet.</p>
						</div>
					</div>
					<div className="w-full flex lg:flex-row lg:gap-0 gap-4 flex-col text-black border-y-[1px] border-[#999999] py-6">
						<div className="lg:w-2/5 w-full sm:text-3xl xl:text-4xl text-2xl font-bold">
							<p>Our Goals</p>
						</div>
						<div className="lg:w-3/5 w-full sm:text-xl lg:text-2xl xl:text-3xl xl:leading-10 font-normal">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio fugit minus molestias deserunt, reiciendis asperiores? Dolores cum distinctio ratione veritatis tenetur? Quibusdam ipsa vero reprehenderit dolorem veritatis dicta eveniet.</p>
						</div>
					</div>
					<div className="w-full flex lg:flex-row lg:gap-0 gap-4 flex-col text-black py-6">
						<div className="lg:w-2/5 w-full sm:text-3xl xl:text-4xl text-2xl font-bold">
							<p>Our Vision</p>
						</div>
						<div className="lg:w-3/5 w-full sm:text-xl lg:text-2xl xl:text-3xl xl:leading-10 font-normal">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio fugit minus molestias deserunt, reiciendis asperiores? Dolores cum distinctio ratione veritatis tenetur? Quibusdam ipsa vero reprehenderit dolorem veritatis dicta eveniet.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-screen relative bg-[#d3d3d3] flex justify-center items-center box-border pt-[6vh]">

				<div className="sm:w-[75vw] w-[90vw] lg:h-[50vh] flex lg:flex-row flex-col box-border gap-5">
					<div className="lg:w-2/5 w-full h-full flex flex-col text-black lg:gap-10 gap-5 box-border pr-6 justify-start">
						<p className="sm:text-3xl xl:text-4xl text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className="sm:text-xl lg:text-2xl xl:text-3xl xl:leading-10 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
					</div>
					<WidgetBot className="lg:w-3/5 w-full h-[45vh] lg:h-full"
						server= '1251409341676912660'
						channel= '1251409341676912663'/>
				</div>
			</div>

			<div className="pt-[8vh] pb-[5vh] w-screen text-6xl flex flex-col justify-center items-center bg-[#d3d3d3]">

				<SubPageHeader title="Our Leaders" />

			</div>

			<AboutPeople/>

			<Footer/>

    	</main>
  	);
}
