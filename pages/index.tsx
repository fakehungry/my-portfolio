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

      <main className="font-primary text-gray-600">
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
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
