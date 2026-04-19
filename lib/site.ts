export const site = {
  name: "Ink Masters",
  city: "Ставрополь",
  district: "Промышленный район",
  street: "ул. Пирогова, 15, цокольный этаж",
  postalCode: "355040",
  phoneTel: "+79888618435",
  phoneDisplay: "+7 (988) 861-84-35",
  whatsapp: "https://wa.me/79888618435",
  telegram: "https://t.me/+fODN_KbtOZoyOWJi",
  vk: "https://vk.com/public213052574",
  /** Страница мастера в VK (как в официальных ссылках на студию). */
  vkPersonal: "https://vk.com/den4ik__tattoo",
  instagram: "https://www.instagram.com/__den4ik__tattoo__/",
  twoGis:
    "https://2gis.ru/stavropol/firm/70000001061447874?m=41.913146%2C45.012436%2F16",
  yandexMaps: "https://yandex.ru/navi/org/ink_masters/24055817057",
  /** Точка на карте (2ГИС: широта, долгота). Для Яндекса: ll = долгота, широта. */
  mapLat: "41.913146",
  mapLon: "45.012436",
  /** Маршрут от текущего местоположения до студии (Яндекс.Карты). */
  yandexRoute:
    "https://yandex.ru/maps/?rtext=~45.012436,41.913146&rtt=auto",
  hours: "Ежедневно 10:00–20:00, по предварительной записи",
  /** Снято с карточки 2ГИС (рейтинг и число оценок могут обновиться на картах). */
  mapsRating: { value: 5 as const, ratingsCount: 48 },
} as const;

export const tattooParlorLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Ink Masters",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://inkmasters26.ru",
  image: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://inkmasters26.ru"}/media/hero-showcase-main.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Пирогова, 15, цокольный этаж",
    addressLocality: site.city,
    addressRegion: "Ставропольский край",
    postalCode: site.postalCode,
    addressCountry: "RU",
  },
  telephone: site.phoneTel,
  openingHours: "Mo-Su 10:00-20:00",
  sameAs: [
    site.vk,
    site.vkPersonal,
    site.instagram,
    site.telegram,
    site.whatsapp,
    site.twoGis,
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(site.mapsRating.value),
    ratingCount: String(site.mapsRating.ratingsCount),
    bestRating: "5",
    worstRating: "1",
  },
};

export function articleLd(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://inkmasters26.ru";
  const url = `${base.replace(/\/$/, "")}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: "Денис",
      url: site.instagram,
    },
    publisher: {
      "@type": "Organization",
      name: "Ink Masters",
      url: base,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
