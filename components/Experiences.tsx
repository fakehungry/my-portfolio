import { title } from "process";
import React, { useState } from "react";
import { SiShopify } from "react-icons/si";

type Props = {};

const Experiences = (props: Props) => {
  const [active, setActive] = useState(1);

  const myEXP = [
    {
      id: 1,
      company: "PTTEP Services",
      title: "Supervisor",
      start: "Jan 2014",
      end: "Present",
      jd: [
        "Prepare sub-assemblies as per well design to support well operations.",
        "Coordinate among team to keep smooth operations.",
        "Maintenance and repair any in-house unit such as wireline, light workover, and wellhead maintenance.",
        "Supervise well services logistic in S1 field.",
        "Manage and improve store to reduce the cost and prevent consumable shortage.",
        "Enquire for quotations to purchase any required equipment.",
      ],
    },
    {
      id: 2,
      company: "Centrovision",
      title: "Technical Engineer",
      start: "Apr 2012",
      end: "Jan 2013",
      jd: [
        "Contact to customer to get the requirement and complete the job.",
        "Plan flight time, coverage area, and set air plane’s parameters.",
        "Process acquired data to an aerial map.",
        "Develop solution that meet the customer’s requirement.",
      ],
    },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold text-center mb-5">
        Where I've experienced
      </h2>
      <div className="flex flex-col text-left space-x-6 px-5 md:px-20 md:flex-row">
        <div className="flex text-left mb-1 md:flex-col">
          {myEXP.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`text-sm border-t-2 border-primary-color-darker py-2 px-1 md:px-3 md:border-l-2 md:border-t-0 hover:bg-primary-color-darker hover:text-secondary-color transition ease-in-out duration-500 ${
                item.id === active &&
                "bg-primary-color-darker text-secondary-color font-bold border-secondary-color"
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>

        {myEXP
          .filter((item) => item.id === active)
          .map((filteredItem, index) => (
            <div key={index} className="text-left h-96 md:w-[600px]">
              <div className="">
                <h3 className="text-base font-semibold">
                  {filteredItem.title}{" "}
                  <span className="text-secondary-color font-bold">
                    @{filteredItem.company}
                  </span>
                </h3>
                <p className="mb-2">
                  {filteredItem.start} - {filteredItem.end}
                </p>
                <ul className="text-base">
                  {filteredItem.jd.map((item, index) => (
                    <li
                      key={index}
                      className="indent-[-1em] before:content-['▹'] before:text-secondary-color"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Experiences;
