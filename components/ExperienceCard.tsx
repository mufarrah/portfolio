/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experiance: Experience;
};

function ExperienceCard({ experiance }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full max-w-3xl bg-[#292929] pb-16 pt-10 pl-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#EF476F]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experiance?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-[#EF476F]">
          {experiance?.company}
        </h4>
        <p className="font-bold text-2xl mt-1 ">{experiance?.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experiance?.technologies?.map((technology) => (
            <img
              key={technology?._id}
              alt=""
              //  width={32} height={33}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology?.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experiance?.dateStarted).toDateString()} -{" "}
          {experiance.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experiance?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 w-full">
          {experiance?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

// overflow-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#EF476F]

{
  /* <ul className='list-disc space-y-4 ml-5 text-lg h-96 w-4/5'>
                    {experiance?.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul> */
}

// ------------

// type Props = {
//     experiance: Experience
// };

// function ExperienceCard({ experiance }: Props) {
//     return (
//         <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px]
//          xl:w-[900px] bg-[#292929] pb-16 pt-10 pl-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-[#EF476F]'>
//             <motion.img
//                 initial={{
//                     y: -100,
//                     opacity: 0
//                 }}
//                 transition={{ duration: 1.2 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
//                 src={urlFor(experiance?.companyImage).url()} alt="" />
//             <div className='px-0 md:px-10'>
//                 <h4 className='text-4xl font-light text-[#EF476F]'>{experiance?.company}</h4>
//                 <p className='font-bold text-2xl mt-1 '>{experiance?.jobTitle}</p>
//                 <div className='flex space-x-2 my-2'>
//                     {experiance?.technologies?.map((technology) => (
//                         <img key={technology?._id} alt=""
//                             //  width={32} height={33}
//                             className='h-10 w-10 rounded-full'
//                             src={urlFor(technology?.image).url()}
//                         />
//                     ))}
//                 </div>
//                 <p className='uppercase py-5 text-gray-300'>
//                     {new Date(experiance?.dateStarted).toDateString()} -{" "}
//                     {experiance.isCurrentlyWorkingHere
//                         ? "Present"
//                         : new Date(experiance?.dateEnded).toDateString()}
//                 </p>
//                 <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 w-4/5'>
//                     {experiance?.points.map((point, i) => (
//                         <li key={i}>{point}</li>
//                     ))}
//                 </ul>
//             </div>
//         </article>
//     )
// }

// export default ExperienceCard
