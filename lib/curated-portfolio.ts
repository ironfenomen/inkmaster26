/**
 * Кураторская галерея портфолио (реальные фото студии).
 * Цель — расширяемая галерея (ориентир `CURATED_PORTFOLIO_TARGET`); файлы в /public/media/…
 * На /portfolio — только этот список + лайтбокс; выгрузка с 2ГИС здесь не показывается.
 */
export type CuratedHomeSlot =
  | "lg"
  | "md1"
  | "md2"
  | "sm1"
  | "sm2"
  | "sm3"
  | "w1"
  | "w2";

export type CuratedPortfolioItem = {
  src: string;
  alt: string;
  /** Слот на главной (сетка + CSS home-gallery-*). Только у кадров из сетки на главной. */
  homeSlot?: CuratedHomeSlot;
};

/** Кадры, которые участвуют в сетке «Портфолио» на главной. */
export type CuratedHomeGridItem = CuratedPortfolioItem & {
  homeSlot: CuratedHomeSlot;
};

const HOME_GRID_ORDER: CuratedHomeSlot[] = [
  "lg",
  "sm1",
  "sm2",
  "md1",
  "md2",
  "sm3",
  "w1",
  "w2",
];

export function curatedHomeGridImages(): CuratedHomeGridItem[] {
  const grid = curatedPortfolioImages.filter(
    (i): i is CuratedHomeGridItem => i.homeSlot != null,
  );
  return [...grid].sort(
    (a, b) =>
      HOME_GRID_ORDER.indexOf(a.homeSlot) - HOME_GRID_ORDER.indexOf(b.homeSlot),
  );
}

/** Планируемый размер полной галереи (подпись «N из …»). */
export const CURATED_PORTFOLIO_TARGET = 60;

/**
 * Порядок = порядок листания на странице портфолио (= порядок на главной слева направо / сверху вниз).
 */
export const curatedPortfolioImages: CuratedPortfolioItem[] = [
  {
    homeSlot: "lg",
    src: "/media/home-portfolio-lg.png",
    alt: "Нео-традиционная цветная тату на плече: маска и сакура. Работа студии Ink Masters.",
  },
  {
    homeSlot: "md1",
    src: "/media/home-portfolio-md-1.png",
    alt: "Black & grey тату на спине: самурайская маска и шлем. Работа студии Ink Masters.",
  },
  {
    homeSlot: "md2",
    src: "/media/home-portfolio-md-2.png",
    alt: "Тату на кисти, нео-трад: маска Хання и надпись на пальцах. Работа студии Ink Masters.",
  },
  {
    homeSlot: "sm1",
    src: "/media/home-portfolio-sm-1.png",
    alt: "Black & grey тату на плече: портрет в тёмной манере. Работа студии Ink Masters.",
  },
  {
    homeSlot: "sm2",
    src: "/media/home-portfolio-sm-2.png",
    alt: "Цветная тату на голени: змея и катана. Работа студии Ink Masters.",
  },
  {
    homeSlot: "sm3",
    src: "/media/home-portfolio-sm-3.png",
    alt: "Цветная тату на плече: птица, яркая палитра. Работа студии Ink Masters.",
  },
  {
    homeSlot: "w1",
    src: "/media/portfolio-spawn-thigh.png",
    alt: "Цветной реализм на бедре: персонаж Spawn, красный плащ. Работа студии Ink Masters.",
  },
  {
    homeSlot: "w2",
    src: "/media/portfolio-koi-peonies-arm.png",
    alt: "Японская цветная тату на плече: карп кои, цветы и волны. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-hannya-sakura-shoulder.png",
    alt: "Нео-трад японская тату на плече: маска Хання и сакура. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-octopus-lantern-forearm.png",
    alt: "Цветная тату на предплечье: осьминог и фонарь с бирюзовым светом. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-anubis-forearm.png",
    alt: "Black & grey тату на предплечье: Анубис, немес и анх. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-owl-lantern-forearm.png",
    alt: "Иллюстративная тату на предплечье: сова с фонарём, свечение глаз. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-lego-minifigure-forearm.png",
    alt: "Цветная иллюстративная тату на предплечье: персонаж в стиле LEGO. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-portrait-realism-leg.png",
    alt: "Цветной реализм на голени: портрет с крестом на цепи. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-kitsune-samurai-leg.png",
    alt: "Нео-традиционная цветная тату на голени: кицунэ в шлеме и осенние листья. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-deadpool-leg.png",
    alt: "Цветная тату на ноге: персонаж с катанами, комикс-стиль. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-new-school-character-arm.png",
    alt: "New school цветная тату на руке: персонаж, бутылка и сигарета. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-bottle-lettering-forearm.png",
    alt: "Нео-трад тату на предплечье: бутылка и лента с надписью. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-cartoon-scene-leg.png",
    alt: "Цветная иллюстративная тату на голени: сцена в декоративной рамке. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-punk-portrait-anarchy-forearm.png",
    alt: "Цветной реализм на предплечье: портрет с микрофоном и символом анархии. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-pug-mugshot-forearm.png",
    alt: "Иллюстративная цветная тату на предплечье: мопс, табличка COOL DOG. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-fox-berries-forearm.png",
    alt: "Цветной реализм на предплечье: лиса, ягоды и листья. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-raccoon-forest-leg.png",
    alt: "Нео-трад цветная тату на ноге: енот, шишка и ягоды. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-new-school-bat-creature-shoulder.png",
    alt: "New school тату на плече: зверь с крыльями и гривой. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-pirate-shark-forearm.png",
    alt: "New school тату на предплечье: акула-пират, треуголка и якорь. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-cartoon-rabbit-boom-arm.png",
    alt: "Иллюстративная цветная тату на плече: кролик, взрыв BOOM! и свиток. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-caricature-braids-forearm.png",
    alt: "Иллюстративная карикатура на предплечье: персонаж с косичками и цепью. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-biomech-shock-calf.png",
    alt: "Цветная биомеханика на голени: амортизатор «под кожей», пружина Öhlins TTX. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-skeleton-whiskey-arm.png",
    alt: "Цветной реализм на руке: скелет, виски и стакан со льдом. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-horned-creature-shuriken-forearm.png",
    alt: "New school тату на предплечье: рогатый персонаж и сюрикен. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-skull-knife-forearm.png",
    alt: "Иллюстративный реализм на предплечье: череп, нож и фиолетовый дым. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-red-hood-wolf-leg.png",
    alt: "Иллюстративная цветная тату на голени: сказочная сцена и мухоморы. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-skull-crown-rose-forearm.png",
    alt: "Цветная тату на предплечье: череп в короне, капюшон и роза. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-rose-watercolor-hand.png",
    alt: "Тату на кисти: роза и акварельные разводы, бирюзовые акценты. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-steampunk-cat-arm.png",
    alt: "Нео-трад цветная тату на руке: кот в стимпанке, цилиндр и монокль. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-mario-pallet-chest.png",
    alt: "Цветная иллюстративная тату на груди: персонаж с тележкой и блоками. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-armored-knight-arm.png",
    alt: "Black & grey тату на плече: рыцарь в доспехах, зарисовочный стиль. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-skull-cigar-chain-forearm.png",
    alt: "Black & grey реализм на предплечье: череп в короне, сигара и цепь. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-tree-frog-forearm.png",
    alt: "New school цветная тату на предплечье: древесная лягушка на ветке. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-pinup-frying-pan-leg.png",
    alt: "Иллюстративная цветная тату на голени: пин-ап на сковороде и надпись. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-heart-hourglass-forearm.png",
    alt: "Black & grey тату на предплечье с красным акцентом: сердце и песочные часы. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-steampunk-bird-chest.png",
    alt: "Black & grey тату на груди: птица со стимпанк-механикой. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-skull-headphones-lettering-arm.png",
    alt: "Цветная иллюстративная тату на плече: череп в кепке и наушниках, надписи. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-flower-triangle-forearm.png",
    alt: "Тату на предплечье: цветок в треугольнике и black & grey ботаника. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-chili-character-wrist.png",
    alt: "Цветная иллюстративная тату на запястье: персонаж-перец со спичкой. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-music-media-arm.png",
    alt: "Цветной реализм на руке: винил, кассета и CD. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-wonderland-cat-forearm.png",
    alt: "Цветная иллюстративная тату на предплечье: полосатый кот в шляпе и яблоко. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-symmetrical-flowers-chest.png",
    alt: "Симметричные цветные тату на ключицах: красные цветы и чёрная листва. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-snake-chrysanthemum-forearm.png",
    alt: "Японская цветная тату на предплечье: змея, хризантема и облака. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-deadpool-unicorn-forearm.png",
    alt: "Цветная иллюстративная тату на предплечье: комикс-персонаж и единорог. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-matryoshka-pinup-leg.png",
    alt: "Цветная иллюстративная тату на ноге: матрёшка в пин-ап стиле. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-skeleton-biker-forearm.png",
    alt: "New school тату на предплечье: скелет на мотоцикле и баннер. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-pinup-banners-arm.png",
    alt: "Нео-трад цветная тату на плече: пин-ап портрет с баннерами. Работа студии Ink Masters.",
  },
  {
    src: "/media/portfolio-gas-mask-hood-forearm.png",
    alt: "Black & grey реализм на предплечье: противогаз в капюшоне. Работа студии Ink Masters.",
  },
];

const slotToArticleClass: Record<CuratedHomeSlot, string> = {
  lg: "work lg has-photo home-gallery-lg",
  md1: "work md has-photo home-gallery-md1",
  md2: "work md has-photo home-gallery-md2",
  sm1: "work sm has-photo home-gallery-sm1",
  sm2: "work sm has-photo home-gallery-sm2",
  sm3: "work md has-photo home-gallery-sm3",
  w1: "work wide has-photo home-gallery-w1",
  w2: "work wide has-photo home-gallery-w2",
};

export function curatedArticleClass(slot: CuratedHomeSlot): string {
  return slotToArticleClass[slot];
}
