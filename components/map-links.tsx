import { site } from "@/lib/site";

type MapLinksProps = {
  /** Кнопки на странице контактов; короткие ссылки — в компактных блоках; home — чипы на главной. */
  variant?: "buttons" | "inline" | "home";
  /** Для главной: связать группу ссылок с подписью «Маршрут» над блоком */
  "aria-labelledby"?: string;
};

export function MapLinks({
  variant = "buttons",
  "aria-labelledby": ariaLabelledBy,
}: MapLinksProps) {
  if (variant === "home") {
    return (
      <div
        className="home-location-maps-stack"
        role="group"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabelledBy ? undefined : "Маршрут и карточка студии на картах"}
      >
        <a
          className="home-location-maps-route"
          href={site.yandexRoute}
          target="_blank"
          rel="noopener noreferrer"
        >
          Проложить маршрут
        </a>
        <div
          className="home-location-maps home-location-maps--cards"
          aria-label="Открыть карточку Ink Masters"
        >
          <a href={site.twoGis} target="_blank" rel="noopener noreferrer">
            2ГИС
          </a>
          <a href={site.yandexMaps} target="_blank" rel="noopener noreferrer">
            Яндекс Карты
          </a>
        </div>
      </div>
    );
  }
  if (variant === "inline") {
    return (
      <p className="map-actions map-actions--inline">
        <a href={site.twoGis} target="_blank" rel="noreferrer">
          2ГИС
        </a>
        <span aria-hidden> · </span>
        <a href={site.yandexMaps} target="_blank" rel="noreferrer">
          Яндекс Карты
        </a>
      </p>
    );
  }
  return (
    <div className="map-actions">
      <a className="btn btn-secondary" href={site.twoGis} target="_blank" rel="noreferrer">
        Открыть в 2ГИС
      </a>
      <a
        className="btn btn-secondary"
        href={site.yandexMaps}
        target="_blank"
        rel="noreferrer"
      >
        Яндекс Карты
      </a>
    </div>
  );
}
