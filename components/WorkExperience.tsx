/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import { Carousel } from "flowbite-react";

type Props = {
  experiences: Experience[];
};

function WorkExperiance({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col
             text-left md:flex-row max-w-full px-10 py-20 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex h-5/6 sm:h-auto space-x-10 overflow-x-scroll px-10 py-6 snap-x snap-mandatory 
            scrollbar scrollbar-track-gray-200/20 scrollbar-thumb-[#EF476F]"
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience?._id} experiance={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperiance;

// type Props = {
//     experiences: Experience[]
// };

// function WorkExperiance({ experiences }: Props) {
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}
//             className='h-screen flex relative overflow-hidden flex-col
//              text-left md:flex-row max-w-full px-2 justify-evenly mx-auto items-center'>
//             <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

//             <div className='w-full flex h-5/6 sm:h-auto space-x-5 overflow-x-scroll px-1 py-6 snap-x snap-mandatory
//             scrollbar scrollbar-track-gray-200/20 scrollbar-thumb-[#EF476F]'>
//                 {experiences?.map((experience) => (
//                     <ExperienceCard key={experience?._id} experiance={experience} />
//                 ))}

//             </div>
//         </motion.div>
//     )
// }

// export default WorkExperiance

// ..........................................................................................

/* eslint-disable @next/next/no-img-element */
// import React from 'react'
// import { motion } from "framer-motion"
// import ExperienceCard from './ExperienceCard'
// import { Experience } from '../typings'
// import { useState } from "react";
// import Swipe from "react-easy-swipe";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// /**
//  * Carousel component for nextJS and Tailwind.
//  * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
//  *
//  * @param images - Array of images with src and alt attributes
//  * @returns React component
//  */

// type Props = {
//     experiences: Experience[]
// };

// function WorkExperiance({ experiences }: Props) {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const handleNextSlide = () => {
//         let newSlide = currentSlide === experiences.length - 1 ? 0 : currentSlide + 1;
//         setCurrentSlide(newSlide);
//       };

//       const handlePrevSlide = () => {
//         let newSlide = currentSlide === 0 ? experiences.length - 1 : currentSlide - 1;
//         setCurrentSlide(newSlide);
//       };

//       const onSwipeEnd = (event:any) => {
//         console.log('End swiping...', event);
//       };
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}
//             className='h-screen flex relative overflow-hidden flex-col
//              text-left md:flex-row max-w-full px-2 justify-evenly mx-auto items-center'>
//             <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
//             <div className="relative">
//       <AiOutlineLeft
//         onClick={handlePrevSlide}
//         className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
//       />
//       <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
//         <Swipe
//         onSwipeLeft={handleNextSlide}
//         onSwipeRight={handlePrevSlide}
//         onSwipeEnd={onSwipeEnd}
//         className="relative z-10 w-full h-full"
//         >
//           {experiences.map((experience, index) => {
//             if (index === currentSlide) {
//               return (
//                 <ExperienceCard key={experience?._id} experiance={experience} />
//               );
//             }
//           })}
//         </Swipe>
//       </div>
//       <AiOutlineRight
//         onClick={handleNextSlide}
//         className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
//       />

//       <div className="relative flex justify-center p-2">
//         {experiences.map((_, index) => {
//           return (
//             <div
//               className={
//                 index === currentSlide
//                   ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
//                   : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
//               }
//               key={index}
//               onClick={() => {
//                 setCurrentSlide(index);
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>

//         </motion.div>
//     )
// }

// export default WorkExperiance
