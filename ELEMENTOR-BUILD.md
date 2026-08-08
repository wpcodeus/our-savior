# Elementor Build Handoff — Our Savior Lutheran (Kasson, MN)

This repo contains the **finished HTML/CSS reference** for the whole site. The job is to
**rebuild every page in WordPress with Elementor**, matching this reference exactly.

- **Site:** https://oursavior.wpcodeus.dev  (WELS Lutheran church)
- **Theme:** Hello Elementor **child theme** · **Elementor Pro** installed · Atomic 4 disabled
- **Editing via:** Novamira Visual (must run from a **local** Claude session so its agent
  pairs with the open WordPress browser — verify `workspace_status` shows `dashboardConnected: true`).
- **Design source of truth:** the HTML pages in this repo + `assets/css/styles.css`.
  Open each page and match structure, spacing, colors, fonts, and hover states.

---

## Pages to build (20) — all as **Elementor Full Width** template, kept as **DRAFT** until final check

| # | HTML file | Page title |
|---|-----------|-----------|
| 1 | index.html | Home |
| 2 | new-here.html | New Here |
| 3 | about.html | About Us |
| 4 | what-to-expect.html | What to Expect |
| 5 | what-we-believe.html | What We Believe |
| 6 | whats-going-on.html | What's Going On |
| 7 | adult-membership-classes.html | Adult Membership Classes |
| 8 | youth-confirmation.html | Youth Confirmation |
| 9 | ministries.html | Ministries |
| 10 | sunday-school.html | Sunday School |
| 11 | vacation-bible-school.html | Vacation Bible School |
| 12 | parent-bible-study.html | Parent Bible Study |
| 13 | catechism.html | Catechism |
| 14 | sermons.html | Sermons |
| 15 | resources.html | Resources |
| 16 | calendar.html | Calendar |
| 17 | weekly-updates.html | Weekly Updates |
| 18 | online-directory.html | Online Directory |
| 19 | contact.html | Contact |
| 20 | give.html | Give |

Menu structure (build the WP menu LAST, after pages exist):
- Home
- New Here ▾ → About Us · What to Expect · What We Believe
- What's Going On ▾ → Adult Membership Classes · Youth Confirmation
- Ministries ▾ → Sunday School · Vacation Bible School · Parent Bible Study · Catechism
- Sermons
- Resources ▾ → Calendar · Weekly Updates · Online Directory
- Contact
- Give (Vanco link → https://secure.myvanco.com/L-Z55B/home, opens new tab)

Set **Home (index)** as the static homepage last.

---

## Global Colors (Site Settings → Global Colors) — use these everywhere, never hardcode hex

| Global name | Hex | Used for |
|-------------|-----|----------|
| Primary (Navy) | `#2E3192` | Buttons, headings on light, links, nav accents |
| Navy Dark | `#262A7D` | Button hover, gradients |
| Navy Deep | `#1B1E56` | Footer background |
| Accent (Gold) | `#B98F2E` | Eyebrows, rules, gold buttons, ornaments |
| Gold Soft | `#E7D6A8` | Arch outline, footer accents, badges |
| Text (Ink) | `#20212F` | Headings & strong text |
| Body | `#55566A` | Body copy |
| Parchment | `#F1EAD9` | Alternating section backgrounds |
| Paper | `#FBF8F1` | Page background |
| Line | `#E6DDC9` | Borders / dividers |

## Global Fonts (Site Settings → Global Fonts)

| Global name | Family | Weights | Used for |
|-------------|--------|---------|----------|
| Primary (Headings) | **Fraunces** | 600 (some 500) | All h1–h4, verse quotes, card titles |
| Secondary (Body) | **Source Sans 3** | 400 / 600 / 700 | Body, buttons, eyebrows, labels |
| Eyebrow style | Source Sans 3 700, `letter-spacing .24em`, UPPERCASE, gold | section eyebrows |

Hero H1 ≈ clamp 2.7–4.4rem, Fraunces 600, the accent word (e.g. *grace*) is **italic navy**.

---

## Layout rules (critical — from client)

1. **Template:** every page → **Elementor Full Width** (NOT Canvas — Canvas removes header/footer).
   Also set Hello Elementor content layout to **Full Width** so heroes run edge-to-edge.
2. **Container padding** stays **0** in Site Settings (client wants this). Adjust content width + gaps as needed.
3. Build with **Elementor Containers (Flexbox)**. Set container **gap = 0**; put all spacing in each
   child column's **padding**. (A gap + percentage widths overflows 100% and forces wrap/break.)
4. **Native widgets only.** Do NOT drop a whole section into an HTML widget. Wrap ONLY a single element
   in HTML if it genuinely can't be done natively (none are expected here) — and report each instance.
5. **Prefer addon widgets** (Pro / Xpro / any installed addon) over hand-built approximations or HTML.
   First **inventory the installed widgets**; report which addon widgets you used and why. Style every
   addon widget explicitly (radius, shadow, colors, type) — never leave plugin defaults.
6. **Card images:** crop with the Image widget **Height + object-fit: cover** (no custom image sizes).
7. **Icons:** use **Font Awesome 5** names (FA6-only names render blank). See mapping below.
8. Containers ignore the CSS-class field — if you need a CSS hook, target the container by **element ID**.

## Section background rhythm (alternate)
Paper → Parchment → Paper → Parchment … Navy for CTA bands + footer.
Parchment and navy sections carry a **subtle cross-motif texture** (see `--cross` / `--cross-light`
in styles.css; reproduce as a very low-opacity background image on the container, or omit if it adds noise).

## Signature elements
- **Arched image panel** (hero, pastor): border-radius **`210px 210px 14px 14px`**, object-fit cover,
  navy gradient fallback behind. A **gold arch outline** sits offset behind it (2px `#B98F2E`, ~40% opacity).
- **Rounded image panel:** border-radius 16px.
- **Ornament divider:** thin gold line — small cross glyph — thin gold line, centered.
- **Eyebrow** label above headings (gold, uppercase, tracked) + a 56×2px gold **rule** under it.
- **Numbered ministry columns:** gold "01–04" over a 2px ink top-border.
- **Verse block:** large italic Fraunces + gold uppercase citation.

## FA5 icon mapping (replace the inline SVGs)
| Where | FA5 name |
|-------|----------|
| Worship time / clock | `fa-clock` |
| Address / location | `fa-map-marker-alt` |
| Phone | `fa-phone-alt` |
| Email | `fa-envelope` |
| Church / building | `fa-church` |
| Cross | `fa-cross` |
| Sunday School / learning | `fa-book-open` |
| Bible study | `fa-bible` |
| VBS / summer | `fa-sun` |
| Confirmation / youth | `fa-cross` |
| Kids / family | `fa-child` |
| Calendar | `fa-calendar-alt` |
| Weekly updates | `fa-newspaper` |
| Directory / people | `fa-users` |
| Give online | `fa-hand-holding-heart` / `fa-credit-card` |
| Mail a gift | `fa-envelope` |
| Checkmark (lists) | `fa-check` |

---

## Motion & hover (recreate so the live site behaves like the HTML)
- **Buttons:** hover changes bg (navy→navy dark `#262A7D`; gold→`#A97F22`); ~0.2s ease.
- **Cards (`.card--link`):** hover lifts `translateY(-4px)` + stronger shadow; ~0.18s.
- **Card images / image panels:** subtle **zoom on hover** (scale ~1.05, overflow hidden), ~0.4s.
- **Nav links:** hover → navy text on parchment pill; submenu fades/slides in. Style nav links to the
  brand — they inherit generic blue otherwise.
- Transition timing: 0.18–0.25s ease for UI, ~0.4s for image zoom.

---

## Header & Footer — build with **Xpro Theme Builder**
- Use the **real logo image** (`assets/images/logo.png` — client to upload), NOT text.
- Header: navy topbar (worship time · address · phone) + sticky white nav with dropdowns +
  gold **Give** button (Vanco). Style nav links to brand navy/gold.
- Footer: deep-navy, 4 columns (brand blurb · Explore · Connect · Visit & Contact) + bottom bar.
- Save BOTH as templates in the Xpro library, set to **PUBLISHED** (not draft),
  display conditions = **ENTIRE SITE**. Then open Xpro → Theme Builder and confirm the
  **Display Rules** column shows the rule with no errors. Verify both render on the live site.

---

## Contact form
Build with a **native Elementor Pro Form widget** (not the HTML mailto in the reference).
Send to **kachristie15@gmail.com**. Fields: Name, Email, Message. Verify it actually sends.

---

## Final check (before publishing)
1. Every section is a native/addon widget — list any HTML widgets used and why (expect none).
2. No sections broken by flex-wrap (gap 0 + column padding everywhere).
3. Header & footer published and displaying **site-wide** (verify live).
4. Contact form sends successfully.
5. Branding/colors applied to **all** pages, sections, links, widgets, and themed elements
   (no leftover generic blue or plugin defaults).
6. Publish all pages → **clear Elementor cache** AND **purge LiteSpeed cache**.
7. Compare each live page against its HTML **side by side**; list any visual/behavioral diffs you couldn't close.
8. After writing Elementor data to a page, **delete that page's autosave revisions** so the editor
   loads the current version, not a stale autosave.

---

### Design tokens quick-reference (from `assets/css/styles.css`)
Navy `#2E3192` · Navy Dark `#262A7D` · Navy Deep `#1B1E56` · Gold `#B98F2E` · Gold Soft `#E7D6A8`
· Ink `#20212F` · Body `#55566A` · Parchment `#F1EAD9` · Paper `#FBF8F1` · Line `#E6DDC9`
Headings **Fraunces** · Body **Source Sans 3** · Vanco giving: `https://secure.myvanco.com/L-Z55B/home`
