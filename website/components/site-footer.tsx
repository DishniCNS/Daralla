import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/about", label: "О студии" },
  { href: "/contact", label: "Контакты" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-indigo-200/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:px-10">
        <div className="max-w-md">
          <p className="font-display text-2xl font-semibold tracking-[0.18em] text-white">
            DARALLA
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Креативная технологическая студия для брендов, которым нужен
            сильный digital-образ, понятная подача и визуальная система
            уровня запуска продукта.
          </p>
          <a
            href="mailto:hello@daralla.studio"
            className="mt-5 inline-flex rounded-full border border-indigo-200/20 px-4 py-2 text-sm uppercase tracking-[0.16em] text-indigo-100 hover:border-indigo-200/40 hover:text-white"
          >
            hello@daralla.studio
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-indigo-200/12 px-4 py-2 text-sm uppercase tracking-[0.16em] text-slate-300 hover:border-indigo-200/30 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
