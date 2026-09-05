#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -x ./gradlew || -f build.gradle || -f build.gradle.kts ]] || { echo "libgdx_web requires a Gradle project" >&2; exit 57; }
gradle_cmd=(gradle); [[ -x ./gradlew ]] && gradle_cmd=(./gradlew)
if "${gradle_cmd[@]}" tasks --all --no-daemon 2>/dev/null | grep -qE '(^|[[:space:]])html:(dist|build)|(^|[[:space:]])teavm'; then
  "${gradle_cmd[@]}" html:dist --no-daemon || "${gradle_cmd[@]}" html:build --no-daemon || "${gradle_cmd[@]}" teavm:build --no-daemon
else
  echo "LibGDX project has no detected HTML/TeaVM Gradle target" >&2; exit 58
fi
web_dir="$(find_web_output "$project_dir" html/build/dist html/build/libs teavm/build/dist build/dist 2>/dev/null || true)"
[[ -n "$web_dir" ]] || { echo "LibGDX web task produced no index.html" >&2; exit 59; }
copy_web_tree "$web_dir" "$output_dir"
