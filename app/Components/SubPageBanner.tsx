import React from 'react'
import Image from 'next/image'

interface SubPageBannerProps {
    pageTitle: string,
    pageDescription: string,
    blobImage: string
}

export const SubPageBanner: React.FC<SubPageBannerProps> = ({ pageTitle, pageDescription, blobImage }) => {
    return (
        <div className="w-screen relative bg-[#d3d3d3] flex flex-col justify-center items-center box-border pt-[15vh] pb-[10vh]">
            <div className="sm:w-[75vw] w-[90vw] sm:items-center items-start flex sm:flex-row flex-col justify-evenly text-black py-10 rounded-xl overflow-hidden relative z-0">
                <Image className="absolute brightness-[35%] z-[1]" src={blobImage} alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                <div className="flex flex-col sm:w-3/5 w-[90%] pl-[5%] sm:pl-0 gap-6 text-white z-[2]">
                    <p className="font-bold sm:text-2xl lg:text-3xl text-base text-red-500">{pageTitle}</p>
                    <p className="sm:text-[27px] lg:text-4xl xl:text-5xl text-[21px] font-extrabold">{pageDescription}</p>
                </div>
                <Image className="z-[2] sm:w-[20%] xl:w-[17.5%] w-[150px] h-auto mt-5 pl-[5%] sm:pl-0 sm:mt-0" src='/real-logo.png' alt="ex1" width={0} height={0} sizes='100vw'></Image>
            </div>
        </div>
    )
}
