import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsMoon, BsSun } from "react-icons/bs";
import me from "../public/assets/chaikit-avatar.png";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu";

type Props = {};

const Header = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 flex justify-between py-5 text-l bg-primary-color opacity-90 z-40 mx-auto px-4"
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
      <div className="w-[38px] h-[38px] relative">
        <Image src={me} alt="logo" className="cursor-pointer" />
      </div>
      <nav className="rounded-lg shadow-md px-4 py-1 bg-primary-color-darker hidden md:flex">
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
      <div className="items-center hidden md:flex">
        <BsMoon size={24} className="cursor-pointer" />
        <BsSun size={24} className="hidden cursor-pointer" />
        <button className="bg-secondary-color text-primary-color rounded-lg px-2 py-1 ml-3">
          Resume
        </button>
      </div>
      <div className="relative items-center z-40 md:hidden">
        <div className="relative z-50 flex justify-end items-center space-x-2">
          <BsMoon size={24} className="cursor-pointer" />
          <BsSun size={24} className="hidden cursor-pointer" />
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="relative">
          <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
