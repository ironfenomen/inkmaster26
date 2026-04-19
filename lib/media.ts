import { firmGalleryCount } from "./generated-firm-gallery-count";

export { firmGalleryCount };

/**
 * Официальная галерея фирмы Ink Masters на 2ГИС (работы и студия).
 * Локальные копии в /public/media/2gis-firm-gallery/ — см. `scripts/sync-2gis-firm-gallery.py`.
 * На карточке может быть больше превью («Фото»), чем отдаётся в одном HTML; выгружаем все
 * доступные без авторизации URL (профильные 1920px + снимки из отзывов с карточки).
 */

export const firmGallerySource =
  "https://2gis.ru/stavropol/firm/70000001061447874?m=41.913146%2C45.012436%2F16" as const;

export function firmGalleryIndices(): number[] {
  return Array.from({ length: firmGalleryCount }, (_, i) => i + 1);
}

export function firmGalleryImage(n: number): string {
  if (n < 1 || n > firmGalleryCount) {
    throw new Error(`firmGalleryImage: index ${n} out of 1..${firmGalleryCount}`);
  }
  return `/media/2gis-firm-gallery/gallery-${String(n).padStart(2, "0")}.jpg`;
}

export function firmGalleryAlt(n: number): string {
  if (n <= 19) {
    return `Ink Masters — кадр ${n} из галереи студии на 2ГИС`;
  }
  return `Ink Masters — фото ${n} с карточки на 2ГИС (отзыв)`;
}

/** Портрет мастера — отдельный ассет; миниатюра в UI использует тот же файл. */
export const media = {
  mastheadThumb: "/media/denis-portrait.png",
  denisInstagramProfile: "/media/denis-portrait.png",
} as const;

const denisPortraitAlt =
  "Денис — мастер Ink Masters в студии" as const;

export const mediaAlt = {
  mastheadThumb: denisPortraitAlt,
  denisProfile: denisPortraitAlt,
};

/**
 * Три кадра одного цикла удаления (хронология, не галерея). Файлы: process-{1,2,3}.png
 */
export const tattooRemovalProcessPhotos = [
  {
    src: "/media/tattoo-removal/process-1.png",
    alt: "Ink Masters, Ставрополь — мастер в защитных очках и перчатках ведёт лазерное удаление тату на предплечье клиента в студии",
    stepLabel: "Кабинет и работа",
    trustCaption:
      "Студия Ink Masters в кадре: мастер, клиент и рабочая зона — то, что вы увидите в записи, без клинического антуража.",
  },
  {
    src: "/media/tattoo-removal/process-2.png",
    alt: "Ink Masters — крупный план: лазерный аппарат у татуировки на коже, вторая рука мастера стабилизирует зону",
    stepLabel: "Работа по зоне",
    trustCaption:
      "Зона зафиксирована, проход ведётся контролируемо — в кадре видно руки и положение, без скрытого «как получится».",
  },
  {
    src: "/media/tattoo-removal/process-3.png",
    alt: "Ink Masters — мастер с лазерной насадкой работает над тату на руке клиента, студийная подсветка и кабинет",
    stepLabel: "Работа в процессе",
    trustCaption:
      "Аппарат и насадка в работе: техника на виду; между сеансами движение вперёд — по реакции кожи, а не по догадке.",
  },
] as const;
