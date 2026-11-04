import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { engineeringPagePractices } from "@/config/engineering-page";
import { engineeringProofPrinciples } from "@/config/engineering-proof/principles";
import { navigationCta } from "@/config/navigation";
import { EngineeringPrincipleRow } from "@/features/engineering-proof/engineering-principle-row";
import { ArchitectureProofSection } from "@/features/trust-system/architecture-proof-section";
import { PrincipleList } from "@/features/trust-system/principle-list";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Як ми працюємо",
  description:
    "Як Sync Industry проєктує системи для бізнесу: принципи роботи, технології, надійність і шлях від CRM до єдиної системи керування бізнесом.",
  path: "/company/engineering",
});

/**
 * Composed almost entirely from existing pieces — no new design
 * system, per the brief:
 * - Architecture philosophy + Documented decisions →
 *   `EngineeringPrincipleRow` × `engineeringProofPrinciples` (same
 *   data/component already built for Home's Engineering Proof
 *   section — not duplicated, reused).
 * - Real technology stack → `ArchitectureProofSection` as-is (built
 *   in Build Phase Stage 4, excluded from Home, and explicitly
 *   documented then as belonging here).
 * - Accessibility/performance → `PrincipleList` (Trust System's
 *   existing renderer) with new, page-specific, verifiable content.
 * - Scalability → prose only, no new visual components.
 *
 * Тексти — простою мовою для власника бізнесу; технічні деталі
 * зібрані в окремому блоці «Для технічних фахівців».
 */
export default function EngineeringPage() {
  return (
    <PageWrapper>
      <div className="py-16 sm:py-24">
        <Container className="flex flex-col gap-20">
          <header className="flex max-w-[640px] flex-col gap-4">
            <p className="text-[14px] font-medium text-[var(--color-text-secondary)]">
              Як ми працюємо
            </p>
            <h1 className="text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
              Як ми проєктуємо системи, а не сайти
            </h1>
            <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
              Тут ми чесно описуємо, як проєктуємо системи, — без сертифікацій,
              метрик чи клієнтських логотипів, яких у нас поки немає.
            </p>
          </header>

          <section aria-labelledby="architecture-philosophy-heading" className="flex flex-col gap-8">
            <SectionHeading
              id="architecture-philosophy-heading"
              eyebrow="Принципи"
              title="Чотири принципи, які визначають кожне наше рішення"
            />
            <div>
              {engineeringProofPrinciples.map((principle) => (
                <EngineeringPrincipleRow key={principle.code} principle={principle} />
              ))}
            </div>
          </section>

          <section aria-labelledby="scalability-heading" className="flex flex-col gap-4">
            <SectionHeading
              id="scalability-heading"
              eyebrow="Масштабування"
              title="Одна основа для всіх модулів"
            />
            <p className="max-w-[680px] text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
              Усе будується навколо однієї спільної основи: вхід у систему, дані
              та права доступу. CRM, облік (ERP), автоматизація, внутрішні
              системи та підключення до сервісів — це розширення однієї
              системи, а не окремі програми. Один логін, спільні дані, і нічого
              не переписується з нуля, коли додається новий модуль.
            </p>
          </section>

          <ArchitectureProofSection />

          <section aria-labelledby="accessibility-performance-heading" className="flex flex-col gap-8">
            <SectionHeading
              id="accessibility-performance-heading"
              eyebrow="Доступність і швидкість"
              title="Те, що можна перевірити, а не просто пообіцяти"
            />
            <PrincipleList items={engineeringPagePractices} />
          </section>

          <div className="flex flex-col items-start gap-4 border-t border-[var(--color-divider)] pt-8">
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Є система, яку варто спроєктувати правильно з самого початку?
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
