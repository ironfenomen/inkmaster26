"use client";

import Link from "next/link";
import { site } from "@/lib/site";

export function HomeHeroContactRow() {
  return (
    <div className="hero-actions hero-actions--pair hero-actions--hero-focus hero-actions--ink">
      <a
        className="btn btn-primary btn-hero-primary"
        href={site.telegram}
        target="_blank"
        rel="noreferrer"
      >
        Telegram
      </a>
      <Link
        className="btn btn-secondary btn-hero-secondary"
        href="/contacts#booking"
      >
        Записаться
      </Link>
    </div>
  );
}

export function HomeFinalBookingCta() {
  return (
    <div className="cta-actions cta-actions--home-booking">
      <a
        className="btn btn-primary home-final-cta-primary"
        href={site.telegram}
        target="_blank"
        rel="noreferrer"
      >
        Telegram
      </a>
      <div className="home-final-cta-secondary-row">
        <a
          className="btn btn-secondary home-final-cta-sub"
          href={site.vkPersonal}
          target="_blank"
          rel="noreferrer"
        >
          VK
        </a>
        <a
          className="btn btn-tertiary home-final-cta-sub"
          href={`tel:${site.phoneTel}`}
          aria-label={`Позвонить, ${site.phoneDisplay}`}
        >
          Позвонить
        </a>
      </div>
    </div>
  );
}
