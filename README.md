# Staitment — Landing Page

Static landing page for staitmint.io. One hand-written `index.html`, no build step.

## Real app screenshots (optional)

Each agent section renders an animated HTML chat mock inside the phone frame.
To show real app screenshots instead, drop PNGs at:

```
assets/screens/style.png
assets/screens/travel.png
assets/screens/fitness.png
assets/screens/lifestyle.png
```

Portrait, roughly 9:19.5 (e.g. 1179×2556 iPhone screenshots work as-is). If a
file is missing the page falls back to the animated mock automatically.

## Fonts

Brand fonts are self-hosted in `assets/fonts/` (DM Sans, EB Garamond italic,
Work Sans, JetBrains Mono — latin subsets) — no Google Fonts requests.

## Analytics contract

The `<head>` carries GA4, TikTok Pixel, Plausible, and the frozen `lp_*` event
taxonomy script. Event names and the `.agent-section` ids (`style`, `travel`,
`fitness`, `lifestyle`) are an API contract — don't rename them. The waitlist
form POSTs to `/api/waitlist` via the delegated submit listener in that script.

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. In Vercel, click **Import Project** → pick the repo
3. Framework preset: **Other** (it's pure HTML, no build needed)
4. Click **Deploy**
5. Add custom domain `staitmint.io` in project settings

That's it. No build step, no config.

## Local preview

Open `index.html` in any browser, or:

```bash
npx serve .
```
