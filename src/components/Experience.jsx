"use client"
import Image from "next/image"
import Heading from "./sub/Heading"
import { experienceData, ArrowLeftIcon } from "@/assets"
import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"


const Experience = () => {
    const containerRef = useRef(null)

    /**Returns an object with a value of 0 - 1 dependent on the Y scroll position of target (container Ref)
     * offset starts monitoring at 95% container and when the bottom of the container is at the bottom of the viewport
     */
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 95%", "end end"]
    })
    /**
     * Creates a spring animation.
     * Links it to the ScrollY progress. so 0 - 1 on the ref container. 
     * Stiffness to 200, and dampness to 20 to create a smooth animation effect
     */

    const scrollY = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 20
    })
    return (
        <div id="experience" className="relative py-20 ">
            <Heading text={"Experience & Education"} />
            <Image
                src={"/Assets/Education.png"}
                alt="Experience Image"
                width={400}
                height={400}
                className="absolute -top-4 right-0 opacity-70 lg:hidden"
            />
            <div ref={containerRef}
                className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-2 py-10">

                {experienceData.map((data, i) => (
                    <div key={`id-${i}`}
                        className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative -left-[300px] 
                        ${i % 2 === 0 //for left and right divs
                                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                                : "left-[300px] xl:left-[240px] lg:left-0"
                            }`}>

                        <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }} //makes elements appear from the right and left
                            whileInView={{ opacity: 1, x: 0 }} //triggers once in view
                            viewport={{ once: true }} // happens only once. 
                            transition={{ duration: 0.7, type: "spring", stiffness: 50 }} //for the animation style. duration is how long, spring is style of entry, stiffness is how "bouncy" the spring effect is
                            className="relative flex flex-col gap-y-3 mx-10 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm dark:bg-zinc-700 transition-colors z-20"
                        >

                            <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white">{data.title}</h1>
                            {data.education ? <p className="text-gray-800 dark:text-gray-100">
                                <span className="block font-light">Education:</span>
                                <span className="block pl-2 font-extralight">{data.education}</span>
                            </p> : null}
                            <div className="text-gray-800 dark:text-gray-200 transition-colors">
                                <span className="font-light">Experience:</span>
                                <ul className="pl-2">
                                    {data.experience.map((data, i) => (
                                        <li key={i} className="my-1 font-extralight">{data}</li>
                                    ))}

                                </ul>
                            </div>
                            <span className={`absolute top-20 text-red-300 -translate-y-1/2 lg:hidden 
                    ${i % 2 === 0 //for left and right divs
                                    ? "left-full rotate-180"
                                    : "right-full"
                                }`}>
                                {ArrowLeftIcon}
                            </span>
                        </motion.div>
                        <div className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white
                ${i % 2 === 0 // for left and right divs
                                ? "left-full -translate-x-1/2 lg:left-1/2 "
                                : "right-full translate-x-1/2 lg:right-1/2"
                            }`}>
                            {data.year}
                        </div>


                    </div>
                    // <EducationExperience data={data} key={i} index={i} ArrowLeftIcon={ArrowLeftIcon} />
                ))}

                <motion.div
                    initial={{ initial: 0 }} //Starts off a zero 
                    style={{ scaleY: scrollY }} // As scroll Y progresses gradually increase to full. Works dependent on user viewport 
                    className="absolute w-1 h-full rounded-full bg-gray-300 origin-top -z-5" />
            </div>

        </div>
    )

}

export default Experience