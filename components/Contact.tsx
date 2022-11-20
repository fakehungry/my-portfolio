import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

const Contact = ({ pageInfo }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-5">Connect to me</h2>
      <div className="flex flex-col h-40 w-8/12 justify-between text-center text-base mx-auto">
        <p className="">
          I always open for challenging. Either you have a question or want to
          connect with me. Just mail me. I will try to get back to you ASAP🖐🖐
        </p>
        <motion.button
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
          onClick={() => window.location.assign(`mailto:${pageInfo.email}`)}
          className="uppercase text-base font-bold bg-secondary-color rounded-lg w-30 px-4 py-1 mx-auto text-primary-color"
        >
          Mail me
        </motion.button>
      </div>
    </div>
  );
};

export default Contact;
