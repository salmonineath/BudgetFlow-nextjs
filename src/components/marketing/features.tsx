import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/ui/reveal";

const FEATURES = [
  {
    icon: (
      <path d="M9 4h6a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V5a1 1 0 0 1 1-1Zm0 2v1h6V6H9Zm-1 5.5 1.5 1.5L13 9.5" />
    ),
    title: "Create Your Plan",
    description:
      "Set your total monthly budget ceiling and decide exactly how much money goes to each envelope category.",
    tagA: "Food · Rent · Bills · Savings",
    tagB: "100% Custom",
  },
  {
    icon: <path d="M12 5v14M5 12h14" />,
    title: "Record Expenses",
    description:
      "Add your daily purchases manually in just a few seconds. No delayed bank feeds, no mismatched transaction tags.",
    tagA: "Quick preset taps (+$5, +$10)",
    tagB: "< 5 seconds",
  },
  {
    icon: <path d="m4 15 5-5 4 4 7-7M20 9v5M20 9h-5" />,
    title: "Track What's Left",
    description:
      "See what you've spent and glance at your exact remaining buffer at any second. Never wonder where your money went.",
    tagA: "Remaining balance focus",
    tagB: "Calm clarity",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <SectionHeading
          title="Budgeting without the complexity."
          subtitle="You decide the plan. SansamApp simply helps you keep track of it — clean, quiet, and deliberate."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 100} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background-soft p-6 transition duration-300 ease-out hover:border-border-strong hover:shadow-card-hover">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary-text">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {feature.icon}
                </svg>
              </span>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-4">
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  {feature.tagA}
                </span>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-foreground">
                  {feature.tagB}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
