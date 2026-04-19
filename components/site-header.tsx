"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useLayoutEffect, useState } from "react";
import { MobileNav, MobileNavToggle } from "@/components/mobile-nav";
import { MAIN_NAV_DESKTOP } from "@/lib/main-nav";

function navActiveBase(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function linkIsActive(
  pathname: string,
  href: string,
  hash: string,
) {
  if (href.includes("#")) {
    const base = href.slice(0, href.indexOf("#"));
    const want = href.slice(href.indexOf("#"));
    return pathname === base && hash === want;
  }
  return navActiveBase(pathname, href);
}

function useLocationHash() {
  const [hash, setHash] = useState("");
  useLayoutEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  return hash;
}

export function SiteHeader() {
  const pathname = usePathname();
  const hash = useLocationHash();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="header header--ink">
        <div className="container header-inner">
          <Link
            className="brand brand--ink-wordmark"
            href="/"
            aria-label="Ink Masters — на главную"
          >
            <span className="brand-wordmark-line">
              <span className="brand-wordmark-ink">Ink</span>{" "}
              <span className="brand-wordmark-masters">Masters</span>
            </span>
            <span className="brand-wordmark-meta">Ставрополь</span>
          </Link>
          <nav className="nav nav--desktop" aria-label="Основное меню">
            {MAIN_NAV_DESKTOP.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={linkIsActive(pathname, href, hash) ? "active" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link
              className="btn btn-primary header-book-btn header-book-btn--ink"
              href="/contacts#booking"
            >
              Записаться
            </Link>
            <MobileNavToggle
              open={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            />
          </div>
        </div>
      </header>
      <MobileNav open={menuOpen} onClose={closeMenu} />
    </>
  );
}
