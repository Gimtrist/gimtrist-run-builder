#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f pubspec.yaml ]] || { echo "flutter_web requires pubspec.yaml" >&2; exit 42; }
if ! command -v flutter >/dev/null 2>&1; then
  git clone --depth 1 --branch stable https://github.com/flutter/flutter.git "$RUNNER_TEMP/flutter"
  export PATH="$RUNNER_TEMP/flutter/bin:$PATH"
fi
flutter config --enable-web >/dev/null
if [[ ! -d web ]]; then flutter create . --platforms web --no-pub; fi
flutter pub get
flutter build web --release
# Artifacts are hosted below /runs/<target>/; make the generated base path relative.
python3 - <<'PY2'
from pathlib import Path
p=Path('build/web/index.html')
s=p.read_text()
s=s.replace('<base href="/">','<base href="./">')
p.write_text(s)
PY2
copy_web_tree "$project_dir/build/web" "$output_dir"
find "$output_dir" -type f -name '*.map' -delete
