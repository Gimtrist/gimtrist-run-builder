#!/usr/bin/env bash
set -euo pipefail

resolve_project_dir() {
  local source_dir="$1"
  local project_path="${2:-.}"
  if [[ -z "$project_path" || "$project_path" == "." ]]; then
    printf '%s\n' "$source_dir"
    return 0
  fi
  project_path="${project_path#/}"
  project_path="${project_path%/}"
  if [[ "$project_path" == *".."* ]]; then
    echo "invalid project path: $project_path" >&2
    return 2
  fi
  local dir="$source_dir/$project_path"
  if [[ ! -d "$dir" ]]; then
    echo "project path does not exist: $project_path" >&2
    return 2
  fi
  printf '%s\n' "$dir"
}

copy_web_tree() {
  local from="$1"
  local to="$2"
  if [[ ! -f "$from/index.html" ]]; then
    echo "web output has no index.html: $from" >&2
    return 2
  fi
  mkdir -p "$to"
  rsync -a --delete --exclude '.git/' --exclude '.github/' "$from/" "$to/"
}

find_web_output() {
  local project_dir="$1"
  shift
  local candidate
  for candidate in "$@"; do
    if [[ -f "$project_dir/$candidate/index.html" ]]; then
      printf '%s\n' "$project_dir/$candidate"
      return 0
    fi
  done
  if [[ -f "$project_dir/index.html" ]]; then
    printf '%s\n' "$project_dir"
    return 0
  fi
  local found
  found="$(find "$project_dir" -maxdepth 5 -type f -name index.html \
    ! -path '*/node_modules/*' ! -path '*/.git/*' ! -path '*/vendor/*' ! -path '*/test/*' ! -path '*/tests/*' \
    -printf '%d %p\n' 2>/dev/null | sort -n | head -n1 | cut -d' ' -f2-)"
  if [[ -n "$found" ]]; then
    dirname "$found"
    return 0
  fi
  return 1
}

# Compiled Node/web projects must publish generated output, never the original
# source root. Prefer conventional output directories, then a newly-created
# nested index.html from the current build.
find_generated_web_output() {
  local project_dir="$1"
  local build_started_marker="$2"
  shift 2
  local candidate
  for candidate in "$@"; do
    if [[ -f "$project_dir/$candidate/index.html" ]]; then
      printf '%s\n' "$project_dir/$candidate"
      return 0
    fi
  done
  local found
  found="$(find "$project_dir" -mindepth 2 -maxdepth 7 -type f -name index.html \
    ! -path '*/node_modules/*' ! -path '*/.git/*' ! -path '*/vendor/*' ! -path '*/test/*' ! -path '*/tests/*' \
    -newer "$build_started_marker" -printf '%d %p\n' 2>/dev/null | sort -n | head -n1 | cut -d' ' -f2-)"
  if [[ -n "$found" ]]; then
    dirname "$found"
    return 0
  fi
  return 1
}

copy_common_assets() {
  local project_dir="$1"
  local output_dir="$2"
  local dir
  for dir in assets asset resources res data static; do
    if [[ -d "$project_dir/$dir" && ! -e "$output_dir/$dir" ]]; then
      cp -a "$project_dir/$dir" "$output_dir/$dir"
    fi
  done
}
