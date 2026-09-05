#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f game.project ]] || { echo "defold_web requires game.project" >&2; exit 48; }
info="$(curl -fsSL --retry 3 https://d.defold.com/stable/info.json)"
sha="$(printf '%s' "$info" | jq -r '.sha1')"
[[ -n "$sha" && "$sha" != null ]] || { echo "Unable to determine Defold stable build" >&2; exit 49; }
curl -fsSL --retry 3 "https://d.defold.com/archive/${sha}/bob/bob.jar" -o "$RUNNER_TEMP/bob.jar"
mkdir -p "$RUNNER_TEMP/defold-bundle"
java -jar "$RUNNER_TEMP/bob.jar" --archive --platform wasm-web --bundle-output "$RUNNER_TEMP/defold-bundle" resolve distclean build bundle
web_dir="$(find "$RUNNER_TEMP/defold-bundle" -type f -name index.html -printf '%h\n' | head -n1)"
[[ -n "$web_dir" ]] || { echo "Defold bundle produced no HTML5 index.html" >&2; exit 50; }
copy_web_tree "$web_dir" "$output_dir"
