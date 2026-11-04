import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { navigationCta } from "@/config/navigation";
import {
  crmSecurityPrinciples,
  integrationSecurityPrinciples,
  securityPagePractices,
} from "@/config/security-page";
import { PrincipleList } from "@/features/trust-system/principle-list";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Безпека та захист даних",
  description:
    "Принципи безпеки CRM та інтеграцій, яких дотримується Sync Industry: права доступу, резервні копії, захист ключів і даних, а також захист даних на сайті.",
  path: "/company/security",
});

/**
 * Три блоки: принципи безпеки CRM, принципи безпеки інтеграцій
 * (зобов'язання компанії) і захист даних на самому сайті (перевірювані
 * факти). Див. `config/security-page.ts`.
 */
export default function SecurityPage() {
  return (
    <PageWrapper>
      <div className="py-16 sm:py-24">
        <Container className="flex flex-col gap-16">
          <header className="flex max-w-[640px] flex-col gap-4">
            <p className="text-[14px] font-medium text-[var(--color-text-secondary)]">
              Безпека
            </p>
            <h1 className="text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
              Як ми поводимося з вашими даними
            </h1>
            <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
              Принципи, за якими ми будуємо CRM та інтеграції, і те, як
              захищені дані на цьому сайті.
            </p>
          </header>

          <section aria-labelledby="crm-security-heading" className="flex flex-col gap-8">
            <SectionHeading
              id="crm-security-heading"
              eyebrow="Безпека CRM"
              title="Принципи, за якими ми будуємо CRM"
            />
            <PrincipleList items={crmSecurityPrinciples} />
          </section>

          <section aria-labelledby="integration-security-heading" className="flex flex-col gap-8">
            <SectionHeading
              id="integration-security-heading"
              eyebrow="Безпека інтеграцій"
              title="Принципи, за якими ми підключаємо сервіси"
            />
            <PrincipleList items={integrationSecurityPrinciples} />
          </section>

          <section aria-labelledby="security-practices-heading" className="flex flex-col gap-8">
            <SectionHeading
              id="security-practices-heading"
              eyebrow="Захист даних на сайті"
              title="Що відбувається з вашою заявкою"
            />
            <PrincipleList items={securityPagePractices} />
          </section>

          <div className="flex flex-col items-start gap-4 border-t border-[var(--color-divider)] pt-8">
            <p className="text-[14px] text-[var(--color-text-secondary)]">
              Є питання щодо безпеки вашого майбутнього проєкту? Обговоримо їх на першій розмові.
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
