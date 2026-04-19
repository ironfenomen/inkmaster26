import type { Metadata } from "next";
import Link from "next/link";
import { CuratedPortfolioGallery } from "@/components/curated-portfolio-gallery";
import { curatedPortfolioImages } from "@/lib/curated-portfolio";
import { firmGallerySource } from "@/lib/media";
import { GatedVkPersonalLink } from "@/components/gated-site-links";
import { LeadTieredCta } from "@/components/lead-tiered-cta";
import { site } from "@/lib/site";

const n = curatedPortfolioImages.length;

export const metadata: Metadata = {
  title: "Портфолио — работы Ink Masters",
  description: `Работы Ink Masters на коже: линия, плотность, цвет, посадка. ${n} кадров. Карты и соцсети; запись — телефон, Telegram, VK, контакты.`,
};

export default function PortfolioPage() {
  return (
    <main className="page-hero portfolio-page">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Главная</Link> / Портфолио
        </div>
        <h1 className="section-title">Портфолио — реальные работы</h1>
        <div className="section-desc portfolio-intro">
          <p>
            Не рендеры и не стоковые картинки. Только Ink Masters на коже — студийный
            свет, без лишнего глянца.
          </p>
          <p>
            Линия, плотность, цвет и то, как работа сидит на теле. Дальше — выбирайте
            стиль и масштаб, которые вам ближе.
          </p>
        </div>
      </div>
      <section>
        <div className="container page-grid">
          <aside className="side-nav portfolio-side-nav">
            <h4>Дальше в студии</h4>
            <Link href="/portfolio" className="active">
              Вся подборка
            </Link>
            <Link href="/styles">Стили</Link>
            <Link href="/services">Как мы работаем</Link>
            <Link href="/prices">Стоимость</Link>
            <Link href="/contacts#booking">Запись</Link>
          </aside>
          <div>
            <CuratedPortfolioGallery items={curatedPortfolioImages} />

            <div className="content-block portfolio-after-gallery">
              <h2>Зачем смотреть портфолио до записи</h2>
              <p>
                На экране цепляет одно, на теле держит другое. Здесь видно, как сюжет
                садится на плечо, предплечье, голень или спину — и где он реально
                смотрится сильно.
              </p>
            </div>

            <div className="content-block">
              <h2>Отзывы и живые площадки</h2>
              <p>
                Карты и соцсети показывают не только работы, но и то, как студия ведёт
                клиента и какой результат получается в итоге.
              </p>
              <p className="portfolio-outbound-links">
                <a href={firmGallerySource} target="_blank" rel="noreferrer">
                  2ГИС
                </a>
                {" · "}
                <a href={site.yandexMaps} target="_blank" rel="noreferrer">
                  Яндекс
                </a>
                {" · "}
                <a href={site.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                {" · "}
                <GatedVkPersonalLink>VK мастера</GatedVkPersonalLink>
                {" · "}
                <a href={site.vk} target="_blank" rel="noreferrer">
                  VK студии
                </a>
              </p>
            </div>

            <div className="content-block portfolio-cta">
              <h2>После просмотра — следующий шаг</h2>
              <p>
                Если стиль и уровень вам подходят — присылайте зону, идею, масштаб и
                референсы. Мастер ответит сам и наметит следующий шаг.
              </p>
              <LeadTieredCta>
                <Link className="btn btn-tertiary" href="/contacts#booking">
                  Записаться
                </Link>
              </LeadTieredCta>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
