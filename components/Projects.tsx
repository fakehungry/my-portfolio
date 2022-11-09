import React from "react";
import Image from "next/image";
import sample from "../public/assets/sample.jpg";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className="flex flex-col mb-40">
      <h2 className="text-2xl font-semibold text-center mb-5">
        Sample of my creativities
      </h2>
      <div className="overflow-x-auto h-[21.1rem]">
        <ul className="flex gap-16">
          <li className="">
            <div className="flex h-80 gap-3 w-[30rem] justify-centers bg-gradient-to-r from-white to-[#ecf7c6] rounded-lg shadow-xl translate-x-[45%]">
              <div className="w-[30rem] relative cursor-pointer hover:grayscale">
                <Image
                  src={sample}
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-120 hidden hover:block">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio culpa reiciendis necessitatibus similique, minima unde.
                Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam eum,
                eius veritatis?
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex h-80 gap-3 w-[30rem] justify-centers bg-gradient-to-r from-white to-[#ecf7c6] rounded-lg shadow-xl translate-x-[45%]">
              <div className="w-[30rem] relative">
                <Image
                  src={sample}
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-120 hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio culpa reiciendis necessitatibus similique, minima unde.
                Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam eum,
                eius veritatis?
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex h-80 gap-3 w-[30rem] justify-centers bg-gradient-to-r from-white to-[#ecf7c6] rounded-lg shadow-xl translate-x-[45%]">
              <div className="w-[30rem] relative">
                <Image
                  src={sample}
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-120 hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio culpa reiciendis necessitatibus similique, minima unde.
                Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam eum,
                eius veritatis?
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
