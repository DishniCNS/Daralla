type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-5xl space-y-5">
      <div className="flex items-center gap-4">
        <span className="h-px w-12 bg-indigo-200/50" />
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-indigo-100">
          {eyebrow}
        </p>
      </div>
      <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
