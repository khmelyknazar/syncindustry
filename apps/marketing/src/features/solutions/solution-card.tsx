import { cn } from "@axioma/design-system/cn";
import Link from "next/link";


import { SolutionStatus } from "@/features/solutions/solution-status";
import type { Product } from "@/types/product";

/**
 * Status-aware: `available` renders as a real `<Link>` to the
 * product's own page (solid border, clickable, focusable) — a
 * `comingSoon` product (if one ever exists again) stays a
 * non-interactive `<div aria-disabled>` with a dashed border, per the
 * original rule that a product with nothing to navigate to must not
 * expose link/button semantics to assistive tech or keyboard focus.
 * The branch is on `product.status`, not on which component gets
 * used — so a future status flip back to `comingSoon` is a data
 * change, not a code change.
 */
export function SolutionCard({ product }: { product: Product }) {
  const isAvailable = product.status === "available";

  const content = (
    <>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[14px] font-medium text-[var(--color-text-primary)]">
          {product.title}
        </span>
        <SolutionStatus status={product.status} />
      </div>

      <p className="text-[13px] leading-[18px] text-[var(--color-text-secondary)]">
        {product.description}
      </p>

      {product.ecosystemRole && (
        <p className="border-t border-[var(--color-divider)] pt-3 text-[12px] leading-[17px] text-[var(--color-text-disabled)]">
          {product.ecosystemRole}
        </p>
      )}
    </>
  );

  const className = cn(
    "flex flex-col gap-3 rounded-[var(--radius-lg)] border bg-[var(--color-bg-surface)] p-5",
    isAvailable
      ? [
          "border-[var(--color-border-default)] transition-colors",
          "duration-[var(--motion-instant)] ease-[var(--ease-standard)]",
          "hover:border-[var(--color-border-strong)]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          "focus-visible:outline-[var(--color-focus-ring)]",
        ]
      : "border-dashed border-[var(--color-border-default)]",
  );

  if (isAvailable) {
    return (
      <Link href={product.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div aria-disabled="true" className={className}>
      {content}
    </div>
  );
}
