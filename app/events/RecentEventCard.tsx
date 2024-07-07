import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

interface RecentEventCardProps {
    description: string,
    image: string,
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

export const RecentEventCard: React.FC<RecentEventCardProps> = ({ description, image, delay }) => {
    return (
        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' custom={delay} viewport={{ once: true }} id='event-card' className='lg:w-1/3 w-full h-full rounded-md overflow-hidden relative shadow-lg'>
            <Image className='w-full h-full object-cover' src={image} alt="" layout="fill" objectFit="cover" />
            <p id='event-info' className='absolute duration-200 translate-y-[100%] bottom-0 w-full p-2 font-medium sm:text-xl xl:text-2xl text-base text-white'>{description}</p>
        </motion.div>
    )
}
