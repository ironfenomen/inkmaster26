import type { CuratedPortfolioItem } from "@/lib/curated-portfolio";
import { curatedPortfolioImages } from "@/lib/curated-portfolio";

function portfolioBySrc(src: string): CuratedPortfolioItem {
  const item = curatedPortfolioImages.find((i) => i.src === src);
  if (!item) {
    throw new Error(`styles-showcase: нет кадра ${src} в curatedPortfolioImages`);
  }
  return item;
}

/**
 * Примеры для страницы «Стили»: один кадр из портфолио Ink Masters на ключевое направление.
 * Подбор по подписям/содержанию alt в curated-portfolio (без дубля верхнего превью-блока).
 */
export const STYLE_SHOWCASE_EXAMPLES = {
  blackGrey: portfolioBySrc("/media/portfolio-anubis-forearm.png"),
  color: portfolioBySrc("/media/portfolio-octopus-lantern-forearm.png"),
  neoTrad: portfolioBySrc("/media/portfolio-kitsune-samurai-leg.png"),
  realism: portfolioBySrc("/media/portfolio-portrait-realism-leg.png"),
  newSchool: portfolioBySrc("/media/portfolio-new-school-character-arm.png"),
  japanese: portfolioBySrc("/media/portfolio-koi-peonies-arm.png"),
  minimal: portfolioBySrc("/media/portfolio-flower-triangle-forearm.png"),
  /** Смешение приёмов / характерный кастом — не учебниковый «один стиль». */
  hybrid: portfolioBySrc("/media/portfolio-steampunk-cat-arm.png"),
} as const;
