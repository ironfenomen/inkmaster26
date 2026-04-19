import type { Metadata } from "next";
import Link from "next/link";
import { BlogSidebar } from "@/components/blog-sidebar";
import { JsonLd } from "@/components/json-ld";
import { articleLd, site } from "@/lib/site";

const published = "2026-04-18";

export const metadata: Metadata = {
  title: "Как подготовиться к первому сеансу тату | Ink Masters",
  description:
    "Подготовка к тату: сон, еда, вода, одежда, без алкоголя. Короткий список перед визитом в студию.",
};

const ld = articleLd({
  headline: "Как подготовиться к первому сеансу тату: сон, еда, одежда и настрой",
  description:
    "Памятка подготовки к сеансу: что взять с собой и чего избегать накануне.",
  path: "/blog/preparation",
  datePublished: published,
});

export default function BlogPreparationPage() {
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
            Как подготовиться к первому сеансу тату: сон, еда, одежда и настрой
          </h1>
          <p className="section-desc">
            <strong>В статье:</strong> хороший сеанс начинается не в кресле, а с
            нормального сна, еды и спокойного состояния без алкоголя. Ниже —
            список, который можно пробежать за минуту перед выходом из дома в
            студию Ink Masters.
          </p>
        </div>
        <section>
          <div className="container page-grid">
            <BlogSidebar />
            <article>
              <div className="content-block">
                <h2>Что это значит</h2>
                <p>
                  Подготовка — не «ритуал», а бытовая гигиена дня: вы меньше
                  кружите головой, лучше переносите длительное положение и спокойнее
                  реагируете на ощущения. Мастеру проще вести процесс, когда вы не
                  на нервах с пустого желудка.
                </p>
                <h2>Что сделать накануне и в день визита</h2>
                <ul>
                  <li>
                    <strong>Сон.</strong> Постарайтесь не ночевать до записи в
                    телефоне до четырёх утра.
                  </li>
                  <li>
                    <strong>Еда и вода.</strong> Спокойный приём пищи за пару часов
                    и бутылка с собой.
                  </li>
                  <li>
                    <strong>Без алкоголя</strong> накануне и в день сеанса — см.{" "}
                    <Link href="/blog/alcohol">отдельный текст</Link>.
                  </li>
                  <li>
                    <strong>Одежда.</strong> Удобно открывать зону без «танцев» в
                    раздевалке: свитер через голову для тату на спине — не лучший выбор.
                  </li>
                  <li>
                    <strong>Заряд и время.</strong> Чтобы не копить стресс из-за
                    опоздания — лучше заложить дорогу с запасом; адрес и вход — в{" "}
                    <Link href="/contacts">контактах</Link>.
                  </li>
                </ul>
                <h2>Чего не делать</h2>
                <ul>
                  <li>Не экспериментировать с кофеином и таблетками «чтобы не чувствовать» без врача.</li>
                  <li>Не приходить голодным «чтобы лучше переносить» — обычно наоборот.</li>
                </ul>
                <h2>Краткий вывод</h2>
                <p>
                  Спокойный сон, еда, вода, трезвость и удобная одежда — база для
                  первого и для десятого сеанса. Остальное мастер подскажет по месту.
                </p>
                <p>
                  Если ещё не писали мастеру — загляните в{" "}
                  <Link href="/blog/first-message">что написать в первом сообщении</Link>
                  , общие вопросы — <Link href="/faq">FAQ</Link>, страхи про боль —{" "}
                  <Link href="/blog/pain">статья про боль</Link>.
                </p>
                <p>
                  Запись: <a href={site.telegram}>Telegram</a>,{" "}
                  <a href={site.vkPersonal}>VK</a>,{" "}
                  <Link href="/contacts#booking">страница контактов</Link>.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
