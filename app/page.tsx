import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Home() {

    // const { ref, inView, entry } = useInView({
    //  /* Optional options */
    //  threshold: 0,
    // });

    return (
        <main className="flex flex-col max-w-full overflow-x-hidden">
            <div id="section1" className="h-screen w-screen bg-red-900 flex justify-center items-center relative">
                Raleway
                RALEWAY
                section1
            </div>
            <div id="section2" className="h-screen w-screen bg-amber-500 flex justify-center items-top text-white relative z-10">
                Hello
            </div>
            <div id="section3" className="h-screen w-screen bg-black text-white flex justify-center items-center absolute top-100vh z-0">
                <Image src='/racc.png' width={100} height={100}></Image>
            </div>

            {/* <div id="section3" className="h-screen w-screen bg-rose-900">
                section3
            </div> */}
        </main>
    );
}
