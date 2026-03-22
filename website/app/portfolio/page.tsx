import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Портфолио | Daralla",
  description:
    "Проекты Daralla в вебе, 3D, motion и интерактивных форматах.",
};

export default function PortfolioPage() {
  return (
    <div className="space-y-20 pb-24">
      <SectionHeading
        eyebrow="Портфолио"
        title="Кейсы, в которых видно не только результат, но и визуальное мышление студии"
        description="Daralla показывает проекты как законченные системы: с кадрами, сценами, интерфейсами, атмосферой и понятной задачей бизнеса."
      />

      <section className="grid gap-6">
        {portfolioItems.map((project, index) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className={`glass-panel project-sheen group grid gap-5 p-4 md:p-5 ${
              index % 2 === 0
                ? "xl:grid-cols-[0.58fr_0.42fr]"
                : "xl:grid-cols-[0.42fr_0.58fr]"
            }`}
          >
            <div
              className={`relative aspect-[16/10] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029] ${
                index % 2 === 1 ? "xl:order-2" : ""
              }`}
            >
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                priority={index < 2}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div
              className={`flex flex-col justify-between gap-6 ${
                index % 2 === 1 ? "xl:order-1" : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border border-indigo-300/45 bg-[#10163a] px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-indigo-100">
                    {project.category}
                  </span>
                  <span className="border border-indigo-300/30 bg-[#0c1231] px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
                    {project.year}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-none tracking-[-0.05em] text-white md:text-5xl">
                  {project.name}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  {project.summary}
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="border border-indigo-300/35 bg-[#0c1231] px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="border border-indigo-300/35 bg-[#0c1231] p-4 text-sm leading-7 text-slate-300">
                  {project.visualConcept}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
