#!/usr/bin/env python3
"""
Выгрузка изображений с публичной HTML-карточки фирмы 2ГИС:
- официальная галерея (photo.2gis.com, *_1920x.jpg);
- фото из отзывов (cachizer*.2gis.com/reviews-photos/*.jpg?w=1920).

Пишет файлы gallery-01.jpg … и обновляет lib/generated-firm-gallery-count.ts
(импортируется из lib/media.ts).
"""
from __future__ import annotations

import re
import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "media" / "2gis-firm-gallery"
COUNT_FILE = ROOT / "lib" / "generated-firm-gallery-count.ts"

FIRM_URL = (
    "https://2gis.ru/stavropol/firm/70000001061447874"
    "?m=41.913146%2C45.012436%2F16"
)

UA = "Mozilla/5.0 (compatible; InkMastersSiteSync/1.0; +https://inkmasters26.ru)"


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    ctx = ssl.create_default_context()
    with urllib.request.urlopen(req, context=ctx, timeout=60) as r:
        return r.read().decode("utf-8", errors="ignore")


def collect_urls(html: str) -> list[str]:
    prof = set(
        re.findall(
            r"https://i\d+\.photo\.2gis\.com/images/profile/\d+_[a-f0-9]+_1920x\.jpg",
            html,
        )
    )
    rev = set(
        re.findall(
            r"https://cachizer\d+\.2gis\.com/reviews-photos/[a-f0-9-]{36}\.jpg",
            html,
        )
    )
    profile_sorted = sorted(prof)
    review_sorted = sorted(rev)
    # Официальная галерея — первыми; затем кадры из отзывов (тоже с карточки).
    review_hi = [f"{u}?w=1920" for u in review_sorted]
    return profile_sorted + review_hi


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    ctx = ssl.create_default_context()
    with urllib.request.urlopen(req, context=ctx, timeout=120) as r:
        dest.write_bytes(r.read())


def main() -> None:
    html = fetch(FIRM_URL)
    urls = collect_urls(html)
    if len(urls) < 10:
        raise SystemExit(f"Слишком мало URL ({len(urls)}), проверьте разбор HTML.")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for i, url in enumerate(urls, start=1):
        name = f"gallery-{i:02d}.jpg"
        dest = OUT_DIR / name
        print(f"{i}/{len(urls)} {name} <- {url[:72]}…")
        download(url, dest)

    COUNT_FILE.write_text(
        "/** Сгенерировано `scripts/sync-2gis-firm-gallery.py` — не править вручную. */\n"
        f"export const firmGalleryCount = {len(urls)} as const;\n",
        encoding="utf-8",
    )
    print("OK:", len(urls), "files ->", OUT_DIR)
    print("OK:", COUNT_FILE)


if __name__ == "__main__":
    main()
