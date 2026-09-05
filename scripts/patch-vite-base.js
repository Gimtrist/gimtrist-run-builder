#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = process.argv[2] || 'package.json';
const p = JSON.parse(fs.readFileSync(path, 'utf8'));
const build = p.scripts && p.scripts.build;
if (
  typeof build === 'string' &&
  /(^|[;&|]\s*|\s)(?:npx\s+|pnpm\s+exec\s+|yarn\s+)?vite\s+build\b/.test(build) &&
  !/vite\s+build[^;&|]*--base(?:=|\s)/.test(build)
) {
  p.scripts.build = build.replace(/\bvite\s+build\b/, 'vite build --base ./');
  fs.writeFileSync(path, JSON.stringify(p, null, 2) + '\n');
  process.stdout.write('Gimtrist Run: forcing Vite base ./ for subpath-safe GitHub Pages output.\n');
}
