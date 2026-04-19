import type { Metadata } from "next";
import Link from "next/link";
import { LeadTieredCta } from "@/components/lead-tiered-cta";

export const metadata: Metadata = {
  title: "Цены на тату в Ink Masters — от чего зависит стоимость",
  description:
    "Честные ориентиры по размеру и типу работы в Ink Masters, Ставрополь. Точная сумма после осмотра зоны и эскиза; консультация бесплатно. Запись — телефон, Telegram, VK или контакты.",
};

export default function PricesPage() {
  return (
    <main className="page-hero prices-page">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Главная</Link> / Цены
        </div>
        <h1 className="section-title">Цены на тату — от чего зависит стоимость</h1>
        <div className="section-desc services-intro">
          <p>
            До консультации цена всегда ориентировочная. На неё влияют зона, масштаб,
            плотность, стиль и то, как проект собирается по сеансам.
          </p>
          <p>
            Ниже — что влияет на стоимость, как считается сеанс и на какие ориентиры
            можно смотреть до старта. Работы — в{" "}
            <Link href="/portfolio">портфолио</Link>, как устроен процесс — в{" "}
            <Link href="/services">услугах</Link>.
          </p>
        </div>
      </div>

      <section>
        <div className="container page-grid">
          <aside className="side-nav">
            <h4>Навигация</h4>
            <a href="#price-factors">От чего зависит цена</a>
            <a href="#price-session">Как считается стоимость</a>
            <a href="#price-guide">Ориентиры по цене</a>
            <Link href="/faq">FAQ</Link>
            <Link href="/contacts#booking">Записаться</Link>
          </aside>

          <div>
            <div className="content-block" id="price-factors">
              <h2>От чего зависит цена</h2>
              <p>
                Без зоны, масштаба и задачи одна цифра ничего не объясняет. Стоимость
                складывается из нескольких вещей сразу:
              </p>
              <ul>
                <li>
                  <strong>Размер и площадь</strong> — не только сантиметры, но и
                  плотность проработки.
                </li>
                <li>
                  <strong>Стиль</strong> — спокойный black &amp; grey и насыщенный цвет
                  тратят разное время.
                </li>
                <li>
                  <strong>Зона тела</strong> — как композиция ложится на рельеф и
                  насколько удобно вести сеанс.
                </li>
                <li>
                  <strong>Сложность</strong> — перекрытие, мелкая графика, портрет,
                  переработка старой идеи.
                </li>
                <li>
                  <strong>Детализация</strong> — сколько нюансов работа сможет удержать в
                  коже на дистанции.
                </li>
                <li>
                  <strong>Время</strong> — один визит или серия сеансов.
                </li>
              </ul>
              <p>
                Подробнее о формате работы — на странице{" "}
                <Link href="/services">«Услуги»</Link>, ответы на частые вопросы — в{" "}
                <Link href="/faq">FAQ</Link>.
              </p>
            </div>

            <div className="content-block" id="price-session">
              <h2>Как считается стоимость</h2>
              <p>
                Ориентир — сеанс и фактическое время работы. Крупные проекты собираются
                поэтапно: что делаем на ближайшем визите и что переносим дальше,
                обсуждается заранее.
              </p>
              <p>
                Сумма и план фиксируются до оплаты сеанса. Если сценарий проекта
                меняется, это обсуждается отдельно.
              </p>
            </div>

            <div className="content-block" id="price-guide">
              <h2>Ориентиры по цене</h2>
              <p>
                Частые форматы и ориентиры по цене. Точная сумма собирается после
                консультации, зоны и эскиза.
              </p>
              <div className="price-table">
                <div className="price-row">
                  <strong>Мини-тату до 5 см</strong>
                  <span>от 3 000 ₽</span>
                </div>
                <div className="price-row">
                  <strong>Средняя татуировка 5–15 см</strong>
                  <span>от 5 000 ₽</span>
                </div>
                <div className="price-row">
                  <strong>Крупная работа от 15 см</strong>
                  <span>от 8 000 ₽</span>
                </div>
                <div className="price-row">
                  <strong>Рукав и большой проект</strong>
                  <span>от 10 000 ₽ / сеанс</span>
                </div>
                <div className="price-row">
                  <strong>Перекрытие старой тату</strong>
                  <span>от 5 000 ₽</span>
                </div>
                <div className="price-row">
                  <strong>Коррекция и обновление</strong>
                  <span>от 2 000 ₽</span>
                </div>
                <div className="price-row">
                  <strong>Консультация</strong>
                  <span>бесплатно</span>
                </div>
              </div>
              <p>
                Те же темы короче разобраны в <Link href="/faq">FAQ</Link> и в статье{" "}
                <Link href="/blog/price">блога про стоимость</Link>.
              </p>
            </div>

            <div className="content-block">
              <h2>Цена — не единственный ориентир</h2>
              <p>
                Тату остаётся на годы. Слишком дешёвое решение потом часто обходится
                дороже — в переделке, перекрытии или удалении.
              </p>
              <p>
                Сравнивать стоит не только цифру, но и то, как мастер объясняет
                посадку, плотность, сеансы и уход.
              </p>
            </div>

            <div className="content-block">
              <h2>Прозрачность</h2>
              <p>
                С автором на консультации — ход сеанса, упрощения без потери смысла,
                разнос крупного проекта по визитам и реалистичный итог под ваш запрос.
                До старта ясны цена и ход работы.
              </p>
            </div>

            <div className="content-block portfolio-cta">
              <h2>Узнать точную цену под вашу задачу</h2>
              <p>
                Звонок, Telegram или VK: фото зоны, примерный размер, идея и референсы.
                После этого мастер отвечает, и следующий шаг уже понятен.
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
