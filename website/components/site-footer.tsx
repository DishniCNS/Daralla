import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/about", label: "О студии" },
  { href: "/contact", label: "Контакты" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.24em] text-white">
            DARALLA
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
            Креативная технологическая студия для брендов, которым нужен
            сильный digital-образ, понятная подача и визуальная система
            уровня запуска продукта.
          </p>
          <a
            href="mailto:hello@daralla.studio"
            className="mt-5 inline-flex text-sm uppercase tracking-[0.18em] text-cyan-200 transition-colors hover:text-white"
          >
            hello@daralla.studio
          </a>
        </div>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
