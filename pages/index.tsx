import Head from 'next/head'
// import { Inter } from '@next/font/google'
import dynamic from 'next/dynamic'
// import Header from '../components/Header'
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
});
// import Hero from '../components/Hero'
const Hero = dynamic(() => import("../components/Hero"), {
  ssr: false,
});
// import About from '../components/About'
const About = dynamic(() => import("../components/About"), {
  ssr: false,
});
// import WorkExperiance from '../components/WorkExperience'
const WorkExperiance = dynamic(() => import("../components/WorkExperience"), {
  ssr: false,
});
// import Skills from '../components/Skills'
const Skills = dynamic(() => import("../components/Skills"), {
  ssr: false,
});
// import Projects from '../components/Projects'
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});
// import ContactMe from '../components/ContactMe'
const ContactMe = dynamic(() => import("../components/ContactMe"), {
  ssr: false,
});
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'
import Image from 'next/image'


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

// const inter = Inter({ subsets: ['latin'] })

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y
       snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200/20
        scrollbar-thumb-[#EF476F]'>
      <Head>
        <title>A.Rahman Mufarrah</title>
      </Head>
      <Header socials={socials} />
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      <section id='experiance' className='snap-center'>
        <WorkExperiance experiences={experiences} />
      </section>
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-start pl-5'>
            <Image className='h-12 w-12 rounded-full filter grayscale hover:grayscale-0
             cursor-pointer border border-gray-500' width={32} height={33}
              src="https://i.postimg.cc/26pbJKr7/Ready-Player-Me-Avatar-14.png" alt="" />
          </div>
        </footer>

      </Link>

    </div>
  )

};

export default Home;

// Use getSeverSideRendering for revalidating data upon every request
export const getStaticProps: GetStaticProps<Props> = async () => {

  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    // Next.js will attempt to re-generate the page:
    // -when a request comes in 
    // - At most once every 10 seconds
    revalidate: 10,
  };

};






// export default function Home() {
//   return (
//     <>

//       <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y
//        snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-200/20
//         scrollbar-thumb-[#EF476F]'>
//         <Head>
//           <title>A.Rahman Mufarrah</title>
//         </Head>
//         <Header />
//         <section id='hero' className='snap-start'>
//           <Hero />
//         </section>
//         <section id='about' className='snap-center'>
//           <About />
//         </section>
//         <section id='experiance' className='snap-center'>
//           <WorkExperiance />
//         </section>
//         <section id='skills' className='snap-start'>
//           <Skills />
//         </section>
//         <section id='projects' className='snap-start'>
//           <Projects />
//         </section>
//         <section id='contact' className='snap-start'>
//           <ContactMe />
//         </section>

//         <Link href='#hero'>
//           <footer className='sticky bottom-5 w-full cursor-pointer'>
//             <div className='flex items-center justify-center'>
//               <img className='h-12 w-12 rounded-full filter grayscale hover:grayscale-0 cursor-pointer border border-gray-500'
//                 src="https://i.postimg.cc/26pbJKr7/Ready-Player-Me-Avatar-14.png" alt="" />
//             </div>
//           </footer>

//         </Link>

//       </div>

//     </>

//   )
// }
