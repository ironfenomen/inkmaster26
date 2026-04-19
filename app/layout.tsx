import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import "./enhancements.css";
import { ScrollProgress, CustomCursor, ScrollRevealInit } from "@/components/enhancements";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyMobile } from "@/components/sticky-mobile";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { YandexMetrika } from "@/components/yandex-metrika";

const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const body = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

/** metadataBase must never throw — invalid NEXT_PUBLIC_SITE_URL would otherwise yield 500 on every page. */
function metadataBaseUrl(): URL {
  const fallback = "https://inkmasters26.ru";
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return new URL(fallback);
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(withScheme);
  } catch {
    return new URL(fallback);
  }
}

/** Только origin — без path и без завершающего слэша (canonical metadata). */
const metadataBaseOrigin = new URL(metadataBaseUrl().origin);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

/** Базовые поля + динамический canonical (путь из middleware `x-pathname`, как в sitemap). */
export async function generateMetadata(): Promise<Metadata> {
  const origin = metadataBaseUrl().origin.replace(/\/$/, "");
  const pathname = (await headers()).get("x-pathname") ?? "/";
  const canonical =
    pathname === "/" || pathname === "" ? origin : `${origin}${pathname}`;

  return {
    metadataBase: metadataBaseOrigin,
    title: {
      default: "Ink Masters — тату-студия в Ставрополе",
      template: "%s — Ink Masters",
    },
    description:
      "Тату-студия Ink Masters в Ставрополе (Пирогова 15, цоколь): запись 10:00–20:00, телефон, Telegram и VK. Галерея на 2ГИС, работы в Instagram и VK.",
    keywords: [
      "тату Ставрополь",
      "татуировка Ставрополь",
      "Ink Masters",
      "тату мастер Ставрополь",
      "ул. Пирогова 15",
    ],
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: "Ink Masters",
      title: "Ink Masters — тату в Ставрополе",
      description:
        "Пирогова 15, цоколь: запись и консультация. Карта, отзывы и галерея — на 2ГИС.",
    },
    alternates: { canonical },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>
        <ScrollProgress />
        <CustomCursor />
        <ScrollRevealInit />
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyMobile />
        <CookieConsentBanner />
        <YandexMetrika />
      </body>
    </html>
  );
}
