import Link from "next/link";
import { DashboardPreview } from "./dashboard-preview";

const TRUST_POINTS = ["No bank sync needed", "100% Private & offline-ready"];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-primary"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <span className="animate-fade-up stagger-1 inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Manual Mindful Budgeting
          </span>

          <h1 className="animate-fade-up stagger-2 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Simple budgeting.
            <br />
            <span className="text-primary">Full control.</span>
          </h1>

          <p className="animate-fade-up stagger-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            Create your monthly budget, track your expenses, and always know
            how much you have left — without bank connections, complicated
            tools, or financial advice.
          </p>

          <div className="animate-fade-up stagger-4 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-foreground transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Start Budgeting
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-surface-muted"
            >
              See How It Works
            </Link>
          </div>

          <div className="animate-fade-up stagger-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
            {TRUST_POINTS.map((point) => (
              <span key={point} className="inline-flex items-center gap-2">
                <CheckIcon />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
