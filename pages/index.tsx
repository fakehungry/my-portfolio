import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chaikit Ruangsakulpat</title>
      </Head>

      <main className="font-primary text-dark-primary-color bg-primary-color">
        {/* Header */}
        <Header />

        <section
          id="hero"
          className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto snap-start"
        >
          <Hero />
        </section>

        <section id="about" className="mb-40 max-w-7xl mx-auto snap-center">
          <About />
        </section>

        <section id="projects" className="flex flex-col mb-40 snap-center">
          <Projects />
        </section>

        <section
          id="experiences"
          className="mb-40 max-w-7xl mx-auto snap-center"
        >
          <Experiences />
        </section>

        <section id="contact" className="mb-40 max-w-7xl mx-auto snap-center">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
