# Ink Masters — визуальные доработки (enhancements)

## Файлы в репозитории

| Файл | Путь в проекте |
|------|----------------|
| `enhancements.css` | `app/enhancements.css` |
| `enhancements.tsx` | `components/enhancements.tsx` |

> В этом проекте используется каталог `app/` в корне (без `src/`). Если у вас вариант с `src/app`, перенесите файлы в `src/app/` и `src/components/` и поправьте импорты.

---

## Шаг 1: CSS

В `app/layout.tsx` после `globals.css`:

```tsx
import "./globals.css";
import "./enhancements.css";
```

---

## Шаг 2: Компоненты в layout

```tsx
import { ScrollProgress, CustomCursor, ScrollRevealInit } from "@/components/enhancements";

// Внутри <body> в начале:
<ScrollProgress />
<CustomCursor />
<ScrollRevealInit />
<SiteHeader />
```

---

## Шаг 3: Главная страница

- Импорт: `import { Marquee } from "@/components/enhancements";`
- Вставить `<Marquee />` между секциями (уже сделано: перед блоком «Портфолио» и перед финальным CTA).
- Классы `reveal` / `reveal-stagger` на нужных блоках (см. текущий `app/page.tsx`).

---

## Что делает каждый блок

| Компонент / стиль | Эффект |
|-------------------|--------|
| `ScrollProgress` | Золотая полоска прогресса у верхнего края |
| `CustomCursor` | Кастомный курсор (только hover/fine pointer) |
| `ScrollRevealInit` | IntersectionObserver для `.reveal` и `.reveal-stagger` (переинициализация при смене `pathname`) |
| `Marquee` | Бегущая строка с тегами студии |
| Grain (`body::after`) | Лёгкая плёночная зернистость (`z-index: 5`, не перекрывает лайтбокс) |
| Галерея `.gallery .work` | Zoom + overlay при hover |
| `home-final-cta` | Доп. золотое свечение (::before) |
| Отзывы | Дополнительный левый акцент у карточек на главной |

---

## Доступность

В `enhancements.css` учтён `prefers-reduced-motion: reduce` (отключаются marquee и reveal).
