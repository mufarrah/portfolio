import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperiance from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y
       snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200/20
        scrollbar-thumb-[#EF476F]'>
      <Head>
        <title>A.Rahman Mufarrah</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experiance' className='snap-center'>
        <WorkExperiance />
      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-12 w-12 rounded-full filter grayscale hover:grayscale-0 cursor-pointer border border-gray-500'
              src="https://i.postimg.cc/26pbJKr7/Ready-Player-Me-Avatar-14.png" alt="" />
          </div>
        </footer>

      </Link>

    </div>



  )
}
