import React, { Fragment } from "react";
import Image from "next/image";
import RippleStroked from "./RippleStroked";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

const Hero = ({ pageInfo }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:space-x-10 md:flex-row">
        <div className="relative w-80 h-80">
          <div className="w-full h-full bg-gradient-to-br from-secondary-color to-slate-100 rounded-full overflow-hidden relative z-20">
            <Image
              className=""
              src={urlFor(pageInfo.myAvatar).url()}
              fill
              alt="chaikit's avatar"
            />
          </div>
          <RippleStroked />
        </div>
        <h1 className="text-3xl font-bold uppercase w-60 relative z-20 text-center">
          <span className="text-5xl text-secondary-color">
            {pageInfo.firstName}
          </span>{" "}
          {pageInfo.lastName}
        </h1>
      </div>
      <div className="flex flex-col text-center mt-5 relative z-20">
        <h2 className="text-xl font-semibold">{pageInfo.role}</h2>
        <p className="text-xl mt-4 w-80 md:w-full md:px-28">
          {pageInfo.introduce}
        </p>
      </div>
    </>
  );
};

export default Hero;
