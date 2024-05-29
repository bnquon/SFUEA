"use client"
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Home() {

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.2,
    });

    if (inView) {
        console.log(inView);
    }

    return (
        <main className="relative">

            
                <div id="section1" className="h-screen w-screen bg-blue-500 flex justify-center items-center relative">
                    Raleway
                    RALEWAY
                    section1
                </div>

                <div className="sticky top-0 h-screen bg-red-500 flex justify-center items-center z-10">
                    SAMPLE TEXT SAMPLE TEXT
                    <div className="w-28 h-28 rounded-full bg-white overflow-hidden flex justify-center items-end absolute duration-300" style={{opacity: inView? '1': '0'}}>
                        <Image src='/racc.png' width={75} height={60} alt="raccoon"></Image>
                    </div>   
                </div>

                <div ref={ref} className="h-screen w-screen bg-blue-500 flex justify-center items-center relative">
                    SAMPLE TEXT SAMPLE TEXT
                </div>

        </main>
    );
}