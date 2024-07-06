import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

interface HomeHeaderProps {
    title: string,
    description: string
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ title, description }) => {
  
    return (
        <div className="sm:w-[75vw] w-[90vw] mb-[60px] text-black xl:flex xl:flex-row sm:grid sm:grid-cols-[auto] sm:grid-rows-2 flex flex-col relative box-border">
            <div className="col-span-2 row-span-1 duration-500 xl:w-fit w-full xl:pr-8 pr-0 flex items-center justify-start xl:border-r-black border-r-0 xl:border-r-2 xl:border-b-0 flex-shrink-0 overflow-hidden">
                <h1 className="text-4xl sm:text-6xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400">
                    {title}
                </h1>
            </div>
            <div className="col-span-1 row-start-2 lg:flex lg:flex-grow overflow-hidden items-center justify-start sm:text-xl lg:text-2xl text-base">
                <p className="font-semibold box-border xl:pl-8 xl:pr-4 xl:pt-0 pr-2 pt-2">
                    {description}
                </p>
            </div>
            <div className="w-fit flex flex-grow flex-shrink-0 items-center justify-start sm:mt-0 mt-2">
                <span className='h-fit sm:text-lg lg:text-xl text-base p-2 sm:p-3 rounded-full flex flex-shrink-0 flex-grow items-center text-white duration-200 cursor-pointer bg-black'>
                    Learn More &nbsp;
                    <FontAwesomeIcon className='-rotate-45 text-2xl' icon={faArrowCircleRight}/>
                </span>
            </div>
        </div>
    )

}
