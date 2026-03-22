import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Услуги | Daralla",
  description:
    "Услуги Daralla: веб-разработка, 3D-визуализация, motion design и game development.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pb-24">
      <SectionHeading
        eyebrow="Услуги"
        title="Креативные и технологические решения для digital-first брендов"
        description="Четыре ключевых направления закрывают сайты для запуска, визуальные миры, motion-подачу и интерактивные форматы."
      />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="glass-panel studio-grid rounded-[2rem] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
            Что мы собираем
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-[-0.05em] text-white md:text-5xl">
            Daralla строит не отдельные экраны, а готовую цифровую подачу бизнеса.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
            Сайт, визуалы, motion и интерактив работают как одна система.
            Поэтому проект выглядит сильнее на первом касании и понятнее на
            этапе продажи, презентации или запуска.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Позиционирование и структура",
              "Production-ready дизайн",
              "3D и motion-материалы",
              "Готовность к запуску и презентации",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
            >
              Смотреть кейсы
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/15"
            >
              Обсудить проект
            </Link>
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="glass-panel project-sheen overflow-hidden rounded-[1.75rem] p-4 sm:col-span-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950/70">
              <Image
                src="/portfolio/nova-grid-01.svg"
                alt="Визуал цифровой системы Daralla"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  Веб / интерфейсы / launch
                </p>
                <p className="mt-2 font-display text-2xl text-white">
                  Digital-система уровня запуска
                </p>
              </div>
              <p className="max-w-[14rem] text-sm leading-6 text-slate-400">
                Плотная подача, выразительные интерфейсы и production-ready
                структура.
              </p>
            </div>
          </article>

          <article className="glass-panel overflow-hidden rounded-[1.75rem] p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/70">
              <Image
                src="/portfolio/vanta-habitat-01.svg"
                alt="3D-визуализация Daralla"
                fill
                sizes="(max-width: 1024px) 100vw, 20vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-500">
              3D-визуализация
            </p>
            <p className="mt-2 font-display text-2xl text-white">
              Пространственные миры и предметные сцены
            </p>
          </article>

          <article className="glass-panel overflow-hidden rounded-[1.75rem] p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/70">
              <Image
                src="/portfolio/pulse-zero-01.svg"
                alt="Motion-графика Daralla"
                fill
                sizes="(max-width: 1024px) 100vw, 20vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-500">
              Motion design
            </p>
            <p className="mt-2 font-display text-2xl text-white">
              Движение, которое добавляет продукту ценность
            </p>
          </article>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="glass-panel rounded-[1.75rem] p-8"
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

      <section className="grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Стратегия и структура",
            description:
              "До визуала определяем, как бизнес должен выглядеть, что объяснять и какое впечатление оставлять.",
          },
          {
            title: "Визуальный язык",
            description:
              "Интерфейсы, 3D и motion собираются в единое направление, чтобы бренд выглядел цельно на всех касаниях.",
          },
          {
            title: "Готовность к релизу",
            description:
              "Результат можно сразу показывать инвестору, партнеру, клиенту или запускать в рекламную кампанию.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
              Daralla value
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-[-0.04em] text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
