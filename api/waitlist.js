// POST /api/waitlist — stores pre-launch waitlist emails in Vercel Blob.
// The landing page's analytics head-script calls this on email form submit
// (fire-and-forget); GA4 lp_email_capture counts intent, this stores the address.
import { put } from "@vercel/blob";
import crypto from "node:crypto";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// TikTok Events API (CAPI) — server-side CompleteRegistration. Never throws into
// the handler. Dedupes against the browser pixel via the shared event_id.
// Public pixel id may be committed; the access token must be a Vercel env var.
const TIKTOK_PIXEL_ID = process.env.TIKTOK_PIXEL_ID || "D8ONSDJC77UFPM6EOK20";
async function tiktokCapi(email, eventId, req) {
  const token = process.env.TIKTOK_ACCESS_TOKEN;
  if (!token) return; // not configured yet — the browser pixel still fires
  try {
    const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || undefined;
    await fetch("https://business-api.tiktok.com/open_api/v1.3/event/track/", {
      method: "POST",
      headers: { "Access-Token": token, "Content-Type": "application/json" },
      body: JSON.stringify({
        event_source: "web",
        event_source_id: TIKTOK_PIXEL_ID,
        data: [{
          event: "CompleteRegistration",
          event_time: Math.floor(Date.now() / 1000),
          event_id: typeof eventId === "string" ? eventId : undefined,
          user: {
            email: crypto.createHash("sha256").update(email).digest("hex"),
            ip,
            user_agent: req.headers["user-agent"] || undefined,
          },
          page: { url: req.headers.referer || undefined },
        }],
      }),
    });
  } catch (err) {
    console.error("waitlist: tiktok CAPI failed:", err?.message ?? err);
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "POST only" });
  }

  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ error: "invalid email" });
  }

  // Server-side conversion — fires regardless of whether the blob sink is
  // configured. Deduped with the browser pixel via the shared event_id.
  await tiktokCapi(email, req.body?.event_id, req);

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    // Sink unconfigured — never lose the signup silently: runtime logs keep a trace.
    console.error("waitlist: BLOB_READ_WRITE_TOKEN missing; logging only:", email);
    return res.status(200).json({ ok: true, stored: false });
  }

  try {
    const record = {
      email,
      ts: new Date().toISOString(),
      ua: req.headers["user-agent"] ?? null,
      referer: req.headers.referer ?? null,
    };
    // addRandomSuffix gives an unguessable URL; the URL is never returned to the
    // client and listing requires the store's RW token.
    await put(`waitlist/${record.ts.slice(0, 10)}/${Date.now()}.json`, JSON.stringify(record), {
      access: "public",
      addRandomSuffix: true,
      contentType: "application/json",
    });
    return res.status(200).json({ ok: true, stored: true });
  } catch (err) {
    console.error("waitlist: blob write failed:", err?.message ?? err);
    return res.status(500).json({ error: "storage failed" });
  }
}
