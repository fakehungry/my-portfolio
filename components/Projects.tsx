import React from "react";
import Image from "next/image";
import sample from "../public/assets/sample.jpg";
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";

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
            <div className="flex h-80 gap-3 w-[30rem] justify-centers rounded-lg shadow-lg translate-x-[55%]">
              <div className="w-[30rem] relative cursor-pointer">
                <Image
                  src={sample}
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-120 absolute top-0 left-0 h-full flex flex-col justify-between p-5 bg-gradient-to-r from-white to-dark-primary-color opacity-0 hover:opacity-[85%] duration-300">
                <div>
                  <h3 className="text-center text-lg font-semibold">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                    odio culpa reiciendis necessitatibus similique, minima unde.
                    Sunt id quo quis quidem dolor omnis, adipisci at quod ipsam
                    eum, eius veritatis?
                  </p>
                </div>
                <div className="flex justify-between px-5">
                  <GoLinkExternal size={30} />
                  <GoMarkGithub size={30} />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
