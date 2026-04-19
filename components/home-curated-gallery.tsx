import Image from "next/image";
import type { CuratedHomeSlot } from "@/lib/curated-portfolio";
import {
  curatedArticleClass,
  curatedHomeGridImages,
} from "@/lib/curated-portfolio";

/** Единый формат: «Стиль · зона» (средняя точка ·). */
const homeCaption: Record<CuratedHomeSlot, string> = {
  lg: "Неотрад · плечо",
  sm1: "Black & grey · плечо",
  sm2: "Цвет · голень",
  md1: "Black & grey · спина",
  md2: "Неотрад · кисть",
  sm3: "Цвет · плечо",
  w1: "Цвет · бедро",
  w2: "Кои · плечо",
};

function homeSizes(slot: CuratedHomeSlot): string {
  if (slot === "lg" || slot === "w1" || slot === "w2") {
    return "(max-width:760px) 100vw, 50vw";
  }
  if (slot === "md1" || slot === "md2" || slot === "sm3") {
    return "(max-width:760px) 100vw, 33vw";
  }
  return "(max-width:760px) 100vw, 25vw";
}

export function HomeCuratedGallery() {
  return (
    <div className="gallery gallery--home-curated">
      {curatedHomeGridImages().map((item) => (
        <article
          key={item.src}
          className={`${curatedArticleClass(item.homeSlot)} work--home-minimal`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={homeSizes(item.homeSlot)}
            className="work-photo-img"
          />
          <div className="art" />
          <div className="copy work-copy--minimal">
            <p className="work-home-one">{homeCaption[item.homeSlot]}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
