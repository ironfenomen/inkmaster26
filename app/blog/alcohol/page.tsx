import type { Metadata } from "next";
import Link from "next/link";
import { BlogSidebar } from "@/components/blog-sidebar";
import { JsonLd } from "@/components/json-ld";
import { articleLd, site } from "@/lib/site";

const published = "2026-04-18";

export const metadata: Metadata = {
  title: "Можно ли пить алкоголь перед тату — почему нельзя | Ink Masters",
  description:
    "Алкоголь перед тату: почему мастер просит перенести сеанс, что меняется в коже и самочувствии. Коротко и по факту. Ink Masters, запись: звонок, Telegram, VK.",
};

const ld = articleLd({
  headline: "Можно ли пить алкоголь перед тату: почему от сеанса часто просят отказаться",
  description:
    "Честное объяснение без морали: почему алкоголь перед татуировкой мешает процессу и комфорту.",
  path: "/blog/alcohol",
  datePublished: published,
});

export default function BlogAlcoholPage() {
  return (
    <>
      <JsonLd data={ld} />
      <main className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Главная</Link> / <Link href="/blog">Блог</Link> / Подготовка
          </div>
          <div className="section-kicker">Статья</div>
          <h1 className="section-title">
            Можно ли пить алкоголь перед тату: почему от сеанса часто просят отказаться
          </h1>
          <p className="section-desc">
            <strong>В статье:</strong> в день сеанса и накануне лучше без алкоголя.
            Это не «наказание», а забота о том, чтобы кровь вела себя предсказуемо,
            а вам было не лишний раз тяжело на коже. При нетрезвом состоянии сеанс
            переносят — это нормальная студийная практика.
          </p>
        </div>
        <section>
          <div className="container page-grid">
            <BlogSidebar />
            <article>
              <div className="content-block">
                <h2>Что это значит</h2>
                <p>
                  Алкоголь расширяет сосуды и меняет свёртываемость крови. На сеансе
                  это часто превращается в лишнюю мокроту, дольше мешает мастеру
                  видеть линию и делает кожу более капризной. Вам от этого не
                  комфортнее — и результату тоже.
                </p>
                <h2>От чего зависит решение мастера</h2>
                <p>
                  Не только «вчера была свадьба», но и самочувствие в день визита.
                  Если вы недоспали, перегуляли и чувствуете себя нестабильно,
                  лучше честно сказать и перенести запись. Это дешевле, чем мучиться
                  в кресле и потом недовольно смотреть на заживление.
                </p>
                <h2>Что делать</h2>
                <ul>
                  <li>Выпейте воду и нормально поешьте в день сеанса.</li>
                  <li>Выспитесь — это снижает и страх, и чувствительность.</li>
                  <li>Если сомневаетесь — напишите заранее в <Link href="/contacts">контактах</Link>.</li>
                </ul>
                <h2>Чего не делать</h2>
                <ul>
                  <li>Не приходить «в лёгком подпитии» — мастер всё равно увидит по поведению кожи.</li>
                  <li>Не воспринимать перенос как конфликт — это про качество и безопасность.</li>
                </ul>
                <h2>Краткий вывод</h2>
                <p>
                  <strong>Можно ли пить алкоголь перед тату?</strong> — лучше нет.
                  Так спокойнее и вам, и процессу, и честному результату на коже.
                </p>
                <p>
                  Рядом по теме: <Link href="/blog/preparation">подготовка к сеансу</Link>,{" "}
                  <Link href="/faq">FAQ</Link>, <Link href="/sterility">стерильность</Link>.
                </p>
                <p>
                  Запись: <a href={site.telegram}>Telegram</a>,{" "}
                  <a href={site.vkPersonal}>VK</a>.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
