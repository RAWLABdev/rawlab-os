type ProjectCardProps = {
  name: string;
  type: string;
  description: string;
  status: string;
};

export function ProjectCard({
  name,
  type,
  description,
  status,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {name}
        </h2>

        <span className="text-xs uppercase text-zinc-500">
          {status}
        </span>
      </div>

      <p className="mb-2 text-sm text-zinc-500">
        {type}
      </p>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}