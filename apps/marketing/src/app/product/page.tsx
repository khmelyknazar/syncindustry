import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import { SolutionsGrid } from "@/features/solutions/solutions-grid";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Продукти",
  description:
    "CRM, ERP, Business Automation, Internal Systems та Integrations — одна екосистема на спільному Core.",
  path: "/product",
});

/**
 * Pure overview now — CRM used to double as both "the product
 * index" and "CRM's own page" (it lived at this bare `/product` URL
 * back when it was the only product). Now that all five are peers,
 * CRM has its own page at `/product/crm` like the rest, and this
 * page is just the index: `SolutionsGrid`, no product-specific
 * header text.
 */
export default function ProductIndexPage() {
  return (
    <PageWrapper>
      <div className="py-16 sm:py-24">
        <Container className="flex flex-col gap-16">
          <header className="flex max-w-[640px] flex-col gap-4">
            <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--color-brand-primary)]">
              Продукти
            </p>
            <h1 className="text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
              Одна екосистема, п&apos;ять продуктів
            </h1>
            <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
              CRM, ERP, автоматизація, внутрішні системи та інтеграції — на спільному
              Core, без окремого логіну чи міграції даних між ними.
            </p>
          </header>

          <SolutionsGrid />
        </Container>
      </div>
    </PageWrapper>
  );
}
