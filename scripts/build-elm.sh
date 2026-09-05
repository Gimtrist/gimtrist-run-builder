#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f elm.json ]] || { echo "elm_web requires elm.json" >&2; exit 67; }
if ! command -v elm >/dev/null 2>&1; then npm install -g elm; fi
main=""
for f in src/Main.elm Main.elm; do [[ -f "$f" ]] && main="$f" && break; done
if [[ -z "$main" ]]; then main="$(find . -maxdepth 4 -type f -name 'Main.elm' | head -n1)"; fi
[[ -n "$main" ]] || { echo "Elm project contains no Main.elm entry point" >&2; exit 68; }
elm make "$main" --optimize --output "$output_dir/elm.js"
copy_common_assets "$project_dir" "$output_dir"
cat > "$output_dir/index.html" <<'HTML'
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Gimtrist Run</title></head><body><div id="app"></div><script src="elm.js"></script><script>if(window.Elm&&Elm.Main){Elm.Main.init({node:document.getElementById('app')});}</script></body></html>
HTML
