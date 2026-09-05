#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -x ./gradlew || -f build.gradle || -f build.gradle.kts ]] || { echo "kotlin_js_web requires a Gradle project" >&2; exit 65; }
gradle_cmd=(gradle); [[ -x ./gradlew ]] && gradle_cmd=(./gradlew)
"${gradle_cmd[@]}" jsBrowserDistribution --no-daemon || "${gradle_cmd[@]}" jsBrowserProductionWebpack --no-daemon
web_dir="$(find_web_output "$project_dir" build/dist build/kotlin-webpack build/distributions 2>/dev/null || true)"
[[ -n "$web_dir" ]] || { echo "Kotlin/JS build produced no browser index.html" >&2; exit 66; }
copy_web_tree "$web_dir" "$output_dir"
