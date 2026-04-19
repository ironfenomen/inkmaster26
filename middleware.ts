import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getPublicSiteUrl } from "@/lib/public-site-url";

function canonicalHostForRedirect(
  requestHost: string,
  configuredHost: string,
): string | null {
  const req = requestHost.toLowerCase();
  const cfg = configuredHost.toLowerCase();
  if (req === cfg) return null;
  if (!cfg.startsWith("www.") && req === `www.${cfg}`) return cfg;
  if (cfg.startsWith("www.") && req === cfg.replace(/^www\./, "")) return cfg;
  return null;
}

function withPathname(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

/**
 * Единый канонический вид URL: без завершающего слэша (кроме корня «/»).
 * Редирект 308 для Яндекса/Google, чтобы не плодить дубли /path и /path/.
 * Host: только www ↔ apex для домена из NEXT_PUBLIC_SITE_URL (preview-хосты не трогаем).
 */
export function middleware(request: NextRequest) {
  try {
    const configuredHost = new URL(getPublicSiteUrl()).hostname;
    const target = canonicalHostForRedirect(request.nextUrl.hostname, configuredHost);
    if (target) {
      const url = request.nextUrl.clone();
      url.hostname = target;
      return NextResponse.redirect(url, 308);
    }
  } catch {
    // dev без .env или preview без URL — пропускаем нормализацию host
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return withPathname(request);
  }

  // Статика и служебные файлы (расширение в последнем сегменте)
  if (/\.[a-zA-Z0-9]{1,12}$/.test(pathname)) {
    return withPathname(request);
  }

  if (pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    const nextPath = pathname.replace(/\/+$/, "") || "/";
    url.pathname = nextPath;
    return NextResponse.redirect(url, 308);
  }

  return withPathname(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/webpack-hmr).*)",
  ],
};
