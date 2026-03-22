import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "О студии | Daralla",
  description: "О студии Daralla и подходе к созданию современных digital-проектов.",
};

const principles = [
  {
    title: "Сначала идея, потом интерфейс",
    description:
      "Мы начинаем с интонации, смысла и бизнес-задачи, а уже потом строим интерфейсы и визуальную систему.",
  },
  {
    title: "Проработка на каждом уровне",
    description:
      "Дизайн, код, анимация и производительность рассматриваются как единая связанная система.",
  },
  {
    title: "Небольшая команда, сильное исполнение",
    description:
      "Компактный формат работы держит коммуникацию прямой, а результат цельным и визуально точным.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      <SectionHeading
        eyebrow="О студии"
        title="Студия для запусков, которым нужен уровень"
        description="Daralla — креативная технологическая студия, которая помогает современным брендам, продуктам и командам выглядеть убедительно в digital-среде."
      />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm leading-8 text-slate-300">
            Наш процесс идет от позиционирования и концепции к прототипу, затем
            к визуальной системе и production-ready реализации. В итоге клиент
            получает продукт, который выглядит собранно, технологично и
            современно.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-display text-4xl text-white">5</p>
              <p className="mt-2 text-sm text-slate-400">
                Ключевых дисциплин
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-display text-4xl text-white">48h</p>
              <p className="mt-2 text-sm text-slate-400">
                Средний концепт-спринт
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="font-display text-4xl text-white">100%</p>
              <p className="mt-2 text-sm text-slate-400">
                Индивидуальная работа
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.92),rgba(5,10,20,0.95))] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
            Подход
          </p>
          <ol className="mt-6 space-y-6">
            <li className="border-l border-white/10 pl-5">
              <p className="font-display text-2xl text-white">
                01 / Исследование
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Определяем историю бренда, аудиторию и направление взаимодействия.
              </p>
            </li>
            <li className="border-l border-white/10 pl-5">
              <p className="font-display text-2xl text-white">02 / Дизайн</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Собираем выразительный арт-дирекшн, интерфейсную систему и motion.
              </p>
            </li>
            <li className="border-l border-white/10 pl-5">
              <p className="font-display text-2xl text-white">03 / Релиз</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Выпускаем быстрый и готовый к запуску продукт с полным набором визуальных материалов.
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
