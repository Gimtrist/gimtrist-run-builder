#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f project.xml || -f Project.xml ]] || { echo "haxe_openfl_web requires project.xml" >&2; exit 51; }
sudo apt-get update -qq
sudo apt-get install -y -qq haxe neko
mkdir -p "$HOME/haxelib"; haxelib setup "$HOME/haxelib" >/dev/null
yes | haxelib install lime >/dev/null
yes | haxelib install openfl >/dev/null
haxelib run openfl build html5 -release
web_dir="$(find_web_output "$project_dir" Export/html5/bin export/html5/bin bin/html5/bin build/html5 dist 2>/dev/null || true)"
[[ -n "$web_dir" ]] || { echo "OpenFL HTML5 build produced no index.html" >&2; exit 52; }
copy_web_tree "$web_dir" "$output_dir"
