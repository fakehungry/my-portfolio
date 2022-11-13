import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-5">Connect to me</h2>
      <div className="flex flex-col h-40 w-8/12 justify-between text-center text-lg mx-auto">
        <p className="">
          I always open for challenging. Either you have a question or want to
          connect with me. Just mail me. I will try to get back to you ASAP🖐🖐
        </p>
        <button className="uppercase text-xl font-bold bg-secondary-color rounded-lg w-30 px-4 py-1 mx-auto text-primary-color">
          Mail me
        </button>
      </div>
    </>
  );
};

export default Contact;
