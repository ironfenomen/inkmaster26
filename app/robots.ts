import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/public-site-url";

/**
 * Robots для продакшена: канонический host и sitemap совпадают с getPublicSiteUrl().
 * Disallow: служебные префиксы Next.js; /api/ — на будущее, если появятся route handlers.
 */
export default function robots(): MetadataRoute.Robots {
  const origin = getPublicSiteUrl();
  const { host } = new URL(origin);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    host,
    sitemap: `${origin}/sitemap.xml`,
  };
}
