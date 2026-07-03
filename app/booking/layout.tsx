import type { Metadata } from "next";
import type { ReactNode } from "react";

/** Редирект на /contacts#booking — не индексируем как отдельную страницу. */
export const metadata: Metadata = {
  title: "Запись на сеанс — Ink Masters Ставрополь",
  description:
    "Запись на тату-сеанс в студию Ink Masters, Ставрополь. Перенаправляем на страницу контактов и записи — свяжитесь с мастером в мессенджере или по телефону.",
  robots: { index: false, follow: true },
};

export default function BookingLayout({ children }: { children: ReactNode }) {
  return children;
}
