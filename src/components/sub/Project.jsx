"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

const Project = ({ data, index }) => {
    const [show, setShow] = useState(false) //Determine if the text on the backside of the img is visble or not 
    return (
        //sets inital opacity. If the index is odd slides from above else slides in from below
        <motion.div intial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, y: 0 }} // While the element becomes into view
            viewport={{ once: true }} //Only happens once when it's view 
            transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
            }
            onClick={() => setShow((show) => !show)}
            unoptimized="true"
            className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer">
            <Image className="rounded-lg opacity-70"
                src={data.url}
                alt="Project Image"
                width={600}
                height={600}
                unoptimized={true}
            />
            <motion.div
                intial={{ opacity: 0 }}
                animate={{ opacity: show ? 1 : 0 }}
                className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg dark:bg-zinc-700/95 transition-colors">
                <h2 className="text-lg font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
                    {data.name}
                </h2>
                <p className="text-justify text-gray-500 first-letter:pl-2 dark:text-gray-100 transition-colors">
                    {data.desc}
                </p>
            </motion.div>
        </motion.div>
    )
}

export default Project