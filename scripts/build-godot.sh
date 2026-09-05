#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f project.godot ]] || { echo "godot_web requires project.godot" >&2; exit 43; }
[[ -f export_presets.cfg ]] || { echo "Godot project has no export_presets.cfg; a Web export preset is required" >&2; exit 44; }
release_json="$(curl -fsSL --retry 3 https://api.github.com/repos/godotengine/godot/releases/latest)"
linux_url="$(printf '%s' "$release_json" | jq -r '.assets[]|select(.name|test("linux\\.x86_64\\.zip$"))|.browser_download_url' | head -n1)"
templates_url="$(printf '%s' "$release_json" | jq -r '.assets[]|select(.name|test("export_templates\\.tpz$"))|.browser_download_url' | head -n1)"
[[ -n "$linux_url" && "$linux_url" != null && -n "$templates_url" && "$templates_url" != null ]] || { echo "Unable to locate current Godot Linux/editor export-template assets" >&2; exit 45; }
mkdir -p "$RUNNER_TEMP/godot"
curl -fsSL --retry 3 "$linux_url" -o "$RUNNER_TEMP/godot/godot.zip"
unzip -q "$RUNNER_TEMP/godot/godot.zip" -d "$RUNNER_TEMP/godot/bin"
godot_bin="$(find "$RUNNER_TEMP/godot/bin" -type f -name 'Godot*' | head -n1)"
chmod +x "$godot_bin"
curl -fsSL --retry 3 "$templates_url" -o "$RUNNER_TEMP/godot/templates.tpz"
unzip -q "$RUNNER_TEMP/godot/templates.tpz" -d "$RUNNER_TEMP/godot/templates"
version="$($godot_bin --version | sed -E 's/^([0-9]+\.[0-9]+(\.[0-9]+)?\.stable).*/\1/' | head -n1)"
mkdir -p "$HOME/.local/share/godot/export_templates/$version"
template_root="$(find "$RUNNER_TEMP/godot/templates" -type d -name templates | head -n1)"
cp -a "$template_root/." "$HOME/.local/share/godot/export_templates/$version/"
preset="$(awk 'BEGIN{RS=""} /platform="Web"/ {if (match($0,/name="[^"]+"/)){x=substr($0,RSTART+6,RLENGTH-7);print x;exit}}' export_presets.cfg)"
[[ -n "$preset" ]] || { echo "export_presets.cfg contains no Web export preset" >&2; exit 46; }
zip_out="$RUNNER_TEMP/gimtrist-godot-web.zip"
"$godot_bin" --headless --path "$project_dir" --export-release "$preset" "$zip_out"
[[ -f "$zip_out" ]] || { echo "Godot Web export did not produce a ZIP bundle" >&2; exit 47; }
unzip -q "$zip_out" -d "$output_dir"
[[ -f "$output_dir/index.html" ]] || { echo "Godot Web export bundle contains no index.html" >&2; exit 47; }
