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
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const queryPageInfo = groq`
    *[_type == "pageInfo"][0] {
      ...,
      "resumeUrl": resume.asset->url
    }
`;

const queryExperience = groq`
    *[_type == "experience"]  | order(_createdAt desc)
`;

const queryProject = groq`
    *[_type == "project"]
`;

const querySkill = groq`
    *[_type == "skill"]  | order(_createdAt asc)
`;

const querySocial = groq`
    *[_type == "social"]
`;

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
  const resPageInfo = await sanityClient.fetch(queryPageInfo);
  const pageInfo: PageInfo = resPageInfo;
  const resExperience = await sanityClient.fetch(queryExperience);
  const experiences: Experience[] = resExperience;
  const resProject = await sanityClient.fetch(queryProject);
  const projects: Project[] = resProject;
  const resSkill = await sanityClient.fetch(querySkill);
  const skills: Skill[] = resSkill;
  const resSocial = await sanityClient.fetch(querySocial);
  const socials: Social[] = resSocial;

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
