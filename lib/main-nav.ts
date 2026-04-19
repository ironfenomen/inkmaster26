/**
 * Основная навигация мобильного меню (боковая панель).
 * Десктоп — см. MAIN_NAV_DESKTOP (другой порядок + отзывы).
 * Главная — только через логотип.
 */
export const MAIN_NAV = [
  { href: "/portfolio", label: "Портфолио" },
  { href: "/services", label: "Услуги" },
  { href: "/udaleniye-tatu", label: "Удаление тату" },
  { href: "/prices", label: "Цены" },
  { href: "/styles", label: "Стили" },
  { href: "/about", label: "О мастере" },
  { href: "/sterility", label: "Стерильность" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacts", label: "Контакты" },
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
