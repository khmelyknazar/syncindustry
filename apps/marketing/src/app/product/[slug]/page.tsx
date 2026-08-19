import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";
import { products } from "@/config/products";
import { SolutionCapabilityList } from "@/features/solutions/solution-capability";
import { SolutionStatus } from "@/features/solutions/solution-status";
import { createPageMetadata } from "@/lib/seo";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * One template for all five products, CRM included — every section
 * below is conditional on the field actually existing in
 * `config/products.ts`. CRM currently has `businessProblem` and
 * `capabilities`; the other four only have `ecosystemRole`. That
 * asymmetry is real (nobody has written the deeper content for the
 * other four yet) and the template shows exactly that — it doesn't
 * pad the thin ones to look as complete as CRM's.
 */
function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return createPageMetadata({
      title: "Продукт не знайдено",
      description: "Цей продукт не існує.",
      path: `/product/${slug}`,
      index: false,
    });
  }

  return createPageMetadata({
    title: product.title,
    description: product.description,
    path: `/product/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <PageWrapper>
      <div className="py-16 sm:py-24">
        <Container size="narrow" className="flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <SolutionStatus status={product.status} />
            <h1 className="text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
              {product.title}
            </h1>
            <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
              {product.description}
            </p>
          </header>

          {product.businessProblem && (
            <div className="flex flex-col gap-1.5 border-t border-[var(--color-divider)] pt-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--color-text-disabled)]">
                Проблема, яку вирішує
              </span>
              <p className="max-w-[560px] text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
                {product.businessProblem}
              </p>
            </div>
          )}

          {product.capabilities && <SolutionCapabilityList capabilities={product.capabilities} />}

          {product.ecosystemRole && (
            <div className="flex flex-col gap-1.5 border-t border-[var(--color-divider)] pt-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[var(--color-text-disabled)]">
                Роль в екосистемі
              </span>
              <p className="max-w-[560px] text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
                {product.ecosystemRole}
              </p>
            </div>
          )}

          <div className="flex flex-col items-start gap-4 border-t border-[var(--color-divider)] pt-8">
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Хочете розібрати, як {product.title} ляже на ваші процеси?
            </p>
            <Button asChild variant="primary">
              <Link href={navigationCta.href}>{navigationCta.label}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </PageWrapper>
  );
}
