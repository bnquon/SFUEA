import React from 'react'

interface SubPageHeaderProps {
    title: string
}

export const SubPageHeader: React.FC<SubPageHeaderProps> = ({ title }) => {
    return (
        <div className="w-screen bg-[#d3d3d3] flex justify-center items-center">
            <div className="sm:w-[75vw] w-[90vw] mb-[8vh]">
                <span className="relative flex justify-center sm:text-left text-center">
                <div
                    className="sm:block hidden absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
                ></div>

                <span className="relative z-1 bg-[#d3d3d3] sm:px-6 px-0 text-red-500 text-4xl sm:text-6xl font-extrabold">{title}</span>
                </span>
            </div>
        </div>
    )
}
