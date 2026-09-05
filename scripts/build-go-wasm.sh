#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f go.mod ]] || { echo "go_wasm_web requires go.mod" >&2; exit 63; }
GOOS=js GOARCH=wasm go build -o "$output_dir/main.wasm" .
wasm_exec="$(go env GOROOT)/lib/wasm/wasm_exec.js"
[[ -f "$wasm_exec" ]] || wasm_exec="$(go env GOROOT)/misc/wasm/wasm_exec.js"
[[ -f "$wasm_exec" ]] || { echo "Go wasm_exec.js was not found" >&2; exit 64; }
cp "$wasm_exec" "$output_dir/wasm_exec.js"
copy_common_assets "$project_dir" "$output_dir"
cat > "$output_dir/index.html" <<'HTML'
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Gimtrist Run</title><style>html,body{margin:0;width:100%;height:100%;background:#111;color:#eee}canvas{width:100%;height:100%;display:block}</style></head><body><script src="wasm_exec.js"></script><script>const go=new Go();WebAssembly.instantiateStreaming(fetch('main.wasm'),go.importObject).then(r=>go.run(r.instance)).catch(e=>{document.body.textContent='Unable to start Go WebAssembly application: '+e;console.error(e);});</script></body></html>
HTML
