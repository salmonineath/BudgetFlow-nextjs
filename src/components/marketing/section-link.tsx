"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type SectionLinkProps = Omit<
  ComponentProps<typeof Link>,
  "href" | "onNavigate"
> & {
  href: `#${string}`;
};

/** Scroll within the landing page without adding a fragment or history entry. */
export function SectionLink({ href, ...props }: SectionLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      onNavigate={(event) => {
        const section = document.getElementById(href.slice(1));
        if (!section) return;
        event.preventDefault();
        // Also clear a fragment left by an earlier visit, preserving Next's state.
        if (window.location.hash) {
          window.history.replaceState(
            window.history.state,
            "",
            window.location.pathname + window.location.search,
          );
        }
        // CSS retains smooth scrolling and the reduced-motion preference.
        section.scrollIntoView({ block: "start" });
      }}
    />
  );
}
