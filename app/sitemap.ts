import type { MetadataRoute } from "next";
import { blogSitemapPaths } from "@/lib/blog-nav";
import { getPublicSiteUrl } from "@/lib/public-site-url";

const routes = [
  "",
  "/portfolio",
  "/services",
  "/udaleniye-tatu",
  "/about",
  "/faq",
  "/blog",
  ...blogSitemapPaths,
  "/contacts",
  "/prices",
  "/reviews",
  "/sterility",
  "/styles",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getPublicSiteUrl();
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${base}${path === "" ? "/" : path}`,
    lastModified,
  }));
}
