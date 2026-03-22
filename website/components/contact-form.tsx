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

  function updateField(
    field: keyof typeof initialFormState,
    value: string,
  ) {
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
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-3">
          <span className="text-sm uppercase tracking-[0.18em] text-slate-400">
            Имя
          </span>
          <input
            type="text"
            name="clientName"
            value={formState.clientName}
            onChange={(event) => updateField("clientName", event.target.value)}
            placeholder="Ваше имя"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/40"
            required
          />
        </label>
        <label className="space-y-3">
          <span className="text-sm uppercase tracking-[0.18em] text-slate-400">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/40"
            required
          />
        </label>
      </div>

      <label className="space-y-3">
        <span className="text-sm uppercase tracking-[0.18em] text-slate-400">
          Тип проекта
        </span>
        <select
          name="projectType"
          value={formState.projectType}
          onChange={(event) => updateField("projectType", event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition-colors focus:border-cyan-300/40"
        >
          {projectTypes.map((projectType) => (
            <option key={projectType} value={projectType}>
              {projectType}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-3">
        <span className="text-sm uppercase tracking-[0.18em] text-slate-400">
          Описание проекта
        </span>
        <textarea
          name="description"
          rows={7}
          value={formState.description}
          onChange={(event) => updateField("description", event.target.value)}
          placeholder="Опишите продукт, аудиторию, цели и желаемые сроки."
          className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/40"
          required
        />
      </label>

      <label className="space-y-3">
        <span className="text-sm uppercase tracking-[0.18em] text-slate-400">
          Бюджет
        </span>
        <input
          type="text"
          name="budget"
          value={formState.budget}
          onChange={(event) => updateField("budget", event.target.value)}
          placeholder="Например: $15k - $30k"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300/40"
          required
        />
      </label>

      {feedback ? (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm leading-7 ${
            feedback.tone === "success"
              ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
              : "border-rose-300/20 bg-rose-300/10 text-rose-100"
          }`}
        >
          {feedback.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Подготовка..." : "Открыть письмо с запросом"}
      </button>
    </form>
  );
}
