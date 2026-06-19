#!/usr/bin/env python3
"""Download CC-licensed photos (Wikimedia Commons) for the travel guide PDFs.

Saves one JPEG per region into assets/guides/img/ and writes credits.json with
attribution / license info so we can show proper credits.
"""

import json
import re
import ssl
import time
import urllib.parse
import urllib.request
from pathlib import Path

SSL_CTX = ssl._create_unverified_context()

ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "assets" / "guides" / "img"
API = "https://commons.wikimedia.org/w/api.php"
UA = "WeddingGuide/1.0 (personal wedding site)"

# key -> Commons search term (namespace 6 = files)
QUERIES = {
    "athens": "Acropolis of Athens",
    "delphi": "Tholos Athena Pronaia Delphi",
    "nafplio": "Nafplio Palamidi view town",
    "hydra": "Hydra island port Greece",
    "lefkada": "Porto Katsiki Lefkada",
    "corfu": "Paleokastritsa Corfu beach",
    "kefalonia": "Myrtos Beach Kefalonia",
}


def strip_html(value: str) -> str:
    return re.sub(r"<[^>]+>", "", value or "").strip()


def search_image(term: str):
    params = {
        "action": "query",
        "generator": "search",
        "gsrsearch": f'filetype:bitmap {term}',
        "gsrlimit": "5",
        "gsrnamespace": "6",
        "prop": "imageinfo",
        "iiprop": "url|extmetadata|mime",
        "iiurlwidth": "1200",
        "format": "json",
    }
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40, context=SSL_CTX) as resp:
        data = json.load(resp)
    pages = data.get("query", {}).get("pages", {})
    # prefer landscape-ish jpeg results in search order
    best = sorted(pages.values(), key=lambda p: p.get("index", 99))
    for page in best:
        info = (page.get("imageinfo") or [{}])[0]
        thumb = info.get("thumburl")
        mime = info.get("mime", "")
        if not thumb or "jpeg" not in mime:
            continue
        meta = info.get("extmetadata", {})
        return {
            "title": page.get("title"),
            "thumburl": thumb,
            "width": info.get("thumbwidth"),
            "height": info.get("thumbheight"),
            "artist": strip_html(meta.get("Artist", {}).get("value", "")),
            "license": strip_html(meta.get("LicenseShortName", {}).get("value", "")),
            "descurl": info.get("descriptionurl", ""),
        }
    return None


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=60, context=SSL_CTX) as resp:
                dest.write_bytes(resp.read())
            return
        except urllib.error.HTTPError as exc:
            if exc.code == 429 and attempt < 4:
                wait = 5 * (attempt + 1)
                print(f"    429, retry in {wait}s")
                time.sleep(wait)
                continue
            raise


def main() -> None:
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    credits_path = IMG_DIR / "credits.json"
    credits = {}
    if credits_path.exists():
        credits = json.loads(credits_path.read_text())
    for key, term in QUERIES.items():
        dest = IMG_DIR / f"{key}.jpg"
        if dest.exists() and key in credits:
            print(f"[{key}] already present, skipping")
            continue
        print(f"[{key}] searching: {term}")
        hit = search_image(term)
        if not hit:
            print(f"  !! no result for {key}")
            continue
        if not dest.exists():
            download(hit["thumburl"], dest)
            time.sleep(3)
        credits[key] = {
            "file": dest.name,
            "title": hit["title"],
            "artist": hit["artist"],
            "license": hit["license"],
            "source": hit["descurl"],
        }
        print(f"  ok -> {dest.name} ({hit['width']}x{hit['height']}) {hit['license']}")
    (IMG_DIR / "credits.json").write_text(json.dumps(credits, ensure_ascii=False, indent=2))
    print("Saved credits.json")


if __name__ == "__main__":
    main()
