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
import { motion } from "framer-motion";

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
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          className="hover:text-secondary-color"
        >
          <Link href="https://github.com/fakehungry" target="_blank">
            <SiGithub size={24} />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          className="hover:text-secondary-color"
        >
          <Link
            href="https://www.linkedin.com/in/chaikit-ruang/"
            target="_blank"
          >
            <SiLinkedin size={24} />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          className="hover:text-secondary-color"
        >
          <Link
            href="https://discord.com/users/1042699111989510144"
            target="_blank"
          >
            <SiDiscord size={24} />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          className="hover:text-secondary-color"
        >
          <Link href="https://twitter.com/ChaikitR" target="_blank">
            <SiTwitter size={24} />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          className="hover:text-secondary-color"
        >
          <Link href="https://www.facebook.com/chaikit.ruang" target="_blank">
            <SiFacebook size={24} />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          className="hover:text-secondary-color"
        >
          <Link href="https://line.me/ti/p/RN5IztkarV" target="_blank">
            <SiLine size={24} />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
