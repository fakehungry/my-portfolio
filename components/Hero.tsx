import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section id="hero" className="h-screen container mt-10">
      <div className="flex justify-center space-x-10">
        <Image src="" alt="chaikit's picture" />
        <h1 className="text-4xl font-bold text-gray-700 uppercase">
          <span className="text-6xl text-gray-800">Chaikit</span> Ruangsakulpat
        </h1>
      </div>
      <div className="flex flex-col text-center mt-5">
        <h2 className="text-2xl font-semibold">Web Developer & Data Analyst</h2>
        <p className="text-xl mt-4">
          I'm a web developer & data analyst lives in Bangkok, Thailand. I turn
          an idea into real life useful products. Contact me, if you have
          something special to build or your project is in rush hours.
        </p>
      </div>
    </section>
  );
};

export default Hero;
