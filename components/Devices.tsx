import { urlFor } from "@/lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";

type Props = {
  image: SanityImageSource;
  firstName: string;
  lastName: string;
  role: string;
};

/**
 * Laptop + phone mockups showing the photo with a mini "site" on each screen.
 * The phone sits at the laptop's front-left corner, turned in 3D so its side edge shows.
 * Screen text is sized in container units (cqw) so it scales with the device.
 */
export default function Devices({ image, firstName, lastName, role }: Props) {
  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`;

  return (
    <div aria-hidden className="group relative mx-auto w-full max-w-xl pt-[2%] pb-[9%] pl-[13%]">
      {/* Laptop */}
      <div className="relative">
        <div className="rounded-t-[1.1rem] border border-line bg-neutral-900 p-[2%] pb-[2.6%] shadow-2xl shadow-black/60">
          <div className="mx-auto mb-[1.2%] size-1.5 rounded-full bg-neutral-700" />
          <div className="@container relative aspect-[16/10] overflow-hidden rounded-md bg-black text-white">
            <Image
              src={urlFor(image).width(1200).height(750).url()}
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 30rem, 85vw"
              className="toned object-cover object-[30%_25%] transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-black/0" />

            {/* Mini nav */}
            <div className="absolute inset-x-[5%] top-[5%] flex items-center justify-between text-[2.3cqw]">
              <span className="font-display rounded-[0.6cqw] border border-white/60 px-[1.2cqw] py-[0.3cqw] tracking-widest">{initials}</span>
              <span className="flex gap-[3cqw] text-white/70">
                <span className="text-white">Home</span>
                <span>About</span>
                <span>Projects</span>
                <span>Contact</span>
              </span>
            </div>

            {/* Mini hero */}
            <div className="absolute top-1/2 right-[6%] max-w-[50%] -translate-y-[40%] text-right">
              <p className="text-[2.4cqw] tracking-[0.3em] text-white/70 uppercase">Hello, I&apos;m</p>
              <p className="font-display text-[9cqw] leading-none font-semibold tracking-[0.08em] uppercase">{firstName}</p>
              <p className="font-display text-[3.4cqw] tracking-[0.35em] text-white/80 uppercase">{lastName}</p>
              <p className="mt-[2cqw] text-[2.4cqw] text-white/70">{role}</p>
              <span className="mt-[3cqw] inline-block rounded-full bg-white px-[3cqw] py-[1cqw] text-[2.2cqw] font-semibold text-black">View portfolio</span>
            </div>
          </div>
        </div>
        <div className="relative -mx-[6%] h-3 rounded-b-2xl bg-gradient-to-b from-neutral-600 to-neutral-800 sm:h-4">
          <span className="absolute top-0 left-1/2 h-1.5 w-[16%] -translate-x-1/2 rounded-b-lg bg-neutral-900" />
        </div>
      </div>

      {/* Phone with a polished metal rim + buttons along its left edge */}
      <div className="absolute bottom-0 left-0 w-[29%] [perspective:1000px]">
        <div className="relative transition duration-700 [transform:rotateY(28deg)_rotateX(4deg)_rotateZ(-5deg)] group-hover:[transform:rotateY(18deg)_rotateX(2deg)_rotateZ(-3deg)_translateY(-4%)]">
          {/* Body behind the front, offset left: its visible sliver is the rounded side rim */}
          <div className="absolute inset-y-[0.4%] right-[2%] -left-[4.5%] rounded-[19%/9.2%] bg-[linear-gradient(270deg,#050505_0%,#121214_80%,#3a3a3f_88%,#c9c9cf_91%,#4d4d53_94%,#9a9aa1_96.5%,#1a1a1d_99%,#0a0a0b_100%)] shadow-[0_30px_50px_-10px_rgb(0_0_0/0.85)]">
            {/* Side buttons on the rim */}
            <span className="absolute top-[22%] -left-[1.6%] h-[8%] w-[2.4%] rounded-l-full bg-[linear-gradient(270deg,#3a3a3f,#a4a4ab_55%,#2a2a2e)]" />
            <span className="absolute top-[33%] -left-[1.6%] h-[13%] w-[2.4%] rounded-l-full bg-[linear-gradient(270deg,#3a3a3f,#a4a4ab_55%,#2a2a2e)]" />
          </div>

          {/* Front: black glass with a thin polished frame line around it */}
          <div className="relative rounded-[18%/9%] bg-black p-[5%] shadow-[inset_0_0_0_1.5px_#5b5b61,inset_0_0_0_3px_#0b0b0c,inset_0_0_0_4px_#2c2c30]">
            <div className="@container relative aspect-[9/19.5] overflow-hidden rounded-[14%/6.5%] bg-black text-white">
              <Image src={urlFor(image).width(450).height(975).url()} alt="" fill sizes="(min-width: 768px) 9rem, 26vw" className="toned object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

              {/* Status bar + notch */}
              <div className="absolute inset-x-[9%] top-[3%] flex items-center justify-between text-[7cqw] font-semibold">
                <span>9:41</span>
                <span className="flex items-end gap-[1.5cqw]">
                  <span className="h-[3cqw] w-[1.6cqw] rounded-[0.4cqw] bg-white" />
                  <span className="h-[4.5cqw] w-[1.6cqw] rounded-[0.4cqw] bg-white" />
                  <span className="h-[6cqw] w-[1.6cqw] rounded-[0.4cqw] bg-white" />
                  <span className="ml-[1cqw] h-[5.5cqw] w-[10cqw] rounded-[1.5cqw] border border-white p-[0.6cqw]">
                    <span className="block h-full w-3/4 rounded-[0.8cqw] bg-white" />
                  </span>
                </span>
              </div>
              <span className="absolute top-[2.5%] left-1/2 h-[3.4%] w-[32%] -translate-x-1/2 rounded-full bg-black" />

              {/* Mini profile */}
              <div className="absolute inset-x-[9%] bottom-[7%]">
                <p className="font-display text-[15cqw] leading-none font-semibold tracking-[0.06em] uppercase">{firstName}</p>
                <p className="mt-[2cqw] text-[6.5cqw] text-white/75">{role}</p>
                <span className="mt-[5cqw] block rounded-full bg-white py-[3cqw] text-center text-[6.5cqw] font-semibold text-black">Contact me</span>
                <span className="mx-auto mt-[6cqw] block h-[1.6cqw] w-[38%] rounded-full bg-white/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
