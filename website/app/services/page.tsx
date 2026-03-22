import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Услуги | Daralla",
  description:
    "Услуги Daralla: веб-разработка, 3D-визуализация, motion design и разработка интерактивных форматов.",
};

const serviceVisuals = [
  "/portfolio/nova-grid-01.svg",
  "/portfolio/vanta-habitat-01.svg",
  "/portfolio/pulse-zero-01.svg",
  "/portfolio/echo-sector-01.svg",
];

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-24">
      <SectionHeading
        eyebrow="Услуги"
        title="Система услуг, которая собирает образ бренда в одну сильную digital-подачу"
        description="Daralla не дробит проект на несвязанные задачи. Мы проектируем и производим публичный образ бизнеса как единый визуальный и технологический объект."
      />

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="glass-panel studio-grid p-8 md:p-10">
          <p className="border border-indigo-300/45 bg-[#10163a] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em] text-indigo-100 inline-flex">
            Что получает клиент
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
            НЕ НАБОР
            <br />
            УСЛУГ.
            <br />
            А ГОТОВУЮ
            <br />
            СИСТЕМУ ЗАПУСКА.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            Сайт, визуалы, motion, интерактив и презентационные материалы
            работают синхронно. Поэтому бренд выглядит увереннее и читается
            быстрее в любом публичном формате.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Понятная бизнес-подача",
              "Выразительная визуальная система",
              "Production-ready реализация",
              "Материалы для релиза и роста",
            ].map((item) => (
              <div
                key={item}
                className="border border-indigo-300/35 bg-[#0c1231] px-4 py-4 text-sm font-medium uppercase tracking-[0.16em] text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="glass-panel overflow-hidden p-4">
              <div className="relative aspect-[16/11] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029]">
                <Image
                  src={serviceVisuals[index]}
                  alt={service.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                  {service.tag}
                </p>
                <div className="h-4 w-12 bg-indigo-300" />
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-none text-white">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
              <div className="mt-5 space-y-3">
                {service.points.map((point) => (
                  <div
                    key={point}
                    className="border border-indigo-300/35 bg-[#0c1231] px-4 py-4 text-sm leading-6 text-slate-100"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Диагностика",
            text: "Сначала определяем, как бизнес должен звучать и какое впечатление оставлять на первом касании.",
          },
          {
            title: "Проектирование",
            text: "Собираем ритм страниц, типографику, визуальную логику и систему переходов до production-этапа.",
          },
          {
            title: "Релиз",
            text: "Результат сразу пригоден для отправки клиенту, инвестору, партнеру или запуска рекламной кампании.",
          },
        ].map((item, index) => (
          <article key={item.title} className="glass-panel p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
              0{index + 1}
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="glass-panel p-8 md:p-10">
        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr] xl:items-end">
          <div>
            <p className="border border-indigo-300/45 bg-[#10163a] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em] text-indigo-100 inline-flex">
              Следующий шаг
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
              Если у бизнеса есть задача,
              <br />
              Daralla превращает ее
              <br />
              в форму, которая продает.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 xl:justify-end">
            <Link
              href="/portfolio"
              className="border-2 border-indigo-300/60 bg-[#10163a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[8px_8px_0_rgba(2,6,23,0.92)]"
            >
              Изучить кейсы
            </Link>
            <Link
              href="/contact"
              className="border-2 border-indigo-200 bg-indigo-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[8px_8px_0_rgba(2,6,23,0.92)]"
            >
              Перейти к запросу
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
