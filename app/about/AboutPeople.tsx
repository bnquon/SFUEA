import React from 'react'
import { Person, people } from '../data/AboutPeople'
import { motion } from 'framer-motion'

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

export const AboutPeople = () => {

  return (
      <div className="w-full flex flex-col items-center bg-[#d3d3d3]">
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-flow-row sm:w-[75vw] w-[90vw] box-border relative gap-[4vw]">
            {people.map((person: Person, index) => (	
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
    )
}
