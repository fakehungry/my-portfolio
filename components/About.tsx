import type { Stat } from "@/lib/format";
import { urlFor } from "@/lib/sanity";
import type { PageInfo, Skill } from "@/lib/types";
import Image from "next/image";
import Section, { Title } from "./Section";

type Props = { pageInfo: PageInfo; skills: Skill[]; stats: Stat[] };

export default function About({ pageInfo, skills, stats }: Props) {
  const details = [
    ["Name", `${pageInfo.firstName} ${pageInfo.lastName}`],
    ["Role", pageInfo.role],
    ["Email", pageInfo.email],
    ["Phone", pageInfo.phoneNumber],
    ["Location", pageInfo.address],
  ].filter((d): d is [string, string] => Boolean(d[1]));

  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Title>About</Title>
          <div className="space-y-4 leading-relaxed text-muted">
            {pageInfo.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-[7rem_1fr] gap-x-3 gap-y-3 text-sm">
            {details.map(([label, value]) => (
              <div key={label} className="contents">
                <dt className="flex justify-between text-muted after:content-[':']">{label}</dt>
                <dd className="break-words font-semibold">
                  {label === "Email" ? (
                    <a href={`mailto:${value}`} className="underline-offset-4 hover:underline">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="font-display mb-4 text-xl tracking-wide">Tech Stack</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((skill) => (
              <li key={skill._id} className="group rounded-xl border border-line p-3 transition hover:border-muted hover:bg-surface-2">
                <div className="flex items-center gap-2.5">
                  <span className="relative size-7 shrink-0 overflow-hidden rounded-full bg-white">
                    <Image src={urlFor(skill.image).width(64).height(64).url()} alt="" fill sizes="28px" />
                  </span>
                  <span className="font-display truncate text-sm tracking-wide">{skill.title}</span>
                </div>
                <div aria-hidden className="mt-3 h-1 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-fg" style={{ width: `${skill.level}%` }} />
                </div>
                <p className="mt-1.5 text-right text-[11px] text-muted">
                  <span className="sr-only">{skill.title} proficiency: </span>
                  {skill.level}%
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="mt-14 mb-4 text-sm font-semibold">Some numbers about me</h3>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="rounded-xl border border-line p-4">
            <p className="font-display text-3xl font-medium">{s.value}</p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </li>
        ))}
      </ul>

      {skills.length > 0 && <SkillMarquee skills={skills} />}
    </Section>
  );
}

function SkillMarquee({ skills }: { skills: Skill[] }) {
  return (
    <div
      aria-hidden
      className="relative -mx-5 mt-14 -mb-10 overflow-hidden border-t border-line py-4 sm:-mx-10 md:-mx-14 md:-mb-14 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <ul className="flex w-max animate-marquee">
        {["a", "b"].flatMap((copy) =>
          skills.map((skill) => (
            <li key={`${copy}-${skill._id}`} className="flex items-center gap-2 border-r border-line px-6">
              <span className="relative size-6 overflow-hidden rounded-full bg-white">
                <Image src={urlFor(skill.image).width(48).height(48).url()} alt="" fill sizes="24px" />
              </span>
              <span className="font-display text-sm tracking-wide text-muted">{skill.title}</span>
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
