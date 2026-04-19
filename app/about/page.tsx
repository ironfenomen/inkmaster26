import type { Metadata } from "next";
import Link from "next/link";
import { FigureImage } from "@/components/figure-image";
import { firmGallerySource, media, mediaAlt } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Денис — тату-мастер | Ink Masters",
  description:
    "Мастер Денис ведёт Ink Masters в Ставрополе (Пирогова 15): диалог, эскиз под тело, без давления. Портфолио на сайте; отзывы и карты — 2ГИС и Яндекс. Запись: звонок, Telegram, VK.",
};

export default function AboutPage() {
  return (
    <main className="page-hero about-page">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Главная</Link> / О мастере
        </div>
        <div className="section-kicker">Тату-мастер · {site.city}</div>
        <h1 className="section-title">Денис — тату-мастер | Ink Masters</h1>
        <p className="section-desc">
          <strong>ул. Пирогова, 15</strong>, цоколь, по предварительной записи. От
          первого сообщения до сеанса Денис сам ведёт переписку, консультацию и
          работу.
        </p>
      </div>

      <section>
        <div className="container grid-2">
          <div>
            <FigureImage
              className="portrait-denis"
              src={media.denisInstagramProfile}
              alt={mediaAlt.denisProfile}
              priority
              variant="portrait"
              sizes="(max-width: 760px) 100vw, 380px"
            />
            <p className="small about-portrait-caption">
              Денис в студии Ink Masters — для знакомства до визита и записи.
            </p>
          </div>
          <div className="content-block">
            <h2>Кто такой Денис как мастер</h2>
            <p>
              Консультация, эскиз под тело и сеанс — у одного мастера, без разрыва
              между перепиской, консультацией и самой работой.
            </p>
            <p>
              Работы — в{" "}
              <Link href="/portfolio">портфолио</Link>, атмосфера и отзывы — на
              картах и в лентах.
            </p>
            <div className="kpi">
              <span>эскиз под тело</span>
              <span>прямой диалог</span>
              <span>темп под работу</span>
              <span>уход под вашу работу</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-block">
            <h2>Подход к работе</h2>
            <p>
              Композиция, плотность и то, как работа будет читаться со временем,
              важнее случайной красивой картинки с экрана. Референс или общее
              настроение — это старт, а не финал.
            </p>
            <p>
              По зоне, ограничениям или нюансам по здоровью лучше говорить сразу.
              Гигиена, порядок и рабочий протокол — в разделе{" "}
              <Link href="/sterility">«Стерильность»</Link>.
            </p>
          </div>

          <div className="content-block">
            <h2>Как проходит взаимодействие</h2>
            <ol className="services-steps">
              <li>
                <strong>Связь.</strong> Звонок, Telegram или VK — зона,
                масштаб, референсы или настроение словами, когда вам удобно
                прийти.
              </li>
              <li>
                <strong>Разговор.</strong> Идея собирается в понятный план по
                сеансам.
              </li>
              <li>
                <strong>Эскиз под тело.</strong> Посадка, детали, ориентир по цене
                — на консультации или в переписке, по ситуации.
              </li>
              <li>
                <strong>Сеанс.</strong> В согласованное время; перерывы в процессе
                — по договорённости.
              </li>
              <li>
                <strong>После.</strong> Рекомендации по уходу под эту работу — что
                важно в первые дни. Общие вопросы — в{" "}
                <Link href="/faq">FAQ</Link>.
              </li>
            </ol>
          </div>

          <div className="content-block">
            <h2>Стиль и работы</h2>
            <p>
              В <Link href="/portfolio">портфолио</Link> и в{" "}
              <Link href="/styles">стилях</Link> —{" "}
              <strong>black &amp; grey</strong>, цвет, нео-трад, японские мотивы,
              реализм, new school — не ради ярлыков, а под задачу, зону и масштаб.
              Дополнительные кадры студии — в{" "}
              <a href={firmGallerySource} target="_blank" rel="noreferrer">
                2ГИС
              </a>{" "}
              и на{" "}
              <Link href="/contacts#contacts-place">картах</Link>.
            </p>
          </div>

          <div className="content-block">
            <h2>Почему к нему возвращаются</h2>
            <p>
              За новой работой возвращаются и приводят знакомых, когда важны прямой
              диалог, аккуратность и результат без ощущения шаблона. Правки на
              эскизе — до старта, а не уже на коже.
            </p>
            <div className="quote">
              <p>
                Почти все мои тату набиты Деном, а старые им отредактированы.
                Всегда подскажет правильное направление в выборе, не навязывая
                своего.
              </p>
              <small>Фрагмент отзыва на 2ГИС</small>
            </div>
          </div>

          <div className="content-block">
            <h2>Где смотреть работы, процесс и отзывы</h2>
            <p>
              Работы — в <Link href="/portfolio">портфолио</Link> и соцсетях.
              Атмосфера студии, свежие кадры и процесс — в{" "}
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              ,{" "}
              <a href={site.vkPersonal} target="_blank" rel="noreferrer">
                VK мастера
              </a>{" "}
              и на{" "}
              <a href={site.vk} target="_blank" rel="noreferrer">
                странице студии
              </a>
              . Оценки и отзывы — в{" "}
              <a href={site.twoGis} target="_blank" rel="noreferrer">
                2ГИС
              </a>{" "}
              и в{" "}
              <a href={site.yandexMaps} target="_blank" rel="noreferrer">
                Яндекс Картах
              </a>
              .
            </p>
          </div>

          <div className="content-block portfolio-cta">
            <h2>Запись</h2>
            <p>
              Звонок, Telegram или VK: зона, размер, референсы или просто описание
              идеи. Дальше Денис сам отвечает и ведёт вас к следующему шагу.
            </p>
            <div className="portfolio-cta-actions portfolio-cta-actions--tiered">
              <a
                className="btn btn-primary"
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
              <a
                className="btn btn-secondary"
                href={site.vkPersonal}
                target="_blank"
                rel="noreferrer"
              >
                VK
              </a>
              <a
                className="btn btn-tertiary"
                href={`tel:${site.phoneTel}`}
              >
                Позвонить
              </a>
              <Link className="btn btn-tertiary" href="/contacts#booking">
                Записаться
              </Link>
              <Link className="btn btn-tertiary" href="/portfolio">
                Портфолио
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
