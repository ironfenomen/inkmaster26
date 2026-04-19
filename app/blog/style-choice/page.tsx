import type { Metadata } from "next";
import Link from "next/link";
import { BlogSidebar } from "@/components/blog-sidebar";
import { JsonLd } from "@/components/json-ld";
import { BlogContactChannelLine } from "@/components/blog-contact-channel";
import { articleLd } from "@/lib/site";

const published = "2026-04-18";

export const metadata: Metadata = {
  title: "Как выбрать стиль тату | Ink Masters",
  description:
    "Без знания терминов: референсы, зона на теле, black & grey и цвет. Консультация мастера, портфолио и раздел «Стили».",
};

const ld = articleLd({
  headline: "Как выбрать стиль тату, если вы не разбираетесь в названиях",
  description:
    "Практичный подход к выбору стиля татуировки через референсы, зону и консультацию с мастером.",
  path: "/blog/style-choice",
  datePublished: published,
});

export default function BlogStyleChoicePage() {
  return (
    <>
      <JsonLd data={ld} />
      <main className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Главная</Link> / <Link href="/blog">Блог</Link> / Стили
          </div>
          <div className="section-kicker">Статья</div>
          <h1 className="section-title">
            Как выбрать стиль тату, если вы не разбираетесь в названиях
          </h1>
          <p className="section-desc">
            <strong>В статье:</strong> стиль выбирают не по учебнику, а по тому, что
            вам откликается на коже. Названия вроде «нео-традиция» или{" "}
            <strong>black &amp; grey</strong> — лишь ярлыки; важнее референсы,
            зона и разговор с мастером. В студии помогут от подборки до эскиза под
            ваше тело.
          </p>
        </div>
        <section>
          <div className="container page-grid">
            <BlogSidebar />
            <article>
              <div className="content-block">
                <h2>Что это значит</h2>
                <p>
                  «Стиль» — это не обязанность выбрать один тег из Википедии. Это
                  соглашение о том, <em>как</em> будет выглядеть работа: плотный
                  контур или воздух, цвет или сдержанная гамма, реализм или
                  стилизация. Один и тот же сюжет можно собрать по-разному — и это
                  нормально.
                </p>
                <h2>От чего реально отталкиваться</h2>
                <ul>
                  <li>
                    <strong>Картинки.</strong> Соберите 5–10 скринов «мне нравится
                    настроение» — не обязательно копировать один в один.
                  </li>
                  <li>
                    <strong>Зона.</strong> На кисти и на спине одна и та же идея
                    живёт по-разному по размеру и детализации.
                  </li>
                  <li>
                    <strong>Гардероб и жизнь.</strong> Насколько вам важна
                    «кричащая» палитра или спокойный силуэт на годы вперёд.
                  </li>
                </ul>
                <h2>Что делать дальше</h2>
                <p>
                  Откройте на сайте раздел <Link href="/styles">«Стили тату»</Link>{" "}
                  — там ориентиры по направлениям, которые встречаются в работах
                  Ink Masters, и превью к <Link href="/portfolio">портфолио</Link>.
                  Затем напишите в мессенджер коротко: зона, размер, «хочу что-то в
                  духе вот этих картинок». На консультации мастер предложит варианты,
                  которые честно сядут на тело — без обещаний «любой стиль за вечер».
                </p>
                <h2>Чего не делать</h2>
                <ul>
                  <li>Не цепляться за модное слово, если картинка вам не близка.</li>
                  <li>Не требовать копию чужой тату с интернета «пиксель в пиксель» на другую анатомию.</li>
                  <li>Не выбирать стиль только по цене — сложность и время всё равно индивидуальны; ориентиры в <Link href="/prices">ценах</Link>.</li>
                </ul>
                <h2>Краткий вывод</h2>
                <p>
                  Выбрать <strong>стиль тату</strong> проще, если
                  честно показать, что нравится, и доверить мастеру перевод «на
                  язык эскиза». Термины можно не знать — их подскажут.
                </p>
                <p>
                  Услуги и запись — <Link href="/services">«Услуги»</Link>,{" "}
                  вопросы до визита — <Link href="/faq">FAQ</Link>, мастер —{" "}
                  <Link href="/about">«О мастере»</Link>.
                </p>
                <p>
                  <BlogContactChannelLine
                    variant="write"
                    suffix={
                      <>
                        , <Link href="/contacts">контакты</Link>.
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
