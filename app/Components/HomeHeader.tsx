import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

interface HomeHeaderProps {
  title: string;
  description: string;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="relative mb-[60px] box-border flex w-[90vw] flex-col text-black sm:grid sm:w-[75vw] sm:grid-cols-[auto] sm:grid-rows-2 xl:flex xl:flex-row">
      <div className="col-span-2 row-span-1 flex w-full flex-shrink-0 items-center justify-start overflow-hidden border-r-0 pr-0 duration-500 xl:w-fit xl:border-b-0 xl:border-r-2 xl:border-r-black xl:pr-8">
        <h1 className="bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl xl:text-8xl">
          {title}
        </h1>
      </div>
      <div className="col-span-1 row-start-2 items-center justify-start overflow-hidden text-base sm:text-xl lg:flex lg:flex-grow lg:text-2xl">
        <p className="box-border pr-2 pt-2 font-semibold xl:pl-8 xl:pr-4 xl:pt-0">
          {description}
        </p>
      </div>
      <div className="mt-2 flex w-fit flex-shrink-0 flex-grow items-center justify-start sm:mt-0">
        <span className="flex h-fit flex-shrink-0 flex-grow cursor-pointer items-center rounded-full bg-black p-2 text-base text-white duration-200 sm:p-3 sm:text-lg lg:text-xl">
          Learn More &nbsp;
          <FontAwesomeIcon
            className="-rotate-45 text-2xl"
            icon={faArrowCircleRight}
          />
        </span>
      </div>
    </div>
  );
};
