"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef } from "react";
import { site } from "@/lib/site";
import { MAIN_NAV } from "@/lib/main-nav";
function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 80);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    if (open) {
      const prevBody = document.body.style.overflow;
      const prevHtml = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prevHtml;
        document.body.style.overflow = prevBody;
        document.body.classList.remove("mobile-nav-open");
      };
    }
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 761px)");
    const onChange = () => {
      if (mq.matches) onClose();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const list = Array.from(focusables);
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (wasOpenRef.current && !open) {
      previouslyFocused.current?.focus?.();
    }
    wasOpenRef.current = open;
  }, [open]);

  if (!open) return null;

  let index = 0;
  const nextI = () => ++index;

  return (
    <div
      id="mobile-nav-dialog"
      className="mobile-nav-root"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onKeyDown={handleKeyDown}
    >
      <div
        className="mobile-nav-backdrop"
        role="presentation"
        aria-hidden
        onClick={onClose}
      />
      <div className="mobile-nav-panel">
        <div className="mobile-nav-panel-inner" ref={panelRef}>
          <div className="mobile-nav-scroll">
            <header className="mobile-nav-top">
              <div className="mobile-nav-brand-block">
                <Link
                  id={titleId}
                  href="/"
                  className="brand brand--ink-wordmark mobile-nav-brand-link"
                  onClick={onClose}
                >
                  <span className="brand-wordmark-line">
                    <span className="brand-wordmark-ink">Ink</span>{" "}
                    <span className="brand-wordmark-masters">Masters</span>
                  </span>
                  <span className="brand-wordmark-meta">{site.city}</span>
                </Link>
                <p className="mobile-nav-brand-detail">
                  Пирогова 15 · 10:00–20:00 · по записи
                </p>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                className="mobile-nav-close"
                aria-label="Закрыть меню"
                onClick={onClose}
              >
                <span className="mobile-nav-close-lines" aria-hidden />
              </button>
            </header>

            <nav className="mobile-nav-links" aria-label="Разделы сайта">
              <p className="mobile-nav-section-label">Разделы</p>
              <ul className="mobile-nav-list">
                {MAIN_NAV.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={
                        navActive(pathname, href)
                          ? "mobile-nav-link mobile-nav-link--active mobile-nav-anim"
                          : "mobile-nav-link mobile-nav-anim"
                      }
                      style={{ "--mn-i": nextI() } as React.CSSProperties}
                      onClick={onClose}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mobile-nav-dock">
            <div
              className="mobile-nav-trust mobile-nav-anim"
              style={{ "--mn-i": nextI() } as React.CSSProperties}
            >
              <p className="mobile-nav-trust-kicker">Мастер</p>
              <p className="mobile-nav-trust-name">Денис Сафи</p>
              <p className="mobile-nav-trust-tagline">
                Ink Masters · {site.city}
              </p>
              <p className="mobile-nav-trust-maps">
                <a href={site.twoGis} target="_blank" rel="noopener noreferrer">
                  2ГИС
                </a>
                <span className="mobile-nav-dot" aria-hidden>
                  ·
                </span>
                <a
                  href={site.yandexMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Яндекс
                </a>
              </p>
            </div>

            <div
              className="mobile-nav-quick"
              aria-label="Быстрая связь со студией"
            >
              <p className="mobile-nav-section-label mobile-nav-quick-label">
                Связь
              </p>
              <a
                href={`tel:${site.phoneTel}`}
                className="mobile-nav-cta-primary btn btn-primary mobile-nav-anim"
                style={{ "--mn-i": nextI() } as React.CSSProperties}
                onClick={onClose}
                aria-label={`Позвонить, ${site.phoneDisplay}`}
              >
                Позвонить
              </a>
              <div className="mobile-nav-cta-grid">
                <a
                  href={site.telegram}
                  className="mobile-nav-cta-chip mobile-nav-anim"
                  style={{ "--mn-i": nextI() } as React.CSSProperties}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  Telegram
                </a>
                <a
                  href={site.vkPersonal}
                  className="mobile-nav-cta-chip mobile-nav-anim"
                  style={{ "--mn-i": nextI() } as React.CSSProperties}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  VK
                </a>
              </div>
              <div
                className="mobile-nav-quick-tail"
                aria-label="Соцсети студии"
              >
                <div className="mobile-nav-social">
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <span className="mobile-nav-dot" aria-hidden>
                    ·
                  </span>
                  <a
                    href={site.vkPersonal}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ВК мастера
                  </a>
                  <span className="mobile-nav-dot" aria-hidden>
                    ·
                  </span>
                  <a href={site.vk} target="_blank" rel="noopener noreferrer">
                    ВК студии
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type MobileNavToggleProps = {
  open: boolean;
  onClick: () => void;
};

export function MobileNavToggle({ open, onClick }: MobileNavToggleProps) {
  return (
    <button
      type="button"
      className={`mobile-nav-toggle${open ? " mobile-nav-toggle--open" : ""}`}
      onClick={onClick}
      aria-expanded={open}
      aria-haspopup="dialog"
      aria-label={open ? "Закрыть меню" : "Открыть меню"}
    >
      <span className="mobile-nav-toggle-bars" aria-hidden>
        <span />
        <span />
        <span />
      </span>
    </button>
  );
}
