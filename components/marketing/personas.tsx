import { SectionHeading } from "./section-heading";
import { Reveal } from "@/components/ui/reveal";

const PERSONAS = [
  {
    emoji: "🎓",
    title: "Students",
    description:
      "Keep track of limited monthly spending and avoid unexpected end-of-semester shortfalls with clear category ceilings.",
  },
  {
    emoji: "💼",
    title: "Young Professionals",
    description:
      "Build deliberate budgeting habits without wasting hours configuring complicated enterprise accounting software.",
  },
  {
    emoji: "🌱",
    title: "Anyone Starting Out",
    description:
      "A simple, friendly place to create and manage your own monthly financial plan with zero anxiety and total privacy.",
  },
];

export function Personas() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Reveal>
        <SectionHeading
          title="Built for everyday budgeting."
          subtitle="Straightforward tools for people who value mental calm over feature bloat."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PERSONAS.map((persona, index) => (
          <Reveal key={persona.title} delay={index * 100} className="h-full">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background-soft p-6 transition duration-300 ease-out hover:border-border-strong hover:shadow-card-hover">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-lg">
                {persona.emoji}
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {persona.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {persona.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
