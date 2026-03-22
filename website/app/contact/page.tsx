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
    <div className="space-y-16 pb-24">
      <SectionHeading
        eyebrow="Контакты"
        title="Расскажите, что вы хотите запустить"
        description="Опишите задачу, цель и бюджет. Daralla подготовит структурированный запрос, который можно сразу отправить с компьютера или телефона."
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="glass-panel studio-grid rounded-[1.75rem] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
            Контакт со студией
          </p>
          <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950/70">
            <Image
              src="/portfolio/luma-core-01.svg"
              alt="Визуальный стиль Daralla"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
          </div>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Почта
              </p>
              <p className="mt-2 text-lg text-white">hello@daralla.studio</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Как это работает
              </p>
              <p className="mt-2 text-lg text-white">
                Сразу откроется готовое письмо с вашим брифом
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Предпочтительные проекты
              </p>
              <p className="mt-2 text-lg text-white">
                Сайты продуктов, digital-кампании, визуальные и immersive-решения
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Время ответа
              </p>
              <p className="mt-2 text-lg text-white">Обычно в течение 48 часов</p>
            </div>
          </div>

          <div className="mt-8 rounded-[1.35rem] border border-white/10 bg-slate-950/60 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
              Что лучше указать
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>Цель проекта и тип бизнеса</li>
              <li>Что именно нужно сделать сейчас</li>
              <li>Какой результат должен получить клиент</li>
              <li>Ориентир по срокам и бюджету</li>
            </ul>
          </div>
        </aside>

        <ContactForm />
      </div>
    </div>
  );
}
