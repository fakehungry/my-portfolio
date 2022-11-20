import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = { darkToggle: boolean; projects: Project[] };

const Projects = ({ darkToggle, projects }: Props) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-center mb-5">
        Sample of my creativities
      </h2>
      <div
        className={`relative z-10 overflow-x-auto h-[21.1rem] flex gap-16 snap-mandatory snap-x scrollbar-thin scrollbar-track-primary-color-darker scrollbar-thumb-secondary-color md:items-center ${
          darkToggle ? "light-darker" : "dark-darker"
        }`}
      >
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex w-80 gap-3 justify-centers rounded-lg shadow-lg translate-x-[55%] snap-center md:h-80 md:w-[30rem]"
          >
            <div className="w-80 relative cursor-pointer md:h-80 md:w-[30rem]">
              <Image
                alt={project.title}
                src={urlFor(project.image).url()}
                fill
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div
              className={`w-80 absolute top-0 left-0 h-full flex flex-col justify-between p-5 opacity-0 hover:opacity-[85%] duration-300 md:h-80 md:w-[30rem] ${
                darkToggle ? "light-gradient" : "dark-gradient"
              }`}
            >
              <div>
                <h3 className="text-center text-base font-semibold">
                  {project.title}
                </h3>
                <p>{project.summary}</p>
                <ul className="hidden justify-start flex-col flex-wrap items-ceter h-20 mt-2 md:flex">
                  {project.feature.map((item, index) => (
                    <li
                      className="text-sm indent-[-1em] before:content-['▹'] before:text-secondary-color"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between px-5">
                <Link
                  href={
                    project.linkToWebSite === undefined
                      ? "#"
                      : project.linkToWebSite
                  }
                  className="hover:text-secondary-color"
                >
                  <GoLinkExternal size={30} />
                </Link>
                <Link
                  href={
                    project.linkToCode === undefined ? "#" : project.linkToCode
                  }
                  className="hover:text-secondary-color"
                >
                  <GoMarkGithub size={30} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
