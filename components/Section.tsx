import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  eyebrowAlign?: "left" | "right";
  children: React.ReactNode;
};

/** Page section: a code-like eyebrow label above a rounded panel, with faint rings behind it. */
export default function Section({ id, eyebrow, eyebrowAlign = "left", children }: Props) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <Ring className={eyebrowAlign === "left" ? "-left-64 top-0" : "-right-64 bottom-0"} />
      <p
        className={`font-display mb-4 text-lg tracking-wide sm:text-xl ${eyebrowAlign === "right" ? "text-right" : ""}`}
      >
        ... /{eyebrow} ...
      </p>
      <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface px-5 py-10 sm:px-10 md:px-14 md:py-14">
        {children}
      </Reveal>
    </section>
  );
}

export function Ring({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-0 size-[40rem] rounded-full border border-ring ${className}`}
    />
  );
}

type TitleProps = {
  children: React.ReactNode;
  align?: "left" | "right";
  as?: "h2" | "h3";
};

/** Heading with the soft circle "blob" behind it. */
export function Title({ children, align = "left", as: Tag = "h2" }: TitleProps) {
  return (
    <div className={`relative mb-6 flex ${align === "right" ? "justify-end" : ""}`}>
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-10 size-36 rounded-full bg-blob ${align === "right" ? "-right-6" : "-left-10"}`}
      />
      <Tag className="font-display relative text-3xl font-medium tracking-wide sm:text-4xl">{children}</Tag>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line px-2.5 py-1 text-xs text-muted transition hover:text-fg">
      {children}
    </span>
  );
}
