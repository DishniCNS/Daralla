import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { portfolioItems, services } from "@/lib/site-data";

const featuredProjects = portfolioItems.slice(0, 4);

const manifestoPoints = [
  "Стратегия и позиционирование",
  "Веб-система и UI",
  "3D и motion-подача",
  "Материалы для запуска",
];

const processSteps = [
  {
    step: "01",
    title: "Считываем бизнес и контекст",
    description:
      "Разбираем, что именно должен почувствовать клиент, инвестор или партнер после первого касания с брендом.",
  },
  {
    step: "02",
    title: "Собираем визуальную систему",
    description:
      "Формируем единый язык из графики, интерфейсов, CGI, motion и контентной иерархии.",
  },
  {
    step: "03",
    title: "Выпускаем launch-ready результат",
    description:
      "Клиент получает не набор файлов, а материал, который уже можно показывать рынку и использовать в росте.",
  },
];

export default function Home() {
  const heroProject = featuredProjects[0];
  const supportingProject = featuredProjects[2];

  return (
    <div className="space-y-24 pb-24">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="glass-panel studio-grid relative overflow-hidden p-8 md:p-10 xl:p-12">
          <div className="absolute right-0 top-0 h-24 w-24 bg-indigo-300" />
          <div className="absolute bottom-0 left-0 h-20 w-20 border-r-2 border-t-2 border-indigo-200/80" />

          <div className="relative max-w-4xl">
            <p className="inline-flex border border-indigo-300/50 bg-[#111843] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em] text-indigo-100">
              Daralla / digital studio / launch systems
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-6xl xl:text-8xl">
              СТУДИЯ,
              <br />
              КОТОРАЯ
              <br />
              ДЕЛАЕТ БИЗНЕС
              <br />
              ВИДИМЫМ.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Daralla собирает для брендов и продуктов цельную цифровую подачу:
              сайт, визуальную систему, 3D, motion и материалы для запуска.
              Все должно работать как один сильный публичный образ.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:max-w-3xl">
              {manifestoPoints.map((item) => (
                <div
                  key={item}
                  className="border border-indigo-300/40 bg-[#0c1231] px-4 py-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-100 shadow-[6px_6px_0_rgba(2,6,23,0.88)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="border-2 border-indigo-200 bg-indigo-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[8px_8px_0_rgba(2,6,23,0.92)] transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px]"
              >
                Обсудить проект
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-indigo-300/60 bg-[#10163a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[8px_8px_0_rgba(2,6,23,0.92)] transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px]"
              >
                Смотреть кейсы
              </Link>
            </div>
          </div>
        </article>

        <div className="grid gap-6">
          <article className="glass-panel project-sheen p-4">
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029]">
              <Image
                src={heroProject.images[0].src}
                alt={heroProject.images[0].alt}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(6,8,22,0.96))] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-indigo-100">
                  {heroProject.category} / {heroProject.year}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-white">
                  {heroProject.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {heroProject.summary}
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
            <article className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-indigo-100">
                Результат
              </p>
              <div className="mt-6 grid grid-cols-2 gap-5">
                <div className="border border-indigo-300/35 bg-[#0c1231] p-4">
                  <p className="font-display text-4xl font-semibold text-white">32</p>
                  <p className="mt-2 text-sm text-slate-300">Запуска и релиза</p>
                </div>
                <div className="border border-indigo-300/35 bg-[#0c1231] p-4">
                  <p className="font-display text-4xl font-semibold text-white">11</p>
                  <p className="mt-2 text-sm text-slate-300">Рынков и ниш</p>
                </div>
              </div>
            </article>

            <article className="glass-panel p-4">
              <div className="relative aspect-[16/10] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029]">
                <Image
                  src={supportingProject.images[0].src}
                  alt={supportingProject.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                    Смежный кейс
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white">
                    {supportingProject.name}
                  </p>
                </div>
                <p className="max-w-[10rem] text-right text-sm leading-6 text-slate-300">
                  {supportingProject.category}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <article className="glass-panel p-8 md:p-10">
          <p className="border border-indigo-300/45 bg-[#10163a] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em] text-indigo-100 inline-flex">
            Манифест студии
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
            НЕ ДЕЛАЕМ
            <br />
            «ПРОСТО САЙТ».
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            Даралла нужна бизнесу тогда, когда бренду уже мало просто
            присутствовать в интернете. Нужен характер, масштаб и система,
            которая будет убеждать визуально.
          </p>
        </article>

        <div className="grid gap-5 md:grid-cols-3">
          {processSteps.map((item) => (
            <article key={item.step} className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-indigo-100">
                {item.step}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Направления"
          title="Daralla работает на стыке визуала, интерфейса и технологической подачи"
          description="Каждое направление отдельно полезно. Вместе они дают бизнесу публичный образ, который выглядит собранно, современно и дорого."
        />

        <div className="grid gap-5 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="glass-panel p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.24em] text-indigo-100">
                  {service.tag}
                </p>
                <div className="h-4 w-4 bg-indigo-300" />
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-none text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
              <div className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <div
                    key={point}
                    className="border border-indigo-300/35 bg-[#0c1231] px-4 py-4 text-sm leading-6 text-slate-200"
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
          eyebrow="Избранные кейсы"
          title="Портфолио как витрина визуального мышления, а не как список работ"
          description="Каждый проект здесь показывает не только название, но и пример языка: композиции, сцены, интерфейсные решения и характер бренда."
        />

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Link
            href={`/portfolio/${featuredProjects[0].slug}`}
            className="glass-panel project-sheen group p-4"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029]">
              <Image
                src={featuredProjects[0].images[0].src}
                alt={featuredProjects[0].images[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-[0.6fr_0.4fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                  {featuredProjects[0].category} / {featuredProjects[0].year}
                </p>
                <h3 className="mt-3 font-display text-4xl font-semibold leading-none text-white">
                  {featuredProjects[0].name}
                </h3>
              </div>
              <p className="text-sm leading-7 text-slate-300">
                {featuredProjects[0].summary}
              </p>
            </div>
          </Link>

          <div className="grid gap-6">
            {featuredProjects.slice(1).map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="glass-panel project-sheen group grid gap-4 p-4 md:grid-cols-[0.48fr_0.52fr]"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029]">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                      {project.category}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {project.summary}
                    </p>
                  </div>
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
