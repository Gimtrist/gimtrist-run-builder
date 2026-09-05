#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f CMakeLists.txt ]] || { echo "emscripten_cmake_web requires CMakeLists.txt" >&2; exit 53; }
sudo apt-get update -qq
sudo apt-get install -y -qq emscripten cmake ninja-build
rm -rf build-gimtrist-web
emcmake cmake -S . -B build-gimtrist-web -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build-gimtrist-web --parallel 2
html="$(find build-gimtrist-web -type f -name '*.html' | head -n1)"
[[ -n "$html" ]] || { echo "Emscripten CMake build produced no HTML launcher; project may not define a browser target" >&2; exit 54; }
web_dir="$(dirname "$html")"
copy_web_tree "$web_dir" "$output_dir" || {
  cp -a "$web_dir/." "$output_dir/"
  first_html="$(find "$output_dir" -maxdepth 1 -type f -name '*.html' | head -n1)"
  [[ -n "$first_html" ]] || exit 54
  [[ "$(basename "$first_html")" == "index.html" ]] || mv "$first_html" "$output_dir/index.html"
}
