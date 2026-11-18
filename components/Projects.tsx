"use client";

import { urlFor } from "@/lib/sanity";
import type { Project } from "@/lib/types";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import Section, { Tag, Title } from "./Section";

export default function Projects({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();

  if (!projects.length) return null;

  const go = (step: number) => {
    setDir(step);
    setIndex((i) => (i + step + projects.length) % projects.length);
  };
  const project = projects[index];

  return (
    <Section id="projects" eyebrow="Projects (Showcase)">
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-start sm:justify-between">
        <p className="max-w-2xl text-2xl leading-snug font-bold italic sm:text-3xl">
          Turning ideas into <span className="text-muted">useful products</span> people <span className="text-muted">actually</span> enjoy using
        </p>
        <Title align="right">Projects</Title>
      </div>

      <section
        className="relative mt-8 overflow-hidden rounded-2xl border border-line bg-surface-2"
        aria-roledescription="carousel"
        aria-label="Projects"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
      >
        <AnimatePresence mode="popLayout" initial={false} custom={dir}>
          <motion.article
            key={project._id}
            custom={dir}
            initial={reduce ? false : { opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={urlFor(project.image).width(1400).height(788).url()}
                alt={project.title}
                fill
                sizes="(min-width: 1152px) 1000px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <h3 className="font-display absolute right-5 bottom-4 text-2xl tracking-wide text-white sm:text-3xl">{project.title}</h3>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <p className="text-sm leading-relaxed whitespace-pre-line text-muted">{project.summary}</p>
              {project.feature?.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {project.feature.map((f) => (
                    <li key={f}>
                      <Tag>{f}</Tag>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-3 pt-1">
                {project.linkToWebSite && (
                  <a
                    href={project.linkToWebSite}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-invert-bg px-4 py-2 text-sm font-semibold text-invert-fg transition hover:opacity-85"
                  >
                    Visit site <FiArrowUpRight aria-hidden />
                  </a>
                )}
                {project.linkToCode && (
                  <a
                    href={project.linkToCode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm transition hover:bg-invert-bg hover:text-invert-fg"
                  >
                    <FiGithub aria-hidden /> Source code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        {projects.length > 1 && (
          <div className="pointer-events-none absolute inset-x-0 top-0 flex aspect-[16/9] items-center justify-between px-3">
            <ArrowButton side="left" onClick={() => go(-1)} />
            <ArrowButton side="right" onClick={() => go(1)} />
          </div>
        )}
      </section>

      {projects.length > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p._id}
              type="button"
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Show ${p.title}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-fg" : "w-1.5 bg-line hover:bg-muted"}`}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

function ArrowButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const Icon = side === "left" ? FiArrowLeft : FiArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous project" : "Next project"}
      className="pointer-events-auto grid size-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/80"
    >
      <Icon aria-hidden />
    </button>
  );
}
