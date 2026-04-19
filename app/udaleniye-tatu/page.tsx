import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadTieredCta } from "@/components/lead-tiered-cta";
import { tattooRemovalProcessPhotos } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Удаление тату в Ink Masters — лазер, консультация, Ставрополь",
  description:
    "Лазерное удаление и осветление тату в Ink Masters: консультация, план сеансов, подготовка зоны под новую работу. Один мастер, запись в Ставрополе.",
};

export default function TattooRemovalPage() {
  return (
    <main className="page-hero tattoo-removal-page">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Главная</Link> / Удаление тату
        </div>
        <div className="section-kicker">Лазер · {site.city}</div>
        <h1 className="section-title">Удаление тату в Ink Masters</h1>
        <p className="section-desc">
          Если старую работу нужно убрать полностью или осветлить под новый проект,
          сначала смотрим кожу, пигмент и задачу. После этого становится понятно,
          сколько этапов потребуется и как двигаться дальше.
        </p>
        <LeadTieredCta
          tierClassName="tattoo-removal-hero-actions portfolio-cta-actions portfolio-cta-actions--tiered"
        >
          <Link className="btn btn-tertiary" href="/contacts#booking">
            Консультация
          </Link>
        </LeadTieredCta>
      </div>

      <section>
        <div className="container">
          <div className="content-block">
            <p className="section-kicker tattoo-removal-section-kicker">
              Мастер направления
            </p>
            <h2>Кто ведёт удаление</h2>
            <p>
              Удаление ведёт мастер Ink Masters. На консультации смотрим, как лежит
              пигмент, в каком состоянии кожа и какой результат нужен: полное удаление,
              осветление под перекрытие или поэтапный разбор старой работы.
            </p>
            <div className="tattoo-removal-trust">
              <h3 className="tattoo-removal-trust-title">
                Как это выглядит в работе
              </h3>
              <p className="tattoo-removal-trust-lead">
                Три кадра из реального процесса: кабинет, работа по зоне и сам проход.
                Без стоков и без декоративной картинки — только реальная работа мастера.
              </p>
              <ol className="tattoo-removal-timeline">
                {tattooRemovalProcessPhotos.map((photo, index) => (
                  <li key={photo.src} className="tattoo-removal-timeline-item">
                    <figure className="tattoo-removal-photo">
                      <div className="tattoo-removal-photo-frame">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 760px) 100vw, 33vw"
                          className="media-img"
                        />
                      </div>
                      <figcaption className="tattoo-removal-photo-caption">
                        <span className="tattoo-removal-photo-step" aria-hidden>
                          {index + 1}
                        </span>
                        <span className="tattoo-removal-photo-label">
                          {photo.stepLabel}
                        </span>
                        <span className="tattoo-removal-photo-trust">
                          {photo.trustCaption}
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="content-block">
            <h2>Когда удаление имеет смысл</h2>
            <ul>
              <li>Полное удаление старой работы</li>
              <li>Осветление зоны под перекрытие</li>
              <li>Подготовка кожи под новую татуировку</li>
              <li>Поэтапный разбор старого пигмента</li>
            </ul>
          </div>

          <div className="content-block">
            <h2>Как проходит удаление</h2>
            <p>
              Сначала консультация и оценка зоны. После этого становится понятно, с чем
              реально можно работать, сколько этапов потребуется и чего ждать дальше. Если
              удаление готовит кожу под новую татуировку, это тоже сразу учитывается.
            </p>
          </div>

          <div className="content-block">
            <h2>Что влияет на количество сеансов</h2>
            <ul>
              <li>Плотность и глубина пигмента</li>
              <li>Цвет исходной работы</li>
              <li>Зона на теле</li>
              <li>Состояние кожи</li>
              <li>Цель: полное удаление или осветление под перекрытие</li>
            </ul>
          </div>

          <div className="content-block">
            <h2>Что важно понять заранее</h2>
            <p>
              Удаление не стирает работу мгновенно. Сначала нужно понять задачу,
              оценить зону и только потом говорить о реальном количестве сеансов и
              результате. Поэтому первый шаг здесь — консультация, а не цифра по одному
              фото.
            </p>
          </div>

          <div className="content-block">
            <h2>Частые вопросы</h2>
            <div className="tattoo-removal-faq">
              <div className="tattoo-removal-faq-item">
                <p>
                  <strong>Сколько нужно сеансов?</strong>
                </p>
                <p>
                  Это зависит от плотности, цвета, зоны и от того, нужно ли убрать работу
                  полностью или осветлить её под перекрытие. Сколько сеансов понадобится —
                  ясно после осмотра.
                </p>
              </div>
              <div className="tattoo-removal-faq-item">
                <p>
                  <strong>Можно ли осветлить тату под перекрытие?</strong>
                </p>
                <p>
                  Да, во многих случаях задача не убрать работу в ноль, а привести зону к
                  состоянию, в котором новый проект ляжет сильнее и чище.
                </p>
              </div>
              <div className="tattoo-removal-faq-item">
                <p>
                  <strong>Больно ли это?</strong>
                </p>
                <p>
                  Ощущения зависят от зоны и времени работы. Это тоже проговаривается
                  заранее на консультации.
                </p>
              </div>
              <div className="tattoo-removal-faq-item">
                <p>
                  <strong>Когда можно делать новую работу после удаления?</strong>
                </p>
                <p>
                  Когда кожа и сама зона готовы к следующему этапу. Это определяется по
                  реальному состоянию кожи, а не по желанию ускорить процесс.
                </p>
              </div>
              <div className="tattoo-removal-faq-item">
                <p>
                  <strong>Что влияет на итоговый результат?</strong>
                </p>
                <p>
                  На результат влияют глубина и цвет пигмента, состояние кожи, зона и сама
                  задача: полное удаление или подготовка под перекрытие.
                </p>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2>Следующий шаг</h2>
            <p>
              Если хотите убрать старую работу или подготовить зону под новый проект —
              начните с консультации. С консультации уже становится понятен следующий шаг.
            </p>
            <LeadTieredCta>
              <Link className="btn btn-tertiary" href="/contacts#booking">
                Записаться
              </Link>
            </LeadTieredCta>
          </div>
        </div>
      </section>
    </main>
  );
}
