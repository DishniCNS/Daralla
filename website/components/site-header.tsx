"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/about", label: "О студии" },
  { href: "/contact", label: "Контакты" },
];

export function SiteHeader() {
  const pathname = usePathname();

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-indigo-300/70 bg-[#090d23]/95 shadow-[0_12px_0_rgba(2,6,23,0.85)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link
          href="/"
          className="border-2 border-indigo-300/70 bg-indigo-500/15 px-4 py-2 font-display text-2xl font-semibold tracking-[0.24em] text-white shadow-[6px_6px_0_rgba(2,6,23,0.9)]"
        >
          DARALLA
        </Link>

        <nav className="hidden items-center gap-2 border-2 border-indigo-300/60 bg-[#10163a] p-2 shadow-[8px_8px_0_rgba(2,6,23,0.88)] md:flex">
          {navItems.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border-indigo-200 bg-indigo-100 text-slate-950 shadow-[4px_4px_0_rgba(2,6,23,0.95)]"
                    : "border-indigo-300/25 bg-transparent text-slate-300 hover:border-indigo-200/60 hover:bg-indigo-400/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden border-2 border-indigo-200 bg-indigo-300 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[6px_6px_0_rgba(2,6,23,0.92)] transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] md:inline-flex"
        >
          Запрос
        </Link>
      </div>

      <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 pb-4 md:hidden">
        {navItems.map((item) => {
          const isActive = isActiveLink(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`border-2 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] whitespace-nowrap ${
                isActive
                  ? "border-indigo-200 bg-indigo-100 text-slate-950 shadow-[4px_4px_0_rgba(2,6,23,0.95)]"
                  : "border-indigo-300/35 bg-[#10163a] text-slate-200"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
