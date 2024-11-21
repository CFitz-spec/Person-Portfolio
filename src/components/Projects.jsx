"use client"

import { useEffect, useRef, useState } from "react"
import Heading from "./sub/Heading"
import Project from "./sub/Project"
import { projectData, projectsButton } from "@/assets"
import { animate, motion } from "framer-motion"
const Projects = () => {
    const [tech, setTech] = useState("All"); //Which tech to show
    const [index, setIndex] = useState(0); //Which button was clicked
    const previndex = useRef(0); //Which button was last choosen
    const buttonsRef = useRef([]) //Helps to select the button elements for animation effects


    function handleClick() {
        //accesses button stored at previous index. Sets it opacity and scale.
        animate(buttonsRef.current[previndex.current], { opacity: 0.5, scale: 1 });
        //Access current button. sets its opacity and scale. 
        animate(buttonsRef.current[index], {
            opacity: 1, scale: 1.2
        })
    }
    useEffect(() => {
        //runs handleClick to initalise the button animation
        //sets the prevIndex to index so the animation has a prev index to animation
        handleClick()
        previndex.current = index
        //Only runs again when index is changed i.e. when one of the buttons is clicked. 
    }, [index])
    return (
        <div id="projects" className='min-h-screen py-20 '>
            <Heading text={'Projects'} />
            <div className="flex flex-wrap items-center justify-between gap-4 py-10">
                {projectsButton.map((text, i) => (
                    <motion.button
                        initial={{
                            //Set the first buttons opacity and scale and sets the rest as smaller 
                            opacity: i === 0 ? 1 : 0.5,
                            scale: i === 0 ? 1.2 : 1
                        }}
                        onClick={() => {
                            setTech(text) //triggers re-render to display projects that are filtered by tecg
                            setIndex(i)
                        }}
                        ref={(el) => buttonsRef.current.push(el)} // el is the button element - pushes el onto buttonsRef array in the order they were mapped
                        key={i}
                        className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400">
                        {text}
                    </motion.button>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5">
                {/**This filters the project data array based on its tech. 
                 * iterates through each element of the project data arrray. 
                 * if tech is "All" then returns all elements 
                 * otherwise only returns an array of project data elements that match current tech selected.  
                 */}
                {projectData.filter((project) => {
                    return project.tech.some((item) => (
                        tech === "All" ? true : item === tech
                    ))
                })
                    //This part iterates through the new array and passes the respective data to the component Project 
                    .map((data, i) => (
                        <motion.div layout key={`id-${i}`}>
                            <Project data={data} index={i} />
                        </motion.div>
                    ))}


            </div>
        </div>
    )
}

export default Projects