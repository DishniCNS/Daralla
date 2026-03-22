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
    <div className="space-y-16 pb-24">
      <Link
        href="/portfolio"
        className="inline-flex text-sm uppercase tracking-[0.22em] text-cyan-200 transition-colors hover:text-white"
      >
        Назад в портфолио
      </Link>

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(76,105,255,0.24),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(29,205,159,0.18),_transparent_30%)]" />
        <div className="absolute inset-0 studio-grid opacity-[0.08]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                {project.category} / {project.year}
              </p>
              <h1 className="mt-4 font-display text-5xl tracking-[-0.05em] text-white sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                {project.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="glass-panel rounded-[1.5rem] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Задача клиента
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {project.clientScenario}
                </p>
              </article>
              <article className="glass-panel rounded-[1.5rem] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Визуальная концепция
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {project.visualConcept}
                </p>
              </article>
            </div>
          </div>

          <article className="glass-panel relative overflow-hidden rounded-[1.85rem] p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/80">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="glass-panel rounded-[1.75rem] p-8">
          <h2 className="font-display text-3xl tracking-[-0.04em] text-white">
            Описание проекта
          </h2>
          <p className="mt-4 text-sm leading-8 text-slate-400">
            {project.description}
          </p>
        </article>

        <article className="glass-panel rounded-[1.75rem] p-8">
          <h2 className="font-display text-3xl tracking-[-0.04em] text-white">
            Использованные технологии
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Что было сделано
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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
        </article>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
            Галерея
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-white">
            Визуалы проекта
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="glass-panel overflow-hidden rounded-[1.85rem] p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/80">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover"
              />
            </div>
          </article>

          <div className="grid gap-6">
            <article className="glass-panel overflow-hidden rounded-[1.85rem] p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/80">
                <Image
                  src={project.images[1].src}
                  alt={project.images[1].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            <article className="glass-panel rounded-[1.75rem] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Почему это работает
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-300">
                В кейсе сочетаются визуальная цельность, технологическая
                реализация и ясная подача ценности. Именно эта комбинация делает
                проект убедительным и для аудитории, и для бизнеса.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
