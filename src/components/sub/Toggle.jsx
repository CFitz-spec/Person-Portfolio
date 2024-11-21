"use client"
import { moonIcon, sunIcon } from "@/assets"
import { useEffect, useRef, useState } from "react"
import { reactLocalStorage } from "reactjs-localstorage"
import { motion } from "framer-motion"

const Toggle = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false)
    const mainRef = useRef(null)

    function addDarkTheme() {
        //adds dark class to root element
        mainRef.current.classList.add('dark')
        setDarkTheme(true)
    }
    function removeDarkTheme() {
        //adds dark class to root element
        mainRef.current.classList.remove('dark')
        setDarkTheme(false)
    }

    useEffect(() => {
        //Gets darkTheme from browser storage. 
        const darkTheme = reactLocalStorage.get("darkTheme")
        //if user has a preference then it's saved as darkThemeParse, otherwise it's undefined
        const darkThemeParse = darkTheme !== undefined && JSON.parse(darkTheme)
        //if the preference has already been set to dark theme then add darkTheme, else light Theme

        //checks if the system theme is set to dark mode. 
        // typeof window !== undefined ** this checks if we can access window from within the browser.
        //next matchMedia evals windows colour scheme. If system is dark returns true, otherwise false. 
        const systemTheme = typeof window !== undefined && window.matchMedia("(prefers-colors-scheme: dark)").matches

        /**
         * What the heck is this? 
         * SO, first darkTheme is undefined if it's the users first time to the website. 
         * Then checks the system Theme if that's true then we set the dark theme to match it. 
         * Otherwise it's light. 
         * else darkTheme isn't undefined 
         * Then we check the darkThemeParse, this means the user has visited the site beforehand
         * Therefore, we use that theme preferene instead.
         */
        if (darkTheme === undefined) {
            systemTheme ? addDarkTheme() : removeDarkTheme()
        } else {
            darkThemeParse ? addDarkTheme() : removeDarkTheme()
        }



    }, [])
    return (

        <main ref={mainRef}>
            <div className="bg-zinc-50 dark:bg-zinc-800  ">
                <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:pl-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden">
                    <button onClick={() => {
                        if (!darkTheme) {
                            addDarkTheme()
                            reactLocalStorage.set("darkTheme", true)
                        } else {
                            removeDarkTheme()
                            reactLocalStorage.set("darkTheme", false)
                        }
                    }} className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500 z-40">
                        <motion.span animate={{ scale: darkTheme ? 0 : 1 }} className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800">
                            {moonIcon}
                        </motion.span>
                        <motion.span animate={{ scale: darkTheme ? 1 : 0 }} className="absolute block rounded-full bg-zinc-50 p-1 text-3xl dark:bg-zinc-800">
                            {sunIcon}
                        </motion.span>
                    </button>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Toggle