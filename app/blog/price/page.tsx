import type { Metadata } from "next";
import Link from "next/link";
import { BlogSidebar } from "@/components/blog-sidebar";
import { JsonLd } from "@/components/json-ld";
import { BlogContactChannelLine } from "@/components/blog-contact-channel";
import { articleLd } from "@/lib/site";

const published = "2026-04-18";

export const metadata: Metadata = {
  title: "Сколько стоит тату в Ставрополе — из чего цена | Ink Masters",
  description:
    "Время, сложность, зона, перекрытие — из чего складывается цена. Почему сумму не называют из воздуха. Ориентиры Ink Masters.",
};

const ld = articleLd({
  headline: "Сколько стоит тату в Ставрополе: из чего складывается цена",
  description:
    "Ориентиры по стоимости тату в Ink Masters: без фикса из воздуха, с разбором факторов.",
  path: "/blog/price",
  datePublished: published,
});

export default function BlogPricePage() {
  return (
    <>
      <JsonLd data={ld} />
      <main className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Главная</Link> / <Link href="/blog">Блог</Link> / Цены
          </div>
          <div className="section-kicker">Статья</div>
          <h1 className="section-title">
            Сколько стоит тату в Ставрополе: из чего складывается цена
          </h1>
          <p className="section-desc">
            <strong>В статье:</strong> финальную сумму без эскиза, фото зоны и
            понимания сложности не фиксируют заранее — иначе цифра будет от фонаря.
            Ниже — факторы цены в Ink Masters и где смотреть ориентиры по суммам.
          </p>
        </div>
        <section>
          <div className="container page-grid">
            <BlogSidebar />
            <article>
              <div className="content-block">
                <h2>Что это значит</h2>
                <p>
                  Цена — это время руки мастера плюс сложность: мелкая тату с кучей
                  микродеталей может стоить не дешевле «средней» по площади работы.
                  Перекрытие и коррекция почти всегда добавляют непредсказуемость —
                  пока не посмотрели старую работу на коже.
                </p>
                <h2>От чего зависит чек</h2>
                <ul>
                  <li>Размер и плотность эскиза, фон, мелкие элементы.</li>
                  <li>Зона тела и удобство работы мастера в этой позиции.</li>
                  <li>Нужно ли несколько сеансов.</li>
                  <li>Перекрытие, шрамы, особенности кожи — обсуждаются заранее.</li>
                </ul>
                <h2>Ориентиры Ink Masters</h2>
                <p>
                  Актуальная таблица «от…» — на странице <Link href="/prices">«Цены»</Link>
                  . Это старт для разговора, а не обещание «выйти ровно в 5300 ₽»
                  без эскиза. Если хотите сориентироваться до визита — загляните в{" "}
                  <Link href="/faq">FAQ</Link> и в <Link href="/services">услуги</Link>
                  .
                </p>
                <h2>Что делать, если бюджет ограничен</h2>
                <p>
                  Напишите об этом в первом сообщении вместе с референсом — предложат
                  упрощение композиции или этапы, без «как на картинке за полцены».
                  Шаблон — в{" "}
                  <Link href="/blog/first-message">гайде про первый текст</Link>.
                </p>
                <h2>Чего не делать</h2>
                <ul>
                  <li>Не сравнивать студию только по одной цифре в объявлении.</li>
                  <li>Не требовать фикс за фото чужой тату с другой анатомией и без даты сеанса.</li>
                </ul>
                <h2>Краткий вывод</h2>
                <p>
                  <strong>Сколько стоит тату</strong> в вашем случае
                  скажет мастер после контекста; ориентиры на сайте помогают не
                  гадать вслепую.
                </p>
                <p>
                  <BlogContactChannelLine
                    variant="booking"
                    suffix={
                      <>
                        , <Link href="/contacts">контакты</Link>, портфолио —{" "}
                        <Link href="/portfolio">здесь</Link>, стили —{" "}
                        <Link href="/styles">здесь</Link>, стерильность —{" "}
                        <Link href="/sterility">здесь</Link>.
                      </>
                    }
                  />
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
