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

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      id="footer"
      className="font-primary text-dark-primary-color max-w-7xl mx-auto text-center flex justify-center mb-6 bg-primary-color"
    >
      <p className="text-md font-semibold mr-4 border-r-2 border-dark-secondary-color pr-3">
        Chaikit Ruang &copy; 2022
      </p>
      <div className="space-x-4 flex">
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
