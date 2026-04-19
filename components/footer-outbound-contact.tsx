"use client";

import Link from "next/link";
import {
  GatedTelLink,
  GatedTelegramLink,
  GatedVkPersonalLink,
} from "@/components/gated-site-links";

export function FooterOutboundContact() {
  return (
    <>
      <li>
        <GatedTelLink />
      </li>
      <li>
        <Link href="/contacts#booking" className="footer-book-link">
          Записаться
        </Link>
      </li>
      <li>
        <GatedTelegramLink />
      </li>
      <li>
        <GatedVkPersonalLink />
      </li>
    </>
  );
}
