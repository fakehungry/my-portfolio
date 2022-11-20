import type { NextPage, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchPageInfo } from "../utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home: NextPage<Props> = ({
  pageInfo,
  experiences,
  projects,
  socials,
  skills,
}) => {
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
          pageInfo={pageInfo}
        />

        <section
          id="hero"
          className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto"
        >
          <Hero pageInfo={pageInfo} />
        </section>

        <section
          id="about"
          className="mb-40 max-w-7xl mx-auto flex flex-col justify-center items-center overflow-x-hidden"
        >
          <About pageInfo={pageInfo} skills={skills} />
        </section>

        <section id="projects" className="flex flex-col mb-40">
          <Projects darkToggle={darkToggle} projects={projects} />
        </section>

        <section
          id="experiences"
          className="flex flex-col justify-center items-center mb-40 max-w-7xl mx-auto"
        >
          <Experiences experiences={experiences} />
        </section>

        <section id="contact" className="pb-40 max-w-7xl mx-auto">
          <Contact pageInfo={pageInfo} />
        </section>
      </main>

      {/* Footer */}
      <Footer darkToggle={darkToggle} socials={socials} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },
    revalidate: 10,
  };
};
