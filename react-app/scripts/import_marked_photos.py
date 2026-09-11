"""Compress numbered photos 1–27 into web JPEGs for marked website slots."""
from pathlib import Path

from PIL import Image, ImageOps

SRC = Path(r"c:\Users\gupta\Downloads")
DEST = Path(r"c:\xampp\htdocs\univresitydesinga\react-app\public\images")
STATIC = Path(r"c:\xampp\htdocs\univresitydesinga\images")
MAX_SIDE = 1600
QUALITY = 78


def pick(n: int) -> Path:
    prefix = f"{n}."
    cands = [
        p
        for p in SRC.iterdir()
        if p.is_file()
        and p.suffix.lower() in {".jpg", ".jpeg", ".png"}
        and (p.name.lower().startswith(prefix.lower()) or p.stem == str(n))
        and p.stat().st_size > 100_000
    ]
    if not cands:
        raise SystemExit(f"Missing source for {n}")
    return max(cands, key=lambda p: p.stat().st_size)


def convert(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode != "RGB":
            im = im.convert("RGB")
        im.thumbnail((MAX_SIDE, MAX_SIDE), Image.Resampling.LANCZOS)
        im.save(dest, "JPEG", quality=QUALITY, optimize=True, progressive=True)


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    STATIC.mkdir(parents=True, exist_ok=True)
    for n in range(1, 28):
        src = pick(n)
        name = f"marked-{n:02d}.jpg"
        dest = DEST / name
        print(f"{n:02d} <- {src.name} ({src.stat().st_size // 1024} KB) -> {name}", flush=True)
        convert(src, dest)
        (STATIC / name).write_bytes(dest.read_bytes())
    print("DONE", flush=True)


if __name__ == "__main__":
    main()
