import type { ReactNode } from "react";

/**
 * Positioning label above the H1. Not a heading itself (no semantic
 * level) — purely a visual/contextual lead-in, so it doesn't disturb
 * heading hierarchy (H1 stays the first heading on the page).
 */
export function HeroEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className={[
        "text-[14px] font-medium",
        "text-[var(--color-text-secondary)]",
      ].join(" ")}
    >
      {children}
    </p>
  );
}
