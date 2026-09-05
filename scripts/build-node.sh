#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"
output_dir="$2"
project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
[[ -f package.json ]] || { echo "node_web requires package.json" >&2; exit 20; }

if [[ -f pnpm-lock.yaml ]]; then
  corepack enable >/dev/null 2>&1 || true
  pnpm install --frozen-lockfile || pnpm install
  runner=(pnpm)
elif [[ -f yarn.lock ]]; then
  corepack enable >/dev/null 2>&1 || true
  yarn install --immutable || yarn install --frozen-lockfile || yarn install
  runner=(yarn)
elif [[ -f bun.lockb || -f bun.lock ]]; then
  if ! command -v bun >/dev/null 2>&1; then
    curl -fsSL https://bun.sh/install | bash
    export PATH="$HOME/.bun/bin:$PATH"
  fi
  bun install --frozen-lockfile || bun install
  runner=(bun)
else
  if [[ -f package-lock.json ]]; then npm ci --ignore-scripts=false; else npm install --ignore-scripts=false; fi
  runner=(npm run)
fi

if ! node -e 'const p=require("./package.json");process.exit(p.scripts&&p.scripts.build?0:1)'; then
  echo "package.json has no build script" >&2
  exit 21
fi
"${runner[@]}" build

# Some frameworks require a separate static export after build.
if node -e 'const p=require("./package.json");process.exit(p.scripts&&p.scripts.export?0:1)' >/dev/null 2>&1; then
  "${runner[@]}" export || true
fi

web_dir="$(find_web_output "$project_dir" dist build out public docs web www .output/public build/web 2>/dev/null || true)"
if [[ -z "$web_dir" ]]; then
  echo "Node build completed but produced no static index.html. Server-rendered-only applications are not browser-artifact compatible." >&2
  exit 22
fi
copy_web_tree "$web_dir" "$output_dir"
