"use client";

import type { ReactNode } from "react";
import { site } from "@/lib/site";

type Props = {
  tierClassName?: string;
  /** Дополнительные внутренние ссылки (портфолио, запись и т.д.) */
  children?: ReactNode;
};

export function LeadTieredCta({
  tierClassName = "portfolio-cta-actions portfolio-cta-actions--tiered",
  children,
}: Props) {
  return (
    <div className={tierClassName}>
      <a
        className="btn btn-primary"
        href={site.telegram}
        target="_blank"
        rel="noreferrer"
      >
        Telegram
      </a>
      <a
        className="btn btn-secondary"
        href={site.vkPersonal}
        target="_blank"
        rel="noreferrer"
      >
        VK
      </a>
      <a
        className="btn btn-tertiary"
        href={`tel:${site.phoneTel}`}
        aria-label={`Позвонить, ${site.phoneDisplay}`}
      >
        Позвонить
      </a>
      {children}
    </div>
  );
}
