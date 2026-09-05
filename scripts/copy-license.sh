#!/usr/bin/env bash
set -euo pipefail
source_dir="$1"
output_dir="$2"
mkdir -p "$output_dir/source-license"
found=0
shopt -s nullglob nocaseglob
for file in "$source_dir"/LICENSE* "$source_dir"/COPYING* "$source_dir"/NOTICE*; do
  if [[ -f "$file" ]]; then
    cp "$file" "$output_dir/source-license/"
    found=1
  fi
done
shopt -u nullglob nocaseglob
if [[ "$found" -eq 0 ]]; then
  echo "No root license/notice file found in source checkout" > "$output_dir/source-license/README.txt"
fi
