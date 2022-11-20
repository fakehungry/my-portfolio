interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Imgae {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  email: string;
  myPicture: Image;
  myAvatar: Image;
  firstName: string;
  lastName: string;
  introduce: string;
  phoneNumber: string;
  role: string;
  resume: File;
  socials: Social[];
  resumeUrl: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  level: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  companyImage: Image;
  company: string;
  dateEnded: string;
  dateStarted: string;
  jobDescription: string[];
  jobTitle: string;
  isCurrentWorkingHere: boolean;
}

export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  feature: string[];
  linkToCode: string;
  linkToWebSite: string;
  title: string;
  summary: string;
}
