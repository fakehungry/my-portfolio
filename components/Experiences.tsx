import React from "react";

type Props = {};

const Experiences = (props: Props) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-5">
        Where I've experienced
      </h2>
      <div className="flex px-20 text-left space-x-6">
        <div className="flex flex-col text-left">
          <button className="text-md border-l-2 border-primary-color-darker px-3 py-2 hover:bg-primary-color-darker hover:text-secondary-color active:border-l-dark-secondary-color">
            PTTEP Services
          </button>
          <button className="text-md border-l-2 border-primary-color-darker px-3 py-2 hover:bg-primary-color-darker hover:text-secondary-color active:border-l-dark-secondary-color">
            Centrovision
          </button>
        </div>
        <div className="text-left text-md">
          <div>
            <h3 className="text-lg font-semibold">
              Supervisor
              <span className="text-secondary-color font-bold">
                @PTTEP Services
              </span>
            </h3>
            <p>2014 - Present</p>
            <ul>
              <li className="before:content-['▹'] before:text-secondary-color">
                Prepare sub-assemblies as per well design to support well
                operations.
              </li>
              <li className="before:content-['▹'] before:text-secondary-color">
                Coordinate among team to keep smooth operations.
              </li>
              <li className="before:content-['▹'] before:text-secondary-color">
                Maintenance and repair any in-house unit such as wireline, light
                workover, and wellhead maintenance.
              </li>
              <li className="before:content-['▹'] before:text-secondary-color">
                Supervise well services logistic in S1 field.
              </li>
              <li className="before:content-['▹'] before:text-secondary-color">
                Manage and improve store to reduce the cost and prevent
                consumable shortage.
              </li>
              <li className="before:content-['▹'] before:text-secondary-color">
                Enquire for quotations to purchase any required equipment.
              </li>
            </ul>
          </div>
          <div className="hidden">
            <h3 className="text-lg font-semibold">
              Technical Engineer
              <span className="text-secondary-color font-bold">
                @Centrovision
              </span>
            </h3>
            <p>Apr 2012 - Jan 2013</p>
            <ul>
              <li className="before:content-['▹'] before:text-secondary-color">
                Contact to customer to get the requirement and complete the job.
              </li>
              <li className="before:content-['▹'] before:text-secondary-color">
                Plan flight time, coverage area, and set air plane’s parameters.
              </li>
              <li className="before:content-['▹'] before:text-secondary-color">
                Process acquired data to an aerial map.
              </li>
              <li className="before:content-['▹'] before:text-secondary-color">
                Develop solution that meet the customer’s requirement.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
