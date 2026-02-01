interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
}

export function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-serif italic text-charcoal">{title}</h2>
      {eyebrow && (
        <p className="text-sm text-charcoal/40 font-mono uppercase tracking-wider">
          {eyebrow}
        </p>
      )}
    </div>
  );
}
