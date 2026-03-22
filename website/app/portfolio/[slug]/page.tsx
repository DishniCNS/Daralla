import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/lib/site-data";

type PortfolioProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return portfolioItems.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Проект не найден | Daralla",
    };
  }

  return {
    title: `${project.name} | Daralla`,
    description: project.description,
  };
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-20 pb-24">
      <Link
        href="/portfolio"
        className="inline-flex border-2 border-indigo-300/55 bg-[#10163a] px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-100 shadow-[6px_6px_0_rgba(2,6,23,0.92)]"
      >
        Назад в портфолио
      </Link>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="glass-panel studio-grid p-8 md:p-10">
          <p className="border border-indigo-300/45 bg-[#10163a] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em] text-indigo-100 inline-flex">
            {project.category} / {project.year}
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-white md:text-7xl">
            {project.name}
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            {project.description}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="border border-indigo-300/35 bg-[#0c1231] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                Сценарий клиента
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.clientScenario}
              </p>
            </article>
            <article className="border border-indigo-300/35 bg-[#0c1231] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                Визуальная идея
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.visualConcept}
              </p>
            </article>
          </div>
        </article>

        <article className="glass-panel p-4">
          <div className="relative aspect-[16/12] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029]">
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              fill
              priority
              className="object-cover"
            />
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.74fr_0.26fr]">
        <article className="glass-panel p-4 md:p-5">
          <div className="relative aspect-[16/9] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029]">
            <Image
              src={project.images[1].src}
              alt={project.images[1].alt}
              fill
              className="object-cover"
            />
          </div>
        </article>

        <div className="grid gap-6">
          <article className="glass-panel p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
              Технологии
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-indigo-300/35 bg-[#0c1231] px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-100"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>

          <article className="glass-panel p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
              Что сделано
            </p>
            <div className="mt-5 space-y-3">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="border border-indigo-300/35 bg-[#0c1231] px-4 py-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <article className="glass-panel p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
            Результат
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white">
            Проект выглядит как законченная публичная система
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Важен не только визуал, но и то, как он соединяется с задачей
            бизнеса. Поэтому кейс упакован как ясная и убедительная история.
          </p>
        </article>

        <article className="glass-panel p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
            Подача
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white">
            Визуальный язык удерживает внимание без лишнего шума
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Композиция, типографика, сцены и детали работают как единая
            драматургия, а не как набор декоративных кадров.
          </p>
        </article>

        <article className="glass-panel p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
            Контекст
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white">
            Именно так бренд получает форму, которую можно показывать рынку
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Daralla делает кейсы и сайты не для архива, а для реального запуска,
            роста и принятия решений.
          </p>
        </article>
      </section>
    </div>
  );
}
