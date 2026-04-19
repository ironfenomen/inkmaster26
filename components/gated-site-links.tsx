"use client";

import type { ReactNode } from "react";
import { site } from "@/lib/site";

type LinkProps = {
  className?: string;
  children?: ReactNode;
};

export function GatedTelLink({ className, children }: LinkProps) {
  return (
    <a href={`tel:${site.phoneTel}`} className={className}>
      {children ?? site.phoneDisplay}
    </a>
  );
}

export function GatedTelegramLink({ className, children }: LinkProps) {
  return (
    <a
      href={site.telegram}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {children ?? "Telegram"}
    </a>
  );
}

export function GatedVkPersonalLink({ className, children }: LinkProps) {
  return (
    <a
      href={site.vkPersonal}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {children ?? "VK"}
    </a>
  );
}

export function GatedWhatsAppLink({ className, children }: LinkProps) {
  return (
    <a
      href={site.whatsapp}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {children ?? "WhatsApp"}
    </a>
  );
}
