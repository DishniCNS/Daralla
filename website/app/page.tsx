import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems, services } from "@/lib/site-data";

const featuredProjects = portfolioItems.slice(0, 4);
const featuredServices = services.slice(0, 4);
const capabilityRibbon = [
  "Веб-разработка",
  "3D-визуализация",
  "Motion design",
  "Интерактивные концепты",
  "Продуктовые запуски",
  "Премиальная digital-подача",
];

export default function Home() {
  const heroPrimaryProject = featuredProjects[0];
  const heroSecondaryProject = featuredProjects[1];

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 shadow-[0_0_80px_rgba(95,140,255,0.12)] backdrop-blur md:px-10 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(76,105,255,0.24),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(29,205,159,0.18),_transparent_30%)]" />
        <div className="absolute inset-0 studio-grid opacity-[0.08]" />
        <div className="absolute -left-16 top-12 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl animate-drift-slow" />
        <div className="absolute bottom-10 right-8 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl animate-drift" />

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200">
              Digital Studio / С 2019 года
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Daralla собирает сайты, визуальные миры и digital-запуски,
              которые выглядят дороже и убеждают быстрее.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Мы берем на себя весь визуальный и цифровой слой вокруг бренда,
              продукта или идеи: веб, 3D, motion и интерактив. Клиент получает
              не разрозненные услуги, а сильную единую систему, готовую к
              запуску и вниманию аудитории.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {capabilityRibbon.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium tracking-[0.18em] text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Обсудить проект
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium tracking-[0.18em] text-white transition-colors duration-300 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                Смотреть портфолио
              </Link>
            </div>
          </div>

          <div className="grid gap-5 animate-fade-in-up [animation-delay:160ms]">
            <article className="glass-panel project-sheen relative overflow-hidden rounded-[1.9rem] p-4">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/80">
                <Image
                  src={heroPrimaryProject.images[0].src}
                  alt={heroPrimaryProject.images[0].alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                    {heroPrimaryProject.category}
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-white">
                    {heroPrimaryProject.name}
                  </h2>
                  <p className="mt-2 max-w-lg text-sm leading-7 text-slate-300">
                    {heroPrimaryProject.summary}
                  </p>
                </div>
              </div>
            </article>

            <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
              <div className="glass-panel rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Результат
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-display text-4xl text-white">32</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Реализованных запусков
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-4xl text-white">11</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Стран в работе
                    </p>
                  </div>
                </div>
              </div>

              <article className="glass-panel project-sheen relative overflow-hidden rounded-[1.75rem] p-4">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.3rem] border border-white/10 bg-slate-950/80">
                  <Image
                    src={heroSecondaryProject.images[0].src}
                    alt={heroSecondaryProject.images[0].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">
                      {heroSecondaryProject.category}
                    </p>
                    <p className="mt-1 font-display text-2xl text-white">
                      {heroSecondaryProject.name}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-full border border-white/10 bg-white/[0.03] py-4">
        <div className="flex w-max animate-marquee gap-4 px-4">
          {[...capabilityRibbon, ...capabilityRibbon].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-white/10 bg-slate-950/60 px-5 py-2 text-xs uppercase tracking-[0.24em] text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Возможности"
          title="Daralla закрывает цифровой образ бренда целиком"
          description="От визуальной идеи до production-ready запуска. Не набор отдельных задач, а цельная система, которая помогает бизнесу выглядеть сильнее и продавать увереннее."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service, index) => (
            <article
              key={service.title}
              className="glass-panel rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  {service.tag}
                </p>
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.03em] text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {service.description}
              </p>
              <div className="mt-6 space-y-2">
                {service.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Что получает клиент"
          title="Не просто красивый экран, а рабочую систему для запуска"
          description="Каждый проект у Daralla должен быть понятен бизнесу, убедителен для клиента и визуально сильнее конкурентов."
        />
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr_0.95fr]">
          <article className="glass-panel rounded-[1.75rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
              01 / Позиционирование
            </p>
            <h3 className="mt-4 font-display text-3xl text-white">
              Смысл и подача собираются вместе с самого начала
            </h3>
            <p className="mt-4 text-sm leading-8 text-slate-400">
              Мы продумываем, как бизнес выглядит, как он объясняет ценность и
              какое впечатление оставляет у потенциального клиента в первые
              секунды.
            </p>
          </article>
          <article className="glass-panel rounded-[1.75rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
              02 / Production
            </p>
            <h3 className="mt-4 font-display text-3xl text-white">
              Визуалы, интерфейсы и motion работают как единый язык
            </h3>
            <p className="mt-4 text-sm leading-8 text-slate-400">
              Сайт, анимация, визуальные материалы и кейсы не спорят между
              собой, а усиливают друг друга.
            </p>
          </article>
          <article className="glass-panel rounded-[1.75rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
              03 / Launch
            </p>
            <h3 className="mt-4 font-display text-3xl text-white">
              Готовый public-facing результат, который можно показывать сразу
            </h3>
            <p className="mt-4 text-sm leading-8 text-slate-400">
              Daralla собирает презентабельную digital-экосистему, которую не
              стыдно отправить инвестору, партнеру или клиенту.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Избранные проекты"
          title="Портфолио с настоящими визуалами, а не с пустыми заглушками"
          description="Каждый кейс показывает не только название и описание, но и визуальный язык проекта: интерфейсы, сцены, motion-кадры и атмосферу продукта."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.name}
              href={`/portfolio/${project.slug}`}
              className={`glass-panel project-sheen group relative overflow-hidden rounded-[1.85rem] p-4 transition-transform duration-300 hover:-translate-y-1 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`grid gap-5 ${
                  index === 0 ? "lg:grid-cols-[1.2fr_0.8fr]" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/80">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-col justify-between gap-6 p-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                      {project.category} / {project.year}
                    </p>
                    <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-slate-400">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="inline-flex text-sm uppercase tracking-[0.22em] text-cyan-200 transition-colors hover:text-white"
        >
          Все проекты
        </Link>
      </section>
    </div>
  );
}
