import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


/**
 * Sends the contact-form enquiry to the owner by email over SMTP (a Gmail app password works).
 * Needs a host that runs Node server code (for example Vercel). Credentials come only from the
 * environment: SMTP_USER, SMTP_PASS and optionally SMTP_TO / SMTP_HOST.
 * If they are missing it answers 501 so the form can fall back to another method.
 */
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const clean = (v: unknown, n: number) => String(v ?? "").replace(/\r/g, "").trim().slice(0, n);

export async function POST(req: Request) {
  const user = process.env.SMTP_USER;
  const pass = (process.env.SMTP_PASS || "").replace(/\s+/g, "");
  if (!user || !pass) return NextResponse.json({ ok: false, configured: false }, { status: 501 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (body.botcheck) return NextResponse.json({ ok: true }); // silently drop bots

  const name = clean(body.name, 80);
  const email = clean(body.email, 120);
  const phone = clean(body.phone, 30);
  const message = clean(body.message, 3000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, a valid email and a message." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio contact form" <${user}>`,
      to: process.env.SMTP_TO || user,
      replyTo: `${name} <${email}>`,
      subject: `Portfolio enquiry from ${name}`,
      text: `New enquiry from your portfolio\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n`,
      html: `<div style="font-family:system-ui,sans-serif;max-width:560px">
        <h2 style="margin:0 0 12px">New portfolio enquiry</h2>
        <p><b>Name:</b> ${esc(name)}<br><b>Email:</b> <a href="mailto:${esc(email)}">${esc(email)}</a><br><b>Phone:</b> ${esc(phone)}</p>
        <p style="white-space:pre-wrap;border-left:3px solid #4b2a86;padding-left:12px">${esc(message)}</p>
      </div>`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Could not send the email." }, { status: 502 });
  }
}
