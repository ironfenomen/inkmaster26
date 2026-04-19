"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "ink-masters-cookie-consent";
const STORAGE_VALUE = "v1";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === STORAGE_VALUE) return;
    } catch {
      return;
    }
    const t = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(t);
  }, []);

  const accept = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, STORAGE_VALUE);
    } catch {
      /* private mode etc. */
    }
    setVisible(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("ink-cookie-consent-accepted"));
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-label="Согласие на cookie, аналитику и обработку данных"
      aria-describedby="cookie-banner-desc"
    >
      <div className="cookie-banner-inner">
        <p id="cookie-banner-desc" className="cookie-banner-text">
          Продолжая пользоваться сайтом, вы принимаете использование cookie, работу
          Яндекс&nbsp;Метрики, VK и Telegram, а также условия{" "}
          <Link href="/privacy" className="cookie-banner-inline-link">
            политики конфиденциальности
          </Link>{" "}
          и{" "}
          <Link href="/consent" className="cookie-banner-inline-link">
            согласия на обработку персональных данных
          </Link>
          .
        </p>
        <div className="cookie-banner-actions">
          <Link href="/cookies" className="cookie-banner-foot-link">
            О cookie
          </Link>
          <button
            type="button"
            className="btn btn-primary cookie-banner-accept"
            onClick={accept}
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
