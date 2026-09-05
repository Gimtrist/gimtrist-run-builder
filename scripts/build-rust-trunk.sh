#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f Cargo.toml ]] || { echo "rust_trunk_web requires Cargo.toml" >&2; exit 36; }
rustup target add wasm32-unknown-unknown
if ! command -v trunk >/dev/null 2>&1; then cargo install trunk --locked; fi
trunk build --release --dist "$output_dir"
[[ -f "$output_dir/index.html" ]] || { echo "Trunk completed without index.html" >&2; exit 37; }
