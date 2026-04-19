"use client";

import "./globals.css";

/**
 * Заменяет корневой layout при фатальной ошибке root layout. Обязательны html/body.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ru" style={{ backgroundColor: "#050505" }}>
      <body className="global-error-body" style={{ backgroundColor: "#050505" }}>
        <main
          style={{
            minHeight: "100dvh",
            display: "grid",
            placeItems: "center",
            padding: "24px",
            background: "var(--bg, #050505)",
            color: "var(--text, #f5f5f7)",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "24rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-display, system-ui)",
                fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                margin: "0 0 12px",
              }}
            >
              Ошибка приложения
            </h1>
            <p style={{ color: "var(--muted, #b8b8c2)", margin: "0 0 20px", lineHeight: 1.55 }}>
              Не удалось отобразить страницу. Обновите вкладку или попробуйте позже.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => reset()}
              style={{ minHeight: 48 }}
            >
              Попробовать снова
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
