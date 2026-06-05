type SectionCardProps = {
  title: string;
  description: string;
  href?: string;
};

export function SectionCard({
  title,
  description,
}: SectionCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-zinc-600">
      <h2 className="mb-2 text-xl font-bold">
        {title}
      </h2>

      <p className="text-sm text-zinc-400">
        {description}
      </p>
    </div>
  );
}