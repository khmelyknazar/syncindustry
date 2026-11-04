import type { Metadata } from "next";

import { PageWrapper } from "@/components/page-wrapper";
import { siteConfig } from "@/config/site";
import { ContactPageContent } from "@/features/contact/contact-page-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Контакти: консультація щодо автоматизації бізнесу",
  description:
    "Розкажіть, який процес чи проблему потрібно вирішити. Перший контакт із Sync Industry починається з розбору вашої ситуації, а не з продажу.",
  path: "/contact",
});

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Контакти Sync Industry",
  url: new URL("/contact", siteConfig.url).toString(),
  inLanguage: "uk",
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
  },
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ContactPageContent />
    </PageWrapper>
  );
}
