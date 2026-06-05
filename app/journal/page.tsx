export default function JournalPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        Journal
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="font-bold">Build</h2>
          <ul>
            <li>Started RAWLAB OS</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Move</h2>
          <ul>
            <li>Climbing session</li>
          </ul>
        </div>
      </div>
    </main>
  );
}