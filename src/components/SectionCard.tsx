import Link from "next/link";

type SectionCardProps = {
  title: string;
  description: string;
  href?: string;
};

export function SectionCard({
  title,
  description,
  href,
}: SectionCardProps) {
  const content = (
    <div className="rounded-2xl border border-zinc-800 p-6 transition hover:border-zinc-600">
      <h2 className="mb-2 text-xl font-bold">
        {title}
      </h2>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );

  if (!href) return content;

  return <Link href={href}>{content}</Link>;
}