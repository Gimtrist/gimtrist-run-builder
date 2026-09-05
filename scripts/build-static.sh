#!/usr/bin/env bash
set -euo pipefail
source_dir="$1"
output_dir="$2"

if [[ ! -f "$source_dir/index.html" ]]; then
  echo "static_web requires index.html at repository root" >&2
  exit 10
fi

rsync -a --delete \
  --exclude '.git/' \
  --exclude '.github/' \
  "$source_dir/" "$output_dir/"
