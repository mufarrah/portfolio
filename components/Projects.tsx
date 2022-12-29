import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
             justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
             scrollbar scrollbar-track-gray-200/20
             scrollbar-thumb-[#EF476F]'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col
                     space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="https://loremipsum.io/assets/images/lorem-ipsum-magazine-layout.jpg" alt="" />
                        <div className='space-y-10 px-0 md:px-10 mx-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#EF476F]'>Case Study {i + 1} of {projects.length}:</span> Amazone Clone
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                The purpose of lorem ipsum is to create a natural looking block of text
                                (sentence, paragraph, page, etc.) that doesn't distract from the layout.
                                A practice not without controversy, laying out pages with meaningless filler
                                text can be very useful when the focus is meant to be on design, not content.
                            </p>
                        </div>
                    </div>
                ))}

            </div>

            <div className='w-full absolute top-[30%] bg-[#EF476F]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects