import type { Metadata } from "next";
import Link from "next/link";
import { LeadTieredCta } from "@/components/lead-tiered-cta";
import { JsonLd } from "@/components/json-ld";
import { faqLd, faqPageItems } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ — быстрые ответы о тату | Ink Masters",
  description:
    "Коротко до визита: боль, сеанс, заживление, уход, алкоголь, цена, запись. Разборы и гайды — в блоге Ink Masters; прайс — в «Ценах», стерильность — в отдельном разделе.",
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd} />
      <main className="page-hero faq-page">
        <div className="container">
          <div className="crumbs">
            <Link href="/">Главная</Link> / FAQ
          </div>
          <div className="section-kicker">Вопросы и ответы</div>
          <h1 className="section-title">FAQ — быстрые ответы о тату</h1>
          <p className="section-desc">
            Короткий ответ — здесь, подробный разбор — в{" "}
            <Link href="/blog">блоге</Link>.{" "}
            <Link href="/prices">Цены</Link>, <Link href="/services">услуги</Link>,{" "}
            <Link href="/sterility">стерильность</Link>,{" "}
            <Link href="/portfolio">портфолио</Link>,{" "}
            <Link href="/contacts#booking">запись и контакты</Link>.
          </p>
        </div>
        <section>
          <div className="container faq">
            {faqPageItems.map((item) => (
              <details key={item.q} open={item.open}>
                <summary>{item.q}</summary>
                <p>
                  {item.a}
                  {item.deepDive ? (
                    <>
                      {" "}
                      <Link href={item.deepDive} className="faq-deep-dive">
                        {item.blogLinkText ?? "Подробнее в блоге"}
                      </Link>
                      .
                    </>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </section>
        <section>
          <div className="container">
            <div className="content-block portfolio-cta">
              <h2>Остались вопросы — напишите</h2>
              <p>
                Если нужного вопроса нет в списке — позвоните или напишите в Telegram или VK.
                Телефон, адрес и остальные каналы связи — на{" "}
                <Link href="/contacts">странице контактов</Link>.
              </p>
              <LeadTieredCta>
                <Link className="btn btn-tertiary" href="/contacts#booking">
                  Записаться
                </Link>
              </LeadTieredCta>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
