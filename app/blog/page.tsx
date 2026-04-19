import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogIndexPosts } from "@/lib/blog-index-posts";
import { media, mediaAlt } from "@/lib/media";

export const metadata: Metadata = {
  title: "Блог — гайды о тату | Ink Masters",
  description:
    "Статьи: боль, заживление, уход, цена, подготовка, алкоголь, стиль, запись. Не дублируем FAQ — здесь разбор шире; быстрые ответы — в разделе FAQ.",
};

function PostCover() {
  return (
    <div className="post-cover">
      <div className="post-cover-badge" title="Автор — Денис">
        <Image
          src={media.denisInstagramProfile}
          alt={mediaAlt.denisProfile}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="page-hero">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Главная</Link> / Блог
        </div>
        <div className="section-kicker">Блог</div>
        <h1 className="section-title">Блог — гайды и разборы до записи</h1>
        <p className="section-desc">
          <strong>Блог</strong> — шаги и примеры. <strong>FAQ</strong> — сжато, на
          скорость. Запись — <Link href="/contacts#booking">контакты</Link>, ответы в
          лоб —{" "}
          <Link href="/faq">FAQ</Link>.
        </p>
      </div>
      <section>
        <div className="container blog-grid">
          {blogIndexPosts.map((post) => (
            <article key={post.href} className="card post">
              <PostCover />
              <div className="meta">{post.meta}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link className="btn btn-secondary" href={post.href}>
                Читать статью
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
