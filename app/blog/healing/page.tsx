import type { Metadata } from "next";
import Link from "next/link";
import { BlogSidebar } from "@/components/blog-sidebar";
import { JsonLd } from "@/components/json-ld";
import { BlogContactChannelLine } from "@/components/blog-contact-channel";
import { articleLd } from "@/lib/site";

const published = "2026-04-18";

export const metadata: Metadata = {
  title: "Сколько заживает тату — сроки заживления | Ink Masters",
  description:
    "Первичное заживление, финальный вид пигмента, что влияет на сроки — без паники и без обещаний «за три дня». Ink Masters.",
};

const ld = articleLd({
  headline: "Сколько заживает тату: первые дни, недели и когда виден финальный вид",
  description:
    "Сроки заживления татуировки простыми словами и что зависит от ухода и зоны.",
  path: "/blog/healing",
  datePublished: published,
});

export default function BlogHealingPage() {
  return (
    <>
      <JsonLd data={ld} />
      <main className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Главная</Link> / <Link href="/blog">Блог</Link> / Сроки
          </div>
          <div className="section-kicker">Статья</div>
          <h1 className="section-title">
            Сколько заживает тату: первые дни, недели и когда виден финальный вид
          </h1>
          <p className="section-desc">
            <strong>В статье:</strong> верх кожи успокаивается за порядка нескольких
            недель, а «окончательный вид» тату дозревает дольше — иногда несколько
            месяцев. Это нормальная биология, а не «плохая работа», если вы не
            рвёте корочки и следуете инструкции мастера.
          </p>
        </div>
        <section>
          <div className="container page-grid">
            <BlogSidebar />
            <article>
              <div className="content-block">
                <h2>Что это значит: два разных «заживления»</h2>
                <p>
                  <strong>Первичное заживление</strong> — когда сходит верхний
                  слой, кожа перестаёт быть «раной» в бытовом смысле.{" "}
                  <strong>Долгая фаза</strong> — когда выравнивается цвет, слегка
                  уходит отёк, пигмент «оседает» в коже. Вторую фазу снаружи не
                  всегда видно, но по ощущениям и фото через месяцы иногда заметно.
                </p>
                <h2>От чего зависят сроки</h2>
                <ul>
                  <li>
                    <strong>Зона и размер.</strong> Крупная площадь и места с
                    активным движением заживают иначе, чем маленькое тату на
                    спокойном участке.
                  </li>
                  <li>
                    <strong>Уход.</strong> Самый сильный рычаг — первые дни: не
                    подрывать корочки, не перегревать, не экспериментировать с
                    кремами без согласования. Подробнее — в материале{" "}
                    <Link href="/blog/care">про уход</Link>.
                  </li>
                  <li>
                    <strong>Солнцезащита потом.</strong> УФ влияет на то, как цвет
                    держится годами — это уже не «первая неделя», но важно
                    помнить.
                  </li>
                </ul>
                <h2>Что делать, если кажется «что-то не так»</h2>
                <p>
                  Сомнения в первую неделю — частая история. Вместо советов из
                  чатов лучше написать мастеру: в Ink Masters после сеанса вам
                  объясняют, что нормально, а что повод спросить. Общие точки
                  соприкосновения с вашей ситуацией есть и в <Link href="/faq">FAQ</Link>.
                </p>
                <h2>Чего не делать</h2>
                <ul>
                  <li>Не сравнивать свои три дня с чужой «идеальной» фотографией в сети.</li>
                  <li>Не тянуть корочки и не «помогать» коже спилом.</li>
                  <li>Не назначать себе лечение без понимания, что именно происходит.</li>
                </ul>
                <h2>Краткий вывод</h2>
                <p>
                  <strong>Сколько заживает тату?</strong> — быстрый внешний этап
                  измеряется неделями, финальная картинка выстраивается дольше. Если
                  уход спокойный и предсказуемый, выглядит это обычно ровно и без
                  сюрпризов.
                </p>
                <p>
                  Запись и вопросы по этапам —{" "}
                  <Link href="/contacts#booking">контакты</Link>,{" "}
                  <Link href="/sterility">стерильность</Link> и{" "}
                  <Link href="/prices">цены</Link> — на сайте рядом, чтобы не
                  собирать информацию по крупицам.
                </p>
                <p>
                  <BlogContactChannelLine variant="write" suffix="." />
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
