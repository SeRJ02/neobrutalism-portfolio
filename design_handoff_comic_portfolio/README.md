# Handoff: Comic-Book / Bento-Grid Portfolio (Next.js)

## Overview
Single-page personal portfolio for **Akshat Somani** (Product Manager) in a neubrutalist, pop-art / comic-book style: bento grid of flat-color panels, thick black borders, hard-offset shadows, halftone/sunburst textures, sticker accents. Target: a **Next.js (App Router) project deployed on Vercel**.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior, not production code to copy verbatim. Your task is to **recreate this design as a Next.js app**:
- `Akshat Portfolio.dc.html` — the full design source. All styles are inline `style="…"` attributes; read them as the source of truth for every value. Ignore the surrounding `<x-dc>` wrapper, `support.js` script, `{{ … }}` template holes, `<sc-if>` tags, and the `data-dc-script` block — those are prototype-runtime plumbing. `style-hover="…"` attributes describe `:hover` styles.
- `assets/headshot.jpeg` — the illustrated portrait (use as-is, no filters).

## Fidelity
**High-fidelity.** Recreate pixel-perfectly: exact hex colors, clamp() font sizes, border widths, shadow offsets, rotations, and copy.

## Suggested Next.js structure
- One route: `app/page.tsx` (the whole page can be a single server component — there is no state or data fetching).
- `app/layout.tsx`: load fonts via `next/font/google` — **Baloo 2** (weight 800), **Anton** (400), **Public Sans** (400/600/700). Global CSS: `html,body{margin:0;background:#111;color:#111}`, `*{box-sizing:border-box}`, `a{color:#111}a:hover{color:#2447F0}`.
- Put the headshot in `public/assets/headshot.jpeg`; use `next/image` (dimensions ~736×736, `width:100%;height:auto`).
- Styling approach is the implementer's choice (CSS Modules recommended); the prototype's media queries at 768px / 600px / 480px must be reproduced (see Responsive below).
- No client components needed; hover "press" effects are pure CSS.

## Design Tokens
Colors (flat, no gradients except display-text fills):
- Hot pink `#FF2E88` · Cobalt `#2447F0` · Golden yellow `#FFC700` · Cream `#FFF6E8` · Ink `#111`
Type:
- Display: 'Baloo 2' 800 (name, big headlines, giant glyph accents)
- Headline/labels/CTAs: Anton, uppercase, letter-spacing 1–3px
- Body: 'Public Sans', 14–16px, line-height 1.55–1.65
Borders: 3px (small stickers/badges) · 4px (buttons, nav, cards) · 5px (panels)
Shadows (always solid black, zero blur/spread): 3px (stickers) · 5px · 6px (buttons/panels). Button hover = "pressed": `transform:translate(3px,3px); box-shadow:2px 2px 0 #111; transition:all 0.08s`.
Gutters: page container `max-width:1200px; margin:0 auto; background:#111; display:flex; flex-direction:column; gap:clamp(5px,1vw,8px); padding:clamp(5px,1vw,8px)`; rows use `gap:8px`.

## Screens / Sections (top to bottom)
All exact values are in the HTML file; summary below.

### 1. Nav (cream strip)
Flex row, space-between, `border:4px solid #111`, `padding:10px clamp(12px,3vw,20px)`. Left: "AKSHAT★SOMANI" in Baloo 2 800, `clamp(16px,2.5vw,22px)`, links to `#hero`. Right: ABOUT / WORK / CONTACT — Public Sans 700 12px, letter-spacing 2.5px, hover color `#FF2E88`, anchor links to `#about/#work/#contact`.

### 2. Hero (pink `#FF2E88`, border 5px)
`position:relative; overflow:hidden; text-align:center; padding:clamp(24px,5vh,52px) 20px clamp(28px,7vh,60px)`. Must fit within ~100vh; panels below should peek above the fold at 1366×768+.
- Sunburst texture overlay (absolute inset 0, pointer-events none): `background-image:repeating-conic-gradient(from 0deg at 50% 45%, rgba(255,246,232,0.28) 0deg 6deg, rgba(255,246,232,0) 6deg 14deg)`.
- Stickers (absolute, hidden ≤600px): "POW!" yellow, rotate -9deg, top 26px left 5%; "100% HUMAN" cobalt/cream text, rotate 7deg, bottom 34px right 6%; cream circle "★" 52×52, rotate -5deg, top 20px right 9%. All Anton 16px, 4px border, 5px/4px shadows.
- "PORTFOLIO ★ 2026" tag: cream, 4px border, 5px shadow, Anton `clamp(12px,1.4vw,15px)`, ls 3px, rotate -2deg.
- Name h1 "AKSHAT<br>SOMANI": Baloo 2 800, `clamp(2.5rem,8vw,7rem)`, line-height 0.95, vertical gradient text fill `linear-gradient(180deg,#FFF6E8 0%,#FFC700 78%)` via background-clip:text, `filter:drop-shadow(4px 4px 0 #111)`, letter-spacing -1px.
- Tagline card (single line always): yellow bg, black text, 4px border, 5px shadow, Anton uppercase `clamp(10px,1.6vw,16px)`, `letter-spacing:clamp(0px,0.12vw,1.5px)`, `white-space:nowrap`, rotate 2deg. Copy: "Product Manager building things at the intersection of broken & fun".

### 3. About row (flex, wraps to column ≤768px)
**About panel** (cream, flex 1.7 1 420px): dot-grid texture `radial-gradient(rgba(17,17,17,0.07) 1.5px,transparent 1.5px)/16px`. Sticker "PM BY DAY ★" (cobalt, rotate 6deg, top-right). Headshot: 236px yellow backing card (4px border, 6px shadow, diagonal-stripe texture, 14px padding) containing the illustration img (4px border, 5px shadow, rotate -2.5deg) — **no filters on the image**. Text: h2 "Hi, I'm Akshat." Anton `clamp(28px,3.4vw,40px)`; two body paragraphs (copy in HTML — note the company name after "APM at" is currently empty in the prototype; confirm final copy with Akshat).
**"NOW SHIPPING" panel** (yellow, flex 1 1 260px): diagonal stripes texture; giant pink ★ (Baloo 84px, black text-shadow 4px, rotate -10deg) bleeding off bottom-right corner; black "NOW SHIPPING" chip; h3 "CASE STUDIES" Anton 30px; blurb; pink "SEE THE WORK ↓" button → `#work`.

### 4. Work row (flex, wraps ≤768px)
**DumbMoney** (cobalt, cream text, flex 1.4 1 340px): cream halftone dots texture (`rgba(255,246,232,0.10) 2px / 20px`); giant yellow "%" glyph (Baloo 150px, 6px black text-shadow, rotate -8deg) bottom-right bleed; "SHIPPED ✓" yellow sticker top-right; "CASE STUDY 01" cream chip; h3 "DUMB MONEY" (two lines) Anton `clamp(40px,5vw,64px)`; blurb; yellow "VIEW CASE STUDY →" button.
**Right column** (flex 1 1 300px, two stacked panels, gap 8px):
- **Embrace** (pink): -45deg stripes; giant cream "♥" (110px, rotate -9deg) bottom-right; "IN PROGRESS" cream sticker; "CASE STUDY 02" chip; h3 "EMBRACE"; blurb; cream button.
- **Blog teaser** (cream — deliberately NOT a case-study card, no numbered chip): dot grid; giant cobalt "”" quote glyph (120px, rotate 8deg) bottom-right; "NEW POST ★" pink sticker; h3 "THOUGHTS & WRITING" (max-width 75%); blurb "Read the blogs here" (max-width 80%); cobalt "READ THE BLOG →" button (placeholder href).

### 5. Footer / Contact (yellow, border 5px, centered)
Coarse dot texture (`rgba(17,17,17,0.06) 2px / 20px`); pink ★ accent bottom-left (Baloo 40px, rotate -7deg); "HIRE ME?" pink sticker top-right (3px border, rotate 6deg, gentle `wobble` keyframe rotate -6↔-2deg over 3s). H2 "Let's make something dumb & fun." Baloo 2 `clamp(36px,5.5vw,64px)` with gradient text fill `#111→#2447F0`. Blurb, then three buttons (flex, gap 16px, wrap): LINKEDIN (cobalt), GITHUB (black w/ pink shadow), EMAIL (cream) — **all hrefs are placeholders; get real URLs from Akshat**. Copyright line: 12px, ls 2px, opacity 0.75.

## Interactions & Behavior
- Anchor-scroll nav (#hero/#about/#work/#contact).
- Buttons: hard-shadow press on hover (see tokens). Links in nav: color→pink on hover.
- "HIRE ME?" sticker: infinite wobble keyframe.
- No forms, no state, no data fetching.

## Responsive
Breakpoints from the prototype (reproduce exactly):
- ≤768px: `.bento-row` flex rows become single column.
- ≤600px: hero stickers hidden.
- ≤480px: nav link gap 12px, font 10px, ls 1.5px.
- Everything else scales fluidly via clamp()/vh/vw — no fixed heights. Hero must not overflow 100vh; name stays two clean lines at 360px.

## Assets
- `assets/headshot.jpeg` — user-provided illustrated portrait (black/cream line art). Use unmodified.
- All textures/patterns are pure CSS gradients (no image files). Fonts from Google Fonts via next/font.

## Files
- `Akshat Portfolio.dc.html` — full design reference (inline styles = source of truth)
- `assets/headshot.jpeg`

## Vercel
Standard Next.js deploy: push repo to GitHub → import in Vercel → zero config. No env vars, no API routes.
