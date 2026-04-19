import type { Metadata } from "next";
import Link from "next/link";
import { ContactsStudioMap } from "@/components/contacts-studio-map";
import {
  GatedTelLink,
  GatedVkPersonalLink,
} from "@/components/gated-site-links";
import { LeadTieredCta } from "@/components/lead-tiered-cta";
import { JsonLd } from "@/components/json-ld";
import { tattooParlorLd, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Запись и контакты — Ink Masters, Ставрополь | Пирогова 15",
  description:
    "Контакты Ink Masters, Ставрополь: Telegram, VK, звонок +7 (988) 861-84-35. Пирогова 15, цоколь. Режим, адрес, карты и соцсети — на странице.",
};

export default function ContactsPage() {
  return (
    <>
      <JsonLd data={tattooParlorLd} />
      <main className="page-hero page-hero--contacts contacts-page">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Главная</Link> / Контакты и запись
          </div>

          <section
            id="booking"
            className="contacts-booking-hero"
            aria-label="Запись"
          >
            <div className="section-kicker">Запись · {site.city}</div>
            <h1 className="section-title section-title--contacts">
              Запись в Ink Masters
            </h1>
            <p className="contacts-booking-hint">
              Напишите в удобный канал — мастер сам ответит и подхватит следующий шаг.
            </p>
            <LeadTieredCta tierClassName="portfolio-cta-actions portfolio-cta-actions--tiered contacts-booking-actions" />
            <p className="small contacts-booking-meta">
              {site.phoneDisplay} ·{" "}
              <Link href="#contacts-place">Адрес и карты</Link> ·{" "}
              <Link href="/faq">FAQ</Link>
            </p>
          </section>
        </div>

        <section className="contacts-secondary" aria-label="Адрес, карты и соцсети">
          <div className="container">
            <div className="content-block">
              <h2>Как это проходит</h2>
              <ol className="services-steps">
                <li>
                  Напишите или позвоните в удобный канал — дальше мастер подхватывает
                  диалог сам.
                </li>
                <li>
                  Коротко опишите идею и зону — детальный эскиз не нужен на первом
                  сообщении (<Link href="/prices">цены</Link>).
                </li>
                <li>
                  Назовите удобные дни — дальше предложат подходящий слот.
                </li>
              </ol>
            </div>

            <div className="content-block" id="first-message">
              <h2>Первое сообщение</h2>
              <p className="small" style={{ marginTop: 0 }}>
                Хватит пары строк: идея, зона, размер, референсы при наличии, когда
                удобно связаться.
              </p>
              <ul className="services-steps" style={{ listStyle: "disc" }}>
                <li>идея или настроение;</li>
                <li>зона на теле;</li>
                <li>примерный размер;</li>
                <li>удобное время.</li>
              </ul>
              <div className="note" style={{ marginTop: 14 }}>
                <strong>Пример:</strong> «Привет! Хочу тату на предплечье слева,
                про горы, размер с ладонь. Рефы скину. Удобны будни после 18:00».
              </div>
            </div>

            <div className="grid-2" id="contacts-place">
              <div className="content-block">
                <h2>Адрес и режим</h2>
                <table className="table" style={{ marginTop: 4 }}>
                  <tbody>
                    <tr>
                      <th>Адрес</th>
                      <td>
                        {site.city}, {site.street}
                      </td>
                    </tr>
                    <tr>
                      <th>Режим</th>
                      <td>{site.hours}</td>
                    </tr>
                    <tr>
                      <th>Телефон</th>
                      <td>
                        <GatedTelLink />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="small" style={{ marginTop: 14 }}>
                  Работы — в <Link href="/portfolio">портфолио</Link>, подход мастера — на
                  странице <Link href="/about">«О мастере»</Link>.
                </p>
              </div>
              <div className="contacts-map-column">
                <ContactsStudioMap />
              </div>
            </div>

            <div className="content-block external-trust-block" id="contacts-social">
              <h2>Соцсети и карты</h2>
              <p className="small external-trust-lead">
                Лента работ и студийные кадры — в Instagram и VK. Отзывы, рейтинг и
                схема проезда — в 2ГИС и Яндексе.
              </p>
              <div className="external-trust-rows" role="list">
                <div className="external-trust-row" role="listitem">
                  <span className="external-trust-kicker">Лента</span>
                  <div className="external-trust-actions">
                    <a href={site.instagram} target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                    <GatedVkPersonalLink>VK мастера</GatedVkPersonalLink>
                    <a href={site.vk} target="_blank" rel="noreferrer">
                      VK студии
                    </a>
                  </div>
                </div>
                <div className="external-trust-row" role="listitem">
                  <span className="external-trust-kicker">Карты</span>
                  <div className="external-trust-actions">
                    <a href={site.twoGis} target="_blank" rel="noreferrer">
                      2ГИС
                    </a>
                    <a href={site.yandexMaps} target="_blank" rel="noreferrer">
                      Яндекс Карты
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
