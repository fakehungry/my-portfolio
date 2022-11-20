import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  darkToggle: boolean;
  setDark: Function;
  hamburgerOpen: boolean;
  setHamburgerOpen: Function;
  pageInfo: PageInfo;
};

const Header = ({
  darkToggle,
  setDark,
  hamburgerOpen,
  setHamburgerOpen,
  pageInfo,
}: Props) => {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const isScrollingDown = useScrollDirection();

  return (
    <motion.header
      className={`sticky h-full flex top-0 justify-between py-2 text-base opacity-90 z-40 mx-auto px-5 transition-all duration-300 ${
        isScrollingDown === "down" ? "-top-24" : "top-0"
      } ${darkToggle ? "light" : "dark"}`}
      initial={{
        y: -100,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 0.9,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-[36px] h-[36px] relative"
      >
        <Link href="/">
          <Image src={urlFor(pageInfo.myAvatar).url()} fill alt="logo" />
        </Link>
      </motion.div>
      <nav
        className={`h-[32px] rounded-lg shadow-md px-4 py-1 hidden md:flex ${
          darkToggle ? "light-darker" : "dark-darker dark:shadow-slate-600"
        }`}
      >
        <ul className="flex space-x-6 font-medium">
          <li className="hover:text-secondary-color hover:font-bold">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:text-secondary-color hover:font-bold">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="hover:text-secondary-color hover:font-bold">
            <Link href="#experiences">Experiences</Link>
          </li>
          <li className="hover:text-secondary-color hover:font-bold">
            <Link href="#contact">Contact</Link>
          </li>
          <li className="hover:text-secondary-color hover:font-bold">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className={`items-center hidden md:flex`}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <BsMoon
            size={24}
            className={`hidden cursor-pointer ${darkToggle && "dark:block"}`}
            onClick={() => setDark(!darkToggle)}
          />
          <BsSun
            size={24}
            className={`cursor-pointer ${darkToggle && "dark:hidden"}`}
            onClick={() => setDark(!darkToggle)}
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-secondary-color text-primary-color rounded-lg px-2 py-1 ml-3"
        >
          <Link target="_blank" href={`${pageInfo.resumeUrl}?dl=`}>
            Resume
          </Link>
        </motion.button>
      </div>
      <div className="relative items-center z-40 md:hidden">
        <div className="relative z-50 flex justify-end items-center space-x-2">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <BsMoon
              size={24}
              className={`hidden cursor-pointer ${darkToggle && "dark:block"}`}
              onClick={() => setDark(!darkToggle)}
            />
            <BsSun
              size={24}
              className={`cursor-pointer ${darkToggle && "dark:hidden"}`}
              onClick={() => setDark(!darkToggle)}
            />
          </motion.div>
          <Hamburger
            size={28}
            duration={0.8}
            color={darkToggle ? "#17252a" : "#def2f1"}
            toggled={hamburgerOpen}
            toggle={setHamburgerOpen}
          />
        </div>
        <div className="relative">
          <HamburgerMenu
            hamburgerOpen={hamburgerOpen}
            setHamburgerOpen={setHamburgerOpen}
            darkToggle={darkToggle}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
