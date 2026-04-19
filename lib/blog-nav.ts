/** Навигация блога: порядок ≈ приоритет публикации для пользователя */
export const blogArticleNav = [
  { href: "/blog/pain", label: "Больно ли тату" },
  { href: "/blog/healing", label: "Сколько заживает" },
  { href: "/blog/care", label: "Уход после сеанса" },
  { href: "/blog/choice", label: "Выбор мастера" },
  { href: "/blog/style-choice", label: "Выбор стиля" },
  { href: "/blog/first-message", label: "Первое сообщение" },
  { href: "/blog/price", label: "Из чего цена" },
  { href: "/blog/alcohol", label: "Алкоголь перед тату" },
  { href: "/blog/preparation", label: "Подготовка к сеансу" },
  { href: "/blog/where-stavropol", label: "Где сделать тату" },
] as const;

export const blogSitemapPaths = blogArticleNav.map((x) => x.href);
