import { SectionCard } from "@/src/components/SectionCard";

const stats = [
  { label: "Active Projects", value: "2" },
  { label: "Assets Logged", value: "7+" },
  { label: "Growth Logs", value: "3" },
  { label: "Meta Verified", value: "Active" },
];

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
            Personal operating system for building, moving, exploring and
            tracking growth across RAWLAB, GitHub, Instagram and real life.
          </p>
        </div>

        <section className="mb-16 grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-800 p-5"
            >
              <p className="text-sm text-zinc-500">{item.label}</p>
              <p className="mt-2 text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <SectionCard title="BUILD" description="Projects, products and experiments." href="/projects" />
          <SectionCard title="MOVE" description="Climbing, training and movement." href="/climbing" />
          <SectionCard title="EXPLORE" description="Journal, notes and ideas." href="/journal" />
          <SectionCard title="GROW" description="Metrics, goals and progress." href="/growth" />
          <SectionCard title="ASSETS" description="Photos, videos and content library." href="/assets" />
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 p-6">
            <h2 className="mb-4 text-2xl font-bold">Current Focus</h2>

            <ul className="space-y-3 text-zinc-400">
              <li>→ RAWLAB OS</li>
              <li>→ RAWLAB</li>
              <li>→ Instagram Growth Experiment</li>
              <li>→ Job Search / Opportunities</li>
              <li>→ Climbing consistency</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h2 className="mb-4 text-2xl font-bold">System Loop</h2>

            <ul className="space-y-3 text-zinc-400">
              <li>Life → Assets</li>
              <li>Assets → Journal</li>
              <li>Journal → GitHub</li>
              <li>GitHub → RAWLAB</li>
              <li>RAWLAB → Opportunities</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
