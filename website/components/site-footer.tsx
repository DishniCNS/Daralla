import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/about", label: "О студии" },
  { href: "/contact", label: "Контакты" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-indigo-300/60 bg-[#090d23]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:px-10">
        <div className="border-2 border-indigo-300/55 bg-[#10163a] p-6 shadow-[10px_10px_0_rgba(2,6,23,0.88)]">
          <p className="font-display text-2xl font-semibold tracking-[0.24em] text-white">
            DARALLA
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
            Креативная технологическая студия для брендов, которым нужен
            сильный digital-образ, понятная подача и визуальная система
            уровня запуска продукта.
          </p>
          <a
            href="mailto:hello@daralla.studio"
            className="mt-5 inline-flex border-2 border-indigo-200 bg-indigo-300 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[6px_6px_0_rgba(2,6,23,0.92)]"
          >
            hello@daralla.studio
          </a>
        </div>

        <div className="flex flex-wrap content-start gap-3">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-2 border-indigo-300/45 bg-[#10163a] px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-200 shadow-[6px_6px_0_rgba(2,6,23,0.88)] transition-colors hover:bg-indigo-400/12 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
