import type { Metadata } from "next";
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

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((project, index) => (
          <Link
            key={project.name}
            href={`/portfolio/${project.slug}`}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="h-64 bg-[radial-gradient(circle_at_top_left,_rgba(29,205,159,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(76,105,255,0.22),_transparent_36%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(3,7,18,1))] p-5">
              <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/10 bg-black/25 p-5">
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  {project.category}
                </span>
                <div>
                  <h2 className="font-display text-3xl tracking-[-0.04em] text-white">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-400">{project.year}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <p className="text-sm leading-7 text-slate-400">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
