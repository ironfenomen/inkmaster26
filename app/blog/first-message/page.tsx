import type { Metadata } from "next";
import Link from "next/link";
import { BlogSidebar } from "@/components/blog-sidebar";
import { JsonLd } from "@/components/json-ld";
import { articleLd, site } from "@/lib/site";

const published = "2026-04-18";

export const metadata: Metadata = {
  title: "Что написать тату-мастеру перед записью — шаблон сообщения | Ink Masters",
  description:
    "Что написать мастеру в первом сообщении: зона, размер, идея, даты. Без неловкости и без романа. Запись — звонок, Telegram и VK.",
};

const ld = articleLd({
  headline: "Что написать тату-мастеру перед записью: короткий шаблон без неловкости",
  description:
    "Практичный шаблон первого сообщения тату-мастеру для записи и консультации.",
  path: "/blog/first-message",
  datePublished: published,
});

export default function BlogFirstMessagePage() {
  return (
    <>
      <JsonLd data={ld} />
      <main className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Главная</Link> / <Link href="/blog">Блог</Link> / Запись
          </div>
          <div className="section-kicker">Статья</div>
          <h1 className="section-title">
            Что написать тату-мастеру перед записью: короткий шаблон без неловкости
          </h1>
          <p className="section-desc">
            <strong>В статье:</strong> мастеру не нужен идеальный текст — ему нужны
            факты, чтобы ответить внятно. Четыре строки в Telegram или VK
            обычно сильнее длинного «здравствуйте, я хотел бы у вас…» без деталей.
            Ниже — что включить и готовый пример.
          </p>
        </div>
        <section>
          <div className="container page-grid">
            <BlogSidebar />
            <article>
              <div className="content-block">
                <h2>Что это значит</h2>
                <p>
                  Первая переписка — это не экзамен на красноречие. Это быстрый
                  обмен: кто вы, что хотите по смыслу, куда на теле, насколько
                  крупно и когда вам удобно. От этого зависит, предложит ли мастер в
                  Ink Masters консультацию, сразу слот или уточняющие вопросы — без
                  давления.
                </p>
                <h2>Что указать в сообщении</h2>
                <ol>
                  <li>Идея или настроение — словами или «скину рефы следующим сообщением».</li>
                  <li>Зона на теле (предплечье слева, лопатка и т.д.).</li>
                  <li>Примерный размер — «как ладонь», «полпредплечья».</li>
                  <li>Удобные даты или дни недели.</li>
                </ol>
                <h2>Пример нормального первого сообщения</h2>
                <p>
                  «Привет! Хочу тату на предплечье слева, про горы и поездку. Размер
                  примерно с ладонь. Референсы скину отдельно. Удобны будни после
                  18:00 — на следующей неделе ок?»
                </p>
                <h2>Чего не делать</h2>
                <ul>
                  <li>Не ждать, пока «само сложится» из одного слова «хочу тату».</li>
                  <li>Не стесняться фото старой тату, если нужно перекрытие — это экономит время.</li>
                  <li>Точная цена без эскиза и фото зоны — нет; сначала детали. Ориентиры — в <Link href="/prices">прайсе</Link> и <Link href="/blog/price">статье про цену</Link>.</li>
                </ul>
                <h2>Краткий вывод</h2>
                <p>
                  Достаточно коротко описать <strong>идею, зону, размер и даты</strong>
                  — и вы уже в рабочем диалоге. Остальное мастер доберёт вопросами.
                </p>
                <p>
                  Тот же разбор — на странице{" "}
                  <Link href="/contacts#booking">контактов</Link> и в{" "}
                  <Link href="/faq">FAQ</Link>. Портфолио —{" "}
                  <Link href="/portfolio">здесь</Link>, стили —{" "}
                  <Link href="/styles">здесь</Link>.
                </p>
                <p>
                  Написать: <a href={site.telegram}>Telegram</a>,{" "}
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
