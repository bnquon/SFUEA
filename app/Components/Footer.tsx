import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faSquareInstagram, faFacebookF, faXTwitter, faTwitch, faTiktok} from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
  return (
    <div className='pt-[20vh] relative bg-[#d3d3d3]'>
        <div className="w-full lg:h-[50vh] bg-black relative sm:pl-[12.5vw] pl-[5vw]">

            <div className="lg:w-[37.5vw] sm:w-[75vw] w-[90vw] relative bg-red-500 rounded-3xl -translate-y-1/3 flex flex-col justify-between sm:p-10 py-6 px-3 box-border">
                <div>
                    <p className='sm:text-5xl text-3xl font-bold'>JOIN THE CLUB.</p> <br />
                    <p className='sm:text-2xl text-xl xl:text-3xl mb-4 xl:mb-8'>We want to see you in the Gamers&apos; Lounge or the next in-house!</p>
                </div>
                <button id='footer-btn' className='bg-black w-fit rounded-full sm:text-2xl text-lg hover:bg-white hover:text-black duration-200 sm:px-10 sm:py-5 px-6 py-3'>Get Started</button>
            </div>
            
            <div className='relative sm:w-[75vw] w-[90vw] flex flex-col justify-center items-center lg:justify-start lg:items-start mt-[-20px]'>
                <h1 className='mb-8 text-2xl xl:text-4xl font-bold'>SFU Gaming and Esports Club</h1>

                <ul className='flex gap-8 mb-10 text-xl xl:text-2xl'>
                    <li>About</li>
                    <li>Teams</li>
                    <li>Gamers&apos; Lounge</li>
                    <li>Events</li>
                </ul>
                 
                <div className='flex h-[8vh] gap-4 relative lg:w-fit'>
                    <div className="h-[40px] xl:w-[50px] w-[40px] xl:h-[50px] bg-white flex items-center justify-center p-2 rounded-lg box-border">
                        <FontAwesomeIcon className='text-2xl xl:text-3xl' icon={faDiscord} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                    <div className="h-[40px] xl:w-[50px] w-[40px] xl:h-[50px] bg-white flex items-center justify-center p-2 rounded-lg box-border">
                        <FontAwesomeIcon className='text-2xl xl:text-3xl' icon={faSquareInstagram} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                    <div className="h-[40px] xl:w-[50px] w-[40px] xl:h-[50px] bg-white flex items-center justify-center p-2 rounded-lg box-border">
                        <FontAwesomeIcon className='text-2xl xl:text-3xl' icon={faFacebookF} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                    <div className="h-[40px] xl:w-[50px] w-[40px] xl:h-[50px] bg-white flex items-center justify-center p-2 rounded-lg box-border">
                        <FontAwesomeIcon className='text-2xl xl:text-3xl' icon={faXTwitter} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                    <div className="h-[40px] xl:w-[50px] w-[40px] xl:h-[50px] bg-white flex items-center justify-center p-2 rounded-lg box-border">
                        <FontAwesomeIcon className='text-2xl xl:text-3xl' icon={faTwitch} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                    <div className="h-[40px] xl:w-[50px] w-[40px] xl:h-[50px] bg-white flex items-center justify-center p-2 rounded-lg box-border">
                        <FontAwesomeIcon className='text-2xl xl:text-3xl' icon={faTiktok} style={{color: '000000'}}></FontAwesomeIcon>
                    </div>
                </div>

                <div className="w-fit h-[4vh] text-white text-lg"><span>Created by: <a className='underline' href="https://www.linkedin.com/in/brandon-quon/" target="_blank">Brandon Quon</a></span></div>

                <div className='lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4 lg:mb-5 mt-4 sm:mt-4 lg:absolute w-[45%] h-full right-0 top-0 lg:translate-y-[-75%] xl:translate-y-[-50%] flex flex-col items-center justify-center gap-10 xl:gap-14'>
                    <Image src='/real-logo.webp' width={250} height={250} alt='logo'></Image>
                    <p className='text-xl xl:text-2xl text-center'>Contact us: EMAIL@EMAIL.COM</p>
                </div>

                <div className='flex flex-col justify-center items-center lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-[calc(100%-20px)] mt-4 sm:mt-0'>
                    <Image src='/racc.webp' width={175} height={175} alt='logo'></Image>
                </div>
            </div>

        </div>
    </div>
  )
}
