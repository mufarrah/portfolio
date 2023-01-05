
import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
};

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center max-w-7xl px-10 justify-evenly mx-auto items-center md:text-left md:flex-row'>
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
                src={urlFor(pageInfo?.profilePic).url()}
                className='-mb-32 mt-28 flex-shrink-0 w-40 h-40 rounded-full object-cover 
                sm:w-56 sm:h-56 sm:mt-20 md:mb-0 md:mt-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-5 px-0 md:px-10'>
                <h4 className='text-2xl font-semibold mt-20 sm:text-4xl md:mt-auto'>Here is some <span className='underline decoration-[#EF476F]'>
                    background
                </span></h4>
                <p className='text-xs sm:text-lg mb-20 pb-10 pt-0 sm:pb-0'>{pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    )
}

export default About