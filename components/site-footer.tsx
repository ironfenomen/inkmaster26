import Link from "next/link";
import { FooterOutboundContact } from "@/components/footer-outbound-contact";
import { FooterTrustVkMaster } from "@/components/footer-trust-vk-master";
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
            <FooterOutboundContact />
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
                <FooterTrustVkMaster />
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

      <div className="footer-legal-bar">
        <div className="container footer-legal-inner">
          <div className="footer-legal-meta">
            <p className="footer-legal-line footer-legal-line--lead">
              Сайт Ink Masters принадлежит и администрируется{" "}
              <span className="footer-legal-company">ООО «Амадеус»</span>
            </p>
            <p className="footer-legal-line footer-legal-line--ids">
              ИНН 2634111890 · ОГРН 1232600005571
            </p>
            <p className="footer-legal-line footer-legal-line--executor">
              <span className="footer-legal-executor-label">
                Основной исполнитель услуг
              </span>
              Тату-Студия Ink Master
            </p>
          </div>
          <nav
            className="footer-legal-docs"
            aria-label="Юридические документы"
          >
            <Link href="/privacy">Политика ПДн</Link>
            <span className="footer-legal-docs-sep" aria-hidden>
              ·
            </span>
            <Link href="/consent">Согласие на обработку ПДн</Link>
            <span className="footer-legal-docs-sep" aria-hidden>
              ·
            </span>
            <Link href="/cookies">Cookie и метрики</Link>
            <span className="footer-legal-docs-sep" aria-hidden>
              ·
            </span>
            <Link href="/terms">Пользовательское соглашение</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
