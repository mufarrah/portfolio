import Link from 'next/link';
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';



type Props = {
    pageInfo: PageInfo
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Web Developer",
            "Flutter Developer",
            "UI/UX Designer"

        ],

        loop: true,
        delaySpeed: 2000,

    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img className='relative rounded-full h-33 w-32 mx-auto object-cover'
                src={urlFor(pageInfo?.heroImage).url()} />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>Hi I'm {`${pageInfo?.name}`} <span className='text-[#EF476F]'>{text}</span></span>
                    <Cursor cursorColor='#EF476F' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experiance">
                        <button className='heroButton'>Experiance</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>


                </div>
            </div>


        </div>
    )
}

export default Hero