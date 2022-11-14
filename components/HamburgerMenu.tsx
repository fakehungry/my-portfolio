import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  setOpen: Function;
};

const HamburgerMenu = ({ isOpen, setOpen }: Props) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <motion.div
      className="w-full h-full bg-primary-color-darker text-dark-primary-color fixed top-0 right-0 z-30"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <nav className="text-center text-2xl h-full">
        <div className="flex flex-col font-semibold justify-evenly h-full">
          <Link
            href="#about"
            onClick={() => {
              setOpen();
            }}
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => {
              setOpen();
            }}
          >
            Projects
          </Link>
          <Link
            href="#experiences"
            onClick={() => {
              setOpen();
            }}
          >
            Experiences
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              setOpen();
            }}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            onClick={() => {
              setOpen();
            }}
          >
            Blog
          </Link>
          <button
            className="bg-secondary-color text-primary-color rounded-lg py-1 mx-10"
            onClick={() => {
              setOpen();
            }}
          >
            Resume
          </button>
        </div>
      </nav>
    </motion.div>
  );
};

export default HamburgerMenu;
