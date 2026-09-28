export default function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-neutral-500">Good afternoon</p>
        <h1 className="text-2xl font-semibold">Your Budget</h1>
      </div>

      <section className="rounded-2xl bg-emerald-600 p-6 text-white">
        <p className="text-sm text-emerald-100">Available to spend</p>

        <p className="mt-2 text-4xl font-bold">$65.00</p>

        <p className="mt-3 text-sm text-emerald-100">
          You're on track this month.
        </p>
      </section>

      <section className="rounded-2xl border border-neutral-200 p-5">
        <p className="text-sm text-neutral-500">Safe daily spending</p>

        <div className="mt-2 flex items-end gap-1">
          <p className="text-3xl font-semibold">$10</p>
          <p className="pb-1 text-sm text-neutral-500">/ day</p>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">This month</h2>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <p className="text-sm text-neutral-500">Income</p>
            <p className="mt-1 text-xl font-semibold">$220</p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <p className="text-sm text-neutral-500">Spent</p>
            <p className="mt-1 text-xl font-semibold">$105</p>
          </div>
        </div>
      </section>
    </div>
  );
}