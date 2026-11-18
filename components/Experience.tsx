import Image from "next/image";
import { formatDuration, formatMonth, monthsBetween } from "@/lib/format";
import { urlFor } from "@/lib/sanity";
import type { Experience as ExperienceItem } from "@/lib/types";
import Section, { Title } from "./Section";

export default function Experience({ experiences }: { experiences: ExperienceItem[] }) {
  if (!experiences.length) return null;

  return (
    <Section id="experience" eyebrow="Work - Experience" eyebrowAlign="right">
      <Title align="right">Work</Title>

      <ol className="divide-y divide-dashed divide-line border-y border-dashed border-line">
        {experiences.map((job) => {
          const current = job.isCurrentWorkingHere || !job.dateEnded;
          const end = current ? undefined : job.dateEnded;
          return (
            <li key={job._id} className="grid gap-x-6 gap-y-3 py-6 md:grid-cols-[11rem_11rem_1fr]">
              <div>
                <p className="text-sm font-semibold">
                  {formatMonth(job.dateStarted)} - {end ? formatMonth(end) : "Present"}
                </p>
                <p className="mt-0.5 text-xs text-muted">{formatDuration(monthsBetween(job.dateStarted, end))}</p>
              </div>

              <div className="flex items-start gap-3">
                {job.companyImage && (
                  <span className="relative size-8 shrink-0 overflow-hidden rounded-full bg-white">
                    <Image src={urlFor(job.companyImage).width(64).height(64).url()} alt="" fill sizes="32px" />
                  </span>
                )}
                <div>
                  <p className="font-display text-base tracking-wide uppercase">{job.company}</p>
                  {current && (
                    <span className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted">
                      <span className="size-1.5 rounded-full bg-fg" /> Current
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold">{job.jobTitle}</h3>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
                  {job.jobDescription?.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full border border-muted" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
