import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Blog | Chaikit Ruangsakulpat" };

export default function BlogPage() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col items-center justify-center gap-6 overflow-hidden px-4 text-center">
      <div aria-hidden className="pointer-events-none absolute -z-10 size-[36rem] rounded-full border border-ring" />
      <p className="font-display text-muted">.../blog ...</p>
      <h1 className="font-display text-5xl font-semibold uppercase tracking-wide sm:text-7xl">Coming soon</h1>
      <p className="max-w-md text-muted">I&apos;m writing the first posts. Check back later.</p>
      <Link
        href="/"
        className="rounded-full border border-line px-5 py-2 text-sm transition hover:bg-invert-bg hover:text-invert-fg"
      >
        Back home
      </Link>
    </main>
  );
}
