import type { PageInfo, Social } from "@/lib/types";
import Devices from "./Devices";
import Reveal from "./Reveal";
import { Ring } from "./Section";
import SocialIcon from "./SocialIcon";

type Props = { pageInfo: PageInfo; socials: Social[] };

export default function Hero({ pageInfo, socials }: Props) {
  const roleWords = pageInfo.role.trim().split(/\s+/);
  const roleBottom = roleWords.pop() ?? "";
  const roleTop = roleWords.join(" ");

  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 pt-28 pb-14 sm:px-6 md:pt-36">
      <Ring className="-right-72 -top-32" />
      <Ring className="-left-80 top-1/2 size-[30rem]" />

      <div className="relative grid items-center gap-10 md:grid-cols-[auto_minmax(0,1.15fr)_minmax(0,1fr)_auto] md:gap-8">
        {/* Vertical role label */}
        <Reveal className="hidden items-center gap-4 md:flex md:h-full md:flex-col md:justify-center">
          <span className="h-24 w-px bg-line" />
          <div className="flex gap-3 [writing-mode:vertical-rl] rotate-180">
            <span className="font-display text-xl tracking-[0.35em] text-muted uppercase">{roleTop}</span>
            <span className="font-display text-4xl font-semibold tracking-wide uppercase">{roleBottom}</span>
          </div>
          <span className="h-24 w-px bg-line" />
        </Reveal>

        {/* Photo on laptop + phone */}
        <Reveal className="relative w-full">
          <Devices image={pageInfo.myPicture} firstName={pageInfo.firstName} lastName={pageInfo.lastName} role={pageInfo.role} />
        </Reveal>

        {/* Name + intro */}
        <Reveal delay={0.1} className="min-w-0 text-center md:text-left">
          <p className="mb-3 text-xs tracking-[0.3em] text-muted uppercase md:hidden">{pageInfo.role}</p>
          <p className="font-display text-2xl tracking-[0.3em] text-muted uppercase sm:text-3xl sm:tracking-[0.4em]">{pageInfo.lastName}</p>
          <h1 className="font-display -mt-1 text-6xl font-semibold tracking-[0.12em] uppercase sm:text-7xl sm:tracking-[0.16em]">{pageInfo.firstName}</h1>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted md:mx-0">{pageInfo.introduce}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects" className="rounded-full bg-invert-bg px-6 py-2.5 text-sm font-semibold text-invert-fg transition hover:opacity-85">
              Portfolio
            </a>
            <a href="#contact" className="rounded-full border border-line px-6 py-2.5 text-sm transition hover:bg-invert-bg hover:text-invert-fg">
              Light up the talk
            </a>
          </div>
        </Reveal>

        {/* Social column */}
        {socials.length > 0 && (
          <Reveal delay={0.2}>
            <ul className="flex justify-center gap-3 md:flex-col" aria-label="Social profiles">
              {socials.map((s) => (
                <li key={s._id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.title}
                    className="grid size-10 place-items-center rounded-xl bg-invert-bg text-invert-fg transition hover:-translate-y-0.5 hover:opacity-85"
                  >
                    <SocialIcon title={s.title} url={s.url} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
