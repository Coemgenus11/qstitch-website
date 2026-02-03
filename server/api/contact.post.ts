import nodemailer from "nodemailer"

type TurnstileVerifyResponse = {
  success: boolean
  challenge_ts?: string
  hostname?: string
  action?: string
  cdata?: string
  "error-codes"?: string[]
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message, botcheck, turnstileToken } = body || {}

  if (botcheck) {
    throw createError({ statusCode: 400, statusMessage: "Bot detected" })
  }

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: "Missing fields" })
  }

  if (!turnstileToken) {
    throw createError({ statusCode: 400, statusMessage: "Captcha required" })
  }

  const config = useRuntimeConfig()
  if (!config.turnstileSecretKey) {
    throw createError({ statusCode: 500, statusMessage: "Captcha not configured" })
  }

  const ip =
    getRequestHeader(event, "cf-connecting-ip") ||
    getRequestHeader(event, "x-forwarded-for") ||
    ""

  let verifyRes: TurnstileVerifyResponse | null = null

  try {
    verifyRes = await $fetch<TurnstileVerifyResponse>(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: String(config.turnstileSecretKey),
          response: String(turnstileToken),
          ...(ip ? { remoteip: String(ip) } : {}),
        }),
      }
    )
  } catch (e) {
    verifyRes = null
  }

  if (!verifyRes?.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Captcha verification failed",
      data: { errors: verifyRes?.["error-codes"] ?? ["unknown_error"] },
    })
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: config.smtpSecure,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

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
  })

  return { success: true, message: "Message sent successfully." }
})

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
