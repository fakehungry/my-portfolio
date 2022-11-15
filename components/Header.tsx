import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsMoon, BsSun } from "react-icons/bs";
import me from "../public/assets/chaikit-avatar.png";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu";

type Props = {
  darkToggle: boolean;
  setDark: Function;
  hamburgerOpen: boolean;
  setHamburgerOpen: Function;
};

const Header = ({
  darkToggle,
  setDark,
  hamburgerOpen,
  setHamburgerOpen,
}: Props) => {
  const [isOpen, setOpen] = useState(false);

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
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const isScrollingDown = useScrollDirection();

  return (
    <motion.header
      className={`sticky flex top-0 justify-between py-2 text-base opacity-90 z-40 mx-auto px-5 transition-all duration-500 ${
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
      <div className="w-[36px] h-[36px] relative">
        <Image src={me} alt="logo" className="cursor-pointer" />
      </div>
      <nav
        className={`h-[32px] rounded-lg shadow-md px-4 py-1 hidden md:flex ${
          darkToggle ? "light-darker" : "dark-darker dark:shadow-slate-600"
        }`}
      >
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
      <div className={`items-center hidden md:flex`}>
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
        <button className="bg-secondary-color text-primary-color rounded-lg px-2 py-1 ml-3">
          Resume
        </button>
      </div>
      <div className="relative items-center z-40 md:hidden">
        <div className="relative z-50 flex justify-end items-center space-x-2">
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
