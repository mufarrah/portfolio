
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                src='https://i.postimg.cc/bvDFJZwC/Image-from-i-OS-1-38.jpg'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#EF476F]'>little</span> background</h4>
                <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam. Orci phasellus egestas tellus rutrum tellus pellentesque. Congue quisque egestas diam in arcu cursus euismod quis. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Ullamcorper a lacus vestibulum sed arcu non odio. Feugiat pretium nibh ipsum consequat nisl vel. Turpis massa sed elementum tempus egestas sed. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Velit euismod in pellentesque massa placerat duis ultricies. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Id aliquet risus feugiat in ante metus dictum at. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Vel risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
        </motion.div>
    )
}

export default About