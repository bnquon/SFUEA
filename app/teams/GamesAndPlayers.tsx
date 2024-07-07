import React from 'react'
import { Game, games } from '../data/Games'
import { Person, people } from '../data/TeamsPeople'
import Image from 'next/image'

export const GamesAndPlayers = () => {
  return (
    <div className="w-screen bg-[#d3d3d3] flex flex-col sm:pl-[12.5vw] pl-[5vw]">
        {games.map((game: Game, gameIndex) => (
            <div className="w-screen sm:pt-[6vh] pt-[4vh]" key={gameIndex}>
                <div id={game.title} className="sm:w-[75vw] w-[90vw] sm:h-[20vh] h-[15vh] rounded-xl overflow-hidden relative flex justify-center items-center">
                    <Image className="brightness-75" src={game.picture} alt={game.title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%', objectFit: 'cover'}}></Image>
                    <p id="game-title" className="absolute text-white xl:text-6xl sm:text-5xl text-4xl font-bold text-center px-2">{game.title}</p>
                </div>
                
                <div className="sm:w-[75vw] w-[90vw] grid grid-flow-row lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 relative box-border sm:gap-8 gap-2 sm:mt-[6vh] mt-[4vh]">
                    {people.map((person: Person, personIndex) => (
                        <div key={personIndex} className="h-[15vh] flex flex-col justify-center text-center items-center bg-gradient-to-t from-black to-gray-700 rounded-xl shadow-md px-2">
                            <p className="sm:text-3xl xl:text-4xl text-xl font-bold">{person.name}</p>
                            <p className="sm:text-xl text-lg xl:text-2xl leading-5 text-red-500 font-semibold">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
}
