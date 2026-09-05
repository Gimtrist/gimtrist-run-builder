#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f Cargo.toml ]] || { echo "rust_bevy_web requires Cargo.toml" >&2; exit 33; }
grep -Eiq 'bevy' Cargo.toml || { echo "Cargo.toml does not declare Bevy" >&2; exit 34; }
rustup target add wasm32-unknown-unknown
if ! command -v wasm-bindgen >/dev/null 2>&1; then cargo install wasm-bindgen-cli --locked; fi
cargo build --release --target wasm32-unknown-unknown
wasm_file="$(find target/wasm32-unknown-unknown/release -maxdepth 1 -type f -name '*.wasm' -printf '%s %p\n' | sort -nr | head -n1 | cut -d' ' -f2-)"
[[ -n "$wasm_file" ]] || { echo "Bevy build did not produce a wasm file" >&2; exit 35; }
wasm-bindgen --target web --out-dir "$output_dir" --out-name game "$wasm_file"
copy_common_assets "$project_dir" "$output_dir"
cat > "$output_dir/index.html" <<'HTML'
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Gimtrist Run</title><style>html,body{margin:0;width:100%;height:100%;background:#111;overflow:hidden}canvas{width:100%!important;height:100%!important}</style></head><body><script type="module">import init from './game.js';init().catch(e=>{document.body.innerText='Unable to start application: '+e;console.error(e);});</script></body></html>
HTML
