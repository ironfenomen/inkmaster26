/**
 * Канонический origin сайта для sitemap, robots и абсолютных URL.
 * В production переменная NEXT_PUBLIC_SITE_URL обязательна (https, не localhost).
 * В development без переменной используется localhost (удобно для `next dev` без .env.production).
 */
export function getPublicSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    if (!raw) {
      const port = process.env.PORT || "3000";
      return `http://127.0.0.1:${port}`;
    }
    let url: URL;
    try {
      url = new URL(raw);
    } catch {
      throw new Error(
        `NEXT_PUBLIC_SITE_URL must be a valid absolute URL, got: ${JSON.stringify(raw)}`,
      );
    }
    return url.origin;
  }

  if (!raw) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required (e.g. https://inkmasters26.ru). Set it in .env.production or the host environment before build.",
    );
  }

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must be a valid absolute URL, got: ${JSON.stringify(raw)}`,
    );
  }

  if (url.protocol !== "https:") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must use https: for public URL generation.",
    );
  }

  const host = url.hostname.toLowerCase();
  if (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "[::1]" ||
    host.endsWith(".local")
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must not point to localhost or .local for sitemap and public metadata.",
    );
  }

  return url.origin;
}
