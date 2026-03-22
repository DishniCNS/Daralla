import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Услуги | Daralla",
  description: "Услуги Daralla: веб-разработка, 3D-визуализация, motion design и game development.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pb-24">
      <SectionHeading
        eyebrow="Услуги"
        title="Креативные и технологические решения для digital-first брендов"
        description="Четыре ключевых направления закрывают сайты для запуска, визуальные миры, motion-подачу и интерактивные форматы."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
              {service.tag}
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-white">
              {service.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {service.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
