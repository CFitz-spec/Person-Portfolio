"use client"
import { questionArrow } from "@/assets"
import { useState } from "react"
import { motion } from "framer-motion"


const Question = ({ data, index }) => {
    const [show, setShow] = useState(false)
    //Takes the decon prop index from parent component
    // whilst visible, set opactiy to 1, x to 0, set delay to i * 0.7 so each component happens in cannon
    const variants = {
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.5,
            },
        }),
        //Whilst hidden opacity is 0 and x is -30 so it glides into position. 
        hidden: { opacity: 0, x: -30 }
    }

    return (
        <motion.li custom={index}
            initial="hidden" //intially hidden
            whileInView="visible"//whin in view becomes visible
            viewport={{ margin: '50px', once: true }} //whilst viewport is 50px away from component and only happens once
            variants={variants}//How it becomes visible
            className="border border-yellow-500 p-1 rounded-lg">
            <h1 onClick={() => setShow(!show)} className={`flex items-center text-gray-800 hover:text-yellow-600 text-xl font-extralighttracking-wide cursor-pointer dark:text-white transition-colors dark:hover:bg-zinc-700 dark:hover:text-yellow-600 
                ${show && "border-b text-yellow-600"}`}>
                <motion.span
                    // Makes the arrows spin down 180 when h1 is clicked. 
                    animate={{ rotate: show ? 180 : 0 }}>
                    {questionArrow}
                </motion.span>
                <span>
                    {data.question}
                </span>
            </h1>
            <motion.p initial={{ scaleY: 0, height: 0, opacity: 0 }} //element hidden before clicked 
                //dependent on show state. if show true drop down box activiates, otherwise it's hidden. 
                animate={{ scaleY: show ? 1 : 0, height: show ? `auto` : 0, opacity: show ? 1 : 0 }}
                //how long this transition takes. The type, if show true higher stiffness so it's more bouncy, otherwise whilst being removed quicker
                transition={{ duration: 0.1, type: "spring", stiffness: show ? 250 : 50, opacity: { delay: show ? 0.2 : 0 } }}
                className=" box-border origin-top pl-8 text-lg font-extralight tracking-wide text-gray-900 first-letter:pl-3 dark:text-gray-200 transition-colors">
                {data.answer}
            </motion.p>
        </motion.li >
    )
}

export default Question