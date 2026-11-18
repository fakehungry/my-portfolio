import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { getStats } from "@/lib/format";
import { getPortfolio } from "@/lib/sanity";

export const revalidate = 3600;

export default async function Home() {
  const { pageInfo, experiences, projects, skills, socials } = await getPortfolio();
  const stats = getStats(experiences, projects, skills);

  // A single root element: Next scrolls to a route's first element on navigation and skips the fixed header.
  return (
    <div>
      <Header pageInfo={pageInfo} />
      <main>
        <Hero pageInfo={pageInfo} socials={socials} />
        <About pageInfo={pageInfo} skills={skills} stats={stats} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
      </main>
      <Contact pageInfo={pageInfo} socials={socials} />
    </div>
  );
}
