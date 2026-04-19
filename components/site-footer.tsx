import Link from "next/link";
import { MAIN_NAV } from "@/lib/main-nav";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid footer-grid--site">
        <div className="footer-col footer-col--brand">
          <div className="brand">
            INK<span>.</span>MASTERS
          </div>
          <p className="footer-brand-line small">
            {site.street} · {site.city}
          </p>
        </div>

        <nav className="footer-col" aria-label="Подвал: навигация">
          <strong>Навигация</strong>
          <ul className="footer-nav-list">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/reviews">Отзывы</Link>
            </li>
            <li>
              <Link href="/blog">Блог</Link>
            </li>
          </ul>
        </nav>

        <div className="footer-col">
          <strong>Связь</strong>
          <ul className="footer-nav-list">
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <Link href="/contacts#booking" className="footer-book-link">
                Записаться
              </Link>
            </li>
            <li>
              <a href={site.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
            </li>
            <li>
              <a href={site.vkPersonal} target="_blank" rel="noreferrer">
                VK
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <strong>Сети и карты</strong>
          <div className="footer-trust small">
            <p className="footer-trust-line">
              <span className="footer-trust-kicker">Лента</span>
              <span className="footer-trust-links">
                <a href={site.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <span className="footer-dot" aria-hidden>
                  {" "}
                  ·{" "}
                </span>
                <a href={site.vkPersonal} target="_blank" rel="noreferrer">
                  VK мастера
                </a>
                <span className="footer-dot" aria-hidden>
                  {" "}
                  ·{" "}
                </span>
                <a href={site.vk} target="_blank" rel="noreferrer">
                  VK студии
                </a>
              </span>
            </p>
            <p className="footer-trust-line">
              <span className="footer-trust-kicker">Карты</span>
              <span className="footer-trust-links">
                <a href={site.twoGis} target="_blank" rel="noreferrer">
                  2ГИС
                </a>
                <span className="footer-dot" aria-hidden>
                  {" "}
                  ·{" "}
                </span>
                <a href={site.yandexMaps} target="_blank" rel="noreferrer">
                  Яндекс Карты
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
