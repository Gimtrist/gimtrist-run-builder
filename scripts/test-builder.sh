#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
fixture="$(mktemp -d)"
output="$(mktemp -d)"
trap 'rm -rf "$fixture" "$output"' EXIT
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

for script in "$root"/scripts/*.sh; do bash -n "$script"; done
echo 'PASS: all builder shell scripts parse'

workflow="$root/.github/workflows/gimtrist-run-build.yml"
grep -q "runner_profile:" "$workflow"
grep -q "rust_macroquad_web" "$workflow"
grep -q 'GIMTRIST_RUN_CALLBACK_SECRET' "$workflow"
if grep -q 'callback_token' "$workflow"; then
  echo 'FAIL: callback secret/token must not be a workflow_dispatch input' >&2
  exit 1
fi
grep -q 'X-Gimtrist-Run-Signature' "$workflow"
grep -q 'target_path="runs/${TARGET_ID}"' "$workflow"

if ! grep -q 'timeout-minutes: 15' "$workflow"; then
  echo 'FAIL: build timeout guard missing' >&2
  exit 1
fi
if ! grep -q 'concurrency:' "$workflow" || ! grep -q 'gimtrist-run-${{ inputs.target_id }}' "$workflow"; then
  echo 'FAIL: per-target workflow concurrency guard missing' >&2
  exit 1
fi
if ! grep -Fq 'max_bytes=$((100 * 1024 * 1024))' "$workflow"; then
  echo 'FAIL: artifact size guard missing' >&2
  exit 1
fi
echo 'PASS: workflow keeps callback secret out of dispatch inputs and publishes one active artifact per target'
