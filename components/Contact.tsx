import { urlFor } from "@/lib/sanity";
import type { PageInfo, Social } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUp } from "react-icons/fi";
import Reveal from "./Reveal";
import { Ring } from "./Section";
import SocialIcon from "./SocialIcon";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Contact({ pageInfo, socials }: { pageInfo: PageInfo; socials: Social[] }) {
  const name = `${pageInfo.firstName} ${pageInfo.lastName}`;

  return (
    <footer id="contact" className="relative mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 md:pt-20">
      <Ring className="-right-80 -top-20" />
      <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface-2 px-5 py-10 sm:px-10 md:px-14">
        <span aria-hidden className="pointer-events-none absolute -top-12 -left-12 size-44 rounded-full bg-blob" />

        <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative size-10 overflow-hidden rounded-full bg-surface">
                <Image src={urlFor(pageInfo.myAvatar).width(80).height(80).url()} alt="" fill sizes="40px" />
              </span>
              <span className="font-display text-sm leading-none tracking-[0.2em] uppercase">
                {pageInfo.firstName}
                <br />
                <span className="text-muted">{pageInfo.lastName}</span>
              </span>
            </div>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-wide sm:text-4xl">
              I&apos;m eager to connect with you and hear your thoughts.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Whether you have a question, a project in a rush, or just want to say hi, my inbox is open. I&apos;ll get back to you as soon as I can.
            </p>
            <a
              href={`mailto:${pageInfo.email}`}
              className="mt-6 inline-block rounded-full bg-invert-bg px-6 py-2.5 text-sm font-semibold text-invert-fg transition hover:opacity-85"
            >
              Light up the talk
            </a>
          </div>

          <div>
            <h3 className="font-display mb-3 text-lg tracking-wide">Contact</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-muted">Email</dt>
                <dd>
                  <a href={`mailto:${pageInfo.email}`} className="break-all hover:underline">
                    {pageInfo.email}
                  </a>
                </dd>
              </div>
              {pageInfo.phoneNumber && (
                <div>
                  <dt className="text-muted">Phone</dt>
                  <dd>
                    <a href={`tel:${pageInfo.phoneNumber.replace(/[^\d+]/g, "")}`} className="hover:underline">
                      {pageInfo.phoneNumber}
                    </a>
                  </dd>
                </div>
              )}
              {pageInfo.address && (
                <div>
                  <dt className="text-muted">Location</dt>
                  <dd>{pageInfo.address}</dd>
                </div>
              )}
            </dl>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display mb-3 text-lg tracking-wide">Links</h3>
            <ul className="space-y-2 text-sm text-muted">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
              {pageInfo.resumeUrl && (
                <li>
                  <a href={`${pageInfo.resumeUrl}?dl=`} className="transition hover:text-fg">
                    Resume
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="relative mt-10 flex flex-col-reverse items-center justify-between gap-5 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; 2022–{new Date().getFullYear()} {name}
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s._id}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.title}
                className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:bg-invert-bg hover:text-invert-fg"
              >
                <SocialIcon title={s.title} url={s.url} size={15} />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 grid size-9 place-items-center rounded-full bg-invert-bg text-invert-fg transition hover:opacity-85"
            >
              <FiArrowUp size={15} />
            </a>
          </div>
        </div>
      </Reveal>
      <p className="font-display mt-4 text-right text-lg tracking-wide">... /Contact ...</p>
    </footer>
  );
}
