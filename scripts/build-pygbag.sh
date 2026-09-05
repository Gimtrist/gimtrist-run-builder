#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
[[ -f "$project_dir/main.py" ]] || { echo "python_pygbag_web requires main.py" >&2; exit 40; }
python3 -m pip install --disable-pip-version-check --user --upgrade pygbag
export PATH="$HOME/.local/bin:$PATH"
python3 -m pygbag --build "$project_dir"
[[ -f "$project_dir/build/web/index.html" ]] || { echo "Pygbag completed without build/web/index.html" >&2; exit 41; }
copy_web_tree "$project_dir/build/web" "$output_dir"
