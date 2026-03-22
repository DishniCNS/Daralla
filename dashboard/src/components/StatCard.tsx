type StatCardProps = {
  label: string;
  value: string;
  tone: "neutral" | "info" | "success" | "warning";
};

const toneClasses: Record<StatCardProps["tone"], string> = {
  neutral: "border-white/10 bg-white/[0.04] text-slate-100",
  info: "border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-50",
  success: "border-emerald-300/20 bg-emerald-300/[0.08] text-emerald-50",
  warning: "border-amber-300/20 bg-amber-300/[0.08] text-amber-50",
};

export function StatCard({ label, value, tone }: StatCardProps) {
  return (
    <div
      className={`rounded-[22px] border px-4 py-4 shadow-[0_18px_40px_rgba(2,6,23,0.2)] ${toneClasses[tone]}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
        {label}
      </p>
      <p className="mt-3 font-display text-2xl tracking-[-0.04em]">{value}</p>
    </div>
  );
}
