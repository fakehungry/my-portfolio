import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsMoon, BsSun } from "react-icons/bs";
import me from "../public/assets/chaikit-avatar.png";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <motion.header
      className="sticky top-0 flex justify-between py-5 text-l px-8 bg-primary-color opacity-90 mx-auto z-50"
      initial={{
        y: -100,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="w-[30px] h-[30px]">
        <Image src={me} alt="logo" className="cursor-pointer" />
      </div>
      <nav className="rounded-lg shadow-md px-4 py-1 bg-primary-color-darker">
        <ul className="flex space-x-6 font-medium">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#experiences">Experiences</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <BsMoon size={24} className="cursor-pointer" />
        <BsSun size={24} className="hidden cursor-pointer" />
        <button className="bg-secondary-color text-primary-color rounded-lg px-2 py-1 ml-3">
          Resume
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
