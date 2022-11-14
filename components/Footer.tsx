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
      className="font-primary text-dark-primary-color max-w-7xl mx-auto text-center flex flex-col justify-center items-center mb-2 bg-primary-color md:flex-row"
    >
      <p className="text-sm font-semibold md:mr-4 md:border-r-2 md:border-dark-secondary-color md:pr-3">
        Chaikit Ruang &copy; 2022
      </p>
      <div className="space-x-4 flex justify-center items-center pb-1 mt-2 text-dark-primary-color">
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
