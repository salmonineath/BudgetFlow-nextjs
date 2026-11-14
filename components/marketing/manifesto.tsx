import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/ui/reveal";

const PRINCIPLES = [
  {
    title: "No bank connections",
    description:
      "We never ask for credentials, bank API tokens, or login screens.",
  },
  {
    title: "No automated scraping",
    description: "No random unexpected charges cluttering your ledger.",
  },
  {
    title: "No AI advice or lecturing",
    description: 'No notifications telling you to "cut back on coffee."',
  },
  {
    title: "No complicated financial rules",
    description: "No credit modeling, investment metrics, or stock feeds.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary-text"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Manifesto() {
  return (
    <section
      id="why-sansamapp"
      className="bg-background-soft px-6 py-16 md:py-24"
    >
      <Reveal className="mx-auto max-w-5xl rounded-3xl border border-border bg-surface p-6 sm:p-10">
        <SectionHeading
          align="left"
          eyebrow="Product Manifesto"
          title="You stay in control."
          subtitle="SansamApp doesn't tell you how to spend your money. You create your own budget, choose your own categories, and make your own decisions."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 90} className="h-full">
              <div className="flex h-full gap-3 rounded-xl border border-border bg-background-soft p-4 transition duration-300 ease-out hover:border-border-strong hover:shadow-card-hover">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                  <CheckIcon />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {principle.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-foreground">
            Just your plan, clearly organized.
          </p>
          <p className="text-muted-foreground">
            100% User Owned Data · Instant CSV Export
          </p>
        </div>
      </Reveal>
    </section>
  );
}
