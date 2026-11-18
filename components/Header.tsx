"use client";

import { urlFor } from "@/lib/sanity";
import type { PageInfo } from "@/lib/types";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

function useHideOnScroll() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 10) return;
      setHidden(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return hidden;
}

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function ThemeToggle() {
  const light = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.dataset.theme === "light",
    () => false,
  );

  const toggle = () => {
    const next = !light;
    if (next) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      className="grid size-9 place-items-center rounded-full border border-line transition hover:bg-invert-bg hover:text-invert-fg"
    >
      {light ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}

export default function Header({ pageInfo }: { pageInfo: PageInfo }) {
  const hidden = useHideOnScroll();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${hidden && !open ? "-translate-y-full" : ""}`}>
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-full border border-line bg-surface/80 px-3 py-2 backdrop-blur-md sm:mx-6 lg:mx-auto">
        <Link href="#home" className="flex items-center gap-2.5" aria-label="Back to top">
          <span className="relative size-9 overflow-hidden rounded-full bg-surface-2">
            <Image src={urlFor(pageInfo.myAvatar).width(80).height(80).url()} alt="" fill sizes="36px" />
          </span>
          <span className="font-display text-sm leading-none font-medium tracking-[0.2em] uppercase">
            {pageInfo.firstName}
            <br />
            <span className="text-muted">{pageInfo.lastName}</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {pageInfo.resumeUrl && (
            <a
              href={`${pageInfo.resumeUrl}?dl=`}
              className="hidden rounded-full bg-invert-bg px-4 py-2 text-sm font-semibold text-invert-fg transition hover:opacity-85 sm:block"
            >
              Resume
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-line md:hidden"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-3xl border border-line bg-surface p-6 md:hidden"
          >
            <ul className="font-display flex flex-col gap-4 text-2xl tracking-wide">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setOpen(false)} className="block py-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {pageInfo.resumeUrl && (
              <a href={`${pageInfo.resumeUrl}?dl=`} className="mt-6 block rounded-full bg-invert-bg py-3 text-center font-semibold text-invert-fg">
                Download resume
              </a>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
