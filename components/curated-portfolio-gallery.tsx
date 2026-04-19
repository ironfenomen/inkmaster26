"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { CuratedPortfolioItem } from "@/lib/curated-portfolio";

type Props = {
  items: readonly CuratedPortfolioItem[];
};

export function CuratedPortfolioGallery({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: -1 | 1) => {
      setOpen((i) => {
        if (i === null || items.length === 0) return null;
        const next = (i + dir + items.length) % items.length;
        return next;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, go]);

  useEffect(() => {
    if (open !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (items.length === 0) {
    return (
      <p className="small" style={{ color: "var(--muted)" }}>
        В галерее пока нет кадров — добавьте файлы и записи в{" "}
        <code style={{ fontSize: "0.85em" }}>lib/curated-portfolio.ts</code>.
      </p>
    );
  }

  const current = open !== null ? items[open] : null;

  return (
    <>
      <div className="curated-portfolio-grid" role="list">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="curated-portfolio-tile"
            onClick={() => setOpen(index)}
            aria-label={`Открыть фото ${index + 1} из ${items.length}`}
            role="listitem"
          >
            <Image
              src={item.src}
              alt=""
              fill
              sizes="(max-width: 520px) 50vw, (max-width: 900px) 33vw, 220px"
              className="curated-portfolio-thumb"
            />
          </button>
        ))}
      </div>

      {open !== null && current && (
        <div
          className="curated-portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр работы"
          onClick={close}
        >
          <button
            type="button"
            className="curated-portfolio-lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Закрыть"
          >
            ×
          </button>
          <button
            type="button"
            className="curated-portfolio-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Предыдущее фото"
          >
            ‹
          </button>
          <div
            className="curated-portfolio-lightbox-frame"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="curated-portfolio-lightbox-img-wrap">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 1200px) 92vw, 1100px"
                className="curated-portfolio-lightbox-img"
                priority
              />
            </div>
            <p className="curated-portfolio-lightbox-caption" aria-hidden="true">
              {current.alt}
            </p>
            <p className="curated-portfolio-lightbox-counter">
              {open + 1} / {items.length}
            </p>
          </div>
          <button
            type="button"
            className="curated-portfolio-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Следующее фото"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
