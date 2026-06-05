import { SectionCard } from "@/src/components/SectionCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            RAWLAB SYSTEM
          </p>

          <h1 className="mb-6 text-6xl font-bold">RAWLAB OS</h1>

          <p className="max-w-2xl text-lg text-zinc-400">
            A personal operating system for building, moving, exploring and
            documenting the process.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SectionCard
            title="BUILD"
            description="Projects, products and experiments."
            href="/projects"
          />

          <SectionCard
            title="MOVE"
            description="Climbing, training and movement."
            href="/climbing"
          />

          <SectionCard
            title="EXPLORE"
            description="Journal, notes and ideas."
            href="/journal"
          />

          <SectionCard
            title="GROW"
            description="Metrics, goals and progress."
            href="/growth"
          />
        </div>

        <div className="mt-20">
          <h2 className="mb-6 text-2xl font-bold">Current Focus</h2>

          <ul className="space-y-3 text-zinc-400">
            <li>→ ENRA</li>
            <li>→ RAWLAB</li>
            <li>→ Climbing</li>
            <li>→ Job Search</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
