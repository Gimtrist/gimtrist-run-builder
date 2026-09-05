#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"
output_dir="$2"
project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
web_dir="$(find_web_output "$project_dir" . dist build out public docs web www site html5 2>/dev/null || true)"
if [[ -z "$web_dir" ]]; then
  echo "static_web requires an existing index.html in the project root or a common web-output directory" >&2
  exit 10
fi
copy_web_tree "$web_dir" "$output_dir"
