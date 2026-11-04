import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";

import { emailContact, phoneContact, socialContacts, telegramContact } from "@/config/contact";

type Variant = "footer" | "page";

const LINK_BASE =
  "inline-flex items-center gap-2 transition-colors duration-[var(--motion-instant)] ease-[var(--ease-standard)]";

const VARIANT_CLASS: Record<Variant, string> = {
  footer: "text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
  page: [
    "rounded-[var(--radius-md)] border border-[var(--color-border-default)] px-4 py-2.5",
    "text-[14px] font-medium text-[var(--color-text-primary)]",
    "hover:border-[var(--color-border-strong)]",
  ].join(" "),
};

/**
 * Усі канали зв'язку в одному місці. Семантичний `<address>` (його
 * розуміють і пошукові системи, і читалки екрана), реальні `tel:` і
 * `mailto:`, видимий текст номера й пошти (а не лише іконки) —
 * користувач бачить контакт навіть без кліку. Зовнішні соцмережі
 * відкриваються в новій вкладці з `rel="noopener noreferrer"`.
 */
export function ContactDetails({ variant = "footer" }: { variant?: Variant }) {
  const linkClass = `${LINK_BASE} ${VARIANT_CLASS[variant]}`;
  const layout =
    variant === "page" ? "flex flex-wrap gap-3" : "flex flex-col items-start gap-2.5";

  return (
    <address className={`not-italic ${layout}`}>
      <a href={phoneContact.href} className={linkClass}>
        <Phone aria-hidden="true" className="size-4" strokeWidth={1.75} />
        <span className="sr-only">{phoneContact.label}: </span>
        {phoneContact.display}
      </a>
      <a href={emailContact.href} className={linkClass}>
        <Mail aria-hidden="true" className="size-4" strokeWidth={1.75} />
        <span className="sr-only">{emailContact.label}: </span>
        {emailContact.display}
      </a>
      {telegramContact && (
        <a href={telegramContact.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Send aria-hidden="true" className="size-4" strokeWidth={1.75} />
          {telegramContact.label}
        </a>
      )}
      {socialContacts.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
          {social.label}
        </a>
      ))}
    </address>
  );
}
