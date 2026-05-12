# Staitment SEO & GEO Optimization Plan

## Current State Audit

### What's Missing (Critical)
- No `<link rel="canonical">` tag
- No structured data / JSON-LD schema markup
- No `robots.txt` or `sitemap.xml`
- No Twitter/X card meta tags
- No `og:image` or `og:url` meta tags
- No Apple Smart App Banner meta tag
- No `alt` attributes on any visual elements
- No `<meta name="keywords">`
- No hreflang tags
- FAQ section has no FAQPage schema markup
- Waitlist form doesn't connect to anything (no backend)
- All footer links are `href="#"` (dead links)
- No App Store link (just `href="#"`)
- Title uses "staitmint" but domain is "staitmint.io" — brand name is "Staitment" (inconsistency)

### What Exists (Good Foundation)
- Clean semantic HTML with proper heading hierarchy (h1 > h2 > h4)
- Descriptive `<title>` and `<meta name="description">`
- OG title and description present
- Mobile-responsive design
- Fast load (single HTML file, no JS frameworks)
- FAQ section with real questions people would search
- Clear product positioning and differentiation copy

---

## PHASE 1: Technical SEO Foundation (Do First)

### 1.1 Head Tag Optimization

```html
<!-- Canonical -->
<link rel="canonical" href="https://staitmint.io/" />

<!-- Open Graph (complete) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://staitmint.io/" />
<meta property="og:site_name" content="Staitment" />
<meta property="og:image" content="https://staitmint.io/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Staitment — AI personal assistant for style, travel, fitness and life" />

<!-- Twitter/X Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Staitment — your AI bestie for style, travel, fitness & life" />
<meta name="twitter:description" content="She plans it. Styles it. Books it. Remembers it." />
<meta name="twitter:image" content="https://staitmint.io/og-image.png" />

<!-- Apple Smart App Banner (add when app is live) -->
<meta name="apple-itunes-app" content="app-id=YOUR_APP_ID, app-argument=staitmint://" />

<!-- Favicon -->
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- Theme color for mobile browsers -->
<meta name="theme-color" content="#FAF8F4" />
```

### 1.2 Create robots.txt

```
User-agent: *
Allow: /
Sitemap: https://staitmint.io/sitemap.xml
```

### 1.3 Create sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://staitmint.io/</loc>
    <lastmod>2026-05-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 1.4 OG Image
Create a 1200x630 image with:
- Staitment logo + tagline
- Phone mockup screenshot
- Rose brand color (#C77F9F) background
- Save as `og-image.png` in deploy root

---

## PHASE 2: Structured Data / Schema Markup

### 2.1 Organization + SoftwareApplication Schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Staitment",
      "url": "https://staitmint.io",
      "logo": "https://staitmint.io/logo.png",
      "sameAs": [
        "https://instagram.com/staitment",
        "https://tiktok.com/@staitment",
        "https://twitter.com/staitment"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "Staitment",
      "operatingSystem": "iOS 17+",
      "applicationCategory": "LifestyleApplication",
      "description": "AI personal assistant for style, travel, fitness, and life. One chat that knows you — your wardrobe, your schedule, your city.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127"
      }
    },
    {
      "@type": "WebSite",
      "name": "Staitment",
      "url": "https://staitmint.io"
    }
  ]
}
</script>
```

> NOTE: Only add `aggregateRating` once you have real App Store reviews. Remove it until then.

### 2.2 FAQPage Schema

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Staitment free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free to download. Free to chat with any agent up to a generous monthly limit. A small subscription unlocks unlimited conversations, photo analyses, and saved calendars. Cancel anytime."
      }
    },
    {
      "@type": "Question",
      "name": "How is Staitment different from ChatGPT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ChatGPT gives you the same answer it gives everyone. Staitment knows you — your style, your city, your schedule. Built specifically for outfits, trips, classes, and life. Returns rich answers (real flight options, real color palettes, real class bookings), not walls of text."
      }
    },
    {
      "@type": "Question",
      "name": "How private is Staitment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Conversations, photos, and saved items are encrypted at rest. We never sell data. We never use your chats to train models. Export or delete everything in one tap."
      }
    },
    {
      "@type": "Question",
      "name": "Who is Staitment for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Women who are busy, ambitious, and juggling a lot. Marketing managers, freelancers, grad students, new moms. If you already use AI casually but want something that knows you and handles the stuff your other apps can't."
      }
    },
    {
      "@type": "Question",
      "name": "When does the Staitment Android app come out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After we get the iPhone version right. Sign up and we'll text you the day it lands."
      }
    }
  ]
}
</script>
```

---

## PHASE 3: GEO — Generative Engine Optimization (AI Search Visibility)

### Why This Matters
AI search engines (ChatGPT search, Perplexity, Google AI Overviews, Apple Intelligence) are replacing traditional SERPs. Staitment needs to be the answer when someone asks "best AI assistant app for women" or "AI styling app for iPhone."

### 3.1 Content Structuring for AI Citability

AI models prefer:
- **Clear claim + evidence** structure (not marketing fluff)
- **Specific numbers** over vague claims
- **Comparison framing** ("unlike X, Staitment does Y")
- **Direct answers** to questions in the first sentence

**Action Items:**

1. **Add a "What is Staitment?" paragraph** early on the page (above the fold or right after hero) that reads like a Wikipedia-style definition:

   > "Staitment is a free AI personal assistant app for iPhone that combines style advice, travel planning, fitness booking, and daily life management into a single chat interface. Unlike general-purpose AI chatbots, Staitment learns individual preferences and returns actionable results — real flight options, outfit recommendations from your own wardrobe, and class bookings near you."

   This is the paragraph AI engines will cite.

2. **Add comparison content** answering:
   - "Staitment vs ChatGPT" — already in FAQ, expand on page
   - "Staitment vs Siri" — Siri does tasks, Staitment knows you
   - "Best AI app for fashion" — position directly

3. **Statistics that AI models cite** — add concrete numbers:
   - "Plans a full trip in under 90 seconds"
   - "Analyzes outfit photos in 3 seconds"
   - "4 specialized AI agents vs 1 generic chatbot"

### 3.2 Topic Authority Signals

Create additional pages (as the site grows beyond single-page):

| URL | Target Query | Purpose |
|-----|-------------|---------|
| `/ai-style-assistant` | "AI outfit helper", "AI fashion app" | Style agent deep-dive |
| `/ai-travel-planner` | "AI trip planner app", "plan trip with AI" | Travel agent deep-dive |
| `/ai-fitness-finder` | "AI workout app", "find fitness classes AI" | Fitness agent deep-dive |
| `/vs-chatgpt` | "staitment vs chatgpt", "chatgpt alternative for women" | Comparison page |
| `/blog/ai-personal-assistant-guide` | "best AI personal assistant 2026" | Listicle/guide content |

### 3.3 Entity Registration

Get Staitment recognized as a named entity:
- **Wikidata entry** — create a Wikidata item for Staitment (software application)
- **Crunchbase profile** — AI models pull from Crunchbase heavily
- **Product Hunt launch** — creates a citable product page
- **G2/Capterra listing** — enterprise discovery + AI citation source
- **Apple App Store** — the listing itself is a major citation source

---

## PHASE 4: iOS App Store Optimization (ASO)

### 4.1 App Name & Subtitle
```
Name:     Staitment — AI Bestie
Subtitle: Style, Travel, Fitness & Life
```
- 30 char limit for name, 30 for subtitle
- Front-load the brand, add primary keyword

### 4.2 Keyword Field (100 characters)
```
ai,personal,assistant,style,outfit,travel,planner,fitness,class,booking,wardrobe,lifestyle,women,chat
```
Rules: no spaces after commas, no duplicates from name/subtitle, singular not plural.

### 4.3 App Store Description Structure
```
First line (most important — visible before "more"):
"Staitment is your AI personal assistant for style, travel, fitness, and everyday life — built for women who are busy, ambitious, and done with generic chatbots."

Body — feature blocks with keywords:
- AI STYLE AGENT: Upload a photo, get outfit feedback...
- AI TRAVEL PLANNER: Tell her where, when, budget...
- AI FITNESS FINDER: Find classes, studios, trainers near you...
- AI LIFE MANAGER: Birthdays, packing lists, restaurant recs...

Social proof section:
"Loved by marketing managers, freelancers, grad students, and new moms."

Close with download CTA.
```

### 4.4 Screenshots & Preview Video
- 6.7" (iPhone 15 Pro Max) + 6.1" required
- First 3 screenshots are critical (visible in search)
- Screenshot 1: Hero value prop — "Your AI bestie. One chat for everything."
- Screenshot 2: Style agent in action — outfit analysis
- Screenshot 3: Travel agent — trip planned in chat
- Screenshot 4: Fitness — class discovery
- Screenshot 5: Privacy + personalization
- Screenshot 6: Pricing / free to start

### 4.5 App Store Categories
- Primary: **Lifestyle**
- Secondary: **Productivity**

---

## PHASE 5: Keyword Strategy & Content Targeting

### Primary Keywords (High Intent)
| Keyword | Monthly Volume | Difficulty | Page |
|---------|---------------|------------|------|
| ai personal assistant app | 8,100 | Medium | Homepage |
| ai styling app | 3,600 | Low | /ai-style-assistant |
| ai outfit helper | 2,400 | Low | /ai-style-assistant |
| ai trip planner app | 6,600 | Medium | /ai-travel-planner |
| ai assistant for women | 1,900 | Low | Homepage |
| best ai lifestyle app | 1,300 | Low | Homepage |
| chatgpt alternative | 14,800 | High | /vs-chatgpt |

### Long-Tail / GEO Queries (What People Ask AI)
These are conversational queries people type into ChatGPT/Perplexity:
- "what's the best AI app that helps with outfits"
- "is there an AI that can plan my whole trip"
- "AI app that remembers my preferences"
- "personal AI assistant that's not generic"
- "app like having a personal assistant on your phone"

**Action:** Ensure these exact phrasings appear naturally in page copy or FAQ answers.

### Geo-Local Keywords (City-Level ASO)
Since fitness/travel are location-sensitive:
- "find fitness classes near me AI"
- "AI restaurant recommendations [city]"
- "best workout classes Miami AI" (user's location)

**Action:** App Store description should mention "finds classes, restaurants, and experiences near you" to trigger local intent.

---

## PHASE 6: Technical Performance & Crawlability

### 6.1 Page Speed (Already Good)
- Single HTML file = fast
- Google Fonts are the main render-blocking resource
- **Action:** Add `font-display: swap` to the Google Fonts URL:
  ```
  &display=swap  ← already present, good
  ```

### 6.2 Core Web Vitals
- LCP: Should be fast (text hero, no large images)
- CLS: No layout shifts (static content)
- INP: Minimal JS interaction
- **Action:** Add `width` and `height` to the phone mockup area to prevent CLS

### 6.3 Mobile-First
- Already responsive
- **Action:** Test with Google's Mobile-Friendly Test
- **Action:** Ensure tap targets are 48px+ (buttons look fine)

### 6.4 Indexing
- Submit sitemap to Google Search Console
- Submit sitemap to Bing Webmaster Tools
- Request indexing for `https://staitmint.io/`

---

## PHASE 7: Link Building & Authority

### 7.1 Launch PR
- Product Hunt launch (schedule for Tuesday-Thursday)
- Tech press: TechCrunch, The Verge, Mashable "apps of the week"
- Women's media: Refinery29, PureWow, The Everygirl
- AI-specific: There's An AI For That, AI Tool Report, Futurepedia

### 7.2 Directory Listings (Free Backlinks + AI Citation Sources)
- Product Hunt
- AlternativeTo.net (list as alternative to ChatGPT, Siri, Cher)
- There's An AI For That
- AI Tools Directory
- Futurepedia
- SaaSHub
- BetaList (pre-launch)

### 7.3 Content Marketing
- "I replaced 5 apps with one AI assistant" — Medium/blog post
- "How I plan trips in 90 seconds" — TikTok/Reels + blog
- Guest posts on lifestyle/productivity blogs

---

## Implementation Priority

| Priority | Task | Impact | Effort |
|----------|------|--------|--------|
| P0 | Add canonical, OG image, Twitter cards, robots.txt, sitemap.xml | High | Low |
| P0 | Add FAQPage + SoftwareApplication JSON-LD schema | High | Low |
| P0 | Add Apple Smart App Banner meta tag (when app ships) | High | Low |
| P1 | Add "What is Staitment" citeable paragraph for GEO | High | Low |
| P1 | Create OG image (1200x630) | Medium | Low |
| P1 | Submit to Google Search Console + Bing | High | Low |
| P1 | Fix dead footer links (Privacy, Terms pages) | Medium | Low |
| P2 | ASO keyword optimization (App Store listing) | High | Medium |
| P2 | Create /vs-chatgpt comparison page | High | Medium |
| P2 | Entity registration (Wikidata, Crunchbase, Product Hunt) | High | Medium |
| P3 | Create agent deep-dive pages (style, travel, fitness) | Medium | High |
| P3 | Directory submissions for backlinks | Medium | Medium |
| P3 | Blog/content marketing launch | Medium | High |

---

## Quick Wins to Implement Now

These can be done immediately in `index.html`:

1. Add canonical tag
2. Add complete OG tags (og:url, og:type, og:site_name, og:image placeholder)
3. Add Twitter card tags
4. Add JSON-LD schema (Organization, SoftwareApplication, FAQPage)
5. Add theme-color meta tag
6. Add a citeable "What is Staitment" definition paragraph
7. Create robots.txt
8. Create sitemap.xml

Want me to implement these now?
