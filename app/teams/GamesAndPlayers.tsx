import React from "react";
import { Game, games } from "../data/Games";
import { Person, people } from "../data/TeamsPeople";
import Image from "next/image";

export const GamesAndPlayers = () => {
  return (
    <div className="flex w-screen flex-col bg-[#d3d3d3] pl-[5vw] sm:pl-[12.5vw]">
      {games.map((game: Game, gameIndex) => (
        <div className="w-screen pt-[4vh] sm:pt-[6vh]" key={gameIndex}>
          <div
            id={game.title}
            className="relative flex h-[15vh] w-[90vw] items-center justify-center overflow-hidden rounded-xl sm:h-[20vh] sm:w-[75vw]"
          >
            <Image
              className="brightness-75"
              src={game.picture}
              alt={game.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            ></Image>
            <p
              id="game-title"
              className="absolute px-2 text-center text-4xl font-bold text-white sm:text-5xl xl:text-6xl"
            >
              {game.title}
            </p>
          </div>

          <div className="relative mt-[4vh] box-border grid w-[90vw] grid-flow-row grid-cols-2 gap-2 sm:mt-[6vh] sm:w-[75vw] sm:grid-cols-3 sm:gap-8 lg:grid-cols-4">
            {people.map((person: Person, personIndex) => (
              <div
                key={personIndex}
                className="flex h-[15vh] flex-col items-center justify-center rounded-xl bg-gradient-to-t from-black to-gray-700 px-2 text-center shadow-md"
              >
                <p className="text-xl font-bold text-white sm:text-3xl xl:text-4xl">
                  {person.name}
                </p>
                <p className="text-lg font-semibold leading-5 text-red-500 sm:text-xl xl:text-2xl">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
