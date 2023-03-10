/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
import Image from "next/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
             justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
             scrollbar scrollbar-track-gray-200/20
             scrollbar-thumb-[#EF476F]"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col
                     space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              className="w-auto max-h-80 pt-20"
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 mx-w-6xl">
              <h4 className="text-lg font-semibold text-center text-[#EF476F] md:text-xl lg:text-2xl">
                <span className="">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                <Link href={project?.linkToBuild}>
                  {" "}
                  <span className="underline">{project?.title}</span>
                </Link>
              </h4>
              <div className="hidden md:flex items-center space-x-2 justify-center max-h-[25vw]">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-10 w-10"
                    //  width={10} height={10}
                    key={technology?._id}
                    src={urlFor(technology?.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-sm text-center md:text-left md:text-base">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#EF476F]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;

{
  /* <Link className='flex items-center space-x-2 justify-center text-[#EF476F] underline' href={project?.linkToBuild}>
Link to Project here
</Link> */
}
