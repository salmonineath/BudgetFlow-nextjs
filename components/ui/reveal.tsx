"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "fade-up" | "fade-in" | "scale-in";

type RevealProps = {
  children: ReactNode;
  /** Entrance style. Defaults to a small upward fade. */
  variant?: RevealVariant;
  /** Stagger delay in ms, applied via transition-delay. */
  delay?: number;
  className?: string;
};

const VARIANT_CLASS: Record<RevealVariant, string> = {
  "fade-up": "reveal-fade-up",
  "fade-in": "reveal-fade-in",
  "scale-in": "reveal-scale-in",
};

/**
 * Reveals its children once when they scroll into view, then stays put —
 * it never re-hides on scroll-up. Respects prefers-reduced-motion by
 * skipping the observer entirely and rendering already-visible.
 */
export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // The CSS fallback for prefers-reduced-motion already forces full
    // visibility regardless of `.is-visible`, so it's safe to just skip
    // observing (and never touch state) for those users.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={["reveal", VARIANT_CLASS[variant], visible && "is-visible", className]
        .filter(Boolean)
        .join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
