import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { GatedVkPersonalLink } from "@/components/gated-site-links";
import { LeadTieredCta } from "@/components/lead-tiered-cta";
import { FigureImage } from "@/components/figure-image";
import { curatedPortfolioImages } from "@/lib/curated-portfolio";
import { STYLE_SHOWCASE_EXAMPLES } from "@/lib/styles-showcase";
import { site } from "@/lib/site";

type ShowcaseExample =
  (typeof STYLE_SHOWCASE_EXAMPLES)[keyof typeof STYLE_SHOWCASE_EXAMPLES];

const stylesPreviewWide = [
  {
    item: curatedPortfolioImages[1],
    label: "пример black & grey",
    caption: "Black & grey: объём и полутона — держится с дистанции.",
  },
  {
    item: curatedPortfolioImages[0],
    label: "пример цвета и нео-трада",
    caption: "Цвет и нео-трад: плотный контур, палитра, характер.",
  },
] as const;

const stylesPreviewSquare = [
  {
    item: curatedPortfolioImages[3],
    label: "портрет B&G",
    caption: "B&G-портрет на плече — свет и плотность без цвета.",
  },
  {
    item: curatedPortfolioImages[4],
    label: "цвет на голени",
    caption: "Цвет на голени — контраст и посадка на рельеф.",
  },
  {
    item: curatedPortfolioImages[2],
    label: "нео-трад на кисти",
    caption: "Нео-трад на кисти — силуэт в узкой зоне.",
  },
] as const;

function StyleShowcaseCard({
  title,
  example,
  children,
}: {
  title: string;
  example: ShowcaseExample;
  children: ReactNode;
}) {
  return (
    <div className="card styles-style-card">
      <h3>{title}</h3>
      <Link
        href="/portfolio"
        className="styles-style-example-link"
        aria-label={`${title} — пример в портфолио Ink Masters`}
      >
        <FigureImage
          src={example.src}
          alt={example.alt}
          variant="square"
          sizes="(max-width: 760px) 100vw, min(360px, 33vw)"
          className="styles-style-example-frame"
        />
      </Link>
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Стили тату — как понять, что ваше | Ink Masters",
  description:
    "Направления по реальным работам Ink Masters: black & grey, цвет, нео-трад, реализм, new school, японские и лаконичная графика. Портфолио, запись в мессенджерах и на консультации.",
};

export default function StylesPage() {
  return (
    <main className="page-hero styles-page">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Главная</Link> / Стили тату
        </div>
        <div className="section-kicker">Направления</div>
        <h1 className="section-title">Стили тату — как понять, что ваше</h1>
        <p className="section-desc">
          Знать точное название стиля до консультации не обязательно. Важнее понять
          настроение, плотность, цвет и то, как работа будет смотреться именно на вашей
          зоне.
        </p>
        <p className="section-desc">
          Ниже — основные направления на реальных работах Ink Masters. На консультации
          уже становится понятно, что лучше ляжет по форме, масштабу и задаче.
        </p>
      </div>

      <section>
        <div className="container styles-preview-block">
          <h2>Работы, не картинки из поиска</h2>
          <p className="styles-preview-lead">
            Наши кадры в <Link href="/portfolio">галерее</Link> — студийный свет, живая
            кожа. Нажмите — откроется полная подборка работ.
          </p>
          <div className="grid-2 styles-preview-row">
            {stylesPreviewWide.map(({ item, caption, label }, i) => (
              <Link
                key={item.src}
                href="/portfolio"
                className="styles-preview-link"
                aria-label={`Портфолио Ink Masters — ${label}`}
              >
                <FigureImage
                  src={item.src}
                  alt={item.alt}
                  variant="wide"
                  sizes="(max-width: 760px) 100vw, 50vw"
                  priority={i === 0}
                />
                <p className="styles-preview-caption">{caption}</p>
              </Link>
            ))}
          </div>
          <div className="grid-3 styles-preview-row">
            {stylesPreviewSquare.map(({ item, caption, label }) => (
              <Link
                key={item.src}
                href="/portfolio"
                className="styles-preview-link"
                aria-label={`Портфолио Ink Masters — ${label}`}
              >
                <FigureImage
                  src={item.src}
                  alt={item.alt}
                  variant="square"
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <p className="styles-preview-caption">{caption}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="container grid-3 styles-style-grid">
          <StyleShowcaseCard
            title="Black & grey"
            example={STYLE_SHOWCASE_EXAMPLES.blackGrey}
          >
            <p>
              Полутона и контраст вместо цветового шума — спокойная, взрослая графика.
              Крупная зона: читаемость издали и посадка на рельеф — закладываем до первого
              сеанса.
            </p>
          </StyleShowcaseCard>

          <StyleShowcaseCard
            title="Цветная тату"
            example={STYLE_SHOWCASE_EXAMPLES.color}
          >
            <p>
              От мягкой пастели до жёсткого акцента — палитра под ваш запрос и под тон
              кожи. Не гадаем на фото: на встрече фиксируем, как цвет поведёт себя после
              заживления и сеансов.
            </p>
          </StyleShowcaseCard>

          <StyleShowcaseCard
            title="Нео-традиция"
            example={STYLE_SHOWCASE_EXAMPLES.neoTrad}
          >
            <p>
              Плотный контур, смелый силуэт, насыщенные плоскости — узнаваемый характер
              без копирования чужих листов. Собираем мотив под вашу анатомию, а не под
              скрин из Pinterest.
            </p>
          </StyleShowcaseCard>

          <StyleShowcaseCard
            title="Реализм"
            example={STYLE_SHOWCASE_EXAMPLES.realism}
          >
            <p>
              Свет, фактура, деталь — портреты и предметы, которые тянет разглядывать.
              Обычно не за один сеанс: нужны сильные референсы и честный разговор о том,
              как площадь ведёт себя на сгибах.
            </p>
          </StyleShowcaseCard>

          <StyleShowcaseCard
            title="New school и иллюстративное"
            example={STYLE_SHOWCASE_EXAMPLES.newSchool}
          >
            <p>
              Комиксовая пластика и иллюстрация — динамика, характер, узнаваемый
              силуэт. Здесь не гонимся за фотореализмом ради галочки: важно, чтобы форма
              читалась в движении и издалека.
            </p>
          </StyleShowcaseCard>

          <StyleShowcaseCard
            title="Японские мотивы"
            example={STYLE_SHOWCASE_EXAMPLES.japanese}
          >
            <p>
              Кои, драконы, цветы, волны — узнаваемый язык без музейной копии. Крупные
              рукава и длинные композиции садим так, чтобы на сгибах не «ехало» и не
              терялось главное.
            </p>
          </StyleShowcaseCard>

          <StyleShowcaseCard
            title="Лаконичные линии и мини-формат"
            example={STYLE_SHOWCASE_EXAMPLES.minimal}
          >
            <p>
              Тонкая линия и маленький масштаб — не компромисс, а осознанный формат.
              Место и толщину согласуем так, чтобы графика держалась годами, а не
              растворилась в коже.
            </p>
          </StyleShowcaseCard>

          <StyleShowcaseCard
            title="Смесь направлений в одной работе"
            example={STYLE_SHOWCASE_EXAMPLES.hybrid}
          >
            <p>
              Реализм, графика и цвет в одной работе — нормально, если идея сама просит.
              Перекрытие — отдельно: пигмент и кожа важнее ярлыка с экрана. Детали — в{" "}
              <Link href="/faq">FAQ</Link> и в <Link href="/services">услугах</Link>.
            </p>
          </StyleShowcaseCard>
        </div>

        <div className="container styles-page__section-follow">
          <div className="content-block">
            <h2>Без словаря тоже можно</h2>
            <p>
              Не обязательно знать, что такое «нео-трад». Достаточно пары референсов и
              ощущения, что цепляет. <strong>Зона</strong> и <strong>масштаб</strong>{" "}
              меняют одну и ту же идею сильнее, чем модное слово. На встрече
              соберём рабочий вариант под ваш запрос — без лекции.
            </p>
          </div>

          <div className="content-block">
            <h2>Стиль работает через кожу</h2>
            <p>
              Плотная графика и воздушный black &amp; grey по-разному читаются с трёх
              метров. Тонкая линия и пастель уступают времени быстрее, чем плотный
              контур — не потому что «плохо сделали», а потому что так устроена кожа.
              Задача Ink Masters — чтобы через годы работа оставалась вашей, а не
              размытым пятном.
            </p>
          </div>

          <div className="content-block">
            <h2>Смотрите кожу, не текст</h2>
            <p>
              Каждое направление выше опирается на <Link href="/portfolio">портфолио</Link>{" "}
              — плотность, линия, цвет, настоящий свет студии. В ленте —{" "}
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>{" "}
              и{" "}
              <GatedVkPersonalLink>VK мастера</GatedVkPersonalLink>
              . Цифры без сюрпризов — в <Link href="/prices">разделе о ценах</Link>.
            </p>
          </div>

          <div className="content-block portfolio-cta">
            <h2>Идея без ярлыка — нормально</h2>
            <p>
              Опишите словами или киньте кадр из нашей галереи — разберём по
              телефону, в Telegram или VK. Достаточно короткого описания и одного-двух референсов.
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
        </div>
      </section>
    </main>
  );
}
