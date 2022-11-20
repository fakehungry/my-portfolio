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
    <>
      <h2 className="text-xl font-semibold text-center w-80 md:w-full">
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
            <p className="text-base">
              Hi! My name is Chaikit Ruangsakulpat. I started my journey in web
              development in 2019 by self-learning. It&apos;s an interesting job
              because we can show anything in my head to the real world. In
              business, I guide you how to create special things with simple
              system to your customer. It&apos;s leverage the power of
              technology to be competitive with others.
            </p>
            <p className="text-base mt-4">
              Also, I have a skill in data analytics. You never refuse that data
              plays a crucial role in every companys today. It&apos;s a fun part
              to pull insight from it. With combine skills in both web
              development & data analytics, I can create system and strategy
              that meet your requirements.
            </p>
            <p className="text-base mt-4">
              Now, I&apos;m a freelance developer with many projects I would
              like to create. You can find my projects below, I commit that it
              will complete within this year (2022)😁😁.
            </p>
            <p className="text-base my-4">
              Here are tools I&apos;ve been working with:
            </p>
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
            className="flex space-x-4 justify-center"
          >
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="relative flex justify-center item-center w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]"
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
    </>
  );
};

export default About;
