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
    <div className="max-w-3xl space-y-4">
      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl tracking-[-0.04em] text-white sm:text-5xl">
        {title}
      </h1>
      <p className="text-base leading-8 text-slate-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
