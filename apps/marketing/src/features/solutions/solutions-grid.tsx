import { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/scroll-stagger";
import { products } from "@/config/products";
import { FeaturedSolution } from "@/features/solutions/featured-solution";
import { SolutionCard } from "@/features/solutions/solution-card";

/**
 * Not five identical cards. CRM renders through `FeaturedSolution` in
 * its own dominant column — not because it's the only available
 * product anymore, but because it's the only one with real
 * `businessProblem`/`capabilities` depth (Product Architecture
 * decision: don't fabricate that detail for the other four). The
 * remaining four fill a grid beside it — visually "surrounding" the
 * featured product without a literal connector diagram, the same
 * composition idea as before, just no longer tied to an
 * available/comingSoon split (all five are `"available"` now;
 * `SolutionCard` itself still branches on status for the day a
 * product goes back to `comingSoon`).
 */
export function SolutionsGrid() {
  const featured = products.find((product) => product.slug === "crm");
  const rest = products.filter((product) => product.slug !== "crm");

  if (!featured) return null;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
      <FeaturedSolution product={featured} />
      <ScrollStaggerContainer
        staggerMs={90}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"
      >
        {rest.map((product) => (
          <ScrollStaggerItem key={product.slug}>
            <SolutionCard product={product} />
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerContainer>
    </div>
  );
}
