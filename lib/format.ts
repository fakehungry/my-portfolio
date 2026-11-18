const monthYear = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

export const formatMonth = (date: string) => monthYear.format(new Date(date));

export function monthsBetween(start: string, end?: string) {
  const a = new Date(start);
  const b = end ? new Date(end) : new Date();
  return Math.max(1, (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + b.getUTCMonth() - a.getUTCMonth() + 1);
}

export function formatDuration(months: number) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(`${y} ${y === 1 ? "Year" : "Years"}`);
  if (m) parts.push(`${m} ${m === 1 ? "Month" : "Months"}`);
  return parts.join(" & ");
}

export type Stat = { value: string; label: string };

export function getStats(experiences: { company: string; dateStarted: string }[], projects: unknown[], skills: unknown[]) {
  const earliest = experiences.map((e) => e.dateStarted).sort()[0];
  const years = earliest ? Math.floor(monthsBetween(earliest) / 12) : 0;
  const companies = new Set(experiences.map((e) => e.company)).size;

  return [
    { value: `+${years}`, label: "Years of professional experience" },
    { value: `${companies}`, label: "Companies I've worked with" },
    { value: `${projects.length}`, label: "Featured projects in this portfolio" },
    { value: `${skills.length}`, label: "Tools and languages in my stack" },
  ] satisfies Stat[];
}
