import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section className="bg-primary-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Take control of your monthly budget.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Create your plan, track your spending, and always know what you
            have left.
          </p>
        </Reveal>

        <Reveal variant="scale-in" delay={220}>
          <Link
            href="#"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-foreground transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Get Started Free
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
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-4 text-xs text-muted-foreground">
            No credit card required · No bank credentials needed · Instant
            setup
          </p>
        </Reveal>
      </div>
    </section>
  );
}
