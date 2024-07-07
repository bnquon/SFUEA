import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faCircleArrowUp, faFileLines, faComments, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion";

interface ImportantDetailCardProps {
    description: string,
    image: string,
    icon: IconDefinition,
    buttonText: string | null,
    delay: number
}

const fadeInAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.1
        }
    }),
};

export const ImportantDetailCard: React.FC<ImportantDetailCardProps> = ({ description, image, icon, buttonText, delay }) => {
  
    return (
    <motion.div variants={fadeInAnimation} initial="initial" custom={delay} whileInView={"animate"} viewport={{ once: true }} className="lg:w-1/3 flex lg:flex-col-reverse lg:items-start lg:justify-end sm:flex-row flex-col-reverse w-full relative">
        <div className="lg:py-4 sm:py-0 py-4 lg:pl-0 pr-5 sm:w-1/2 w-full lg:w-full">
            <FontAwesomeIcon icon={icon} className="text-3xl xl:text-4xl mb-2"></FontAwesomeIcon>
            <h3 className="text-xl xl:text-2xl text-black mb-4">{description}</h3>
            {buttonText &&
                <span className='w-fit text-base sm:text-xl xl:text-2xl p-2 rounded-xl flex items-center justify-between bg-black text-white'>
                    {buttonText} &nbsp;
                    <FontAwesomeIcon className='rotate-45 text-2xl' icon={faCircleArrowUp}/>
                </span>
            }
        </div>

        <div className="relative lg:w-full sm:w-1/2 w-full h-[30vh]">
            <Image src={image} className="rounded-xl" alt="ex1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
        </div>

    </motion.div>
  )
}
