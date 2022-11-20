import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";

type Props = {
  hamburgerOpen: boolean;
  darkToggle: boolean;
  setHamburgerOpen: Function;
  pageInfo: PageInfo;
};

const HamburgerMenu = ({
  hamburgerOpen,
  setHamburgerOpen,
  darkToggle,
  pageInfo,
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
            className="hover:text-secondary-color hover:font-bold"
            href="#about"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            About
          </Link>
          <Link
            className="hover:text-secondary-color hover:font-bold"
            href="#projects"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            Projects
          </Link>
          <Link
            className="hover:text-secondary-color hover:font-bold"
            href="#experiences"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            Experiences
          </Link>
          <Link
            className="hover:text-secondary-color hover:font-bold"
            href="#contact"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            Contact
          </Link>
          <Link
            className="hover:text-secondary-color hover:font-bold"
            href="/blog"
            onClick={() => {
              setHamburgerOpen();
            }}
          >
            Blog
          </Link>
          <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
            className={`rounded-lg py-1 mx-10 ${
              darkToggle ? "btn-light" : "btn-dark"
            }`}
          >
            <Link target="_blank" href={`${pageInfo.resumeUrl}?dl=`}>
              Resume
            </Link>
          </motion.button>
        </div>
      </nav>
    </motion.div>
  );
};

export default HamburgerMenu;
