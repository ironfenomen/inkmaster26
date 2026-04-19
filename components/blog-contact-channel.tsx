"use client";

import type { ReactNode } from "react";
import { site } from "@/lib/site";

const LEAD: Record<"write" | "booking" | "write_ink", string> = {
  write: "Написать",
  booking: "Запись",
  write_ink: "Написать в Ink Masters",
};

/**
 * Строка «Написать / Запись: Telegram, VK» + произвольный хвост (ссылки на контакты и т.д.).
 */
export function BlogContactChannelLine({
  variant,
  suffix,
}: {
  variant: keyof typeof LEAD;
  suffix?: ReactNode;
}) {
  return (
    <>
      {LEAD[variant]}:{" "}
      <a href={site.telegram} target="_blank" rel="noreferrer">
        Telegram
      </a>
      ,{" "}
      <a href={site.vkPersonal} target="_blank" rel="noreferrer">
        VK
      </a>
      {suffix}
    </>
  );
}

/** Вложение в текст: «в Telegram или VK» */
export function BlogGatedTelegramWord(props: { className?: string }) {
  return (
    <a href={site.telegram} className={props.className} target="_blank" rel="noreferrer">
      Telegram
    </a>
  );
}

export function BlogGatedVkWord(props: { className?: string }) {
  return (
    <a href={site.vkPersonal} className={props.className} target="_blank" rel="noreferrer">
      VK
    </a>
  );
}
