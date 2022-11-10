import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsMoon, BsSun } from "react-icons/bs";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex justify-between py-5 text-l px-8 bg-primary-color opacity-90 mx-auto z-50">
      <Image src="" alt="logo" className="cursor-pointer" />
      <nav className="rounded-lg shadow-md px-4 py-1 bg-[#ecf7c6]">
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
        <button className="bg-gray-600 text-white rounded-lg px-2 py-1 text-primary-color ml-3">
          Resume
        </button>
      </div>
    </header>
  );
};

export default Header;
