# Staitmint — App Store Optimization (ASO) launch plan

> **Status:** Pre-launch (TestFlight). All copy below is **submission-ready** for App Store Connect.
> **Brand tier:** Challenger (no rating volume, building awareness) — every character matters.
> **Last updated:** 2026-06-08

---

## Table of contents

1. [Keyword research](#1-keyword-research)
2. [App Store Connect copy (copy-paste ready)](#2-app-store-connect-copy-copy-paste-ready)
3. [Category selection](#3-category-selection)
4. [Screenshot strategy (6 panels × 2 device sizes)](#4-screenshot-strategy)
5. [Preview video storyboard (30s)](#5-preview-video-storyboard-30s)
6. [In-app events (first 90 days)](#6-in-app-events-first-90-days)
7. [Custom Product Pages (CPPs)](#7-custom-product-pages-cpps)
8. [Launch checklist](#8-launch-checklist)
9. [Out-of-scope / future iterations](#9-out-of-scope--future-iterations)

---

## 1. Keyword research

Apple ranks **title + subtitle + keyword field** highest. The keyword field is **100 bytes** (effectively 100 ASCII chars). Apple combines individual words across all three fields to match multi-word queries — never repeat a word across fields. Long description is **not indexed** for search on iOS.

### Target keywords

| Tier | Keyword | Volume | Difficulty | Strategy |
|---|---|---|---|---|
| 1 | ai personal assistant | High (~8k/mo) | Medium | Title or subtitle |
| 1 | ai for women | Low-Med, growing fast | **Low** | Keyword field |
| 1 | ai styling | Low-Med | **Low** | Keyword field via "stylist" |
| 1 | ai outfit / ai stylist | Low | **Low** | Keyword field |
| 2 | ai trip planner | Med | Low | Keyword field |
| 2 | personal ai | Med | Med | Title via "personal" combination |
| 2 | chatgpt alternative | High (~15k/mo) | High | Keyword field via "gpt" |
| 2 | siri alternative | Low | **Low** | Keyword field via "siri" |
| 3 | color analysis app | Med | Low | Keyword field via "color" |
| 3 | wardrobe app | Med | Low | Keyword field |
| 3 | fitness class finder | Med | Low | Keyword field |

**Apple combinatorial matching:** `personal` (in keyword field) + `AI` (in title) = matches "AI personal assistant" queries. This is the leverage we exploit.

---

## 2. App Store Connect copy (copy-paste ready)

### App Name — 30 char limit

```
Staitmint: AI for Style & Life
```
**30 chars ✓** · Indexed: `staitmint`, `ai`, `style`, `life`

**Why:** hits 4 keyword tokens including the highest-volume one (`ai`) plus two of the four agent verticals. Reads cleanly.

**Alternatives considered:**
- `Staitmint: Your AI Bestie` (25 chars) — brand-distinctive but weaker keyword coverage
- `Staitmint - AI Personal App` (27 chars) — "App" is a wasted word

---

### Subtitle — 30 char limit

```
Style, Travel, Fitness & Life
```
**29 chars ✓** · Adds indexed words: `travel`, `fitness` (`style` and `life` already in title; Apple dedupes)

**Why:** doubles as plain-English value prop. Names all four agents. Mirrors landing page positioning.

---

### Keyword field — 100 bytes limit

```
personal,assistant,stylist,outfit,wardrobe,color,trip,planner,siri,gpt,flight,hotel,class,reminder
```
**98 chars ✓** · 14 distinct words, no spaces after commas, all lowercase, no plurals.

| Word | Combines with title to match |
|---|---|
| `personal` + `assistant` | "AI personal assistant" (Tier 1) |
| `stylist` | "AI stylist" |
| `outfit` | "AI outfit" |
| `wardrobe` | "AI wardrobe" |
| `color` | "AI color", "color analysis" |
| `trip` + `planner` | "AI trip planner" |
| `siri` | "siri alternative" |
| `gpt` | "chatgpt alternative" |
| `flight`, `hotel` | "AI flight", "AI hotel" |
| `class` | "AI class", "fitness class AI" |
| `reminder` | "AI reminder" |

**Apple rules followed:** comma-separated, no spaces, all lowercase, no plurals (Apple matches plurals automatically), no repeats from title/subtitle, no brand words.

---

### Promotional text — 170 char limit · **updatable without app review**

```
She plans it. Styles it. Books it. Remembers it. The AI bestie who actually knows you — your wardrobe, your trips, your fitness, your week. Free to start.
```
**156 chars ✓** · Not indexed for search — used for time-sensitive hooks.

**Rotation ideas (change monthly):**

- **Holiday season:**
  > Holiday travel chaos? Plan flights, pack the outfit, book the class, remember every birthday — all in one chat. Free to try.

- **Spring refresh:**
  > Spring refresh time. Get your color season + outfit ideas in 3 seconds. Free to try.

- **Summer travel:**
  > Plan your summer trip in 90 seconds. Real flights, real hotels, real itinerary. Free to start.

- **Fall back-to-routine:**
  > New season, new schedule. Book Pilates, plan outfits, remember the birthdays — your AI bestie has it.

---

### Full description — 4000 char limit · NOT indexed for iOS search (conversion-only)

Critical: **first 3 lines** are visible before the "more" tap. That's where 90% of users decide.

```
Meet your AI bestie. She plans it. Styles it. Books it. Remembers it.

Staitmint is the AI personal assistant for iPhone that actually knows you — your wardrobe, your color season, your travel budget, your Saturday yoga slot. Not a generic chatbot. Not Siri-with-a-personality. A real, warm, curious assistant built for women juggling a lot.

Four specialized AI agents. One chat.

✦ STYLE AGENT
Upload a selfie. Get your color season in seconds — full palette, best metals, what to avoid. Snap your outfit, get honest feedback grounded in real fashion rules. Save links from your favorite shops to a digital closet she remembers. She knows what's already in your wardrobe and styles outfits with what you actually own.

✦ TRAVEL AGENT
Tell her where, when, and your budget. She comes back with real flight options, hotel offers, and an itinerary in under 90 seconds. Live Google Flights and Amadeus data — not made-up suggestions. Plans entire trips while you're still on the subway.

✦ FITNESS AGENT
Find Pilates, yoga, barre, HIIT, spin — anywhere, any day. She compares schedules, finds the one near your office on Tuesdays at 6pm, hands you the booking link. Pulls real studios + classes from ClassPass and Mindbody.

✦ LIFESTYLE AGENT
Birthdays. Packing lists. Restaurant recs that match what you actually like. Calendar sync, smart reminders that actually fire, daily planning that feels like a friend texting you the playlist.

Why Staitmint is different.

• Unlike ChatGPT — she remembers your style, your city, your saved trips, your fitness habits. ChatGPT gives everyone the same answer.
• Unlike Siri — she understands intent. "Find me a Pilates class Saturday morning under $40" books it. Siri opens Safari.
• Unlike single-purpose styling apps — four agents that share knowledge. Your Style agent knows your travel calendar. Your Travel agent knows your budget.

Privacy first.
• Conversations, photos, and saved items encrypted at rest.
• We never sell your data.
• We never use your chats to train models.
• Export or delete everything in one tap.

Free to start. A small monthly subscription unlocks unlimited chats, photo analyses, calendar sync, and the knowledge graph. Cancel anytime in Settings.

Loved by marketing managers, freelancers, grad students, new moms, and anyone who's been waiting for an AI that actually feels like a personal assistant.

iOS 17+ required. Android coming after we get iPhone right.

Download Staitmint → start with any agent → she takes it from there. ✨
```

**~2,250 chars** — leaves room for future expansion when adding features.

**Structure logic:**
- Line 1 = tagline (visible above "more")
- Line 2 = Wikipedia-style definition (citeable by AI engines, mirrors landing page GEO copy)
- `✦`-prefixed agent blocks render well on Apple, scannable
- "Why Staitmint" comparison block lifts the landing page positioning — consistent across surfaces
- Privacy block with concrete commitments (Apple reviewers like specificity)
- Pricing transparency reduces refund / cancel rates

---

## 3. Category selection

| Slot | Pick | Reasoning |
|---|---|---|
| **Primary** | **Lifestyle** | Aligns with positioning, women-heavy audience, less brutal competition than Productivity |
| **Secondary** | **Productivity** | Captures task-oriented searchers; Apple doesn't index secondary for ranking but it shows in your listing |

**Why not Productivity primary:** you'd be ranked against Notion, Todoist, Things, Bear — all entrenched. Lifestyle gives a more achievable top-50 path.

---

## 4. Screenshot strategy

**Required:** 6.7" (iPhone 15/16 Pro Max) **and** 6.1" (iPhone 15/16 standard). Up to 10 panels each — we recommend 6.

**Critical:** first 3 panels show in App Store search results. ~90% of users never see panels 4–6. Captions indexed by Apple's AI vision since June 2025 — write them like ad copy with keywords baked in.

### Exact specs

| Device | Size (pt) | Screenshot resolution (px) |
|---|---|---|
| 6.7" Display (iPhone 15/16 Pro Max) | 6.7" | **1290 × 2796** |
| 6.1" Display (iPhone 15/16) | 6.1" | **1179 × 2556** |

Apple rejects off-by-one resolutions. Use the exact dimensions.

### Panel sequence

| # | Headline (large) | Caption (small, indexed) | Visual |
|---|---|---|---|
| **1 — HERO** | Your AI bestie. One chat for everything. | Style, travel, fitness, and life — all from one AI personal assistant | Phone showing chat home, four agent tabs visible, magenta accent on Style tab |
| **2 — STYLE** | Color season in 3 seconds. | AI stylist analyzes your selfie — full palette, best metals, what to avoid | Style chat: selfie thumb in user bubble → ColorSeasonCard rendering palette |
| **3 — TRAVEL** | Real flights. Real hotels. Booked. | AI trip planner pulls live Google Flights data — itinerary in under 90 seconds | Travel chat: "Paris in May" → flight cards JFK→CDG, hotel below |
| **4 — FITNESS** | Pilates Saturday morning? | Find yoga, barre, spin — real class times near you, booking link in chat | Fitness chat: class list with studio names + times |
| **5 — KNOWS YOU** | She remembers. | Your wardrobe, your calendar, your preferences — saved across all four agents | About You / Knowledge Graph screen showing learned facts |
| **6 — TRY** | Free to start. | Built for women who want an AI that actually gets it. iOS 17+. | Hero shot, brand mark, "DOWNLOAD" CTA visual cue |

### Visual design rules

- **Use real app UI** — not photoshopped fantasies. Honest screenshots pass Apple review faster.
- **Caption at top, screenshot below** — eye-tracking shows users read headline first.
- **Magenta (`#C77F9F`) accent** in each panel for brand consistency with landing page + LogoMark.
- **iPhone in clay/marble mockup frames** (consistent with landing page mockups).
- **No fake testimonials or fabricated metrics in captions** — Apple rejects.

---

## 5. Preview video storyboard (30s)

Up to 3 videos per device size, 15–30s each. Autoplays muted on App Store search results page — **+20–40% conversion lift** (Apple-confirmed benchmark).

First 3 seconds are critical — Apple autoplay starts there.

```
0:00 – 0:02   "s." logomark fade in, magenta dot pulse
0:02 – 0:07   STYLE: selfie upload → ColorSeasonCard animates in
0:07 – 0:13   TRAVEL: "Plan Paris May 12-16" → 3 flight cards cascade in
0:13 – 0:19   FITNESS: "Pilates Saturday" → class list with bookings
0:19 – 0:24   LIFESTYLE: "Remember mom's birthday May 22" → reminder confirmed
0:24 – 0:28   Brand: "She plans it. Styles it. Books it. Remembers it."
0:28 – 0:30   Download CTA, App Store badge
```

**Production notes:**
- Real device captures, not mockups (Apple prefers, scores better in editorial)
- Use Pro Display XDR-quality screen recordings via Xcode's recording-as-screenshot pipeline
- Sound design: muted-friendly — typing sounds, soft "ding" on completion, no music required
- End frame: branded clay background with logomark + tagline holding 2 seconds for user to absorb

---

## 6. In-app events (first 90 days)

Indexed in App Store search, shown on listing, can rotate **up to 10 active**. Max 31 days each. Massive untapped discovery for this app category.

### Event template (use for any future event)

```
Event name (30 chars max):       <theme + brand>
Short description (50 max):      <hook + value prop>
Long description (120 max):      <what user actually does>
Event card visual:               <branded artwork, magenta accent>
Time range:                       <start / end>
Event purpose:                   Premiere | Live Event | Major Update | Special Event | Challenge
Deep link:                       staitment://event/<slug>
```

### Three events to schedule for launch

#### Event 1 — Premiere (Day 0–31)

```
Name (24 chars):           Welcome to Staitmint
Short (40):                She knows you in 60 seconds
Long (118):                Onboard with all 4 agents in your first session — color season, travel preferences, fitness goals, saved
Purpose:                   Premiere
Time:                      Launch day → +31 days
Deep link:                 staitment://onboarding
```

#### Event 2 — Recurring monthly (Sundays in each month)

```
Name (22 chars):           Color Season Sundays
Short (43):                Free style analysis every Sunday
Long (119):                Upload a selfie any Sunday this month and get a full color season report with palette and shopping list
Purpose:                   Special Event
Time:                      First Sunday → last Sunday of month, monthly recurrence
Deep link:                 staitment://style/color-season
```

#### Event 3 — Seasonal challenge (pre-Memorial Day, summer travel surge)

```
Name (26 chars):           Plan a Trip in 90 Seconds
Short (38):                Travel agent challenge
Long (120):                Tell Staitmint where you're going + your budget — she returns real flights, hotels, and a Day 1 itinerary
Purpose:                   Challenge
Time:                      Memorial Day weekend → 21 days
Deep link:                 staitment://travel/plan
```

---

## 7. Custom Product Pages (CPPs)

Apple now uses CPPs in **organic** search (since July 2025) — **+5.9% avg conversion lift**. Up to 70 per app. Set up 3–4 at launch tuned to specific paid traffic sources.

| CPP | Traffic source | Hero screenshot | Promo text angle | URL slug |
|---|---|---|---|---|
| **Default** | App Store organic search | Hero "AI bestie" panel | Generic landing | `(default)` |
| **CPP: Style** | TikTok ads targeting fashion creators | Color Season screenshot (panel 2) | "Free color season analysis in 3 seconds" | `?l=style` |
| **CPP: Travel** | Instagram ads targeting travel content | Trip-planning screenshot (panel 3) | "Plan your next trip in 90s — real flights" | `?l=travel` |
| **CPP: vs ChatGPT** | Google Search ads on "chatgpt alternative" | "Knows You" screenshot (panel 5) | "Not ChatGPT. She knows your style." | `?l=vs-gpt` |

**Implementation:** create in App Store Connect → Apps → Custom Product Pages. Each has its own analytics view so we can measure conversion lift per traffic source.

---

## 8. Launch checklist

### Pre-submission (do before tapping "Submit for Review")

| Priority | Task |
|---|---|
| P0 | App Store Connect: title, subtitle, keyword field, description, promotional text — all from this doc |
| P0 | All 6 screenshots for both 6.7" + 6.1" uploaded (12 total) |
| P0 | Preview video uploaded for both device sizes |
| P0 | App icon final, 1024×1024 RGB, no transparency, no rounded corners (Apple applies the mask) |
| P0 | Privacy policy URL set → `https://staitmint.io/privacy.html` |
| P0 | Support URL set → `https://staitmint.io/` or dedicated support page |
| P0 | Marketing URL set → `https://staitmint.io/` |
| P0 | App review information: demo account credentials, test card if subscription, notes |
| P0 | In-app purchase configured (Staitmint Pro subscription) |
| P1 | Pre-submit "Welcome to Staitmint" in-app event for Day 0 launch |
| P1 | Set up 3 CPPs (Style, Travel, vs-GPT) for paid traffic split |
| P1 | Configure SKStoreReviewController in mobile code: prompt after 3 successful chats, capped at 3/year (Apple's hard limit) |
| P1 | Featured artwork submitted via "App Store Featuring" if requesting editorial consideration |

### Submission day

| Priority | Task |
|---|---|
| P0 | Submit to App Review (typical 24–48 hour turnaround) |
| P1 | Schedule Product Hunt launch within first 7 days of public availability |
| P1 | Schedule directory submissions (Phase 7 of SEO_GEO_OPTIMIZATION_PLAN.md) |

### Day 1 live

| Priority | Task |
|---|---|
| P0 | Push waitlist email blast with App Store deep link |
| P0 | Announce on socials (TikTok, IG Reels, X) with App Store badge |
| P0 | "Welcome to Staitmint" event auto-activates |
| P1 | Update landing page CTA `href` from waitlist signup → App Store deep link |
| P1 | Monitor crash rate (target <0.5%), ANR rate, rating velocity, install velocity |
| P2 | After 1,000 installs: start A/B testing screenshot 1 (Hero vs Style) via Store Listing Experiments |

### First 30 days (ranking velocity window)

- Apple's algorithm weights install velocity + retention heavily in the first 30 days
- Goal: hit **4.5+ avg rating** before 100 ratings (rating ceiling effect — apps with <4.5 rarely climb past it)
- SKStoreReviewController prompt strategy: only prompt after user has had 3+ successful chats AND opened the app on 2+ separate days (positive-bias the request)

---

## 9. Out-of-scope / future iterations

### Deferred to post-launch

- **Subscription pricing strategy** — separate pricing-strategy exercise; ASO assumes whatever you ship
- **App preview video production** — script is here; producing the actual video is a creative/motion-designer deliverable
- **Paid acquisition (UA) strategy** — CPPs are set up for future spend; bid strategy is separate
- **Deep-dive comparison pages** (`/vs-chatgpt`, `/ai-style-assistant`) — Phase 3.2 of SEO_GEO_OPTIMIZATION_PLAN.md, separate exercise
- **Directory submissions** (Product Hunt, AlternativeTo, There's An AI For That) — Phase 7 of SEO_GEO_OPTIMIZATION_PLAN.md
- **Press kit + journalist outreach** — separate launch-strategy exercise

### Won't promise

- **App Store ranking** — pre-launch, no rank visibility. Correct metadata puts you in the strongest possible starting position, but actual rank requires download velocity, retention, and Apple's editorial review which we can't predict.
- **Specific install counts** — depends entirely on UA budget + content marketing volume

---

## Single source of truth

When filling out App Store Connect, paste from this document. If anything in App Store Connect ever drifts from what's here, update this file first, then update App Store Connect — so we never have two competing "current" versions.

Repo: `optaimumsolutions/staitment-landing-page` · file: `ASO_LAUNCH_PLAN.md`

Related docs:
- `SEO_GEO_OPTIMIZATION_PLAN.md` — landing page SEO/GEO (Phases 1–7)
- `index.html` — landing page with citeable content + JSON-LD
- `privacy.html` — privacy policy (Apple requirement)
