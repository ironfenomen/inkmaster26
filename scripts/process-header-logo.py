#!/usr/bin/env python3
"""Crop logo from screenshot, remove dark/gray matte via edge flood-fill, save PNG."""
from __future__ import annotations

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

SRC = Path("/Users/lavrentev/.cursor/projects/Users-lavrentev-Inktatu/assets/image-0f948709-c08a-4843-a0a9-57e081860ea8.png")
DST = Path(__file__).resolve().parents[1] / "public" / "brand" / "logo-ink-masters.png"


def main() -> None:
    rgb = np.array(Image.open(SRC).convert("RGB"), dtype=np.int16)
    h0, w0 = rgb.shape[:2]

    # Rough content bbox (same logic as exploratory script), then padding
    sub = rgb[: min(380, h0), : min(420, w0), :]
    r, g, b = sub[:, :, 0], sub[:, :, 1], sub[:, :, 2]
    chroma = np.maximum(np.maximum(r, g), b) - np.minimum(np.minimum(r, g), b)
    luma = 0.299 * r + 0.587 * g + 0.114 * b
    mask = (chroma > 16) | (luma > 26)
    ys, xs = np.where(mask)
    pad = 14
    x1 = max(0, int(xs.min()) - pad)
    y1 = max(0, int(ys.min()) - pad)
    x2 = min(w0, int(xs.max()) + pad + 1)
    y2 = min(h0, int(ys.max()) + pad + 1)
    crop = rgb[y1:y2, x1:x2, :].copy()
    h, w = crop.shape[:2]

    rgba = np.zeros((h, w, 4), dtype=np.uint8)
    rgba[:, :, :3] = np.clip(crop, 0, 255).astype(np.uint8)
    rgba[:, :, 3] = 255

    ref = rgba[0, 0, :3].astype(np.int16)
    tol = 38

    def is_bg(px: np.ndarray) -> bool:
        r, g, b = px[:3].astype(np.int16)
        rr, rg, rb = ref
        return abs(r - rr) <= tol and abs(g - rg) <= tol and abs(b - rb) <= tol

    visited = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        q.append((0, x))
        q.append((h - 1, x))
    for y in range(h):
        q.append((y, 0))
        q.append((y, w - 1))

    while q:
        y, x = q.popleft()
        if y < 0 or y >= h or x < 0 or x >= w or visited[y, x]:
            continue
        if not is_bg(rgba[y, x]):
            continue
        visited[y, x] = True
        rgba[y, x, 3] = 0
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            q.append((y + dy, x + dx))

    # Remove near-neutral dark matte inside (checkerboard / flat gray) without touching saturated ink/glow
    r = rgba[:, :, 0].astype(np.float32)
    g = rgba[:, :, 1].astype(np.float32)
    b = rgba[:, :, 2].astype(np.float32)
    mx = np.maximum(np.maximum(r, g), b)
    mn = np.minimum(np.minimum(r, g), b)
    chroma = mx - mn
    luma = 0.299 * r + 0.587 * g + 0.114 * b
    # Остаточный «серый прямоугольник»: нейтральные полутона, не чистый чёрный контур и не светлая кайма
    gray_matte = (chroma < 22.0) & (luma > 18.0) & (luma < 72.0) & (rgba[:, :, 3] > 0)
    rgba[gray_matte, 3] = 0

    im = Image.fromarray(rgba)
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)

    DST.parent.mkdir(parents=True, exist_ok=True)
    im.save(DST, format="PNG", optimize=True)
    print("saved", DST, "size", im.size)


if __name__ == "__main__":
    main()
