import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "О студии | Daralla",
  description:
    "О студии Daralla и подходе к созданию выразительных digital-систем.",
};

const principles = [
  {
    title: "Сначала смысл",
    description:
      "Мы не начинаем с формы ради формы. Сначала определяется, что бизнес должен донести и каким должен быть первый эффект.",
  },
  {
    title: "Потом система",
    description:
      "Интерфейс, CGI, типографика, motion и сетка собираются в один язык, который можно масштабировать дальше.",
  },
  {
    title: "Потом релиз",
    description:
      "Клиент получает материал не в виде концепта на полпути, а в виде готового публичного инструмента.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24">
      <SectionHeading
        eyebrow="О студии"
        title="Daralla делает для брендов цифровую форму, в которой есть масштаб, характер и технологичность"
        description="Студия работает там, где бизнесу нужна не просто страница в интернете, а сильный public-facing образ для запуска, продажи и роста."
      />

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <article className="glass-panel studio-grid p-8 md:p-10">
          <p className="border border-indigo-300/45 bg-[#10163a] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em] text-indigo-100 inline-flex">
            Позиция Daralla
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
            ДИЗАЙН,
            <br />
            КОТОРЫЙ
            <br />
            УМЕЕТ
            <br />
            ОБЪЯСНЯТЬ.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300">
            Наш процесс идет от понимания бизнеса к визуальной системе, а потом
            к production-реализации. Это позволяет сделать проект не просто
            красивым, а убедительным и пригодным к реальному запуску.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="border border-indigo-300/35 bg-[#0c1231] p-5">
              <p className="font-display text-4xl font-semibold text-white">5</p>
              <p className="mt-2 text-sm text-slate-300">Ключевых дисциплин</p>
            </div>
            <div className="border border-indigo-300/35 bg-[#0c1231] p-5">
              <p className="font-display text-4xl font-semibold text-white">48h</p>
              <p className="mt-2 text-sm text-slate-300">Средний концепт-спринт</p>
            </div>
            <div className="border border-indigo-300/35 bg-[#0c1231] p-5">
              <p className="font-display text-4xl font-semibold text-white">100%</p>
              <p className="mt-2 text-sm text-slate-300">Фокус на задаче клиента</p>
            </div>
          </div>
        </article>

        <article className="glass-panel p-4 md:p-5">
          <div className="relative aspect-[16/12] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029]">
            <Image
              src="/portfolio/astra-frame-01.svg"
              alt="Визуальная система Daralla"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="border border-indigo-300/35 bg-[#0c1231] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                Формат
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Компактная студия, прямой диалог и высокое качество сборки без
                лишних слоев между идеей и реализацией.
              </p>
            </div>
            <div className="border border-indigo-300/35 bg-[#0c1231] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                Приоритет
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Нужен не «эффектный визуал», а форма, которая помогает бизнесу
                быть прочитанным и запомниться.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {principles.map((item) => (
          <article key={item.title} className="glass-panel p-6">
            <h2 className="font-display text-3xl font-semibold text-white">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <article className="glass-panel p-8">
          <p className="border border-indigo-300/45 bg-[#10163a] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em] text-indigo-100 inline-flex">
            Почему это работает
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            Бизнес получает не абстрактный арт-дирекшн, а рабочую digital-систему.
          </h2>
        </article>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Проект быстрее считывается аудиторией.",
            "Бренд выглядит более цельным и зрелым.",
            "Материалы можно сразу использовать для роста.",
          ].map((item, index) => (
            <article key={item} className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                0{index + 1}
              </p>
              <p className="mt-4 text-base leading-7 text-slate-200">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel p-8 md:p-10">
        <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr] xl:items-end">
          <div>
            <p className="border border-indigo-300/45 bg-[#10163a] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em] text-indigo-100 inline-flex">
              Контакт
            </p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
              Если проекту нужен новый уровень подачи, Daralla может его собрать.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 xl:justify-end">
            <Link
              href="/portfolio"
              className="border-2 border-indigo-300/60 bg-[#10163a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[8px_8px_0_rgba(2,6,23,0.92)]"
            >
              Смотреть кейсы
            </Link>
            <Link
              href="/contact"
              className="border-2 border-indigo-200 bg-indigo-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[8px_8px_0_rgba(2,6,23,0.92)]"
            >
              Оставить запрос
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
