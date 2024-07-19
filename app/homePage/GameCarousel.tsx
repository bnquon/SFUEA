"use client";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { games, Game } from "../data/Games";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCaretRight,
  faSquareCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const GameCarousel = () => {
  const slider = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="relative flex h-[60vh] w-[calc(85vw+60px)] justify-center">
      <div className="flex h-full w-[10vw] items-center justify-center sm:w-[5vw]">
        <FontAwesomeIcon
          className="cursor-pointer text-2xl duration-150 hover:brightness-75 sm:text-4xl xl:text-6xl"
          onClick={() => slider?.current?.slickPrev()}
          icon={faSquareCaretLeft}
          style={{ color: "#ff0000" }}
        />
      </div>

      <div className="relative box-border h-full w-[70vw] sm:w-[calc(75vw+60px)]">
        <Slider ref={slider} {...settings}>
          {games.map((game: Game, index) => (
            <Link href={`/teams#${game.title}`} key={index}>
              <div
                id="game-div"
                key={index}
                className="relative box-border flex h-[60vh] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md shadow-md"
              >
                <p
                  id="game-title"
                  className="absolute bottom-0 z-10 flex h-[30%] w-full items-end justify-center bg-gradient-to-t from-red-600 pb-[15%] pl-5 pr-5 text-center text-3xl font-bold text-white sm:text-4xl xl:text-5xl"
                >
                  {game.title}
                </p>
                <p className="absolute top-0 z-10 h-[8%] w-full bg-gradient-to-b from-red-500"></p>
                <Image
                  id="game-pic"
                  className="object-cover lg:brightness-[85%] duration-300 lg:hover:scale-110 lg:hover:brightness-100 brightness-100"
                  width={0}
                  height={0}
                  src={game.picture}
                  alt={game.title}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="flex h-full w-[10vw] items-center justify-center sm:w-[5vw]">
        <FontAwesomeIcon
          className="cursor-pointer text-2xl duration-150 hover:brightness-75 sm:text-4xl xl:text-6xl"
          onClick={() => slider?.current?.slickNext()}
          icon={faSquareCaretRight}
          style={{ color: "#ff0000" }}
        />
      </div>
    </div>
  );
};
