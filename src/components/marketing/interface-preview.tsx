import { formatDemoMoney, type LandingDemo } from "./demo-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/ui/reveal";

export function InterfacePreview({ demo }: { demo: LandingDemo }) {
  return (
    <section id="preview" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Interface Simplicity"
          title="Clear, honest, and calm by design."
          subtitle="No unsolicited financial warnings. No AI robo-coaches. Just your plan and honest numbers."
        />
      </Reveal>

      <Reveal
        variant="scale-in"
        delay={150}
        className="mt-12 rounded-3xl border border-border bg-background-soft p-3 sm:p-6 md:p-8"
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-xs font-bold text-foreground sm:size-10 sm:text-sm">
              BF
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-foreground sm:text-base">
                {demo.period}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                Example Monthly Allocation
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden rounded-full bg-primary-soft px-3 py-1.5 text-xs font-medium text-foreground sm:inline-flex">
              Example Cycle
            </span>
            <span className="shrink-0 rounded-full bg-primary px-2.5 py-1.5 text-xs font-semibold text-foreground sm:px-4">
              + Add Expense
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-surface p-5 shadow-card sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-text">
                <span className="size-1.5 rounded-full bg-primary" />
                Remaining Monthly Budget
              </p>
              <p className="mt-1 text-3xl font-bold text-foreground sm:text-4xl">
                {formatDemoMoney(demo.remaining)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Available for remaining month
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Monthly Budget</p>
              <p className="mt-1 text-xl font-bold text-foreground">
                {formatDemoMoney(demo.budget)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {formatDemoMoney(demo.assigned, 0)} assigned (
                {demo.assignedPercent}%)
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">Spent So Far</p>
              <p className="mt-1 text-xl font-bold text-foreground">
                {formatDemoMoney(demo.spent)}
              </p>
              <p className="mt-1 text-xs text-primary-text">
                {demo.spentPercent}% utilized
              </p>
            </div>
          </div>

          <div className="mt-5 h-2 w-full rounded-full bg-border-strong">
            <div
              className="reveal-bar h-2 rounded-full bg-primary"
              style={{ width: `${demo.spentPercent}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{formatDemoMoney(demo.spent, 0)} spent</span>
            <span>{formatDemoMoney(demo.remaining, 0)} remaining</span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">
            Category Allocations
          </p>
          <p className="text-xs text-muted-foreground">
            {demo.categories.length} envelopes defined
          </p>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {demo.categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-border bg-surface p-5 transition duration-300 ease-out hover:border-border-strong hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary-soft text-base">
                    {category.emoji}
                  </span>
                  <p className="text-sm font-semibold text-foreground">
                    {category.name}
                  </p>
                </div>
                <span
                  className={
                    category.remaining <= 0
                      ? "text-sm font-semibold text-muted-foreground"
                      : "text-sm font-semibold text-primary-text"
                  }
                >
                  {category.remaining <= 0
                    ? "Fully spent"
                    : `${formatDemoMoney(category.remaining, 0)} left`}
                </span>
              </div>

              <div className="mt-3 h-2 w-full rounded-full bg-border">
                <div
                  className={
                    category.remaining <= 0
                      ? "reveal-bar h-2 rounded-full bg-subtle-foreground"
                      : "reveal-bar h-2 rounded-full bg-primary"
                  }
                  style={{ width: `${category.percent}%` }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Planned: {formatDemoMoney(category.planned, 0)}</span>
                <span>Spent: {formatDemoMoney(category.spent, 0)}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
