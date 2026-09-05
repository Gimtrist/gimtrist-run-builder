#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
fixture="$(mktemp -d)"
output="$(mktemp -d)"
node_fixture="$(mktemp -d)"
node_output="$(mktemp -d)"
trap 'rm -rf "$fixture" "$output" "$node_fixture" "$node_output"' EXIT

mkdir -p "$fixture/assets"
printf '%s\n' '<!doctype html><title>Gimtrist Run fixture</title><script src="assets/app.js"></script>' > "$fixture/index.html"
printf '%s\n' 'console.log("gimtrist-run-fixture")' > "$fixture/assets/app.js"
printf '%s\n' 'MIT fixture license' > "$fixture/LICENSE"
"$root/scripts/build.sh" static_web "$fixture" "$output"
"$root/scripts/copy-license.sh" "$fixture" "$output"
test -f "$output/index.html"
test -f "$output/assets/app.js"
test -f "$output/source-license/LICENSE"
grep -q 'Gimtrist Run fixture' "$output/index.html"
echo 'PASS: static_web fixture build and license preservation'

cat > "$node_fixture/package.json" <<'JSON'
{"name":"gimtrist-node-fixture","private":true,"scripts":{"build":"node build.js"}}
JSON
cat > "$node_fixture/build.js" <<'JS'
const fs=require('fs');fs.mkdirSync('dist',{recursive:true});fs.writeFileSync('dist/index.html','<!doctype html><title>node fixture</title>');
JS
"$root/scripts/build.sh" node_web "$node_fixture" "$node_output"
test -f "$node_output/index.html"
grep -q 'node fixture' "$node_output/index.html"
echo 'PASS: node_web fixture build'

if command -v go >/dev/null 2>&1; then
  go_fixture="$(mktemp -d)"; go_output="$(mktemp -d)"
  trap 'rm -rf "$fixture" "$output" "$node_fixture" "$node_output" "$go_fixture" "$go_output"' EXIT
  cat > "$go_fixture/go.mod" <<'EOF'
module example.com/gimtristfixture

go 1.23
EOF
  cat > "$go_fixture/main.go" <<'EOF'
package main
func main() {}
EOF
  "$root/scripts/build.sh" go_wasm_web "$go_fixture" "$go_output"
  test -f "$go_output/index.html" && test -f "$go_output/main.wasm" && test -f "$go_output/wasm_exec.js"
  echo 'PASS: go_wasm_web fixture build'
fi

for script in "$root"/scripts/*.sh; do bash -n "$script"; done
echo 'PASS: all builder shell scripts parse'

workflow="$root/.github/workflows/gimtrist-run-build.yml"
grep -q "runner_profile:" "$workflow"
for profile in static_web node_web phaser_web rust_macroquad_web rust_bevy_web rust_trunk_web rust_wasm_web python_pygbag_web flutter_web godot_web defold_web haxe_openfl_web emscripten_cmake_web java_teavm_web libgdx_web dotnet_blazor_web go_wasm_web kotlin_js_web elm_web; do
  grep -q "$profile" "$root/scripts/build.sh" || { echo "FAIL: missing profile $profile" >&2; exit 1; }
done
grep -q 'GIMTRIST_RUN_CALLBACK_SECRET' "$workflow"
if grep -q 'callback_token' "$workflow"; then
  echo 'FAIL: callback secret/token must not be a workflow_dispatch input' >&2
  exit 1
fi
grep -q 'X-Gimtrist-Run-Signature' "$workflow"
grep -q 'target_path="runs/${TARGET_ID}"' "$workflow"
grep -q 'timeout-minutes: 35' "$workflow" || { echo 'FAIL: 35 minute timeout guard missing' >&2; exit 1; }
grep -q 'max_artifact_bytes=$((900 \* 1024 \* 1024))' "$workflow" || { echo 'FAIL: 900 MiB artifact guard missing' >&2; exit 1; }
grep -q 'max_file_bytes=$((95 \* 1024 \* 1024))' "$workflow" || { echo 'FAIL: 95 MiB file guard missing' >&2; exit 1; }
grep -q 'max_pages_bytes=$((950 \* 1024 \* 1024))' "$workflow" || { echo 'FAIL: 950 MiB Pages guard missing' >&2; exit 1; }
if ! grep -q 'concurrency:' "$workflow" || ! grep -q 'gimtrist-run-${{ inputs.target_id }}' "$workflow"; then
  echo 'FAIL: per-target workflow concurrency guard missing' >&2
  exit 1
fi
echo 'PASS: workflow safety/profile contracts'
