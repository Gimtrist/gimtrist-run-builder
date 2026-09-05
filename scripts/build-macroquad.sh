#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"
output_dir="$2"
project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f Cargo.toml ]] || { echo "rust_macroquad_web requires Cargo.toml" >&2; exit 30; }
grep -Eiq 'macroquad' Cargo.toml || { echo "Cargo.toml does not declare macroquad" >&2; exit 31; }
rustup target add wasm32-unknown-unknown
cargo build --release --target wasm32-unknown-unknown
wasm_file="$(find target/wasm32-unknown-unknown/release -maxdepth 1 -type f -name '*.wasm' -printf '%s %p\n' | sort -nr | head -n1 | cut -d' ' -f2-)"
[[ -n "$wasm_file" && -f "$wasm_file" ]] || { echo "Macroquad build did not produce a wasm file" >&2; exit 32; }
cp "$wasm_file" "$output_dir/game.wasm"
curl --fail --location --retry 3 https://not-fl3.github.io/miniquad-samples/mq_js_bundle.js -o "$output_dir/mq_js_bundle.js"
copy_common_assets "$project_dir" "$output_dir"
cat > "$output_dir/index.html" <<'HTML'
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Gimtrist Run</title><style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#000}canvas{width:100%;height:100%;display:block}</style></head><body><canvas id="glcanvas" tabindex="1"></canvas><script src="mq_js_bundle.js"></script><script>load("game.wasm");</script></body></html>
HTML
