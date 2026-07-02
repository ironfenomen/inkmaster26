import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { HomeCuratedGallery } from "@/components/home-curated-gallery";
import { Marquee } from "@/components/enhancements";
import { MapLinks } from "@/components/map-links";
import {
  HomeFinalBookingCta,
  HomeHeroContactRow,
} from "@/components/home-contact-ctas";
import { tattooParlorLd, site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Тату-студия и тату-мастер в Ставрополе — Ink Masters (Денис) | запись, портфолио, цены",
  description:
    "Тату-студия Ink Masters в Ставрополе: мастер Денис Сафи, ул. Пирогова 15 (цоколь), запись 10:00–20:00. Портфолио, цены от 3000 ₽, перекрытие и удаление тату. Рейтинг 5.0 (48 оценок) на 2ГИС и Яндекс.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={tattooParlorLd} />
      <main className="home-page">
        <section className="hero hero--ink">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge">
                <span className="dot" /> Пирогова 15 · 10:00–20:00 · по записи
              </div>
              <h1 className="hero-title--home-unified hero-title--ink">
                <span className="hero-h1-desktop">
                  <span className="hero-h1-desktop__line1">
                    <span className="hero-h1-desktop__kicker">
                      Тату-студия{" "}
                      <span className="hero-title-brand">Ink Masters</span>
                    </span>
                    <span className="hero-h1-desktop__place">в Ставрополе</span>
                  </span>
                  <span className="hero-h1-desktop__line2">Мастер Денис Сафи</span>
                </span>
                <span className="hero-h1-mobile">
                  <span className="hero-h1-mobile__stack">
                    <span className="hero-h1-mobile__line hero-h1-mobile__line--brand">
                      Тату-студия{" "}
                      <span className="hero-title-brand">Ink Masters</span>
                    </span>
                    <span className="hero-h1-mobile__line hero-h1-mobile__line--city">
                      в Ставрополе
                    </span>
                  </span>
                  <span className="hero-h1-mobile__master">Мастер Денис Сафи</span>
                </span>
              </h1>
              <p className="hero-subtitle hero-subtitle--ink">
                Black &amp; grey и цвет, перекрытия и доводка эскиза. Старое снимаем лазером — новое
                собираем до сеанса, без полумер и сюрпризов уже в работе.
              </p>
              <ul className="hero-product-tags" aria-label="Направления студии">
                <li>Black &amp; Grey</li>
                <li>Цвет</li>
                <li>Перекрытие</li>
                <li>Удаление тату</li>
              </ul>
              <HomeHeroContactRow />
              <p className="hero-cta-micro">
                <Link href="#home-works">Смотреть работы</Link>
                {" · "}
                Первый контакт — зона, идея, эскиз и сетка сеансов. До первого касания всё утверждено.
              </p>
              <div
                className="hero-value-strip"
                aria-label="Преимущества студии Ink Masters"
              >
                <div className="hero-value-card">
                  <div className="hero-value-card__label">Один мастер</div>
                  <div className="hero-value-card__text">
                    Эскиз, сеанс и сопровождение — одна линия ответственности и прямой контакт с
                    Денисом Сафи.
                  </div>
                </div>
                <div className="hero-value-card">
                  <div className="hero-value-card__label">Перекрытие · лазер</div>
                  <div className="hero-value-card__text">
                    Старая работа, кожа и цель — в одном кадре. Новое должно бить сильнее, чем «просто
                    перекрыть старое».
                  </div>
                </div>
                <div className="hero-value-card">
                  <div className="hero-value-card__label">Личный слот</div>
                  <div className="hero-value-card__text">
                    Слот закреплён под вас и под конкретную работу — без чужих сеансов в вашем графике.
                  </div>
                </div>
              </div>
              <div className="hero-meta hero-meta--home-slim hero-meta--legacy-mobile">
                <div className="stat">
                  <strong>1</strong>
                  <span>мастер на весь цикл</span>
                </div>
                <div className="stat">
                  <strong>Запись</strong>
                  <span>онлайн и звонок</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="glow one" />
              <div className="panel hero-showcase">
                <div className="hero-showcase-grid hero-showcase-grid--unified-trust hero-showcase-grid--ink-dt">
                  <div className="photo-card large has-photo hero-photo-card--ink">
                    <Image
                      src="/media/hero-showcase-main.png"
                      alt="Black & grey тату на предплечье: портрет, череп и орнамент — работа тату-студии Ink Masters, Ставрополь"
                      fill
                      priority
                      sizes="(max-width: 760px) 100vw, 42vw"
                      className="hero-photo-img hero-photo-img--showcase"
                    />
                    <div className="photo-fill" />
                    <div className="photo-overlay">
                      <div className="overline">Портфолио</div>
                      <h3 className="card-title">Чистая работа. Сильный результат.</h3>
                      <p className="card-text">
                        Black &amp; grey и цвет — ещё кадры <Link href="#home-works">ниже</Link> и в{" "}
                        <Link href="/portfolio">полной галерее</Link>. Эскиз и задачу фиксируем до сеанса: на коже
                        ровно то, что утвердили вместе с Денисом.
                      </p>
                    </div>
                  </div>
                  <div className="hero-right-stack">
                    <div className="text-card home-trust-card home-trust-card--ink">
                      <div className="overline">На картах</div>
                      <h3 className="card-title">
                        {site.mapsRating.value.toFixed(1)} · {site.mapsRating.ratingsCount}{" "}
                        оценок
                      </h3>
                      <p className="card-text home-trust-card-text">
                        Рейтинг — только вход. По снимкам видно плотность, свет и то, как студия выглядит без
                        фильтра.
                      </p>
                      <p className="hero-trust-links">
                        <Link href="/reviews">Отзывы</Link>
                        <span aria-hidden> · </span>
                        <Link href="/contacts#contacts-place">Проезд</Link>
                      </p>
                      <p className="hero-trust-tagline">
                        Настоящие кадры студии — не рекламная подача.
                      </p>
                    </div>
                    <div className="mini-card hero-removal-card">
                      <div className="overline">Лазер</div>
                      <h3 className="card-title">Удаление тату</h3>
                      <p className="card-text">
                        Старое снимаем с учётом кожи и плана на новое. Следующий шаг собираем так, чтобы линия
                        держалась годами, а не до ближайшей доработки.{" "}
                        <Link href="/udaleniye-tatu" className="hero-removal-card__link">
                          Про направление
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="home-studio-block"
          aria-label="Как мы работаем и студия на карте"
        >
          <div className="container">
            <div className="home-studio-block-grid">
              <div className="home-studio-block-why home-section-why home-section-why--ink">
                <div className="section-head section-head--why-compact reveal">
                  <div>
                    <div className="section-kicker">Как мы работаем</div>
                    <h2 className="section-title section-title--why-tight">
                      От идеи до тату на коже
                    </h2>
                    <p className="home-why-footnote">
                      Денис Сафи ведёт цикл от эскиза до сеанса: форма, графика, посадка на теле — без шаблонов и «универсальных» решений.
                    </p>
                  </div>
                </div>
                <ul className="home-why-list">
                  <li>
                    <span className="home-why-item-title">Под вашу анатомию</span>
                    <span className="home-why-item-desc">
                      Эскиз под анатомию и зону — не копируем чужой рисунок один в один.
                    </span>
                  </li>
                  <li>
                    <span className="home-why-item-title">Ваш слот — без потока</span>
                    <span className="home-why-item-desc">
                      Слот только ваш: без очереди и чужих сеансов между вашими заходами.
                    </span>
                  </li>
                  <li>
                    <span className="home-why-item-title">Чистая графика, сильный край</span>
                    <span className="home-why-item-desc">
                      Black &amp; grey и крупные фрагменты держим на точности, чистом крае и визуальной силе.
                    </span>
                  </li>
                  <li>
                    <span className="home-why-item-title">Крупные проекты — по этапам</span>
                    <span className="home-why-item-desc">
                      Крупные работы бьём поэтапно — порядок сеансов и финальный вид известны заранее.
                    </span>
                  </li>
                </ul>
                <div className="home-section-path-cta home-section-path-cta--studio">
                  <Link className="btn btn-primary" href="/contacts#booking">
                    Записаться
                  </Link>
                </div>
              </div>
              <aside
                className="home-studio-block-location home-location home-location--ink"
                id="home-location"
                aria-label="Студия: адрес и карты"
              >
                <div className="home-location-card">
                  <div className="section-kicker">Студия Ink Masters</div>
                  <h2 className="home-location-title">Пирогова 15 · Ставрополь</h2>
                  <p className="home-location-lead">
                    Цоколь, отдельный вход. Запись по слоту — приезжаете на своё время.
                    <br />
                    Адрес и маршрут — без лишней геометрии.
                  </p>
                  <div className="home-location-facts">
                    <p className="home-location-line">
                      {site.city}, {site.street}
                    </p>
                    <p className="home-location-hours">
                      <span className="home-location-hours-kicker">Режим</span>
                      {site.hours}
                    </p>
                  </div>
                  <div className="home-location-route">
                    <span
                      className="home-location-route-label"
                      id="home-location-route-label"
                    >
                      Маршрут
                    </span>
                    <MapLinks variant="home" aria-labelledby="home-location-route-label" />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <Marquee />

        <section className="home-portfolio-section" id="home-works">
          <div className="container">
            <div className="section-head section-head--portfolio-home reveal">
              <div>
                <div className="section-kicker">Портфолио</div>
                <h2 className="section-title">Работы</h2>
                <p className="section-desc portfolio-home-lead">
                  Часть работ — здесь. Остальное — в{" "}
                  <Link href="/portfolio" className="portfolio-home-lead-link">
                    полном портфолио
                  </Link>
                  : крупные кадры, детали и просмотр без потери фактуры.
                </p>
              </div>
            </div>
            <HomeCuratedGallery />
            <div className="portfolio-home-cta portfolio-home-cta--dual portfolio-home-cta--funnel">
              <Link
                className="btn btn-primary portfolio-home-cta-booking--desktop"
                href="/contacts#booking"
              >
                Записаться
              </Link>
              <Link className="btn btn-tertiary" href="/portfolio">
                Все работы
              </Link>
            </div>
          </div>
        </section>

        <section className="home-master-sterility-section" aria-label="Мастер и стерильность">
          <div className="container home-master-sterility-container">
            <div className="grid-2 home-master-sterility-grid reveal-stagger">
              <div className="content-block home-master-sterility-card home-master-sterility-card--master">
                <div className="section-kicker">О мастере</div>
                <h2>Денис Сафи</h2>
                <p>
                  Денис Сафи ведёт идею, эскиз и сеанс сам. Без лишних слоёв между задумкой и тем, что в итоге
                  остаётся на коже.
                </p>
                <p className="section-desc home-master-sterility-meta">
                  Подход, работы и профиль мастера — на{" "}
                  <Link href="/about">отдельной странице</Link>.
                </p>
                <div className="kpi">
                  <span>Прямой контакт</span>
                  <span>Эскиз под вас</span>
                  <span>Без шаблонов</span>
                </div>
                <p className="home-master-sterility-cta">
                  <Link className="btn btn-secondary" href="/about">
                    О мастере
                  </Link>
                </p>
              </div>
              <div className="content-block home-master-sterility-card home-master-sterility-card--sterility">
                <div className="section-kicker">Стерильность</div>
                <h2>Чистая работа</h2>
                <p>
                  Чистота процесса здесь — стандарт студии, а не формальность. Одноразовые расходники, своя зона сеанса
                  и обработка поверхностей — как и должно быть в месте, где к работе относятся всерьёз.
                </p>
                <div className="kpi">
                  <span>Одноразовый набор</span>
                  <span>Зона сеанса</span>
                  <span>Чистые поверхности</span>
                </div>
                <p className="home-master-sterility-cta">
                  <Link className="btn btn-secondary" href="/sterility">
                    Стерильность
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="home-reviews-section" aria-label="Отзывы с карт">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="section-kicker">Отзывы</div>
                <h2 className="section-title">Отзывы</h2>
                <p className="section-desc home-reviews-lead">
                  Отзывы с карт — коротко, по факту, без лишнего пересказа.{" "}
                  <Link href="/reviews" className="home-reviews-more-link">
                    Ещё отзывы
                  </Link>
                </p>
              </div>
            </div>
            <div className="grid-3 home-reviews-grid reveal-stagger">
              <div className="quote">
                <p>
                  В кабинете чисто, не для галочки — с первых минут видно, что к телу относятся всерьёз.
                </p>
                <small>2ГИС • отзыв клиента</small>
              </div>
              <div className="quote">
                <p>
                  Эскиз подогнали под форму — не натягивали чужое. С Денисом всё прозрачно: зона,
                  ход работы, что в итоге на коже — без лишних слов.
                </p>
                <small>Яндекс Карты • отзыв клиента</small>
              </div>
              <div className="quote">
                <p>
                  После заживления линия держится — край и плотность на месте. Уровень студии виден в работе,
                  не в декоре.
                </p>
                <small>2ГИС • отзыв клиента</small>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        <section className="home-final-cta reveal" aria-label="Запись на сеанс">
          <div className="container cta cta--home-booking">
            <h2>Записаться на сеанс</h2>
            <p className="home-final-cta-hint">
              Зона, идея и удобные дни — дальше собираем понятный следующий шаг без лишней переписки.
            </p>
            <HomeFinalBookingCta />
            <p className="home-final-cta-foot">
              <Link href="/contacts#booking">Остальные контакты — на странице контактов</Link>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
