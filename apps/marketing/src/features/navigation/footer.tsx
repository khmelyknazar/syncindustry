import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { navigationCta } from "@/config/navigation";
import { ContactDetails } from "@/features/contact/contact-details";

/**
 * Deliberately lean. The Marketing Website Specification originally
 * planned a four-column footer (Product / Company / Resources /
 * Legal) — but populating those columns fully would mean linking
 * `/pricing`, `/company/about`, `/blog`, none of which exist yet,
 * exactly the dead-link pattern the deploy cleanup pass eliminated
 * everywhere else. `/legal/privacy` and `/legal/terms` are real
 * (draft) pages now, so they're linked; the rest return when their
 * pages do.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-divider)]">
      <Container className="flex flex-col gap-10 py-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex flex-col gap-5">
            <Logo />
            <ContactDetails variant="footer" />
          </div>

          <nav aria-label="Футер" className="flex flex-wrap content-start gap-x-6 gap-y-2 lg:max-w-[420px] lg:justify-end">
          <Link
            href="/product"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Послуги
          </Link>
          <Link
            href="/work"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Кейси
          </Link>
          <Link
            href="/company/engineering"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Як ми працюємо
          </Link>
          <Link
            href="/company/security"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Безпека
          </Link>
          <Link
            href={navigationCta.href}
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Контакти
          </Link>
          <Link
            href="/legal/privacy"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Конфіденційність
          </Link>
          <Link
            href="/legal/terms"
            className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          >
            Умови
          </Link>
        </nav>
        </div>

        <p className="border-t border-[var(--color-divider)] pt-6 text-[13px] text-[var(--color-text-disabled)]">
          © {year} Sync Industry. Усі права захищено.
        </p>
      </Container>
    </footer>
  );
}
