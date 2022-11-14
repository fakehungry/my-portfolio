import React from "react";
import Image from "next/image";
import me from "../public/assets/chaikit-avatar.png";
import RippleStroked from "./RippleStroked";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:space-x-10">
        <div className="relative w-80 h-80">
          <div className="w-full h-full bg-gradient-to-br from-secondary-color to-slate-100 rounded-full overflow-hidden relative z-20">
            <Image className="" src={me} alt="chaikit's avatar" />
          </div>
          <RippleStroked />
        </div>
        <h1 className="text-3xl font-bold uppercase w-60 relative z-20 text-center">
          <span className="text-5xl text-secondary-color">Chaikit</span>{" "}
          Ruangsakulpat
        </h1>
      </div>
      <div className="flex flex-col text-center mt-5 relative z-20">
        <h2 className="text-xl font-semibold">Web Developer & Data Analyst</h2>
        <p className="text-md mt-4 px-4 md:px-28">
          I'm a web developer & data analyst lives in Bangkok, Thailand. I turn
          an idea into real life useful products. Contact me, if you have
          something special to build or your project is in rush hours.
        </p>
      </div>
    </>
  );
};

export default Hero;
