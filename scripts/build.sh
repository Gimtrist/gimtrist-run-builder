#!/usr/bin/env bash
set -euo pipefail

profile="${1:-}"
source_dir="${2:-}"
output_dir="${3:-}"

if [[ -z "$profile" || -z "$source_dir" || -z "$output_dir" ]]; then
  echo "usage: build.sh <profile> <source_dir> <output_dir>" >&2
  exit 2
fi

rm -rf "$output_dir"
mkdir -p "$output_dir"

case "$profile" in
  static_web)
    exec "$(dirname "$0")/build-static.sh" "$source_dir" "$output_dir"
    ;;
  phaser_web)
    exec "$(dirname "$0")/build-phaser.sh" "$source_dir" "$output_dir"
    ;;
  rust_macroquad_web)
    exec "$(dirname "$0")/build-macroquad.sh" "$source_dir" "$output_dir"
    ;;
  *)
    echo "unsupported Gimtrist Run profile: $profile" >&2
    exit 3
    ;;
esac
