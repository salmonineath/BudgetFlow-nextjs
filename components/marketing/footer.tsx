import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const FOOTER_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Preview", href: "#preview" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Reveal variant="fade-in" className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full border border-primary/30 bg-primary-soft text-primary md:hidden">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 15c0-3.314 2.686-6 6-6s6 2.686 6 6" />
                </svg>
              </span>
              <span className="text-base font-bold text-foreground">
                BudgetFlow
              </span>
            </div>
            <span className="hidden text-border-strong md:inline">|</span>
            <span className="text-sm text-muted-foreground">
              Mindful, manual budgeting.
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-muted-foreground md:gap-x-6">
            {FOOTER_LINKS.map((link, index) => (
              <span key={link.href} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-border-strong md:hidden">·</span>
                )}
                <Link
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border pt-6 text-center text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © 2025 BudgetFlow. Mindful architecture. Designed for
            deliberate, peaceful balance.
          </p>
          <p>100% manual. No bank tracking or data monetization.</p>
        </div>
      </Reveal>
    </footer>
  );
}
