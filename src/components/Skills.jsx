"use client"

import Image from "next/image"
import Heading from "./sub/Heading"
import { skillsData } from "@/assets"
import { motion } from "framer-motion"

const Skills = () => {
    const variant = {
        /**
         * two states here
         * Visible and hidden.
         * visible take a parameter i 
         * the y gives it its position.
         * transition gives the skill items an appearance of one by one. The i para gives it a delay based on its position in array
         */
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.07,
            },
        }),
        hidden: { // the starting states before the skill elements are in view
            opacity: 0,
            y: 30
        }
    }
    return (
        <div id="skills" className="min-h-screen flex flex-col items-center justify-center gap-y-20 ">
            <Heading text={"Skills"} />
            <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6" >
                {
                    skillsData.map((data, i) => (
                        <motion.div custom={i} // This passes the index of each skill block to our visible i 
                            variants={variant} // This connects motion comp to variants object created. 
                            initial="hidden" //sets inital state to hidden before animation begins. 
                            whileInView={"visible"}// When in viewport the animation will start to happen. 
                            viewport={{ margin: `50px`, once: true }}
                            whileHover={{ scale: 1.1 }}
                            key={i} className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2">
                            <Image
                                className="h-auto w-[40px]"
                                src={data.icon} alt={`${data.name} image`} width={100} height={100} unoptimized={true} />

                            <p className="text-sm text-gray-600">{data.name}</p>
                        </motion.div>
                    ))
                }


            </div >
        </div >
    )
}

export default Skills