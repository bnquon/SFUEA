import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faSquareInstagram, faFacebookF, faXTwitter} from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
  return (
    <div className='pt-[12.5vh] relative bg-[silver]'>
        <div className="w-full h-[50vh] bg-black relative pl-[12.5vw]">

            <div className="w-[45%] h-[30vh] relative bg-red-500 rounded-3xl -translate-y-1/3 flex flex-col p-10 box-border gap-6">
                <p className='text-5xl font-bold'>JOIN THE CLUB.</p>
                <p className='text-2xl'>We want to see you in the Gamer's Lounge or the next in-house!</p>
                <button id='footer-btn' className='bg-black w-fit rounded-full text-2xl hover:bg-white hover:text-black duration-200'>Get Started</button>
            </div>
            
            <div className='relative w-[45%] h-[20vh] flex flex-col mt-[-20px]'>
                <h1 className='mb-8 text-2xl'>SFU Gaming and Esports Club</h1>

                <ul className='flex gap-8 mb-10 text-xl w-[45%]'>
                    <li>About</li>
                    <li>Teams</li>
                    <li>Events</li>
                </ul>
                
                <div className='flex h-[8vh] gap-4 relative w-[45%]'>
                    <div className="h-1/2 w-[35px] bg-white flex items-center justify-center p-2 rounded-lg">
                        <FontAwesomeIcon className='text-2xl' icon={faDiscord} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                    <div className="h-1/2 w-[35px] bg-white flex items-center justify-center p-2 rounded-lg">
                        <FontAwesomeIcon className='text-2xl' icon={faSquareInstagram} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                    <div className="h-1/2 w-[35px] bg-white flex items-center justify-center p-2 rounded-lg">
                        <FontAwesomeIcon className='text-2xl' icon={faFacebookF} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                    <div className="h-1/2 w-[35px] bg-white flex items-center justify-center p-2 rounded-lg">
                        <FontAwesomeIcon className='text-2xl' icon={faXTwitter} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                </div>

            </div>

            <div className="absolute w-[45%] h-full right-0 top-0 flex flex-col items-center justify-center gap-10">
                <Image src='/real-logo.png' width={250} height={250} alt='logo'></Image>
                <p className='text-xl'>Contact us: EMAIL@EMAIL.COM</p>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <Image src='/racc.png' width={200} height={200} alt='logo'></Image>
            </div>

        </div>
    </div>
  )
}
