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
    <header className="sticky top-0 z-50 border-b border-indigo-200/10 bg-[#090b17]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-10">
        <Link href="/" className="font-display text-2xl font-semibold tracking-[0.18em] text-white">
          DARALLA
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-indigo-200/10 bg-[#0d1130]/85 px-2 py-2 md:flex">
          {navItems.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm uppercase tracking-[0.16em] ${
                  isActive
                    ? "bg-[#f3f4fb] text-slate-950"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-indigo-200/20 bg-[#f3f4fb] px-4 py-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-950 md:inline-flex"
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
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] whitespace-nowrap ${
                isActive
                  ? "border-[#f3f4fb] bg-[#f3f4fb] text-slate-950"
                  : "border-indigo-200/10 bg-[#0d1130] text-slate-300"
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
