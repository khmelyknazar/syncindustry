import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageWrapper } from "@/components/page-wrapper";
import { SolutionsGrid } from "@/features/solutions/solutions-grid";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Послуги: CRM, автоматизація, інтеграції та AI",
  description:
    "Впроваджуємо CRM, автоматизуємо бізнес-процеси, об'єднуємо месенджери й сервіси та підключаємо AI до роботи з документами.",
  path: "/product",
});

/**
 * Огляд послуг. URL лишається `/product`, щоб не ламати індексацію
 * і внутрішні посилання; змінено лише зміст.
 */
export default function ProductIndexPage() {
  return (
    <PageWrapper>
      <div className="py-16 sm:py-24">
        <Container className="flex flex-col gap-16">
          <header className="flex max-w-[640px] flex-col gap-4">
            <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--color-brand-primary)]">
              Послуги
            </p>
            <h1 className="text-[length:var(--font-display-md-size)] leading-[var(--font-display-md-line)] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
              Рішення, які прибирають ручну роботу з вашого бізнесу
            </h1>
            <p className="text-[length:var(--font-body-lg-size)] leading-[var(--font-body-lg-line)] text-[var(--color-text-secondary)]">
              Спочатку розбираємося, як працює ваш бізнес, а потім проєктуємо й
              впроваджуємо CRM, автоматизацію, інтеграції та AI-рішення під ваші
              процеси.
            </p>
          </header>

          <SolutionsGrid />
        </Container>
      </div>
    </PageWrapper>
  );
}
