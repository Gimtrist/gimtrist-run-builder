#!/usr/bin/env bash
set -euo pipefail
source "$(dirname "$0")/build-lib.sh"
source_dir="$1"; output_dir="$2"; project_path="${3:-.}"
project_dir="$(resolve_project_dir "$source_dir" "$project_path")"
cd "$project_dir"
csproj="$(find . -maxdepth 2 -type f -name '*.csproj' | head -n1)"
[[ -n "$csproj" ]] || { echo "dotnet_blazor_web requires a .csproj" >&2; exit 60; }
grep -Eiq 'Microsoft\.AspNetCore\.Components\.WebAssembly|BlazorWebAssembly' "$csproj" || { echo "The .NET project is not identified as Blazor WebAssembly" >&2; exit 61; }
dotnet restore "$csproj"
dotnet publish "$csproj" -c Release -o "$RUNNER_TEMP/blazor-publish"
web_dir="$(find_web_output "$RUNNER_TEMP/blazor-publish" wwwroot . 2>/dev/null || true)"
[[ -n "$web_dir" ]] || { echo "Blazor publish produced no wwwroot/index.html" >&2; exit 62; }
copy_web_tree "$web_dir" "$output_dir"
