#!/usr/bin/env bash
set -euo pipefail
profile="${1:-}"; source_dir="${2:-}"; output_dir="${3:-}"; project_path="${4:-.}"
if [[ -z "$profile" || -z "$source_dir" || -z "$output_dir" ]]; then echo "usage: build.sh <profile> <source_dir> <output_dir> [project_path]" >&2; exit 2; fi
rm -rf "$output_dir"; mkdir -p "$output_dir"
case "$profile" in
  static_web) exec "$(dirname "$0")/build-static.sh" "$source_dir" "$output_dir" "$project_path" ;;
  node_web|phaser_web) exec "$(dirname "$0")/build-node.sh" "$source_dir" "$output_dir" "$project_path" ;;
  rust_macroquad_web) exec "$(dirname "$0")/build-macroquad.sh" "$source_dir" "$output_dir" "$project_path" ;;
  rust_bevy_web) exec "$(dirname "$0")/build-bevy.sh" "$source_dir" "$output_dir" "$project_path" ;;
  rust_trunk_web) exec "$(dirname "$0")/build-rust-trunk.sh" "$source_dir" "$output_dir" "$project_path" ;;
  rust_wasm_web) exec "$(dirname "$0")/build-rust-wasm.sh" "$source_dir" "$output_dir" "$project_path" ;;
  python_pygbag_web) exec "$(dirname "$0")/build-pygbag.sh" "$source_dir" "$output_dir" "$project_path" ;;
  flutter_web) exec "$(dirname "$0")/build-flutter.sh" "$source_dir" "$output_dir" "$project_path" ;;
  godot_web) exec "$(dirname "$0")/build-godot.sh" "$source_dir" "$output_dir" "$project_path" ;;
  defold_web) exec "$(dirname "$0")/build-defold.sh" "$source_dir" "$output_dir" "$project_path" ;;
  haxe_openfl_web) exec "$(dirname "$0")/build-openfl.sh" "$source_dir" "$output_dir" "$project_path" ;;
  emscripten_cmake_web) exec "$(dirname "$0")/build-emscripten-cmake.sh" "$source_dir" "$output_dir" "$project_path" ;;
  java_teavm_web) exec "$(dirname "$0")/build-teavm.sh" "$source_dir" "$output_dir" "$project_path" ;;
  libgdx_web) exec "$(dirname "$0")/build-libgdx.sh" "$source_dir" "$output_dir" "$project_path" ;;
  dotnet_blazor_web) exec "$(dirname "$0")/build-blazor.sh" "$source_dir" "$output_dir" "$project_path" ;;
  go_wasm_web) exec "$(dirname "$0")/build-go-wasm.sh" "$source_dir" "$output_dir" "$project_path" ;;
  kotlin_js_web) exec "$(dirname "$0")/build-kotlin-js.sh" "$source_dir" "$output_dir" "$project_path" ;;
  elm_web) exec "$(dirname "$0")/build-elm.sh" "$source_dir" "$output_dir" "$project_path" ;;
  *) echo "unsupported Gimtrist Run profile: $profile" >&2; exit 3 ;;
esac
