import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  hamburgerOpen: boolean;
  darkToggle: boolean;
  setHamburgerOpen: Function;
};

const HamburgerMenu = ({
  hamburgerOpen,
  setHamburgerOpen,
  darkToggle,
}: Props) => {
  const variants = {
    open: { opacity: 1, x: 0, y: 0 },
    closed: { opacity: 0, x: "100%", y: "-100%" },
  };

  return (
    <motion.div
      className={`w-full h-full fixed top-0 right-0 z-30 ${
        darkToggle ? "light-darker" : "dark-darker"
      }`}
      animate={hamburgerOpen ? "open" : "closed"}
      variants={variants}
    >
      <nav className="text-center text-2xl h-full">
        <div className="flex flex-col font-semibold justify-evenly h-full">
          <Link
            href="#about"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            Projects
          </Link>
          <Link
            href="#experiences"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            Experiences
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            Blog
          </Link>
          <button
            className={`rounded-lg py-1 mx-10 ${
              darkToggle ? "btn-light" : "btn-dark"
            }`}
            onClick={() => {
              setHamburgerOpen();
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
