import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/ui/reveal";

function StatPill({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "primary";
}) {
  return (
    <div
      className={
        tone === "primary"
          ? "rounded-lg border border-primary/20 bg-primary-soft px-4 py-3 text-sm"
          : "rounded-lg border border-border bg-background-soft px-4 py-3 text-sm"
      }
    >
      <span className="text-muted-foreground">{label}: </span>
      <span
        className={
          tone === "primary"
            ? "font-bold text-primary"
            : "font-bold text-foreground"
        }
      >
        {value}
      </span>
    </div>
  );
}

function PillList({
  items,
  tone = "neutral",
}: {
  items: { label: string; value: string }[];
  tone?: "neutral" | "primary";
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item.label}
          className={
            tone === "primary"
              ? "rounded-lg border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs"
              : "rounded-lg border border-border bg-background-soft px-3 py-1.5 text-xs"
          }
        >
          <span className="text-foreground">{item.label} </span>
          <span
            className={
              tone === "primary"
                ? "font-semibold text-primary"
                : "font-semibold text-foreground"
            }
          >
            {item.value}
          </span>
        </span>
      ))}
    </div>
  );
}

const STEPS = [
  {
    number: 1,
    title: "Set your monthly budget",
    description: "Define your total monthly spending pool for the month.",
    preview: <StatPill label="September Budget" value="$500" />,
  },
  {
    number: 2,
    title: "Create your categories",
    description: "Assign your money to the envelopes that matter to you.",
    preview: (
      <PillList
        items={[
          { label: "Food", value: "$120" },
          { label: "Rent", value: "$150" },
          { label: "Bills", value: "$80" },
        ]}
      />
    ),
  },
  {
    number: 3,
    title: "Add your expenses",
    description: "Type the amount and category as you spend. Fast & deliberate.",
    preview: (
      <PillList
        tone="primary"
        items={[
          { label: "Lunch", value: "-$8.00" },
          { label: "Internet", value: "-$20.00" },
        ]}
      />
    ),
  },
  {
    number: 4,
    title: "Track remaining money",
    description:
      "Watch balances update instantly so you always feel calm.",
    preview: <StatPill label="Remaining Buffer" value="$290" tone="primary" />,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-background-soft px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="The Core Rhythm"
            title="How BudgetFlow works"
            subtitle="A simple 4-step cadence: Plan → Record → Track → Adjust."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 100} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition duration-300 ease-out hover:border-border-strong hover:shadow-card-hover">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-foreground">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto">{step.preview}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
