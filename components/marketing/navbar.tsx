"use client";

import { MotionConfig, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/ui/logo";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Preview", href: "#preview" },
  { label: "Why SansamApp", href: "#why-sansamapp" },
];

const SPY_LINE_RATIO = 0.35;
const SCROLL_IDLE_UNLOCK_MS = 150;
const SCROLL_START_GRACE_MS = 800;

function findSectionAtScrollLine(): string | null {
  const reachedBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;
  if (reachedBottom) return NAV_LINKS[NAV_LINKS.length - 1].href;

  const scrollLine = window.innerHeight * SPY_LINE_RATIO;
  let current: { href: string; top: number } | null = null;
  for (const { href } of NAV_LINKS) {
    const section = document.getElementById(href.slice(1));
    if (!section) continue;
    const { top } = section.getBoundingClientRect();
    if (top <= scrollLine && (!current || top > current.top)) {
      current = { href, top };
    }
  }
  return current?.href ?? null;
}

// Next.js hash-only navigation uses history.pushState, which fires no event,
// so link clicks set the active href directly. While a click-initiated smooth
// scroll runs, scroll-spy is paused so the pill doesn't flicker through the
// sections it passes. Next.js may start the scroll a few frames after the click,
// so the pause first waits a grace period for scrolling to begin; once it has,
// the pause ends on `scrollend` or when scrolling goes idle.
function useActiveSection() {
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const spyLockedRef = useRef(false);
  const scheduleUnlockRef = useRef<(delayMs: number) => void>(() => {});

  useEffect(() => {
    let frame = 0;
    let idleTimer = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setActiveHref(findSectionAtScrollLine()),
      );
    };
    const unlock = () => {
      window.clearTimeout(idleTimer);
      spyLockedRef.current = false;
      sync();
    };
    const scheduleUnlock = (delayMs: number) => {
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(unlock, delayMs);
    };
    const handleScroll = () => {
      if (spyLockedRef.current) scheduleUnlock(SCROLL_IDLE_UNLOCK_MS);
      else sync();
    };
    const syncFromHash = () => setActiveHref(window.location.hash || null);

    scheduleUnlockRef.current = scheduleUnlock;
    syncFromHash();
    sync();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", unlock);
    window.addEventListener("resize", sync);
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", unlock);
      window.removeEventListener("resize", sync);
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("popstate", syncFromHash);
    };
  }, []);

  const selectHref = (href: string) => {
    spyLockedRef.current = true;
    scheduleUnlockRef.current(SCROLL_START_GRACE_MS);
    setActiveHref(href);
  };

  return [activeHref, selectHref] as const;
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, selectHref] = useActiveSection();
  const [pointerHref, setPointerHref] = useState<string | null>(null);
  const [focusedHref, setFocusedHref] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border-strong bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" aria-label="SansamApp home" className="text-lg">
          <Logo />
        </Link>

        <MotionConfig reducedMotion="user">
          <nav
            className="hidden items-center gap-2 text-sm font-medium md:flex"
            onPointerLeave={() => setPointerHref(null)}
          >
            {NAV_LINKS.map((link) => {
              const isActive = link.href === activeHref;
              const isHighlighted =
                link.href === (pointerHref ?? focusedHref ?? activeHref);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => selectHref(link.href)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse")
                      setPointerHref(link.href);
                  }}
                  onFocus={(event) => {
                    if (event.currentTarget.matches(":focus-visible")) {
                      setFocusedHref(link.href);
                    }
                  }}
                  onBlur={() => setFocusedHref(null)}
                  aria-current={isActive ? "location" : undefined}
                  className="relative rounded-full px-3 py-1.5"
                >
                  {isHighlighted && (
                    <motion.span
                      layoutId="navbar-pill"
                      className="absolute inset-0 rounded-full bg-foreground shadow-card"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                      }}
                    />
                  )}
                  {/* Difference blend keeps the label readable on both the header and the
                      sliding pill, so its color flips as the pill passes under it
                      without a color transition. */}
                  <span className="relative text-background opacity-75 mix-blend-difference">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </MotionConfig>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-foreground hover:text-muted-foreground"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-foreground transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="#"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-foreground transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex size-10 items-center justify-center rounded-xl border border-border-control bg-surface text-foreground"
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
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-surface-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-2 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
          >
            Log In
          </Link>
        </nav>
      )}
    </header>
  );
}
