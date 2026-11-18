import type { SanityImageSource } from "@sanity/image-url";

interface SanityBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  firstName: string;
  lastName: string;
  role: string;
  introduce: string;
  about: string[];
  email: string;
  phoneNumber?: string;
  address?: string;
  myPicture: SanityImageSource;
  myAvatar: SanityImageSource;
  resumeUrl?: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  level: number;
  image: SanityImageSource;
}

export interface Experience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  company: string;
  companyImage?: SanityImageSource;
  dateStarted: string;
  dateEnded?: string;
  isCurrentWorkingHere: boolean;
  jobDescription: string[];
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  summary: string;
  image: SanityImageSource;
  feature: string[];
  linkToCode?: string;
  linkToWebSite?: string;
}

export interface PortfolioData {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
}
