"use client";

import Link from "next/link";

/**
 * Граница ошибок сегмента (App Router). Нужна для стабильной работы dev/production.
 */
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="page-hero">
      <div
        className="container"
        style={{ textAlign: "center", padding: "clamp(40px, 8vw, 80px) 0" }}
      >
        <h1 className="section-title" style={{ marginBottom: "0.75rem" }}>
          Не удалось загрузить блок страницы
        </h1>
        <p className="section-desc" style={{ marginBottom: "1.25rem", maxWidth: "28rem", marginInline: "auto" }}>
          Произошла ошибка при отображении. Попробуйте снова или откройте главную.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button type="button" className="btn btn-primary" onClick={() => reset()}>
            Попробовать снова
          </button>
          <Link href="/" className="btn btn-secondary">
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
