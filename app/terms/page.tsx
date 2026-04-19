import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Пользовательское соглашение",
  description:
    "Пользовательское соглашение сайта тату-студии Ink Masters, Ставрополь.",
};

export default function TermsPage() {
  return (
    <main className="page-hero legal-doc-page terms-page">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Главная</Link> / Пользовательское соглашение
        </div>
        <div className="section-kicker">Документы</div>
        <h1 className="section-title">Пользовательское соглашение</h1>
        <p className="section-desc legal-doc-page__lead">
          Текст соглашения доступен по запросу; по вопросам использования сайта
          и услуг студии свяжитесь с нами через{" "}
          <Link href="/contacts">контакты</Link> или мессенджеры, указанные в
          подвале сайта.
        </p>
      </div>
    </main>
  );
}
