import { site } from "@/lib/site";

function MapPinIcon() {
  return (
    <svg
      className="contacts-studio-map__pin-svg"
      width={44}
      height={52}
      viewBox="0 0 44 52"
      aria-hidden
    >
      <defs>
        <linearGradient id="contacts-pin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a35e" />
          <stop offset="100%" stopColor="#e5c78f" />
        </linearGradient>
      </defs>
      <path
        fill="url(#contacts-pin-grad)"
        d="M22 2C12.6 2 5 9.6 5 19c0 11.2 14.5 28.2 15.2 29 .4.5 1 .8 1.6.8h.2c.7 0 1.3-.3 1.7-.9C24.4 46.4 39 30.1 39 19 39 9.6 31.4 2 22 2Z"
      />
      <circle cx="22" cy="19" r="6.5" fill="#121212" opacity="0.92" />
    </svg>
  );
}

/**
 * Тёмное превью карты в стилистике сайта + маршрутные CTA (без светлого iframe).
 */
export function ContactsStudioMap() {
  return (
    <div className="contacts-studio-map">
      <div
        className="contacts-studio-map__preview"
        role="img"
        aria-label={`${site.name}, ${site.city}, ул. Пирогова, 15 — точка на карте`}
      >
        <div className="contacts-studio-map__mapart" aria-hidden />
        <div className="contacts-studio-map__scrim" aria-hidden />
        <div className="contacts-studio-map__vignette" aria-hidden />
        <div className="contacts-studio-map__pin-wrap">
          <MapPinIcon />
        </div>
        <div className="contacts-studio-map__chip">
          <span className="contacts-studio-map__chip-brand">{site.name}</span>
          <span className="contacts-studio-map__chip-addr">
            {site.city}, ул. Пирогова, 15
          </span>
        </div>
      </div>
      <p className="contacts-studio-map__caption">
        {site.city}, {site.street}
      </p>
      <div className="contacts-map-cta">
        <a
          className="btn btn-primary contacts-map-cta__route"
          href={site.yandexRoute}
          target="_blank"
          rel="noreferrer"
        >
          Проложить маршрут
        </a>
        <div className="contacts-map-cta__secondary">
          <a
            className="btn btn-secondary"
            href={site.yandexMaps}
            target="_blank"
            rel="noreferrer"
          >
            Открыть в Яндекс Картах
          </a>
          <a className="btn btn-secondary" href={site.twoGis} target="_blank" rel="noreferrer">
            Открыть в 2ГИС
          </a>
        </div>
      </div>
    </div>
  );
}
