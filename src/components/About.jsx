'use client'
import Image from "next/image"
import Heading from "./sub/Heading"
import Achievements from "./sub/Achievements"
import { aboutText, aboutData, DownloadIcon, ArrowLeftIcon } from "@/assets"

const About = () => {
    return (
        <div id="about" className="min-h-screen flex flex-col items-center justify-center">
            <Heading text={"About Me"} />
            <div className="w-full flex items-center justify-between md:justify-center">
                <Image className="w-[300px] lg:w-[200px] md:hidden"
                    src={'/Assets/about-me.png'}
                    alt="About image"
                    width={400}
                    height={400} />
                <div className="dark:bg-zinc-700 transition-colors relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
                    <span className="dark:bg-zinc-700 transition-colors absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">
                        {ArrowLeftIcon}
                    </span>
                    <p className="dark:text-white text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
                        {aboutText}
                    </p>
                    <a href="/Assets/Cayman Fitzhugh CV.pdf" download=""
                        className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors">
                        <span>Download CV</span>
                        <span className="text-xl">{DownloadIcon}</span>
                    </a>
                </div>
            </div>
            <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
                {aboutData.map((item, i) => (
                    <Achievements
                        title={item.title}
                        amount={item.amount}
                        key={i} >{item.icon}
                    </Achievements>
                ))}

            </div>
        </div >
    )
}

export default About