import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { firmGallerySource } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Стерильность в Ink Masters — что важно знать до сеанса",
  description:
    "Стерильность и порядок в Ink Masters: рабочее место, расходники по регламенту, понятный ход сеанса и уход. Карты в контактах, запись в WhatsApp и Telegram; вопросы — в FAQ.",
};

export default function SterilityPage() {
  return (
    <main className="page-hero sterility-page">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Главная</Link> / Стерильность
        </div>
        <div className="section-kicker">Гигиена · студия</div>
        <h1 className="section-title">
          Стерильность в Ink Masters — что важно знать до сеанса
        </h1>
        <p className="section-desc">
          Чистое рабочее место, одноразовые расходники там, где это нужно, и понятный
          порядок сеанса. Адрес и карты — в{" "}
          <Link href="/contacts#contacts-place">контактах</Link>, запись — через{" "}
          <a href={site.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>{" "}
          или{" "}
          <a href={site.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>
          . Ниже — как это устроено в работе.
        </p>
      </div>

      <section>
        <div className="container grid-2 sterility-page__intro-grid">
          <div className="media-frame sterility-lead">
            <Image
              src="/media/sterility-hero.png"
              alt="Ink Masters — чистое рабочее место в студии"
              fill
              sizes="(max-width:760px) 100vw, 45vw"
              className="media-img sterility-lead-img"
            />
            <div className="media-vignette" aria-hidden />
          </div>
          <div className="content-block">
            <h2>Как устроена стерильность</h2>
            <p>
              Рабочее место готовится к сеансу заранее: без лишних вещей на столе и с
              понятным набором под конкретную работу.
            </p>
            <p>
              Инструмент и расходники под сеанс собираются отдельно. Одноразовое —
              там, где нужно; остальное — по регламенту студии.
            </p>
            <p>
              Фото кабинета и отзывы смотрите в карточке студии на{" "}
              <a href={site.twoGis} target="_blank" rel="noreferrer">
                2ГИС
              </a>{" "}
              и в{" "}
              <a href={site.yandexMaps} target="_blank" rel="noreferrer">
                Яндекс Картах
              </a>
              , дополнительные кадры — в{" "}
              <a href={firmGallerySource} target="_blank" rel="noreferrer">
                галерее 2ГИС
              </a>{" "}
              и в <Link href="/portfolio">портфолио</Link>.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="content-block">
            <h2>Как проходит тату-сеанс</h2>
            <p>Порядок шагов от сеанса к сеансу не меняется.</p>
            <ol className="services-steps">
              <li>
                <strong>Подготовка.</strong> Обсуждаем зону, посадку, удобное
                положение и нюансы по самочувствию.
              </li>
              <li>
                <strong>Работа.</strong> Мастер работает в перчатках, рабочее место
                уже собрано под сеанс.
              </li>
              <li>
                <strong>Завершение.</strong> После работы зона приводится в аккуратное
                состояние, дальше идут рекомендации по уходу.
              </li>
              <li>
                <strong>Уход.</strong> Что делать в первые дни, говорят под вашу
                работу; общие ответы — в <Link href="/faq">FAQ</Link> и в{" "}
                <Link href="/blog/care">материале по уходу</Link>.
              </li>
            </ol>
          </div>

          <div className="content-block">
            <h2>Почему это важно</h2>
            <p>
              Безопасность начинается не с вывески, а с порядка: место подготовлено,
              набор под сеанс собран, протокол понятен. Так отличается студийная
              работа от хаоса.
            </p>
            <p>
              Если есть аллергии, особенности кожи или вопросы по самочувствию —
              лучше сказать об этом заранее, ещё до записи.
            </p>
          </div>

          <div className="content-block">
            <h2>Что важно клиенту</h2>
            <p>
              Важно не слово «стерильность», а как это выглядит: чистая зона, ясный
              порядок, спокойный диалог и уход после сеанса.
            </p>
            <p>
              Громких гарантий не обещают — важнее честный порядок и ясный протокол.
            </p>
          </div>

          <div className="content-block portfolio-cta">
            <h2>Остались вопросы — напишите</h2>
            <p>
              Если хотите уточнить что-то по стерильности, уходу или самому сеансу —
              напишите в WhatsApp или Telegram. Телефон, адрес и остальные каналы связи
              — на{" "}
              <Link href="/contacts">странице контактов</Link>.
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
