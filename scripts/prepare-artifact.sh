#!/usr/bin/env bash
set -euo pipefail

output_dir="${1:-}"
if [[ -z "$output_dir" || ! -d "$output_dir" ]]; then
  echo "prepare-artifact requires an output directory" >&2
  exit 2
fi
index="$output_dir/index.html"
if [[ ! -f "$index" ]]; then
  echo "browser artifact has no index.html" >&2
  exit 2
fi

python3 - "$index" <<'PY'
import re
import shutil
import sys
from pathlib import Path

index = Path(sys.argv[1])
text = index.read_text(encoding="utf-8", errors="replace")

# A published browser artifact must not still depend on TypeScript/TSX/JSX
# source entrypoints. Those require a bundler/transpiler and otherwise yield a
# superficially successful but blank GitHub Pages application.
source_script = re.search(
    r'<script\b[^>]*\bsrc\s*=\s*(["\'])([^"\']+\.(?:ts|tsx|jsx))(?:[?#][^"\']*)?\1',
    text,
    flags=re.I,
)
if source_script:
    print(
        "Artifact index.html still references an uncompiled source module: "
        + source_script.group(2),
        file=sys.stderr,
    )
    sys.exit(73)

# GitHub Pages hosts every Gimtrist artifact below /runs/<target>/, so a
# root-relative HTML asset such as /style.css or /assets/app.js points at the
# wrong site root. Convert local HTML attributes to artifact-relative paths.
# Protocol-relative URLs (//cdn.example/...) are intentionally untouched.
text = re.sub(
    r'\b(src|href|poster)\s*=\s*(["\'])/(?!/)([^"\']*)\2',
    lambda m: f'{m.group(1)}={m.group(2)}./{m.group(3)}{m.group(2)}',
    text,
    flags=re.I,
)
text = re.sub(
    r'url\(\s*(["\']?)/(?!/)',
    lambda m: f'url({m.group(1)}./',
    text,
    flags=re.I,
)
index.write_text(text, encoding="utf-8")

# A simple SPA fallback is harmless for games and prevents GitHub Pages from
# returning its own 404 page when a client-side router refreshes a route.
fallback = index.parent / "404.html"
if not fallback.exists():
    shutil.copy2(index, fallback)
PY
