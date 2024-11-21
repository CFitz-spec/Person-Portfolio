"use client"

import Heading from "./sub/Heading"
import { animate, motion } from "framer-motion"

import { reviewData } from "@/assets"
import { starIcons, arrowIcons } from "@/assets"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"


const Reviews = () => {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(false) //Which direction we transitioning
    const prevIndex = useRef(0) // gets the index of the previous slide shown
    const slides = useRef([]) // to control each rednered review div 
    /**
     * This is going to fire on click. 
     * animate() from Framer-motion
     * gets slide index from slide const 
     * this will be the whichever slide is currently rendered. 
     * x: 0 sets horizontal pos of slide to 0 
     * delay: 0.3 means adds a delay....
     * Then
     * animate() 
     * gets prev slides index
     * if the index is 0 scale stays the scale otherwise scale to 0.4 
     * if the index is 0 then rotate is 0 else if index is an even number rotate 10 degress odd -10 degrees. 
     */
    function rightClickHandler() {
        animate(slides.current[index], { x: 0 }, { delay: 0.3 })
        animate(slides.current[prevIndex.current],
            {
                scale: index === 0 ? 1 : 0.4,
                rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10
            })
    }
    function leftClickHandler() {
        animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
        animate(slides.current[prevIndex.current], { x: "100%" })
    }

    useEffect(() => {
        direction ? leftClickHandler() : rightClickHandler();
        prevIndex.current = index
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])
    return (
        <div id="reviews" className="my-20">
            <Heading text={"Reviews"} />

            <div className="flex flex-col items-center justify-center">

                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] 
                    flex items-center justify-center overflow-hidden">
                    {reviewData.map((review, i) => (
                        <motion.div
                            initial={{ x: '100%' }}
                            ref={(element) => slides.current.push(element)} // this makes sure all div elements are on the array as they are rendered
                            key={i} className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl dark:bg-zinc-700 transition-colors">

                            <Image className={`w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain`}
                                src={review.image}
                                alt={"Review Client Image"}
                                width={130}
                                height={130}
                            />
                            <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600 " >{review.name}</h1>
                            <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2 dark:text-white transition-colors "  >
                                {review.comment}
                            </p>
                            <div className="flex flex-col items-center justify-center gap-y-2">
                                <span className="text-lg font-light text-yellow-600 mr-3">
                                    {review.stars.reduce(function (result, item) {
                                        return (
                                            result + item
                                        )
                                    }, 0).toFixed(1)}

                                </span>
                                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                                    {review.stars.map((star, i) => (
                                        <span key={i}>{star === 1 ? starIcons[0] : starIcons[1]}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>

                <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
                    <button className={`${index === 0 ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"}
                    hover:scale-150 transition-all`}

                        onClick={() => {
                            setDirection(true)
                            setIndex(index - 1)
                        }}>{arrowIcons[0]}</button>
                    <button className={`${index === reviewData.length - 1 ? `opacity-30
                    pointer-events-none` : `opacity-100
                    pointer-events-auto`}
                    hover:scale-150 transition-all`}
                        onClick={() => {
                            setDirection(false)
                            setIndex(index + 1)
                        }}>{arrowIcons[1]}</button>
                </div>
            </div>
        </div >
    )
}

export default Reviews