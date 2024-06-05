import React from 'react'
import { motion } from 'framer-motion';

export const AnimationIntro = () => {
  return (
    <motion.div 
    initial={{ y: '0vh'}}
    animate={{ y: '-100vh '}}
    transition={{ 
        duration: 0.6,
        delay: 1.5 
    }}
    className='absolute z-10 w-screen h-screen bg-black flex justify-center items-center'>
        <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: 1.5,
        }}
        src="/real-logo.png" className='w-1/6' alt="" />
    </motion.div>
  )
}
