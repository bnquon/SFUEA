import React from "react";

interface SubPageHeaderProps {
  title: string;
}

export const SubPageHeader: React.FC<SubPageHeaderProps> = ({ title }) => {
  return (
    <div className="flex w-screen items-center justify-center bg-[#d3d3d3]">
      <div className="mb-[8vh] w-[90vw] sm:w-[75vw]">
        <span className="relative flex justify-center text-center sm:text-left">
          <div className="absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75 sm:block"></div>

          <span className="z-1 relative bg-[#d3d3d3] px-0 text-4xl font-extrabold text-red-500 sm:px-6 sm:text-6xl">
            {title}
          </span>
        </span>
      </div>
    </div>
  );
};
