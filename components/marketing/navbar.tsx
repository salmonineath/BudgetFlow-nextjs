"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Preview", href: "#preview" },
  { label: "Why Manual", href: "#why-manual" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 animate-fade-down border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-foreground"
        >
          <span className="flex size-8 items-center justify-center rounded-full border border-primary/30 bg-primary-soft text-primary md:hidden">
            <svg
              width="16"
              height="16"
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
          BudgetFlow
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-foreground transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="#"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-foreground transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="animate-fade-down flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
          >
            Log In
          </Link>
        </nav>
      )}
    </header>
  );
}
