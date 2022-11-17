import React from "react";
import chaikitPic from "../public/assets/chaikit-picture.jpg";
import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiR,
  SiMicrosoftoffice,
  SiFigma,
  SiSqlite,
} from "react-icons/si";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-center w-80 md:w-full">
        Something you should know about{" "}
        <span className="text-secondary-color font-bold">Chaikit</span>
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
              development in 2019 by self-learning. It's an interesting job
              because we can show anything in my head to the real world. In
              business, I guide you how to create special things with simple
              system to your customer. It's leverage the power of technology to
              be competitive with others.
            </p>
            <p className="text-base mt-4">
              Also, I have a skill in data analytics. You never refuse that data
              plays a crucial role in every companys today. It's a fun part to
              pull insight from it. With combine skills in both web development
              & data analytics, I can create system and strategy that meet your
              requirements.
            </p>
            <p className="text-base mt-4">
              Now, I'm a freelance developer with many projects I would like to
              create. You can find my projects below, I commit that it will
              complete within this year (2022)😁😁.
            </p>
            <p className="text-base my-4">
              Here are tools I've been working with:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-100, 0, -50, 0, -25, 0], opacity: 1 }}
            transition={{
              y: { duration: 1.5, ease: "easeOut" },
              duration: 1.5,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            viewport={{ once: true }}
            className="flex space-x-4 justify-center"
          >
            <div className="relative flex justify-center item-center w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]">
              <SiHtml5 className="rounded-full w-[30px] h-[30px] transition ease-in-out duration-500 hover:hidden md:w-[36px] md:h-[36px]" />
              <div className="absolute opacity-0 w-[30px] h-[30px] flex items-center text-[10px] justify-center font-light rounded-full bg-secondary-color text-primary-color transition ease-in-out duration-500 hover:opacity-90 md:w-[36px] md:h-[36px] md:text-base">
                100%
              </div>
            </div>
            <div className="relative flex justify-center item-center w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]">
              <SiCss3 className="rounded-full w-[30px] h-[30px] transition ease-in-out duration-500 hover:hidden md:w-[36px] md:h-[36px]" />
              <div className="absolute opacity-0 w-[30px] h-[30px] flex items-center text-[10px] justify-center font-light rounded-full bg-secondary-color text-primary-color transition ease-in-out duration-500 hover:opacity-90 md:w-[36px] md:h-[36px] md:text-base">
                100%
              </div>
            </div>
            <div className="relative flex justify-center item-center w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]">
              <SiJavascript className="rounded-full w-[30px] h-[30px] transition ease-in-out duration-500 hover:hidden md:w-[36px] md:h-[36px]" />
              <div className="absolute opacity-0 w-[30px] h-[30px] flex items-center text-[10px] justify-center font-light rounded-full bg-secondary-color text-primary-color transition ease-in-out duration-500 hover:opacity-90 md:w-[36px] md:h-[36px] md:text-base">
                100%
              </div>
            </div>
            <div className="relative flex justify-center item-center w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]">
              <SiPython className="rounded-full w-[30px] h-[30px] transition ease-in-out duration-500 hover:hidden md:w-[36px] md:h-[36px]" />
              <div className="absolute opacity-0 w-[30px] h-[30px] flex items-center text-[10px] justify-center font-light rounded-full bg-secondary-color text-primary-color transition ease-in-out duration-500 hover:opacity-90 md:w-[36px] md:h-[36px] md:text-base">
                100%
              </div>
            </div>
            <div className="relative flex justify-center item-center w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]">
              <SiR className="rounded-full w-[30px] h-[30px] transition ease-in-out duration-500 hover:hidden md:w-[36px] md:h-[36px]" />
              <div className="absolute opacity-0 w-[30px] h-[30px] flex items-center text-[10px] justify-center font-light rounded-full bg-secondary-color text-primary-color transition ease-in-out duration-500 hover:opacity-90 md:w-[36px] md:h-[36px] md:text-base">
                100%
              </div>
            </div>
            <div className="relative flex justify-center item-center w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]">
              <SiMicrosoftoffice className="rounded-full w-[30px] h-[30px] transition ease-in-out duration-500 hover:hidden md:w-[36px] md:h-[36px]" />
              <div className="absolute opacity-0 w-[30px] h-[30px] flex items-center text-[10px] justify-center font-light rounded-full bg-secondary-color text-primary-color transition ease-in-out duration-500 hover:opacity-90 md:w-[36px] md:h-[36px] md:text-base">
                100%
              </div>
            </div>
            <div className="relative flex justify-center item-center w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]">
              <SiFigma className="rounded-full w-[30px] h-[30px] transition ease-in-out duration-500 hover:hidden md:w-[36px] md:h-[36px]" />
              <div className="absolute opacity-0 w-[30px] h-[30px] flex items-center text-[10px] justify-center font-light rounded-full bg-secondary-color text-primary-color transition ease-in-out duration-500 hover:opacity-90 md:w-[36px] md:h-[36px] md:text-base">
                100%
              </div>
            </div>
            <div className="relative flex justify-center item-center w-[30px] h-[30px] cursor-pointer md:w-[36px] md:h-[36px]">
              <SiSqlite className="rounded-full w-[30px] h-[30px] transition ease-in-out duration-500 hover:hidden md:w-[36px] md:h-[36px]" />
              <div className="absolute opacity-0 w-[30px] h-[30px] flex items-center text-[10px] justify-center font-light rounded-full bg-secondary-color text-primary-color transition ease-in-out duration-500 hover:opacity-90 md:w-[36px] md:h-[36px] md:text-base">
                100%
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="md:h-[468px]"
        >
          <Image
            src={chaikitPic}
            width={chaikitPic.width}
            height={chaikitPic.height}
            className="w-[240px] h-[240px] rounded-full md:h-full md:w-full md:rounded-lg"
            layout="fill"
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
