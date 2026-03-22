"use client";

import { useState, useTransition, type FormEvent } from "react";

const projectTypes = [
  "Веб-разработка",
  "3D-визуализация",
  "Motion graphics",
  "Разработка игр",
] as const;

const initialFormState = {
  clientName: "",
  email: "",
  projectType: projectTypes[0],
  description: "",
  budget: "",
};

const studioEmail = "hello@daralla.studio";

function buildRequestSummary(formState: typeof initialFormState) {
  return [
    "Запрос на проект Daralla",
    "",
    `Имя клиента: ${formState.clientName}`,
    `Email: ${formState.email}`,
    `Тип проекта: ${formState.projectType}`,
    `Бюджет: ${formState.budget}`,
    "",
    "Описание проекта:",
    formState.description,
  ].join("\n");
}

function buildMailtoUrl(formState: typeof initialFormState) {
  const subject = `Запрос на проект Daralla: ${formState.projectType}`;
  const body = buildRequestSummary(formState);

  return `mailto:${studioEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [feedback, setFeedback] = useState<{
    tone: "success" | "error";
    message: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  function updateField(field: keyof typeof initialFormState, value: string) {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    startTransition(() => {
      try {
        const requestSummary = buildRequestSummary(formState);
        const mailtoUrl = buildMailtoUrl(formState);

        if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
          void navigator.clipboard.writeText(requestSummary).catch(() => {});
        }

        window.location.href = mailtoUrl;
        setFormState(initialFormState);
        setFeedback({
          tone: "success",
          message:
            "Почтовое приложение должно открыться с уже подготовленным брифом. Текст запроса также был скопирован в буфер обмена, если устройство это поддерживает.",
        });
      } catch (error) {
        setFeedback({
          tone: "error",
          message:
            error instanceof Error
              ? error.message
              : "Не удалось подготовить письмо на этом устройстве.",
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-3">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-indigo-100">
            Имя
          </span>
          <input
            type="text"
            name="clientName"
            value={formState.clientName}
            onChange={(event) => updateField("clientName", event.target.value)}
            placeholder="Ваше имя"
            className="w-full border-2 border-indigo-300/40 bg-[#0b1029] px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-indigo-200"
            required
          />
        </label>

        <label className="space-y-3">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-indigo-100">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
            className="w-full border-2 border-indigo-300/40 bg-[#0b1029] px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-indigo-200"
            required
          />
        </label>
      </div>

      <div className="mt-6 grid gap-6">
        <label className="space-y-3">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-indigo-100">
            Тип проекта
          </span>
          <select
            name="projectType"
            value={formState.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className="w-full border-2 border-indigo-300/40 bg-[#0b1029] px-4 py-4 text-white outline-none focus:border-indigo-200"
          >
            {projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>
                {projectType}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-3">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-indigo-100">
            Описание проекта
          </span>
          <textarea
            name="description"
            rows={8}
            value={formState.description}
            onChange={(event) => updateField("description", event.target.value)}
            placeholder="Опишите продукт, аудиторию, задачу, желаемый результат и сроки."
            className="w-full border-2 border-indigo-300/40 bg-[#0b1029] px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-indigo-200"
            required
          />
        </label>

        <label className="space-y-3">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-indigo-100">
            Бюджет
          </span>
          <input
            type="text"
            name="budget"
            value={formState.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            placeholder="Например: $15k - $30k"
            className="w-full border-2 border-indigo-300/40 bg-[#0b1029] px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-indigo-200"
            required
          />
        </label>
      </div>

      {feedback ? (
        <div
          className={`mt-6 border-2 px-4 py-4 text-sm leading-7 ${
            feedback.tone === "success"
              ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-100"
              : "border-rose-300/40 bg-rose-300/10 text-rose-100"
          }`}
        >
          {feedback.message}
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="border-2 border-indigo-200 bg-indigo-300 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[8px_8px_0_rgba(2,6,23,0.92)] transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] disabled:opacity-60"
        >
          {isPending ? "Подготовка..." : "Открыть письмо с запросом"}
        </button>

        <div className="border border-indigo-300/35 bg-[#0c1231] px-4 py-4 text-sm leading-6 text-slate-300">
          Бриф сразу формируется в готовое письмо. Это удобно и на компьютере, и
          на телефоне.
        </div>
      </div>
    </form>
  );
}
