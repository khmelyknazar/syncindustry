import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";
import { SolutionCapabilityList } from "@/features/solutions/solution-capability";
import { SolutionStatus } from "@/features/solutions/solution-status";
import { createPageMetadata } from "@/lib/seo";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

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
      title: "Сторінку не знайдено",
      description: "Цієї сторінки не існує.",
      path: `/product/${slug}`,
      index: false,
    });
  }

  return createPageMetadata({
    title: product.seoTitle ?? product.title,
    description: product.seoDescription ?? product.description,
    path: `/product/${product.slug}`,
    // Сторінки "Скоро" не індексуємо, доки в них немає власного змісту.
    index: product.status === "available",
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const serviceJsonLd =
    product.status === "available"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: product.seoTitle ?? product.title,
          description: product.seoDescription ?? product.description,
          url: new URL(`/product/${product.slug}`, siteConfig.url).toString(),
          provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        }
      : null;

  const breadcrumbJsonLd =
    product.status === "available"
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Головна", item: siteConfig.url },
            {
              "@type": "ListItem",
              position: 2,
              name: "Послуги",
              item: new URL("/product", siteConfig.url).toString(),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: product.title,
              item: new URL(`/product/${product.slug}`, siteConfig.url).toString(),
            },
          ],
        }
      : null;

  return (
    <PageWrapper>
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {serviceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <div className="py-16 sm:py-24">
        <Container size="narrow" className="flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <SolutionStatus status={product.status} />
            <h1 className="text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
              {product.h1 ?? product.title}
            </h1>
            <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
              {product.description}
            </p>
          </header>

          {product.businessProblem && (
            <div className="flex flex-col gap-1.5 border-t border-[var(--color-divider)] pt-6">
              <span className="text-[12px] font-medium text-[var(--color-text-disabled)]">
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
              <span className="text-[12px] font-medium text-[var(--color-text-disabled)]">
                Роль в екосистемі
              </span>
              <p className="max-w-[560px] text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
                {product.ecosystemRole}
              </p>
            </div>
          )}

          <div className="flex flex-col items-start gap-4 border-t border-[var(--color-divider)] pt-8">
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Розкажіть про вашу задачу, і ми підкажемо, з чого почати.
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
