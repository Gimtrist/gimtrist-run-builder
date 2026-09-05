#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
if [[ -x ./mvnw || -f pom.xml ]]; then
  if [[ -x ./mvnw ]]; then ./mvnw -B -DskipTests package; else mvn -B -DskipTests package; fi
elif [[ -x ./gradlew || -f build.gradle || -f build.gradle.kts ]]; then
  if [[ -x ./gradlew ]]; then ./gradlew build --no-daemon; else gradle build --no-daemon; fi
else
  echo "java_teavm_web requires Maven or Gradle project configuration" >&2; exit 55
fi
web_dir="$(find_web_output "$project_dir" target/generated/js target/teavm build/teavm build/dist build/distributions web 2>/dev/null || true)"
[[ -n "$web_dir" ]] || { echo "TeaVM build completed but produced no static index.html" >&2; exit 56; }
copy_web_tree "$web_dir" "$output_dir"
