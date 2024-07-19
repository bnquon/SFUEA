import React from "react";
import Image from "next/image";

interface SubPageBannerProps {
  pageTitle: string;
  pageDescription: string;
  blobImage: string;
}

export const SubPageBanner: React.FC<SubPageBannerProps> = ({
  pageTitle,
  pageDescription,
  blobImage,
}) => {
  return (
    <div className="relative box-border flex w-screen flex-col items-center justify-center bg-[#d3d3d3] pb-[10vh] pt-[15vh]">
      <div className="relative z-0 flex w-[90vw] flex-col items-start justify-evenly overflow-hidden rounded-xl py-10 text-black sm:w-[75vw] sm:flex-row sm:items-center">
        <Image
          priority={true}
          className="absolute z-[1] brightness-[35%]"
          src={blobImage}
          alt="ex1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></Image>
        <div className="z-[2] flex w-[90%] flex-col gap-6 pl-[5%] text-white sm:w-3/5 sm:pl-0">
          <p className="text-lg font-bold text-red-500 sm:text-2xl lg:text-3xl">
            {pageTitle}
          </p>
          <p className="text-[21px] font-extrabold sm:text-[27px] lg:text-4xl xl:text-5xl">
            {pageDescription}
          </p>
        </div>
        <Image
          priority={true}
          className="z-[2] mt-5 h-auto w-[150px] pl-[5%] sm:mt-0 sm:w-[20%] sm:pl-0 xl:w-[17.5%]"
          src="/real-logo.webp"
          alt="ex1"
          width={0}
          height={0}
          sizes="100vw"
        ></Image>
      </div>
    </div>
  );
};
