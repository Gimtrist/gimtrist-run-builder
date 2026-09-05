#!/usr/bin/env bash
set -euo pipefail
source_dir="$1"
output_dir="$2"
cd "$source_dir"

if [[ ! -f package.json ]]; then
  echo "phaser_web requires package.json" >&2
  exit 20
fi

if [[ -f package-lock.json ]]; then
  npm ci --ignore-scripts=false
else
  npm install --ignore-scripts=false
fi

if node -e 'const p=require("./package.json"); process.exit(p.scripts&&p.scripts.build?0:1)'; then
  npm run build
else
  echo "package.json has no build script" >&2
  exit 21
fi

for dir in dist build public; do
  if [[ -f "$source_dir/$dir/index.html" ]]; then
    rsync -a "$source_dir/$dir/" "$output_dir/"
    exit 0
  fi
done

echo "Phaser build completed but no dist/build/public index.html was found" >&2
exit 22
