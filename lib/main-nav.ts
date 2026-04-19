/**
 * Основная навигация мобильного меню (боковая панель).
 * Десктоп — см. MAIN_NAV_DESKTOP (другой порядок + отзывы).
 * Главная — только через логотип.
 */
/** Мобильное меню: сначала ключевые разделы и запись, затем остальное — без лишнего скролла к базовым ссылкам. */
export const MAIN_NAV = [
  { href: "/portfolio", label: "Портфолио" },
  { href: "/services", label: "Услуги" },
  { href: "/styles", label: "Стили" },
  { href: "/prices", label: "Цены" },
  { href: "/about", label: "О мастере" },
  { href: "/contacts", label: "Контакты · запись" },
  { href: "/udaleniye-tatu", label: "Удаление тату" },
  { href: "/sterility", label: "Стерильность" },
  { href: "/faq", label: "FAQ" },
  { href: "/reviews", label: "Отзывы" },
] as const;

/**
 * Десктопная навигация в шапке: маршруты клиента + отдельный пункт «Удаление тату».
 */
export const MAIN_NAV_DESKTOP = [
  { href: "/portfolio", label: "Портфолио" },
  { href: "/services", label: "Услуги" },
  { href: "/udaleniye-tatu", label: "Удаление тату" },
  { href: "/styles", label: "Стили" },
  { href: "/prices", label: "Цены" },
  { href: "/about", label: "О мастере" },
  { href: "/sterility", label: "Стерильность" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacts", label: "Контакты" },
] as const;
