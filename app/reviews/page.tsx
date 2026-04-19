import type { Metadata } from "next";
import Link from "next/link";
import { LeadTieredCta } from "@/components/lead-tiered-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Отзывы о студии Ink Masters — цитаты с 2ГИС",
  },
  description:
    "Отзывы клиентов Ink Masters: цитаты с 2ГИС. Рейтинг на картах; галерея на сайте; запись — телефон, Telegram, VK.",
  keywords: [
    "отзывы тату Ставрополь",
    "отзывы Ink Masters",
    "тату мастер отзывы",
    "2ГИС тату Ставрополь",
  ],
};

const quotes = [
  {
    text: "Профессионально, стерильно, качественная консультация, разумная цена. Забиваюсь у Дениса уже 10 лет.",
    author: "Mikola 9802 • 2GIS",
  },
  {
    text: "За стерильность и чистоту можно не беспокоиться. Уютная атмосфера и демократичные цены. Денис всегда посоветует и сделает лучше, чем изначально задумывалось.",
    author: "Валентина Бречко • 2GIS",
  },
  {
    text: "Стерильно и безопасно, отличная доброжелательная атмосфера. Почти все мои тату набиты Деном, а старые им отредактированы.",
    author: "Светлана Подопрыголова • 2GIS",
  },
  {
    text: "Почти все мои тату сделаны тут. Атмосфера салона приятная, качество работ на высоте. Сомневаюсь, что когда-либо сменю мастера.",
    author: "Алексей Бережной • 2GIS",
  },
  {
    text: "Когда я приехал в тату салон, меня встретил очень добрый приятный мастер. По окончании работы был ошеломлён качеством и красотой работы.",
    author: "Николай Зарудний • 2GIS",
  },
  {
    text: "Стерильно, как в операционной. Денчик дорабатывает эскиз так, чтобы он максимально круто смотрелся именно на вашем теле.",
    author: "Dina Kononova • 2GIS",
  },
];

export default function ReviewsPage() {
  return (
    <main className="page-hero reviews-page">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Главная</Link> / Отзывы
        </div>
        <div className="section-kicker">Отзывы · {site.city}</div>
        <h1 className="section-title">Отзывы — Ink Masters</h1>
        <p className="section-desc">
          Цитаты из <strong>2ГИС</strong> — как в открытой карточке студии. Полные тексты
          отзывов и актуальные оценки — в сервисах карт.
        </p>

        <aside
          className="home-entity reviews-trust-panel"
          aria-label="Рейтинг Ink Masters на картах"
        >
          <p>
            <strong>{site.mapsRating.value} из 5</strong> — ориентир по{" "}
            {site.mapsRating.ratingsCount} оценкам в подборке для сайта. Свежие отзывы
            и актуальные счётчики — в сервисах по кнопкам ниже.
          </p>
          <div className="reviews-trust-actions">
            <a
              className="btn btn-secondary"
              href={site.twoGis}
              target="_blank"
              rel="noreferrer"
            >
              Открыть в 2ГИС
            </a>
            <a
              className="btn btn-secondary"
              href={site.yandexMaps}
              target="_blank"
              rel="noreferrer"
            >
              Яндекс Карты
            </a>
          </div>
        </aside>
      </div>

      <section>
        <div className="container">
          <h2 className="section-title reviews-block-title">
            Что повторяют в текстах
          </h2>
          <p className="section-desc reviews-block-lead">
            В отзывах чаще всего — стерильность, спокойствие, цена, эскиз под тело.
          </p>
        </div>
        <div className="container grid-3">
          {quotes.map((q) => (
            <div key={q.author} className="quote">
              <p>{q.text}</p>
              <small>{q.author}</small>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container content-block portfolio-cta">
          <h2 className="section-title reviews-cta-title">
            Дальше без спешки
          </h2>
          <p className="section-desc reviews-cta-lead">
            Следующий шаг — галерея или короткое сообщение мастеру.
          </p>
          <LeadTieredCta>
            <Link className="btn btn-tertiary" href="/portfolio">
              Портфолио
            </Link>
            <Link className="btn btn-tertiary" href="/contacts#booking">
              Записаться
            </Link>
          </LeadTieredCta>
        </div>
      </section>
    </main>
  );
}
