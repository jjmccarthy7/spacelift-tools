# Spacelift Design Rules

Reference this document before writing any UI code. These rules are derived from the official Spacelift Brand Style Guide (2nd Edition, 2026).

---

## Design Philosophy

> **"Calm. Modern. Premium. Spacious. High-confidence."**

The Spacelift brand exists to make renovation feel clearer, simpler, and more uplifting. Every UI decision should reinforce that feeling. If a component feels cluttered, dense, or anxious — it's off-brand.

**Pursue:** whitespace, hierarchy, restraint, warmth, clarity
**Avoid:** clutter, dense copy, SaaS dashboard patterns, animated underlines, decorative UI, trend-chasing visuals

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|---|---|---|
| **Love (Coral)** | `#FC4C4C` | Primary CTA buttons, logo, active states, accents |
| **Foundation Blue** | `#141B24` | Dark backgrounds, footer, primary text |
| **White** | `#FFFFFF` | Page backgrounds, card surfaces |

### Supporting Colors

| Name | Hex | Usage |
|---|---|---|
| Stone | `#EEF1F4` | Light section backgrounds, subtle fills |
| Slate | `#8D9EB2` | Muted/secondary text, inactive indicators |
| Blueprint | `#3B86E1` | Info states, in-progress badges |
| Greenlight | `#0ED096` | Success states, completed badges |
| Lavender | `#A27BFC` | Accent moments, data visualization |
| Plaster | `#FFBFD0` | Soft accents, highlights, selection color |
| Highlight | `#E4FFA4` | Callouts, emphasis moments |

### Color Rules
- Use **Love (coral)** for exactly one primary action per screen — don't dilute it
- Use **Foundation Blue** for all dark surfaces (footer, dark hero variants)
- Use **Stone** (`#EEF1F4`) for alternating section backgrounds — never gray
- Never put coral on coral. Never put white on Stone without checking contrast
- The logo is always coral on white, or white on coral/dark backgrounds
- Do not invent new color combinations outside the approved palette

### Extended UI Palette (Tints & Shades)
Each color has tints at -60%, -40%, -20% and shades at +20%, +40%, +60%. For example:
- Love light: `#FEB7B7` (-60%), `#FD9494` (-40%), `#FD7070` (-20%)
- Love dark: `#CA3D3D` (+20%), `#972E2E` (+40%), `#651E1E` (+60%)

---

## Typography

### Primary Typeface: Die Grotesk
**Currently using Inter as a placeholder.** When Die Grotesk is licensed, swap the single variable in `globals.css`:
```css
--font-primary: "Die Grotesk", Inter, sans-serif;
```

### Type Hierarchy

| Level | Style | Size | Weight | Usage |
|---|---|---|---|---|
| H1 | Display (Set D) | 96px / `text-8xl` | Black (900) | Hero headlines only |
| H2 | Display (Set C) | 72–96px / `text-7xl` | Light–Black | Section heroes |
| H3 | Headline (Set C) | 48px / `text-5xl` | Bold (700) | Section titles |
| H4 | Subhead (Set B) | 36px / `text-4xl` | Medium (500) | Card titles, sub-sections |
| H5 | Body Title (Set A) | 30px / `text-3xl` | Regular (400) | Feature headings |
| Body | Body Copy | 16–18px / `text-base–text-lg` | Regular (400) | Paragraphs, descriptions |
| Caption | Small | 12px / `text-xs` | Medium Italic | Labels, meta info |
| Tags | Section Label | 14–18px / `text-sm–text-base` | Black (900) | Section headers in all-caps |

### Typography Rules
- **Letter spacing:** Headlines use `-0.02em` to `-0.03em` (tight but not cramped)
- **Line height:** Headlines `1.1`, body copy `1.5–1.6`
- **All-caps tags** use Black weight, small size, wide tracking (`tracking-widest`)
- **Never** use more than 3 font weights on a single screen
- Body copy max-width: `65–70ch` for readability
- Use weight contrast (not size alone) to create hierarchy

---

## Spacing & Layout

### Base Grid
- Page max-width: `1280px` (container)
- Horizontal page padding: `24px` mobile, `48px` tablet, `80px` desktop
- Section vertical padding: `80–120px` on desktop, `48–64px` on mobile

### Spacing Scale
Use these values consistently:
```
4px   → micro gaps (icon-text spacing)
8px   → tight spacing (within components)
16px  → default component padding
24px  → card padding, small gaps
32px  → medium section gaps
48px  → component spacing
64px  → section spacing (mobile)
80px  → section spacing (tablet)
96px  → section spacing (desktop)
120px → hero section padding
```

### Component Spacing
- Cards: `24px` padding minimum
- Buttons: `10–14px` vertical, `20–28px` horizontal
- Nav: `64–80px` height, `24–32px` link spacing

---

## Border Radius

Scale with element size — always use these values, never custom:

| Size | Value | Usage |
|---|---|---|
| Small | `16px` (`rounded-2xl`) | Small cards, badges, inputs |
| Medium | `24px` (`rounded-3xl`) | Standard cards, modals |
| Large | `32px` | Large cards, feature panels |
| XL | `40px` | Hero containers, phone mockups |
| Full | `9999px` (`rounded-full`) | Pills, buttons, avatars |

**Rule:** Sharp corners are off-brand. Every surface should feel soft and approachable.

---

## Buttons

### Primary Button (Get the app / CTA)
```
Background: #FC4C4C (Love)
Text: #FFFFFF
Border radius: rounded-full
Padding: py-2.5 px-6
Font weight: 600
Hover: darken to #CA3D3D or opacity 0.9
```

### Secondary Button
```
Background: transparent
Border: 1.5px solid #141B24
Text: #141B24
Border radius: rounded-full
Hover: background #141B24, text white
```

### Ghost / Subtle
```
Background: transparent
Text: #141B24 or #8D9EB2
No border
Hover: text shifts to #FC4C4C
```

**Never use:** underline-style buttons, SaaS-style square buttons, gradient CTAs

---

## Navigation

### Structure
```
[spacelift logo]   Homeowners   Pros   Projects   Reviews   [Get the app]
```

### Rules
- Logo: lowercase `spacelift` in coral (`#FC4C4C`), font-weight 800
- Nav links: Foundation Blue, no underline, hover color shifts to Love coral
- **No animated underlines on hover.** Hover = subtle color shift only
- Active state: text in Love coral, or slightly darker weight
- "Get the app" = filled coral pill button (see Primary Button above)
- Nav height: ~64px, sticky, white background, bottom border `1px solid #EEF1F4`
- Mobile: hamburger menu, full-width overlay or slide-in drawer

---

## Homepage Hero Layout

The hero is a continuous section — not two separate blocks.

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│   Love where you live.               [Phone mockup]      │
│                                                          │
│   Renovate your space                [showing current    │
│   in five simple steps.              step screen]        │
│                                                          │
│   ── ── ── ── ──                                         │
│   [Step title]                                           │
│   [Step description]                                     │
│                                                          │
│   01 — 02 — 03 — 04 — 05                                │
└─────────────────────────────────────────────────────────┘
```

### Hero Rules
- Headline ("Love where you live.") must be very large — `text-6xl` minimum on desktop
- Subheadline is lighter weight, muted color, generous top margin
- Background: very soft gradient, light stone/warm-white — not pure white, not gray
- Radial glow behind the phone area to give it depth
- Phone and text must feel visually paired, same vertical center
- Step indicator uses `01 — 02 — 03 — 04 — 05` format (never "Step 1 of 5")
- Active step: darker/bold, with a small coral accent dot or underline
- Inactive steps: muted slate color
- Auto-rotate every 4 seconds, smooth fade or slide transition

---

## Cards

### General Rules
- Background: white or `#F8F9FB`
- Border: `1px solid #E2E6EA` or `1px solid #EEF1F4`
- Border radius: 24–32px
- Padding: 24px minimum
- Subtle box shadow: `0 2px 12px rgba(0,0,0,0.06)`
- Hover: slight lift shadow `0 8px 32px rgba(0,0,0,0.10)`

### Project Cards
- Image area with rounded top corners
- Project name (H4 weight)
- Location in muted slate
- Budget in Foundation Blue
- Status badge (Greenlight = completed, Blueprint = in progress)

### Review Cards
- Star rating in Love coral
- Quote text in Foundation Blue
- Reviewer name bold, role in slate
- Avatar initials in colored circle

---

## Iconography

**Library:** Lucide (https://lucide.dev)

```
Stroke width: 1.25px
Absolute stroke: On
Size: Match context (16px for inline, 20px for UI, 24px for feature icons)
```

Never use filled/solid icon variants. All icons use outlined strokes at 1.25px.

---

## Imagery

- Photography should feel **bright, airy, optimistic** — rooms with natural light
- Focus on **spaces, not people** — kitchens, bathrooms, living areas
- Images should feel tidy, uncluttered, and realistically livable
- Always use **rounded rectangle containers** (radius 24–40px depending on size)
- Placeholder imagery: use soft colored divs with appropriate emoji or icon

---

## Footer

```
Background: #141B24 (Foundation Blue)
Text: White / Slate (#8D9EB2 for secondary text)

Sections:
  Connect With Us  |  Contact Us  |  Terms & Conditions  |  Privacy Policy

Social icons: Instagram, YouTube, Facebook, LinkedIn (Lucide, 20px, stroke 1.25)
Contact: info@hellospacelift.com
```

---

## Interaction Principles

- **Transitions:** 200ms ease for color/opacity changes, 300ms for movement
- **No animated underlines** — hover = color shift only
- **Carousel:** 4-second auto-advance, smooth fade or horizontal slide
- **Focus states:** `outline: 2px solid #FC4C4C` offset 2px
- **Loading states:** Use subtle opacity pulse, never spinners in hero areas
- **Scroll behavior:** `scroll-behavior: smooth`

---

*Spacelift Brand Style Guide — 2nd Edition — Proprietary & Confidential © 2026*
