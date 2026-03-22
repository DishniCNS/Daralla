import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About | Daralla",
  description: "About Daralla, a digital studio for futuristic experiences.",
};

const principles = [
  {
    title: "Concept-first thinking",
    description:
      "We start with tone, narrative, and strategic intent before building interfaces.",
  },
  {
    title: "Craft in every layer",
    description:
      "Design, code, animation, and performance are treated as one connected system.",
  },
  {
    title: "Small team, senior execution",
    description:
      "Lean production keeps communication direct and the work visually coherent.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      <SectionHeading
        eyebrow="About"
        title="A studio built for immersive launches"
        description="Daralla is a creative technology studio focused on premium digital presence for modern products, founders, and culture-driven brands."
      />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm leading-8 text-slate-300">
            Our process moves from positioning to prototype, then into polished
            visual systems and production-ready delivery. The result is work that
            feels intentional, technically sharp, and unmistakably current.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-display text-4xl text-white">5</p>
              <p className="mt-2 text-sm text-slate-400">Core disciplines</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-display text-4xl text-white">48h</p>
              <p className="mt-2 text-sm text-slate-400">Average concept sprint</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-display text-4xl text-white">100%</p>
              <p className="mt-2 text-sm text-slate-400">Custom-crafted work</p>
            </div>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.92),rgba(5,10,20,0.95))] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
            Method
          </p>
          <ol className="mt-6 space-y-6">
            <li className="border-l border-white/10 pl-5">
              <p className="font-display text-2xl text-white">01 / Discover</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Position the story, audience, and interaction direction.
              </p>
            </li>
            <li className="border-l border-white/10 pl-5">
              <p className="font-display text-2xl text-white">02 / Design</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Build expressive art direction, interface systems, and motion.
              </p>
            </li>
            <li className="border-l border-white/10 pl-5">
              <p className="font-display text-2xl text-white">03 / Deliver</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Ship performant builds with assets ready for launch and scale.
              </p>
            </li>
          </ol>
        </article>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {principles.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
          >
            <h2 className="font-display text-2xl tracking-[-0.03em] text-white">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
