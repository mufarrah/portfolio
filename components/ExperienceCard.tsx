import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src="https://i.postimg.cc/zGNd8p9B/66705540-731267420645183-7728665813745401856-n.jpg" alt="" />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light text-[#EF476F]'>CEO of FERREJ</h4>
                <p className='font-bold text-2xl mt-1 '>FEREEJ</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full'
                        src="https://cdn-images-1.medium.com/max/1200/1*mn6bOs7s6Qbao15PMNRyOA.png" alt="" />
                    <img className='h-10 w-10 rounded-full'
                        src="https://cdn-images-1.medium.com/max/1200/1*mn6bOs7s6Qbao15PMNRyOA.png" alt="" />
                    <img className='h-10 w-10 rounded-full'
                        src="https://cdn-images-1.medium.com/max/1200/1*mn6bOs7s6Qbao15PMNRyOA.png" alt="" />

                </div>
                <p className='uppercase py-5 text-gray-300'>Started work ... - Ended ...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li> Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                    <li> Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                    <li> Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                    <li> Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                    <li> Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>

                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard