import React from "react";
import Image from "next/image";
import sample from "../public/assets/sample.jpg";
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

type Props = { darkToggle: boolean };

const Projects = ({ darkToggle }: Props) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-center mb-5">
        Sample of my creativities
      </h2>
      <div className="relative z-10 overflow-x-auto h-[21.1rem] flex gap-16 snap-mandatory snap-x scrollbar-thin scrollbar-track-primary-color-darker scrollbar-thumb-secondary-color">
        <div className="flex w-80 gap-3 justify-centers rounded-lg shadow-lg translate-x-[55%] snap-center md:h-80 md:w-[30rem]">
          <div className="w-80 relative cursor-pointer md:h-80 md:w-[30rem]">
            <Image src={sample} fill objectFit="cover" className="rounded-lg" />
          </div>
          <div
            className={`w-80 absolute top-0 left-0 h-full flex flex-col justify-between p-5 opacity-0 hover:opacity-[85%] duration-300 md:h-80 md:w-[30rem] ${
              darkToggle ? "light-gradient" : "dark-gradient"
            }`}
          >
            <div>
              <h3 className="text-center text-base font-semibold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio culpa reiciendis necessitatibus similique, minima unde.
                Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam eum,
                eius veritatis?
              </p>
            </div>
            <div className="flex justify-between px-5">
              <GoLinkExternal size={30} />
              <GoMarkGithub size={30} />
            </div>
          </div>
        </div>
        <div className="flex w-80 gap-3 justify-centers rounded-lg shadow-lg translate-x-[55%] snap-center md:h-80 md:w-[30rem]">
          <div className="w-80 relative cursor-pointer md:h-80 md:w-[30rem]">
            <Image src={sample} fill objectFit="cover" className="rounded-lg" />
          </div>
          <div
            className={`w-80 absolute top-0 left-0 h-full flex flex-col justify-between p-5 opacity-0 hover:opacity-[85%] duration-300 md:h-80 md:w-[30rem] ${
              darkToggle ? "light-gradient" : "dark-gradient"
            }`}
          >
            <div>
              <h3 className="text-center text-base font-semibold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio culpa reiciendis necessitatibus similique, minima unde.
                Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam eum,
                eius veritatis?
              </p>
            </div>
            <div className="flex justify-between px-5">
              <GoLinkExternal size={30} />
              <GoMarkGithub size={30} />
            </div>
          </div>
        </div>
        <div className="flex w-80 gap-3 justify-centers rounded-lg shadow-lg translate-x-[55%] snap-center md:h-80 md:w-[30rem]">
          <div className="w-80 relative cursor-pointer md:h-80 md:w-[30rem]">
            <Image src={sample} fill objectFit="cover" className="rounded-lg" />
          </div>
          <div
            className={`w-80 absolute top-0 left-0 h-full flex flex-col justify-between p-5 opacity-0 hover:opacity-[85%] duration-300 md:h-80 md:w-[30rem] ${
              darkToggle ? "light-gradient" : "dark-gradient"
            }`}
          >
            <div>
              <h3 className="text-center text-base font-semibold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio culpa reiciendis necessitatibus similique, minima unde.
                Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam eum,
                eius veritatis?
              </p>
            </div>
            <div className="flex justify-between px-5">
              <GoLinkExternal size={30} />
              <GoMarkGithub size={30} />
            </div>
          </div>
        </div>
        <div className="flex w-80 gap-3 justify-centers rounded-lg shadow-lg translate-x-[55%] snap-center md:h-80 md:w-[30rem]">
          <div className="w-80 relative cursor-pointer md:h-80 md:w-[30rem]">
            <Image src={sample} fill objectFit="cover" className="rounded-lg" />
          </div>
          <div
            className={`w-80 absolute top-0 left-0 h-full flex flex-col justify-between p-5 opacity-0 hover:opacity-[85%] duration-300 md:h-80 md:w-[30rem] ${
              darkToggle ? "light-gradient" : "dark-gradient"
            }`}
          >
            <div>
              <h3 className="text-center text-base font-semibold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio culpa reiciendis necessitatibus similique, minima unde.
                Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam eum,
                eius veritatis?
              </p>
            </div>
            <div className="flex justify-between px-5">
              <GoLinkExternal size={30} />
              <GoMarkGithub size={30} />
            </div>
          </div>
        </div>
        <div className="flex w-80 gap-3 justify-centers rounded-lg shadow-lg translate-x-[55%] snap-center md:h-80 md:w-[30rem]">
          <div className="w-80 relative cursor-pointer md:h-80 md:w-[30rem]">
            <Image src={sample} fill objectFit="cover" className="rounded-lg" />
          </div>
          <div
            className={`w-80 absolute top-0 left-0 h-full flex flex-col justify-between p-5 opacity-0 hover:opacity-[85%] duration-300 md:h-80 md:w-[30rem] ${
              darkToggle ? "light-gradient" : "dark-gradient"
            }`}
          >
            <div>
              <h3 className="text-center text-base font-semibold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio culpa reiciendis necessitatibus similique, minima unde.
                Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam eum,
                eius veritatis?
              </p>
            </div>
            <div className="flex justify-between px-5">
              <GoLinkExternal size={30} />
              <GoMarkGithub size={30} />
            </div>
          </div>
        </div>
        <div className="flex w-80 gap-3 justify-centers rounded-lg shadow-lg translate-x-[55%] snap-center md:h-80 md:w-[30rem]">
          <div className="w-80 relative cursor-pointer md:h-80 md:w-[30rem]">
            <Image src={sample} fill objectFit="cover" className="rounded-lg" />
          </div>
          <div
            className={`w-80 absolute top-0 left-0 h-full flex flex-col justify-between p-5 opacity-0 hover:opacity-[85%] duration-300 md:h-80 md:w-[30rem] ${
              darkToggle ? "light-gradient" : "dark-gradient"
            }`}
          >
            <div>
              <h3 className="text-center text-base font-semibold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio culpa reiciendis necessitatibus similique, minima unde.
                Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam eum,
                eius veritatis?
              </p>
            </div>
            <div className="flex justify-between px-5">
              <GoLinkExternal size={30} />
              <GoMarkGithub size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
