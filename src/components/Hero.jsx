"use client"
import Image from 'next/image'
import { heroIcons, iconUrl } from '@/assets'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {

    //Gets the x & y coordinates of the mouse. 
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    //Gets the window size of the user for the Main pic animation. 
    //If windows resized dynamical changes
    const [windowOffset, setWindowOffset] = useState({
        innerWidth: 0,
        innerHeight: 0
    });
    //Is the mouse moving? Used to start or stop mouse movement animation. 
    const [mouseMove, setMouseMove] = useState(false);
    const [buttonHover, setButtonHover] = useState(false)


    //Gets event info "e" and returns back information of mouse position
    //Could use useState method instead -- but this causes to much reRendering and makes the animation look laggy
    //Using set() instead avoids this 
    function handleMouseMove(e) {
        //clientX is X position of pointer from left of screen 
        //clientY is Y position from top of screen
        const { clientX, clientY } = e;
        x.set(clientX)
        y.set(clientY)
    }
    //Gets windows width and height when entering Hero area. 
    //
    function handleMouseEnter() {
        //gets the windows dimensions
        setWindowOffset({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        })
        //Indicating the mouse has entered the hero area
        setMouseMove(true)
    }

    //x and y spring
    /**
     * Gets the x and y value 
     * Instead of the motion jumping to the x and y position it spring like motion to there
     * Stiffness is how stiff the "spring" is
     * damping is how much tension is in the spring, low means lots of bounce high means not much bounce
     */
    const xSpring = useSpring(x, {
        stiffness: 100,
        damping: 10
    })
    const ySpring = useSpring(y, {
        stiffness: 100,
        damping: 10
    })

    //What does this DO????? Let me tell you
    /**
     * This uses the motion value x
     * and sets its input range from 0 to innerwidth of the window. This will be the maximum width of window
     * Then sets the outward range from -30 to 30 degress
     * in normal talk this sets a Y axis tilt range of -30 when x is at 0 to 30 when x is at innerWidth
     * The tilt will be on the person pic
     */
    const { innerWidth, innerHeight } = windowOffset;
    const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])

    //This does the same but for the x tilt its 10 to -50 
    const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])


    return (
        <div id='home'
            className="h-screen grid place-items-center"
            onMouseMove={handleMouseMove} //When the mouse moves to get the x & y coordinates
            onMouseEnter={handleMouseEnter} // When the mouse enters the hero area
        >
            <div>
                <motion.div initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
                    <motion.div
                        className='flex items-center justify-center'
                        style={{ //If mouseMove is true (see handleMouse Move) apply values of roateX to style
                            rotateX: mouseMove ? rotateX : 0,
                            rotateY: mouseMove ? rotateY : 0,
                            //So the animation happens smoothly
                            transition: "0.1s"
                        }}
                    >
                        <Image
                            className='h-auto w-[150px]'
                            src='/Assets/avatar.png' //Needs to be changed to look like me! Find Avatar website! Or dye hair brown?
                            alt='Image of a person' //must be included below is overwitten by className styling
                            width={400} //must be included 
                            height={400} //must be included
                            priority={true}
                        />
                        {/**This is in the middle of avatar */}
                        <motion.span className='absolute text-3xl font-semibold text-white'
                            initial={{ scale: 0 }}
                            animate={{
                                opacity: buttonHover ? 0 : 1, //if hovered over then set it to 0. 
                                scale: buttonHover ? 2 : 0, // if hovered over then double text double size
                                y: buttonHover ? -40 : 0 // if hovered then move -40 on y axis
                            }}
                            transition={{ opacity: { delay: 0.4 } }} //opacity goes smooler
                        >
                            Hi
                        </motion.span>
                    </motion.div>
                    <h1 className='dark:text-white transition-colors text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl'>My name is Cayman Fitzhugh</h1>
                    {/** What do I like? Softwaredev seems a bit basic?  */}
                    <p className='dark:text-gray-200 transition-colors text-lg tracking-wider text-gray-700'>I like software development 💻</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className='mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl'>
                    {/**Fun interatable map function over heroicons
                     * How do I add the links to these icons tho? 
                     * Key value pairing? 
                     * An array of arrays? Seems slow 
                     * Ah I got it! an Array of matching web addresses?
                     * Have to be the same order of icons and nested inside the map function
                     * No.... actually they are components so could I just pass it as props in the index.js page?
                     * No just do an array and declare it here. Dummy....
                     */}
                    {heroIcons.map((icon, i) => {
                        return (
                            <a href={iconUrl[i]} key={i} className='rounded-lg hover:bg-red-400 hover:text-white transition-colors '>
                                {icon}
                            </a>
                        )
                    })}
                </motion.div>
                <motion.a initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    href="#"
                    className='mx-auto mt-7 block w-max rounded-lg
                     bg-red-400 px-3 py-1 font-light capitalize tracking-wider
                     hover:bg-red-500 transition-colors'
                    onMouseEnter={() => {
                        setButtonHover(true)
                    }}
                    onMouseLeave={() => {
                        setButtonHover(false)
                    }}
                >
                    Talk to me
                </motion.a>
            </div>
        </div>
    )
}

export default Hero