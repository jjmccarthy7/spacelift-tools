# Spacelift Tools — Claude Bootstrap Guide

This document explains the workflow Claude should follow when working inside the `spacelift-tools` repository. Read this file at the start of every session before making any changes.

---

## Repository Overview

```
spacelift-tools/
├── index.html                  ← Static root dashboard (DO NOT MODIFY)
├── assets/                     ← Shared static assets (DO NOT MODIFY)
├── funnel-model/               ← Static funnel model dashboard (DO NOT MODIFY)
├── netlify.toml                ← Root Netlify config for dashboards (DO NOT MODIFY)
├── apps/
│   └── hellospacelift/         ← Next.js 16 marketing site (ACTIVE DEVELOPMENT)
└── docs/
    └── designdocs/             ← Design reference materials (READ ONLY)
        ├── bootstrap.md        ← This file
        ├── design-rules.md     ← Spacelift design system rules
        ├── references/         ← Visual reference screenshots
        └── assets/             ← Source design files (PDF, Figma export)
```

---

## Golden Rules

### 1. Work only inside `spacelift-tools`
Never access, reference, or modify any other repository (e.g. `dataroom-ai`).

### 2. Never touch root-level files
The following are live production files and must remain untouched:
- `index.html`
- `netlify.toml`
- `assets/`
- `funnel-model/`

### 3. All marketing site work goes inside `/apps/hellospacelift`
This is the only directory where active UI development happens.

### 4. Always use `docs/designdocs/` as your design reference
Before writing any UI code, read `design-rules.md`. Use the reference screenshots in `references/` for visual guidance. The source PDF and design zip are in `assets/`.

---

## Git Workflow (Always Follow This)

```
main branch  ←  never commit directly here
     ↑
     PR  ←  Netlify generates a preview URL here
     ↑
feature branch  ←  all development happens here
```

### Step-by-step

1. **Start from main:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create a descriptive feature branch:**
   ```bash
   git checkout -b feature/your-description
   # Examples:
   # feature/homepage-hero
   # feature/add-review-cards
   # fix/nav-mobile-menu
   # docs/update-design-rules
   ```

3. **Make changes, commit frequently:**
   ```bash
   git add apps/hellospacelift/...
   git commit -m "feat: descriptive message"
   ```

4. **Push the branch:**
   ```bash
   git push origin feature/your-description
   ```

5. **Open a Pull Request against `main`.**

6. **Wait for JJ to review.** Do NOT merge the PR yourself.

---

## Netlify Preview Deployments

When a PR is opened against `main`, Netlify automatically builds a preview deployment.

- **Root site** (dashboards): deploys from root directory
- **Marketing site** (`hellospacelift`): deploys from `apps/hellospacelift/`
  - Build command: `npm run build`
  - Base directory: `apps/hellospacelift`
  - Publish directory: `.next`
  - Plugin: `@netlify/plugin-nextjs`

When you open a PR, always provide:
1. **GitHub PR link**
2. **Netlify preview URL** (Netlify posts this as a PR comment automatically)
3. **Short QA checklist** of things JJ should verify before merging

---

## QA Checklist Template

When opening a PR, include this checklist in the PR description:

```markdown
## QA Checklist

### Visual
- [ ] Homepage hero displays correctly on desktop (1280px)
- [ ] Homepage hero displays correctly on mobile (375px)
- [ ] Navigation links work and highlight active page
- [ ] "Get the app" CTA button visible and correctly styled
- [ ] Footer renders with all four sections

### Functional
- [ ] Hero carousel auto-rotates through all 5 steps
- [ ] Phone mockup updates in sync with step indicator
- [ ] All nav links route to correct pages
- [ ] No broken links or 404 errors

### Brand
- [ ] Logo is coral (#FC4C4C) on white backgrounds
- [ ] No animated underlines on hover
- [ ] Typography uses correct weight hierarchy
- [ ] Spacing feels spacious, not dense
```

---

## Technology Stack (Marketing Site)

| Layer | Technology |
|---|---|
| Framework | Next.js 16, App Router |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Icons | Lucide React (stroke width 1.25px) |
| Font | Inter (placeholder — swap to Die Grotesk when licensed) |
| Deployment | Netlify via `@netlify/plugin-nextjs` |

### Font Swap Instructions
The primary font is controlled by a single CSS variable in `app/globals.css`:
```css
@theme inline {
  --font-primary: Inter, sans-serif;  /* ← Change this line to swap fonts */
}
```

---

## Design Reference Files

| File | Purpose |
|---|---|
| `docs/designdocs/design-rules.md` | Design system rules — read before writing any UI |
| `docs/designdocs/references/homepage-reference.png` | Homepage hero visual reference |
| `docs/designdocs/references/footer-reference.png` | Footer visual reference |
| `docs/designdocs/assets/spacelift-design-system.pdf` | Full brand style guide PDF |
| `docs/designdocs/assets/spacelift-design-assets.zip` | Figma export / design frames |

---

*Last updated: March 2026 — Spacelift Tools v1*
