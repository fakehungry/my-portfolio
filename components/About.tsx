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

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-center w-80 md:w-full">
        Something you should know about{" "}
        <span className="text-secondary-color font-bold">Chaikit</span>
      </h2>
      <div className="flex flex-col-reverse justify-center items-center mt-3 px-20 text-left md:space-x-6 md:flex-row ">
        <div className="flex flex-col justify-between md:h-[468px] md:w-[60%]">
          <div>
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
              Here are tools I've been working with: (Mouse on icons to find
              more interesting features)
            </p>
          </div>
          <div className="flex space-x-4 justify-center">
            <SiHtml5 size={30} className="" />
            <SiCss3 size={30} className="" />
            <SiJavascript size={30} className="" />
            <SiPython size={30} className="" />
            <SiR size={30} className="" />
            <SiMicrosoftoffice size={30} className="" />
            <SiFigma size={30} className="" />
            <SiSqlite size={30} className="" />
          </div>
        </div>
        <div className="md:h-[468px]">
          <Image
            src={chaikitPic}
            width={chaikitPic.width}
            height={chaikitPic.height}
            className="w-[240px] h-[240px] rounded-full md:h-full md:w-full md:rounded-lg"
            layout="fill"
          />
        </div>
      </div>
    </>
  );
};

export default About;
