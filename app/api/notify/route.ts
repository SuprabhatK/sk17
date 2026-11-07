import { NextResponse } from "next/server";

/**
 * Optional: pushes each contact-form enquiry to the owner's WhatsApp using the free CallMeBot API.
 * Does nothing (204) unless CALLMEBOT_APIKEY and WHATSAPP_PHONE are set in the environment.
 * Needs a host that runs server code (Vercel or Cloudflare), not a static-only host.
 */
export async function POST(req: Request) {
  const key = process.env.CALLMEBOT_APIKEY;
  const phone = process.env.WHATSAPP_PHONE;
  if (!key || !phone) return new NextResponse(null, { status: 204 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const clean = (v: unknown, n: number) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, n);
  const name = clean(body.name, 80);
  const message = clean(body.message, 600);
  if (!name || !message) return NextResponse.json({ ok: false }, { status: 400 });

  const text = [
    "New portfolio enquiry",
    "Name: " + name,
    "Phone: " + clean(body.phone, 30),
    "Email: " + clean(body.email, 120),
    "Message: " + message,
  ].join("\n");

  const url =
    "https://api.callmebot.com/whatsapp.php?phone=" + encodeURIComponent(phone) +
    "&text=" + encodeURIComponent(text) +
    "&apikey=" + encodeURIComponent(key);
  try {
    const r = await fetch(url, { cache: "no-store" });
    return NextResponse.json({ ok: r.ok });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
