/**
 * Single source of truth for site-wide metadata. Route `layout.tsx`/
 * `page.tsx` files read from here rather than hardcoding titles or
 * URLs inline — keeps SEO metadata consistent and centrally editable.
 */
export const siteConfig = {
  name: "Sync Industry",
  tagline:
    "Розбираємо, як працює ваш бізнес, і впроваджуємо CRM, автоматизацію та AI-рішення: менше ручної роботи, більше контролю.",
  // Постав сюди ОСНОВНИЙ домен з Vercel (з www або без)
  // і налаштуй редірект з іншого.
  url: "www.syncindustry.com",
  ogImage: "/opengraph-image",
  locale: "uk-UA",
  contact: {
    email: "service.syncindustry@gmail.com",
    phone: "+380730036766",
  },
  social: [
    "https://www.instagram.com/sync.industry",
    "https://t.me/syncindustry",
    "https://www.tiktok.com/@sync.industry",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
