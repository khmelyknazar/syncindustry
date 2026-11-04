import { siteConfig } from "@/config/site";
import type { ContactChannel } from "@/types/contact";

/**
 * Confirmed by the user (not fabricated): https://t.me/syncindustry.
 */
export const telegramContact: ContactChannel | null = {
  label: "Telegram",
  href: "https://t.me/syncindustry",
};

/**
 * No SLA or timeframe promised — none has been defined, and the
 * brief is explicit that none should be invented. Each step
 * describes what happens, not how fast.
 */
export const whatHappensNextSteps: string[] = [
  "Ви описуєте процес або проблему, яку потрібно вирішити.",
  "Ми розбираємо контекст і задаємо уточнювальні питання.",
  "Узгоджуємо наступний крок.",
];

/**
 * Телефон і пошта беруться з `config/site.ts` — єдине джерело для
 * футера, сторінки контактів і структурованих даних. Посилання `tel:`
 * вимагає номер без пробілів, тому відображуваний вигляд окремий.
 */
export const phoneContact = {
  label: "Телефон",
  display: "+38 073 003 67 66",
  href: `tel:${siteConfig.contact.phone}`,
} as const;

export const emailContact = {
  label: "Email",
  display: siteConfig.contact.email,
  href: `mailto:${siteConfig.contact.email}`,
} as const;

/** Соцмережі з `siteConfig.social` (Telegram виведено окремо вище). */
export const socialContacts: ContactChannel[] = [
  { label: "Instagram", href: siteConfig.social[0] },
  { label: "TikTok", href: siteConfig.social[2] },
];
