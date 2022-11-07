import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className="text-IBM mx-auto text-gray-600 max-w-7xl h-screen snap-y snap-mandatory">
      <Head>
        <title>Chaikit Ruangsakulpat</title>
      </Head>

      <main>
        {/* Header */}
        <Header />

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Projects */}
        <Projects />

        {/* Experiences */}

        {/* Contact */}

        {/* Footer */}
      </main>
    </div>
  );
};

export default Home;
