import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems, services } from "@/lib/site-data";

const featuredProjects = portfolioItems.slice(0, 4);
const featuredServices = services.slice(0, 3);

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 shadow-[0_0_80px_rgba(95,140,255,0.12)] backdrop-blur md:px-10 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(76,105,255,0.24),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(29,205,159,0.18),_transparent_30%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200">
              Digital Studio / Since 2019
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Daralla designs and builds the full digital layer around modern
              brands, products, and launch ideas.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              From conversion-ready websites and portfolio systems to 3D
              visualization, motion graphics, and interactive concepts, we turn
              ambitious ideas into polished digital experiences that feel
              premium from the first click.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium tracking-[0.18em] text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start A Client Request
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium tracking-[0.18em] text-white transition-colors duration-300 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="grid gap-4 animate-fade-in-up [animation-delay:160ms] md:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Focus
              </p>
              <p className="mt-3 text-2xl font-display tracking-[-0.03em] text-white">
                One studio for web, visual systems, launch content, and
                immersive product storytelling.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
              <div>
                <p className="text-3xl font-display text-white">32</p>
                <p className="mt-2 text-sm text-slate-400">Launches shipped</p>
              </div>
              <div>
                <p className="text-3xl font-display text-white">11</p>
                <p className="mt-2 text-sm text-slate-400">Countries served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Services preview"
          description="Selected disciplines we combine into a single studio workflow."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                {service.tag}
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.03em] text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/services"
          className="inline-flex text-sm uppercase tracking-[0.22em] text-cyan-200 transition-colors hover:text-white"
        >
          Explore all services
        </Link>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Portfolio preview"
          description="A snapshot of brand worlds, product showcases, and immersive builds."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.name}
              href={`/portfolio/${project.slug}`}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="h-56 bg-[radial-gradient(circle_at_top,_rgba(76,105,255,0.28),_transparent_34%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(10,10,15,0.8))] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/10 bg-black/20 p-5">
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    {project.category}
                  </span>
                  <span className="font-display text-3xl tracking-[-0.04em] text-white">
                    {project.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-slate-400">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="inline-flex text-sm uppercase tracking-[0.22em] text-cyan-200 transition-colors hover:text-white"
        >
          Browse the full portfolio
        </Link>
      </section>
    </div>
  );
}
