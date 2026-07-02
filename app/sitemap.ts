import type { MetadataRoute } from "next";
import { blogSitemapPaths } from "@/lib/blog-nav";
import { getPublicSiteUrl } from "@/lib/public-site-url";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/**
 * Только публичные статические маршруты и статьи блога.
 * Не включаем: /booking (клиентский редирект на /contacts#booking), API, служебные пути.
 */
const staticRoutes: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.95 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/udaleniye-tatu", changeFrequency: "monthly", priority: 0.88 },
  { path: "/styles", changeFrequency: "monthly", priority: 0.85 },
  { path: "/prices", changeFrequency: "weekly", priority: 0.88 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/sterility", changeFrequency: "monthly", priority: 0.82 },
  { path: "/contacts", changeFrequency: "monthly", priority: 0.92 },
  { path: "/reviews", changeFrequency: "weekly", priority: 0.82 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.85 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.35 },
  { path: "/consent", changeFrequency: "yearly", priority: 0.35 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.35 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.35 },
];

/** Дата последнего SEO-обновления контента (green-zone правки 2026-07-02). */
const CONTENT_LAST_UPDATED = new Date("2026-07-02T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getPublicSiteUrl().replace(/\/$/, "");
  const lastModified = CONTENT_LAST_UPDATED;

  const main: MetadataRoute.Sitemap = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: path === "" ? base : `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const blog: MetadataRoute.Sitemap = blogSitemapPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...main, ...blog];
}
