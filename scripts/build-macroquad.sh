#!/usr/bin/env bash
set -euo pipefail
source_dir="$1"
output_dir="$2"
cd "$source_dir"

if [[ ! -f Cargo.toml ]]; then
  echo "rust_macroquad_web requires Cargo.toml" >&2
  exit 30
fi
if ! grep -Eiq 'macroquad' Cargo.toml; then
  echo "Cargo.toml does not declare macroquad" >&2
  exit 31
fi

rustup target add wasm32-unknown-unknown
cargo build --release --target wasm32-unknown-unknown

wasm_file="$(find target/wasm32-unknown-unknown/release -maxdepth 1 -type f -name '*.wasm' -printf '%s %p\n' | sort -nr | head -n1 | cut -d' ' -f2-)"
if [[ -z "$wasm_file" || ! -f "$wasm_file" ]]; then
  echo "Macroquad build did not produce a wasm file" >&2
  exit 32
fi

cp "$wasm_file" "$output_dir/game.wasm"
curl --fail --location --retry 3 \
  https://not-fl3.github.io/miniquad-samples/mq_js_bundle.js \
  -o "$output_dir/mq_js_bundle.js"

for dir in assets resources data; do
  if [[ -d "$source_dir/$dir" ]]; then
    cp -a "$source_dir/$dir" "$output_dir/$dir"
  fi
done

cat > "$output_dir/index.html" <<'HTML'
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>Gimtrist Run</title>
  <style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#000}canvas{width:100%;height:100%;display:block}</style>
</head>
<body>
  <canvas id="glcanvas" tabindex="1"></canvas>
  <script src="mq_js_bundle.js"></script>
  <script>load("game.wasm");</script>
</body>
</html>
HTML
