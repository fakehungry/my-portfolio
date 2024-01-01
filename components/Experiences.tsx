import React, { useState } from "react";
import { Experience } from "../typings";

type Props = { experiences: Experience[] };

const Experiences = ({ experiences }: Props) => {
  const [active, setActive] = useState(experiences[0]._id);

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-5">
        Where I&apos;ve experienced
      </h2>
      <div className="flex flex-col text-left space-x-6 px-5 md:px-20 md:flex-row">
        <div className="flex text-left mb-1 md:flex-col">
          {experiences.map((experience) => (
            <button
              key={experience._id}
              onClick={() => setActive(experience._id)}
              className={`text-sm border-t-2 border-primary-color-darker py-2 px-1 md:px-3 md:border-l-2 md:border-t-0 hover:bg-primary-color-darker hover:text-secondary-color transition ease-in-out duration-500 ${
                experience._id === active &&
                "bg-primary-color-darker text-secondary-color font-bold border-secondary-color"
              }`}
            >
              {experience.company}
            </button>
          ))}
        </div>

        {experiences
          .filter((experience) => experience._id === active)
          .map((filteredItem, index) => (
            <div key={index} className="text-left h-96 md:w-[600px]">
              <div className="">
                <h3 className="text-base font-semibold">
                  {filteredItem.jobTitle}{" "}
                  <span className="text-secondary-color font-bold">
                    @{filteredItem.company}
                  </span>
                </h3>
                <p className="mb-2">
                  {new Date(filteredItem.dateStarted).toDateString()} -{" "}
                  {filteredItem.isCurrentWorkingHere
                    ? "Present"
                    : new Date(filteredItem.dateEnded).toDateString()}
                </p>
                <ul className="text-base">
                  {filteredItem.jobDescription.map((item, index) => (
                    <li
                      key={index}
                      className="indent-[-1em] before:content-['▹'] before:text-secondary-color"
                    >
                      {` ${item}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experiences;
