import Dropdown from "@components/dropdown/Dropdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chaikit Ruangsakulpat",
  description:
    "Chaikit Ruangsakulpat is a software engineer who loves to build web applications.",
  creator: "Chaikit Ruangsakulpat",
  publisher: "Chaikit Ruangsakulpat",
  authors: [{ name: "Chaikit", url: "https://chaikitr.com" }],
  generator: "Next.js",
  applicationName: "ChaikitR's Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "TypeScript"],
};

const links = [
  {
    name: "Home",
  },
  {
    name: "Blog",
  },
];

export default function Page() {
  return <Dropdown title="Hover me" links={links} />;
}
