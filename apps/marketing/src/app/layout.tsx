import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import { SkipLink } from "@/components/skip-link";
import { siteConfig } from "@/config/site";
import { Footer } from "@/features/navigation/footer";
import { Header } from "@/features/navigation/header";
import { fontMono, fontSans } from "@/lib/fonts";
import { MotionProvider } from "@/lib/motion-provider";
import { ThemeProvider } from "@/lib/theme-provider";

import "./globals.css";

// Лише спільні дефолти. Canonical, OG-url і title кожної сторінки
// задає createPageMetadata у самій сторінці, щоб нічого не успадковувалося з "/".
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.tagline,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  sameAs: siteConfig.social,
};

/**
 * `<Analytics />` (Vercel Analytics): анонімна статистика переглядів,
 * без cookies. Працює автоматично лише при деплої на Vercel.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>
          <MotionProvider>
            <SkipLink />
            <Header />
            {children}
            <Footer />
          </MotionProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
