import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Портфолио | Daralla",
  description: "Проекты и кейсы Daralla в вебе, 3D, motion и интерактивных форматах.",
};

export default function PortfolioPage() {
  return (
    <div className="space-y-16 pb-24">
      <SectionHeading
        eyebrow="Портфолио"
        title="Проекты Daralla"
        description="Подборка студийных работ: сайты для запуска, 3D-визуализация, motion-системы и интерактивные digital-форматы."
      />

      <div className="grid gap-6 xl:grid-cols-12">
        {portfolioItems.map((project, index) => (
          <Link
            key={project.name}
            href={`/portfolio/${project.slug}`}
            className={`glass-panel project-sheen group relative overflow-hidden rounded-[1.85rem] p-4 transition-transform duration-300 hover:-translate-y-1 ${
              index % 3 === 0 ? "xl:col-span-7" : "xl:col-span-5"
            }`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/80">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-cyan-100">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-200">
                    {project.year}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-white sm:text-4xl">
                  {project.name}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-300">
                  {project.summary}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 px-2 pb-2">
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
