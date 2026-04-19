import Image from "next/image";
import { MastheadVkMasterLink } from "@/components/masthead-vk-master-link";
import { media, mediaAlt } from "@/lib/media";
import { site } from "@/lib/site";

type MastheadLineProps = {
  /** На главной: только проверяемость на картах — без ленты соцсетей в hero */
  compact?: boolean;
};

export function MastheadLine({ compact = false }: MastheadLineProps) {
  if (compact) {
    return (
      <div
        className="trust-strip masthead-line masthead-line--compact"
        style={{ maxWidth: 900, marginTop: 18 }}
      >
        <div className="trust-pill trust-pill--solo">
          <strong>Карты</strong>
          {site.mapsRating.value} из 5 · ~{site.mapsRating.ratingsCount} оценок —{" "}
          <a href={site.twoGis} target="_blank" rel="noreferrer">
            2ГИС
          </a>
          ,{" "}
          <a href={site.yandexMaps} target="_blank" rel="noreferrer">
            Яндекс Карты
          </a>
          . Соцсети — внизу страницы.
        </div>
      </div>
    );
  }

  return (
    <div className="trust-strip masthead-line" style={{ maxWidth: 900, marginTop: 22 }}>
      <div className="trust-pill">
        <strong>Лента</strong>
        <span className="trust-pill-row">
          <span
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 8px 28px rgba(0,0,0,.4)",
            }}
          >
            <Image
              src={media.mastheadThumb}
              alt={mediaAlt.mastheadThumb}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "52% 28%",
              }}
            />
          </span>
          <span>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            ,{" "}
            <a href={site.vk} target="_blank" rel="noreferrer">
              VK студии
            </a>
            ,{" "}
            <MastheadVkMasterLink />
            .
          </span>
        </span>
      </div>
      <div className="trust-pill">
        <strong>2ГИС</strong>
        {site.mapsRating.value} из 5, {site.mapsRating.ratingsCount} оценок —{" "}
        <a href={site.twoGis} target="_blank" rel="noreferrer">
          карточка
        </a>
        .
      </div>
      <div className="trust-pill">
        <strong>Режим</strong>
        {site.hours}.
      </div>
    </div>
  );
}
