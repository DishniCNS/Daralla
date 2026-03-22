import type { Metadata } from "next";
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
        <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
            Контакт со студией
          </p>
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
        </aside>

        <ContactForm />
      </div>
    </div>
  );
}
