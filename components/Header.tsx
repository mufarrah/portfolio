import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';


type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center'>
                {/* social icons */}
                <SocialIcon url="https://twitter.com/A_Mufarre7" fgColor='#EF476F' bgColor='transparent' />
                <SocialIcon url="https://github.com/mufarrah" fgColor='#EF476F' bgColor='transparent' />
                <SocialIcon url="https://www.linkedin.com/in/rahman-mufarrah/" fgColor='#EF476F' bgColor='transparent' />
                <SocialIcon url="https://www.instagram.com/a_mufarrah/" fgColor='#EF476F' bgColor='transparent' />
            </motion.div>

            <Link href='#contact'>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='flex flex-row items-center text-gray-300 cursor-pointer'>
                    <SocialIcon className='cursor-pointer' network='email'
                        fgColor='#EF476F' bgColor='transparent' />
                    <p className='uppercase hidden md:inline-flex text-sm text-[#EF476F]'>Get in Touch</p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header