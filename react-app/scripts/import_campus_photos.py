"""Compress the Google Drive campus photo dump into web-ready JPEGs.

Source folders are mapped to website feature prefixes. Original 10–18 MB
camera files are resized (max 1920px) and saved at JPEG quality 80.
"""
from __future__ import annotations

import json
import shutil
from pathlib import Path

from PIL import Image, ImageOps

SRC = Path(r"c:\Users\gupta\Downloads\drive-download-20260909T045105Z-1-001")
DEST = Path(r"c:\xampp\htdocs\univresitydesinga\react-app\public\images")
STATIC = Path(r"c:\xampp\htdocs\univresitydesinga\images")

FOLDERS = [
    ("class room interior", "classroom"),
    ("collage exterior", "exterior"),
    ("ground breaking", "groundbreaking"),
    ("IMD events", "imd"),
    ("lab at uct", "lab"),
    ("lab visit photos", "lab-visit"),
    ("students life at uct", "students"),
    ("uct events", "events"),
]

MAX_SIDE = 1920
QUALITY = 80


def convert(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode in ("RGBA", "P"):
            im = im.convert("RGB")
        elif im.mode != "RGB":
            im = im.convert("RGB")
        im.thumbnail((MAX_SIDE, MAX_SIDE), Image.Resampling.LANCZOS)
        im.save(dest, "JPEG", quality=QUALITY, optimize=True, progressive=True)


def copy_alias(src: Path, *names: str) -> None:
    for name in names:
        for folder in (DEST, STATIC):
            folder.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, folder / name)


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    STATIC.mkdir(parents=True, exist_ok=True)
    manifest: dict[str, list[str]] = {}

    for folder_name, prefix in FOLDERS:
        files = sorted(
            p
            for p in (SRC / folder_name).iterdir()
            if p.is_file() and p.suffix.lower() in {".jpg", ".jpeg", ".png"}
        )
        saved: list[str] = []
        for i, src in enumerate(files, start=1):
            name = f"{prefix}-{i:02d}.jpg"
            dest = DEST / name
            print(f"{folder_name} -> {name} ({src.name})", flush=True)
            convert(src, dest)
            shutil.copy2(dest, STATIC / name)
            saved.append(name)
        manifest[prefix] = saved

    # Featured aliases so existing hardcoded /images/* photo slots pick up
    # the new campus photography. Logos / rector / accred files stay untouched.
    pick = lambda prefix, idx: DEST / manifest[prefix][idx]

    copy_alias(pick("students", 0), "hero-1.jpg")
    copy_alias(pick("exterior", 0), "hero-2.jpg")  # DJI aerial
    copy_alias(pick("exterior", 3), "hero-3.jpg")  # campus building
    copy_alias(pick("events", 0), "hero-4.jpg")

    copy_alias(pick("exterior", 4), "campus-1.jpg")
    copy_alias(pick("classroom", 0), "campus-2.jpg")
    copy_alias(pick("classroom", 2), "campus-3.jpg")
    copy_alias(pick("lab", 0), "campus-4.jpg")
    copy_alias(pick("lab", 3), "campus-5.jpg")
    copy_alias(pick("students", 4), "campus-6.jpg")

    copy_alias(pick("students", 1), "gallery-1.jpg")
    copy_alias(pick("students", 6), "gallery-2.jpg")
    copy_alias(pick("exterior", 5), "gallery-3.jpg")
    copy_alias(pick("classroom", 1), "gallery-4.jpg")
    copy_alias(pick("lab", 1), "gallery-5.jpg")
    copy_alias(pick("lab-visit", 0), "gallery-6.jpg")
    copy_alias(pick("students", 10), "gallery-7.jpg")
    copy_alias(pick("imd", 0), "gallery-8.jpg")
    copy_alias(pick("events", 2), "gallery-9.jpg")

    copy_alias(pick("imd", 2), "news-1.jpg")
    copy_alias(pick("events", 1), "news-2.jpg")
    copy_alias(pick("imd", 8), "news-3.jpg")

    copy_alias(pick("exterior", 1), "video-1.jpg")
    copy_alias(pick("students", 2), "video-2.jpg")
    copy_alias(pick("lab", 2), "video-3.jpg")
    copy_alias(pick("classroom", 3), "video-4.jpg")
    copy_alias(pick("imd", 4), "video-5.jpg")
    copy_alias(pick("events", 3), "video-6.jpg")

    copy_alias(pick("groundbreaking", 0), "welcome-mou.jpg")

    (DEST / "photo-manifest.json").write_text(
        json.dumps({k: len(v) for k, v in manifest.items()}, indent=2),
        encoding="utf-8",
    )
    print("DONE", json.dumps({k: len(v) for k, v in manifest.items()}), flush=True)


if __name__ == "__main__":
    main()
