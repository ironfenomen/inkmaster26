"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { blogArticleNav } from "@/lib/blog-nav";

const extra = [
  { href: "/portfolio", label: "Портфолио" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/sterility", label: "Стерильность" },
] as const;

function active(pathname: string, href: string) {
  return pathname === href ? "active" : undefined;
}

export function BlogSidebar() {
  const pathname = usePathname();

  return (
    <aside className="side-nav">
      <p className="small blog-sidebar-faq-hint">
        Нужен короткий ответ без чтения статьи? Смотрите{" "}
        <Link href="/faq">FAQ</Link> — здесь материалы глубже.
      </p>
      <h4>Блог</h4>
      <Link href="/blog" className={active(pathname, "/blog")}>
        Все статьи
      </Link>
      {blogArticleNav.map(({ href, label }) => (
        <Link key={href} href={href} className={active(pathname, href)}>
          {label}
        </Link>
      ))}
      <h4 style={{ marginTop: "18px" }}>Разделы</h4>
      {extra.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </aside>
  );
}
