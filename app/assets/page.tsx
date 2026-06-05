import assets from "@/src/content/assets/assets.json";

export default function AssetsPage() {
  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-10 text-5xl font-bold">
        Assets
      </h1>

      <div className="grid gap-4">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="rounded-xl border border-zinc-800 p-6"
          >
            <h2 className="text-xl font-bold">
              {asset.title}
            </h2>

            <p className="mt-2 text-zinc-400">
              {asset.category}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {asset.date}
            </p>

            <p className="mt-4">
              {asset.notes}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}