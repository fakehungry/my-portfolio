import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import type { PortfolioData } from "./types";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "r5zw8ps4",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
};

export const sanityClient = createClient({
  ...config,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(config);

export const urlFor = (source: SanityImageSource) => builder.image(source).auto("format");

export const PORTFOLIO_TAG = "portfolio";

const portfolioQuery = `{
  "pageInfo": *[_type == "pageInfo"][0]{ ..., "resumeUrl": resume.asset->url },
  "experiences": *[_type == "experience"] | order(dateStarted desc),
  "projects": *[_type == "project"] | order(_createdAt desc),
  "skills": *[_type == "skill"] | order(level desc, _createdAt asc),
  "socials": *[_type == "social"] | order(_createdAt asc)
}`;

export function getPortfolio() {
  return sanityClient.fetch<PortfolioData>(portfolioQuery, {}, { next: { revalidate: 3600, tags: [PORTFOLIO_TAG] } });
}
