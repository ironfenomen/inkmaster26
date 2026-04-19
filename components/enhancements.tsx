"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* ═══════════════════════════════════════════════════════════
   1. SCROLL PROGRESS BAR
   Тонкая золотая линия вверху страницы.

   Использование: <ScrollProgress /> — вставить в layout.tsx
   ═══════════════════════════════════════════════════════════ */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      el.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div ref={ref} className="scroll-progress" />;
}

/* ═══════════════════════════════════════════════════════════
   2. CUSTOM CURSOR
   Маленький кружок + кольцо, следующие за мышью.
   Кольцо растёт при наведении на кликабельные элементы.

   Использование: <CustomCursor /> — вставить в layout.tsx
   ═══════════════════════════════════════════════════════════ */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Только на десктопе
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => document.body.classList.add("cursor-hover");
    const onLeaveInteractive = () => document.body.classList.remove("cursor-hover");

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, .btn, .work")) {
        onEnterInteractive();
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, .btn, .work")) {
        onLeaveInteractive();
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      document.body.classList.remove("cursor-hover");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   3. SCROLL REVEAL OBSERVER
   Автоматически добавляет .revealed к элементам с .reveal
   при появлении в viewport.

   Использование: <ScrollRevealInit /> — вставить в layout.tsx
   ═══════════════════════════════════════════════════════════ */
export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-stagger");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

/* ═══════════════════════════════════════════════════════════
   4. MARQUEE STRIP
   Бегущая строка между секциями.

   Использование:
   <Marquee /> — вставить между секциями в page.tsx
   ═══════════════════════════════════════════════════════════ */
const MARQUEE_ITEMS = [
  "Ink Masters",
  "Ставрополь",
  "Black & Grey",
  "Цвет",
  "Реализм",
  "Перекрытие",
  "Лазер",
  "Татуировка",
  "Эскиз",
  "Пирогова 15",
];

export function Marquee() {
  const content = MARQUEE_ITEMS.map((item, i) => (
    <span key={i}>
      <span>{item}</span>
      <span className="marquee-dot" aria-hidden="true" />
    </span>
  ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-content">{content}</div>
        <div className="marquee-content">{content}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   5. SECTION DIVIDER
   Тонкая горизонтальная линия с fade по краям.

   Использование: <SectionDivider /> — между секциями
   ═══════════════════════════════════════════════════════════ */
export function SectionDivider() {
  return <hr className="section-divider" />;
}
