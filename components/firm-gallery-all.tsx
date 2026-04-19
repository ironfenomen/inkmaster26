import Image from "next/image";
import {
  firmGalleryAlt,
  firmGalleryCount,
  firmGalleryImage,
  firmGalleryIndices,
  firmGallerySource,
} from "@/lib/media";

export function FirmGalleryAll() {
  return (
    <div className="firm-gallery-all-wrap">
      <p className="firm-gallery-all-note">
        Все {firmGalleryCount} снимков с{" "}
        <a href={firmGallerySource} target="_blank" rel="noreferrer">
          карточки на 2ГИС
        </a>
        : официальная галерея (1920px) и фото из отзывов — локально для быстрой загрузки сайта.
      </p>
      <div className="firm-gallery-all" role="list">
        {firmGalleryIndices().map((n) => (
          <a
            key={n}
            className="firm-gallery-cell"
            href={firmGallerySource}
            target="_blank"
            rel="noreferrer"
            role="listitem"
            title={firmGalleryAlt(n)}
          >
            <Image
              src={firmGalleryImage(n)}
              alt={firmGalleryAlt(n)}
              fill
              sizes="(max-width: 520px) 50vw, (max-width: 900px) 33vw, 200px"
              className="firm-gallery-img"
            />
            <span className="firm-gallery-num" aria-hidden>
              {n}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
