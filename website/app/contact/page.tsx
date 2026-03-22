import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Контакты | Daralla",
  description: "Связаться с Daralla и отправить запрос на новый проект.",
};

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-24">
      <SectionHeading
        eyebrow="Контакты"
        title="Форма запроса, которая сразу превращает идею в понятный студии бриф"
        description="Расскажите, что вы хотите запустить, кому это нужно и какой результат должен получиться. Daralla соберет из этого рабочий запрос."
      />

      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <aside className="glass-panel studio-grid p-8 md:p-10">
          <p className="border border-indigo-300/45 bg-[#10163a] px-3 py-2 text-xs font-medium uppercase tracking-[0.28em] text-indigo-100 inline-flex">
            Контакт со студией
          </p>

          <div className="relative mt-6 aspect-[16/12] overflow-hidden border-2 border-indigo-300/55 bg-[#0b1029]">
            <Image
              src="/portfolio/luma-core-01.svg"
              alt="Контактный блок Daralla"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-6 grid gap-4">
            {[
              ["Почта", "hello@daralla.studio"],
              ["Формат", "Сразу открывается письмо с готовым брифом"],
              ["Фокус", "Веб, CGI, motion и интерактивные запуски"],
              ["Ответ", "Обычно в течение 48 часов"],
            ].map(([label, text]) => (
              <div key={label} className="border border-indigo-300/35 bg-[#0c1231] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
                  {label}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border border-indigo-300/35 bg-[#0c1231] p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-indigo-100">
              Что лучше указать
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>Тип бизнеса и контекст запуска</li>
              <li>Что именно надо сделать сейчас</li>
              <li>Каким должен быть результат</li>
              <li>Ориентир по срокам и бюджету</li>
            </ul>
          </div>
        </aside>

        <ContactForm />
      </section>
    </div>
  );
}
