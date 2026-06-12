// POST /api/waitlist — stores pre-launch waitlist emails in Vercel Blob.
// The landing page's analytics head-script calls this on email form submit
// (fire-and-forget); GA4 lp_email_capture counts intent, this stores the address.
import { put } from "@vercel/blob";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "POST only" });
  }

  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ error: "invalid email" });
  }

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
