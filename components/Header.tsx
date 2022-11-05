import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsMoon, BsSun } from "react-icons/bs";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <header className="flex justify-between py-5 text-l px-8">
        <Image src="" alt="logo" className="cursor-pointer" />
        <nav>
          <ul cla>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#experiences-skills">Experiences & Skills</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div>
          <BsMoon />
          <BsSun />
          <button>Resume</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
