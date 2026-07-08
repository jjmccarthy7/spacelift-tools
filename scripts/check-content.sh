#!/usr/bin/env bash
# check-content.sh — content guardrail for hellospacelift.com
#
# Asserts that the approved shared architecture is intact:
#   - All three project-card pages import from the real data source
#   - /homeowners and /projects use the shared ProjectCard component
#   - The /homeowners hero product image asset exists
#   - No source file leaks the placeholder image path
#
# Run from the repo root. Exits 1 if any check fails.

set -uo pipefail

APP="apps/hellospacelift"
FAILS=0

pass() { echo "  ✓  $1"; }
fail() { echo "  ✗  $1" >&2; FAILS=$((FAILS + 1)); }

check_import() {
  local file="$APP/$1"
  local pattern="$2"
  local desc="$3"
  if grep -qF "$pattern" "$file" 2>/dev/null; then
    pass "$desc"
  else
    fail "$desc  →  not found in $file"
  fi
}

check_file() {
  local path="$APP/$1"
  local desc="$2"
  if [ -f "$path" ]; then
    pass "$desc"
  else
    fail "$desc  →  $path is missing"
  fi
}

echo "Content guardrail checks"
echo "========================"

# ── Shared data source ────────────────────────────────────────────────────────
echo ""
echo "Data source (all three pages must import from @/data/projects.json):"

check_import "src/app/page.tsx" \
  "projectsData from '@/data/projects.json'" \
  "homepage          imports projectsData"

check_import "src/app/homeowners/page.tsx" \
  "projectsData from '@/data/projects.json'" \
  "/homeowners       imports projectsData"

check_import "src/app/projects/page.tsx" \
  "projectsData from '@/data/projects.json'" \
  "/projects         imports projectsData"

# ── Shared ProjectCard component ──────────────────────────────────────────────
echo ""
echo "Shared ProjectCard component:"

check_import "src/app/homeowners/page.tsx" \
  "ProjectCard from '@/components/ProjectCard'" \
  "/homeowners       imports ProjectCard"

check_import "src/app/projects/page.tsx" \
  "ProjectCard from '@/components/ProjectCard'" \
  "/projects         imports ProjectCard"

# ── Required assets ───────────────────────────────────────────────────────────
echo ""
echo "Required assets:"

check_file "public/camera-screen-with-bezel.png" \
  "Hero product image  public/camera-screen-with-bezel.png"

# ── Placeholder leak detection ────────────────────────────────────────────────
# page.tsx legitimately uses /hero-kitchen.png as the homepage hero background.
# /homeowners and /projects must never reference it — any appearance there means
# project cards have been replaced with hardcoded placeholder data.
echo ""
echo "Placeholder leak check (/hero-kitchen.png must not appear in homeowners or projects pages):"

LEAKED=$(grep -l "/hero-kitchen.png" \
  "$APP/src/app/homeowners/page.tsx" \
  "$APP/src/app/projects/page.tsx" 2>/dev/null || true)

if [ -z "$LEAKED" ]; then
  pass "/homeowners and /projects pages do not reference /hero-kitchen.png"
else
  fail "Placeholder image /hero-kitchen.png found — project cards may have reverted to hardcoded data:"
  echo "$LEAKED" | sed 's/^/         /' >&2
fi

# ── Result ────────────────────────────────────────────────────────────────────
echo ""
echo "========================"
if [ "$FAILS" -eq 0 ]; then
  echo "All checks passed."
  exit 0
else
  echo "$FAILS check(s) failed. See above."
  exit 1
fi
