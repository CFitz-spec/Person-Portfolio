"use client"

import Image from "next/image"
import Heading from "./sub/Heading"
import { motion } from "framer-motion"
import { useState } from "react"

const Contact = () => {


    return (
        <div id="contact" className="h-screen py-20 lg:h-auto lg:py-40 xs:pb-20 ">
            <Heading text={"Get in touch"} />
            <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
                <motion.div initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}>
                    <Image src={"/Assets/contact.gif"} alt="Contact image" height={400} width={400}
                        className="w-[400px] rounded-md opacity-80 " />
                </motion.div>
                <motion.form initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3 z-60 "
                    action="https://formsubmit.co/5ae2b65635fc8c14d54dfd4ef6719b88" method="POST"
                >
                    <div className="w-full flex lg:flex-col gap-x-3 lg:gap-3">
                        <input
                            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required />
                        <input
                            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            required />
                    </div>
                    <input
                        className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        type="text"
                        name="_subject"
                        id="subject"
                        placeholder="Subject"
                        required />
                    <textarea
                        className="max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        name="messageContent"
                        id="content"
                        placeholder="Write Me..."
                        required>

                    </textarea>
                    <input
                        type="hidden"
                        name="_autoresponse"
                        value="I've received your message and will get back to you soon!" />
                    <input
                        className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
                        type="submit"
                        value="Send Message"

                    />
                </motion.form>
            </div>

        </div >
    )
}

export default Contact