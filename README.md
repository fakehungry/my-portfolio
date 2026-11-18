# [My Portfolio](https://www.chaikitr.com/)

This was the first project of my web developer journey, and it taught me a lot about doing real work. The site shows who I am, the projects I've completed, the skills I have, where I've worked, how to contact me, and a link to my blog. It's built with Next.js, Tailwind CSS, Motion, and Sanity.

## Features

- Monochrome dark design with a light theme toggle
- Responsive layout with scroll-reveal animation
- Project carousel, experience timeline, skill stack
- Content managed in Sanity (headless CMS), revalidated hourly

## Tools

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- Motion
- Sanity (studio in `backend-sanity/`)

## Development

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint    # Biome lint + format check
npm run format  # apply Biome fixes and formatting
```

Content comes from the public Sanity dataset `r5zw8ps4/production` by default. Override with `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` (see `.env.example`).

### Instant content refresh

Content is cached for an hour. To publish changes immediately, add a Sanity webhook (sanity.io/manage → API → Webhooks):

- URL: `https://www.chaikitr.com/api/revalidate`, method `POST`
- Trigger on create, update, and delete
- Header `x-revalidate-secret` set to the same value as the `REVALIDATE_SECRET` env var on the host
