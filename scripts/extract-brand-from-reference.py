#!/usr/bin/env python3
"""Вырезает логотип и слово «Идея» из PNG-референса, убирает тёмный фон (flood + серый мат)."""
from __future__ import annotations

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

REF = Path("/Users/lavrentev/.cursor/projects/Users-lavrentev-Inktatu/assets/image-1eee44ac-0db2-4a5b-a56a-0a077c4d0e0c.png")
OUT_DIR = Path(__file__).resolve().parents[1] / "public" / "brand"
LOGO_OUT = OUT_DIR / "logo-ink-masters.png"
IDEYA_OUT = OUT_DIR / "hero-ideya-wordmark.png"


def matte_to_rgba(rgb: np.ndarray, flood_tol: int = 44) -> Image.Image:
    h, w = rgb.shape[:2]
    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[:, :, :3] = np.clip(rgb, 0, 255).astype(np.uint8)
    rgba[:, :, 3] = 255
    ref = tuple(rgba[0, 0, :3].astype(np.int16))

    def match(px: np.ndarray) -> bool:
        r, g, b = px[:3].astype(np.int16)
        rr, rg, rb = ref
        return (
            abs(r - rr) <= flood_tol
            and abs(g - rg) <= flood_tol
            and abs(b - rb) <= flood_tol
        )

    vis = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        q.append((0, x))
        q.append((h - 1, x))
    for y in range(h):
        q.append((y, 0))
        q.append((y, w - 1))
    while q:
        y, x = q.popleft()
        if y < 0 or y >= h or x < 0 or x >= w or vis[y, x]:
            continue
        if not match(rgba[y, x]):
            continue
        vis[y, x] = True
        rgba[y, x, 3] = 0
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            q.append((y + dy, x + dx))

    r = rgba[:, :, 0].astype(np.float32)
    g = rgba[:, :, 1].astype(np.float32)
    b = rgba[:, :, 2].astype(np.float32)
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    chroma = mx - mn
    luma = 0.299 * r + 0.587 * g + 0.114 * b
    gray = (chroma < 22) & (luma > 20) & (luma < 195) & (rgba[:, :, 3] > 0)
    rgba[gray, 3] = 0

    im = Image.fromarray(rgba)
    bb = im.getbbox()
    if bb:
        im = im.crop(bb)
    return im


def main() -> None:
    src = np.array(Image.open(REF).convert("RGB"), dtype=np.int16)
    # Кропы под макет 778×796 (лого слева сверху, «Идея» — правая часть строки «ГДЕ …»)
    logo_rgb = src[4:118, 16:236, :].copy()
    ideya_rgb = src[196:462, 258:712, :].copy()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    matte_to_rgba(logo_rgb).save(LOGO_OUT, format="PNG", optimize=True)
    matte_to_rgba(ideya_rgb).save(IDEYA_OUT, format="PNG", optimize=True)
    print("logo", Image.open(LOGO_OUT).size, "->", LOGO_OUT)
    print("ideya", Image.open(IDEYA_OUT).size, "->", IDEYA_OUT)


if __name__ == "__main__":
    main()
