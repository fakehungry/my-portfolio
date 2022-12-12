import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo, Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
};

const About = ({ pageInfo, skills }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center w-80 mx-auto md:w-full">
        Something you should know about{" "}
        <span className="text-secondary-color font-bold">
          {pageInfo.firstName}
        </span>
      </h2>
      <div className="flex flex-col-reverse justify-center items-center px-4 mt-3 text-left md:space-x-6 md:px-20 md:flex-row ">
        <div className="flex flex-col justify-between md:h-[468px] md:w-[60%]">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            {pageInfo.about.map((a) => (
              <p key={a._id} className="text-base mt-4 mx-4 first:mt-0">
                {a}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-100, 0, -50, 0, -25, 0], opacity: 1 }}
            transition={{
              y: { duration: 1.5, ease: "easeOut" }, // @ts-ignore
              duration: "1.5", // @ts-ignore
              type: "spring", // @ts-ignore
              stiffness: 500, // @ts-ignore
              damping: 30, // @ts-ignore
            }}
            viewport={{ once: true }}
            className="flex flex-wrap w-80 h-full items-end space-x-4 space-y-4 justify-start mx-auto mt-4 md:w-full md:justify-center"
          >
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="relative w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]"
              >
                <Image
                  alt={skill.title}
                  src={urlFor(skill.image).url()}
                  fill
                  className="rounded-full w-[30px] h-[30px] transition ease-in-out duration-500 hover:hidden md:w-[36px] md:h-[36px]"
                />
                <div className="absolute opacity-0 w-[30px] h-[30px] flex items-center text-[10px] justify-center font-light rounded-full bg-secondary-color text-primary-color transition ease-in-out duration-500 hover:opacity-90 md:w-[36px] md:h-[36px] md:text-base">
                  {skill.level}%
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center md:h-[468px]"
        >
          <Image
            alt={pageInfo.firstName}
            src={urlFor(pageInfo.myPicture).url()}
            width={500}
            height={500}
            className="w-[240px] h-[240px] rounded-full lg:h-full lg:w-full lg:rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
