import { site } from "@/lib/site";

export function StickyMobile() {
  return (
    <div className="sticky-mobile">
      <a
        className="sticky-mobile-primary"
        href={site.telegram}
        target="_blank"
        rel="noopener noreferrer"
      >
        Telegram
      </a>
      <a
        className="sticky-mobile-secondary"
        href={site.vkPersonal}
        target="_blank"
        rel="noopener noreferrer"
      >
        VK
      </a>
      <a className="sticky-mobile-secondary" href={`tel:${site.phoneTel}`}>
        Позвонить
      </a>
    </div>
  );
}
