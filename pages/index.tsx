import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chaikit Ruangsakulpat</title>
      </Head>

      <main className="font-IBM text-gray-600">
        {/* Header */}
        <Header />

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Projects */}
        <Projects />

        {/* Experiences */}
        <Experiences />

        {/* Contact */}

        {/* Footer */}
      </main>
    </>
  );
};

export default Home;
