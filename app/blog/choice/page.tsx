import type { Metadata } from "next";
import Link from "next/link";
import { BlogSidebar } from "@/components/blog-sidebar";
import { JsonLd } from "@/components/json-ld";
import { articleLd, site } from "@/lib/site";

const published = "2026-04-18";

export const metadata: Metadata = {
  title: "Как выбрать тату-мастера в Ставрополе | Ink Masters",
  description:
    "Портфолио, отзывы на картах, переписка, стерильность — что проверить самому. Ink Masters: один мастер, запись онлайн.",
};

const ld = articleLd({
  headline: "Как выбрать тату-мастера в Ставрополе: что проверить до записи",
  description:
    "Практичный разбор признаков сильного мастера и студии при выборе тату в Ставрополе.",
  path: "/blog/choice",
  datePublished: published,
});

export default function BlogChoicePage() {
  return (
    <>
      <JsonLd data={ld} />
      <main className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Главная</Link> / <Link href="/blog">Блог</Link> / Выбор
            мастера
          </div>
          <div className="section-kicker">Статья</div>
          <h1 className="section-title">
            Как выбрать тату-мастера в Ставрополе: что проверить до записи
          </h1>
          <p className="section-desc">
            <strong>В статье:</strong> вы выбираете человека и место, где вам
            доверят кожу и время. Это проверяется картой, отзывами, портфолио и тем,
            как мастер отвечает в переписке — без веры на слово в рекламе. Ниже —
            короткий список для самопроверки; в конце — как это сходится с Ink Masters.
          </p>
        </div>
        <section>
          <div className="container page-grid">
            <BlogSidebar />
            <article>
              <div className="content-block">
                <h2>Что это значит</h2>
                <p>
                  «Хороший мастер» — не абстрактный титул. Это сочетание: рука
                  (портфолио), отношение к клиенту (переписка и сеанс), порядок в
                  студии (стерильность и атмосфера), прозрачность по деньгам и
                  срокам. Если один из столбов шатается, вам будет тревожно уже до
                  кресла.
                </p>
                <h2>Что проверить до визита</h2>
                <ol>
                  <li>
                    <strong>Портфолио в динамике.</strong> Разные зоны, стили,
                    плотность — не только один удачный кадр. У Ink Masters —{" "}
                    <Link href="/portfolio">галерея на сайте</Link>.
                  </li>
                  <li>
                    <strong>Карта и отзывы.</strong> Читаемость адреса, живые
                    комментарии про чистоту и темп. Сводка — <Link href="/reviews">отзывы</Link>
                    ; разбор «где сделать в городе» — в{" "}
                    <Link href="/blog/where-stavropol">отдельной статье</Link>.
                  </li>
                  <li>
                    <strong>Первое сообщение.</strong> Вам отвечают внятно? Шаблон — в{" "}
                    <Link href="/blog/first-message">гайде про текст</Link>.
                  </li>
                  <li>
                    <strong>Стерильность без пафоса.</strong> Отдельная страница —{" "}
                    <Link href="/sterility">здесь</Link>.
                  </li>
                  <li>
                    <strong>Цены без сюрприза.</strong> Ориентиры и понятный чек —{" "}
                    <Link href="/prices">прайс</Link> и <Link href="/blog/price">статья про цену</Link>.
                  </li>
                </ol>
                <h2>Красные флаги — без драмы</h2>
                <p>
                  Давление «только сегодня», обещание любой картинки за час и копейки,
                  отказ обсуждать зону и уход, «пишите в личку — скажу цену» без
                  контекста. Это не про конкретную студию — про ситуации, от которых
                  стоит отступить в любой точке мира.
                </p>
                <h2>Если вы смотрите на Ink Masters</h2>
                <p>
                  Ink Masters — один мастер на весь цикл: тот же человек ведёт диалог и
                  сеанс. Познакомиться ближе: <Link href="/about">о мастере</Link>,
                  типовые вопросы — <Link href="/faq">FAQ</Link>, стили —{" "}
                  <Link href="/styles">«Стили»</Link>, услуги —{" "}
                  <Link href="/services">«Услуги»</Link>. Адрес — в{" "}
                  <Link href="/contacts">контактах</Link>.
                </p>
                <h2>Краткий вывод</h2>
                <p>
                  Выбрать <strong>тату-мастера</strong> спокойнее всего по связке «карта
                  + отзывы + портфолио + переписка». Если всё сходится — можно
                  записываться без героизма.
                </p>
                <p>
                  Написать: <a href={site.telegram}>Telegram</a>,{" "}
                  <a href={site.vkPersonal}>VK</a>, <Link href="/contacts">контакты</Link>
                  , <Link href="/">главная</Link>.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
