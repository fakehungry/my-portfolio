import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { SiDiscord, SiFacebook, SiGithub, SiInstagram, SiLine, SiMedium, SiX, SiYoutube } from "react-icons/si";

const icons: [string, IconType][] = [
  ["github", SiGithub],
  ["linkedin", FaLinkedinIn],
  ["discord", SiDiscord],
  ["twitter", SiX],
  ["x.com", SiX],
  ["facebook", SiFacebook],
  ["line", SiLine],
  ["instagram", SiInstagram],
  ["medium", SiMedium],
  ["youtube", SiYoutube],
];

export default function SocialIcon({ title, url, size = 18 }: { title: string; url: string; size?: number }) {
  const key = `${title} ${url}`.toLowerCase();
  const Icon = icons.find(([name]) => key.includes(name))?.[1] ?? FiLink;
  return <Icon size={size} aria-hidden />;
}
