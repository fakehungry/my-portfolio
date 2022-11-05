import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="text-IBM mx-auto text-gray-600 w-8/12">
      <Head>
        <title>Chaikit Ruangsakulpat</title>
      </Head>

      <main>
        {/* Header */}
        <Header />

        {/* Hero */}
        <Hero />

        {/* About */}

        {/* Projects */}

        {/* Experiences & Skills */}

        {/* Contact */}

        {/* Footer */}
      </main>
    </div>
  );
};

export default Home;
