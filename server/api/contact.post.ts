import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, message, botcheck } = body || {};

  // simple anti-bot: if botcheck is checked, ignore
  if (botcheck) {
    throw createError({ statusCode: 400, statusMessage: "Bot detected" });
  }

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: "Missing fields" });
  }

  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: config.smtpSecure,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  await transporter.sendMail({
    from: config.mailFrom,
    to: config.mailTo,
    replyTo: email,
    subject: `New Contact Inquiry – ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Message:</b></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `,
  });

  return { success: true, message: "Message sent successfully." };
});

// tiny helper (avoid HTML injection in email)
function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
