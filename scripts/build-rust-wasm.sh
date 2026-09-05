#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f Cargo.toml ]] || { echo "rust_wasm_web requires Cargo.toml" >&2; exit 38; }
rustup target add wasm32-unknown-unknown
if command -v wasm-pack >/dev/null 2>&1 || grep -Eiq 'wasm-bindgen' Cargo.toml; then
  if ! command -v wasm-pack >/dev/null 2>&1; then cargo install wasm-pack --locked; fi
  mkdir -p "$output_dir/pkg"
  wasm-pack build --release --target web --out-dir "$output_dir/pkg"
  copy_common_assets "$project_dir" "$output_dir"
  js_file="$(find "$output_dir/pkg" -maxdepth 1 -type f -name '*.js' | head -n1)"
  [[ -n "$js_file" ]] || { echo "wasm-pack produced no JavaScript loader" >&2; exit 39; }
  js_base="$(basename "$js_file")"
  cat > "$output_dir/index.html" <<HTML
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Gimtrist Run</title></head><body><script type="module">import init from './pkg/${js_base}';init();</script></body></html>
HTML
else
  echo "Rust project has no supported Trunk/wasm-bindgen browser packaging configuration" >&2
  exit 39
fi
