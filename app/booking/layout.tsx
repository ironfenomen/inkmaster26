import type { Metadata } from "next";
import type { ReactNode } from "react";

/** Редирект на /contacts#booking — не индексируем как отдельную страницу. */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function BookingLayout({ children }: { children: ReactNode }) {
  return children;
}
