import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const [darkToggle, setDark] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  useEffect(() => {
    if (hamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [hamburgerOpen]);

  return (
    <div className="">
      <Head>
        <title>Chaikit Ruangsakulpat</title>
      </Head>

      <main className={`font-primary ${darkToggle ? "light" : "dark"}`}>
        {/* Header */}
        <Header
          darkToggle={darkToggle}
          setDark={setDark}
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />

        <section
          id="hero"
          className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto"
        >
          <Hero />
        </section>

        <section
          id="about"
          className="mb-40 max-w-7xl mx-auto flex flex-col justify-center items-center overflow-x-hidden"
        >
          <About />
        </section>

        <section id="projects" className="flex flex-col mb-40">
          <Projects darkToggle={darkToggle} />
        </section>

        <section
          id="experiences"
          className="flex flex-col justify-center items-center mb-40 max-w-7xl mx-auto"
        >
          <Experiences />
        </section>

        <section id="contact" className="pb-40 max-w-7xl mx-auto">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer darkToggle={darkToggle} />
    </div>
  );
};

export default Home;
