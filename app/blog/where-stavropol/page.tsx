import type { Metadata } from "next";
import Link from "next/link";
import { BlogSidebar } from "@/components/blog-sidebar";
import { JsonLd } from "@/components/json-ld";
import { articleLd, site } from "@/lib/site";

const published = "2026-04-18";

export const metadata: Metadata = {
  title: "Где сделать тату в Ставрополе — как выбрать студию | Ink Masters",
  description:
    "Карты, отзывы, стерильность, портфолио и первая переписка — на что смотреть при выборе. Ink Masters: запись онлайн.",
};

const ld = articleLd({
  headline: "Где сделать тату в Ставрополе и на что смотреть при выборе студии",
  description:
    "Практичный разбор выбора тату-студии в Ставрополе: отзывы, адрес, стерильность, портфолио и запись.",
  path: "/blog/where-stavropol",
  datePublished: published,
});

export default function BlogWhereStavropolPage() {
  return (
    <>
      <JsonLd data={ld} />
      <main className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Главная</Link> / <Link href="/blog">Блог</Link> / Выбор
            студии
          </div>
          <div className="section-kicker">Статья</div>
          <h1 className="section-title">
            Где сделать тату в Ставрополе и на что смотреть при выборе студии
          </h1>
          <p className="section-desc">
            <strong>В статье:</strong> хорошее место проверяется не рекламным слоганом,
            а сочетанием адреса на карте, отзывов, портфолио и того, как с вами
            говорят в переписке. Ниже — короткий список для самопроверки; в конце — как устроено в{" "}
            <strong>Ink Masters</strong>, если сравниваете студии в городе.
          </p>
        </div>
        <section>
          <div className="container page-grid">
            <BlogSidebar />
            <article>
              <div className="content-block">
                <h2>Что это значит</h2>
                <p>
                  Вы выбираете не «красивый сайт», а реальную точку: кто вас встретит,
                  где сидеть, кто отвечает за стерильность и кто делает тату. Поэтому
                  логично начать с карт и отзывов, а не с случайного поста в соцсетях.
                </p>
                <h2>На что смотреть по шагам</h2>
                <ol>
                  <li>
                    <strong>Карта и адрес.</strong> Есть ли карточка в 2ГИС и Яндексе,
                    совпадает ли адрес с тем, что в переписке. У Ink Masters —{" "}
                    <Link href="/contacts#contacts-place">страница контактов</Link> со
                    ссылками на карты.
                  </li>
                  <li>
                    <strong>Отзывы с деталями.</strong> Не только оценка, но и слова
                    про чистоту, темп, отношение — это ближе к правде, чем «всё супер».
                    Сводка — <Link href="/reviews">отзывы на сайте</Link>.
                  </li>
                  <li>
                    <strong>Портфолио.</strong> Живые работы на коже, разные зоны и
                    стили — <Link href="/portfolio">галерея</Link> и раздел{" "}
                    <Link href="/styles">стилей</Link>.
                  </li>
                  <li>
                    <strong>Стерильность и порядок.</strong> Отдельная страница без
                    воды — <Link href="/sterility">здесь</Link>.
                  </li>
                  <li>
                    <strong>Первая переписка.</strong> Вам отвечают внятно, без
                    давления «только сегодня»? Шаблон сообщения — в{" "}
                    <Link href="/blog/first-message">гайде про первое сообщение</Link>.
                  </li>
                </ol>
                <h2>Чего не делать</h2>
                <ul>
                  <li>Не вестись на цену «в два раза ниже рынка» без портфолио и адреса.</li>
                  <li>Не игнорировать вопросы про перекрытие и здоровье кожи — их лучше поднять до оплаты.</li>
                </ul>
                <h2>Почему люди приходят в Ink Masters</h2>
                <p>
                  Формат Ink Masters — один мастер на весь цикл: вы заранее знаете,
                  кто ведёт проект от сообщения до ухода. Это не «лучше всех в городе»
                  — это понятная схема без очереди к случайному человеку. Подробнее:{" "}
                  <Link href="/about">о мастере</Link>,{" "}
                  <Link href="/services">услуги</Link>, <Link href="/prices">цены</Link>,{" "}
                  <Link href="/faq">FAQ</Link>.
                </p>
                <h2>Краткий вывод</h2>
                <p>
                  <strong>Где сделать тату</strong> — там, где сходятся
                  карта, отзывы, портфолио и нормальный диалог. Если эти четыре
                  пункта в порядке, тревоги становится меньше.
                </p>
                <p>
                  Написать в Ink Masters: <a href={site.telegram}>Telegram</a>,{" "}
                  <a href={site.vkPersonal}>VK</a>, <Link href="/contacts">контакты</Link>.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
