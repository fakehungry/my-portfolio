import React from "react";
import Link from "next/link";
import {
  SiFacebook,
  SiGithub,
  SiTwitter,
  SiLinkedin,
  SiDiscord,
  SiLine,
} from "react-icons/si";

type Props = { darkToggle: boolean };

const Footer = ({ darkToggle }: Props) => {
  return (
    <footer
      id="footer"
      className={`font-primary mx-auto text-center flex flex-col justify-center items-center pb-2 md:flex-row ${
        darkToggle ? "light" : "dark"
      }`}
    >
      <p className="text-sm font-semibold md:mr-4 md:border-r-2 md:border-dark-secondary-color md:pr-3">
        Chaikit Ruang &copy; 2022
      </p>
      <div
        className={`space-x-4 flex justify-center items-center pb-1 mt-2 ${
          darkToggle ? "light" : "dark"
        }`}
      >
        <Link href="#">
          <SiGithub size={24} />
        </Link>
        <Link href="#">
          <SiLinkedin size={24} />
        </Link>
        <Link href="#">
          <SiDiscord size={24} />
        </Link>
        <Link href="#">
          <SiTwitter size={24} />
        </Link>
        <Link href="#">
          <SiFacebook size={24} />
        </Link>
        <Link href="#">
          <SiLine size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
