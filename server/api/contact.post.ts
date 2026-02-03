import nodemailer from "nodemailer"

type TurnstileVerifyResponse = {
  success: boolean
  challenge_ts?: string
  hostname?: string
  action?: string
  cdata?: string
  "error-codes"?: string[]
}

const MAX_PER_HOUR = 15
const WINDOW_MS = 60 * 60 * 1000

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

  // ✅ IP detection
  const normalizeIp = (v?: string) => v?.replace(/^::ffff:/, "").trim() || ""

  const xff = getRequestHeader(event, "x-forwarded-for")

  const ip =
    normalizeIp(getRequestHeader(event, "cf-connecting-ip")) ||
    normalizeIp(xff?.split(",")[0]) ||
    normalizeIp(event.node.req.socket.remoteAddress) ||
    "unknown"



  // ✅ Turnstile verify
  let verifyRes: TurnstileVerifyResponse | null = null
  try {
    verifyRes = await $fetch<TurnstileVerifyResponse>(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: String(config.turnstileSecretKey),
          response: String(turnstileToken),
          ...(ip && ip !== "unknown" ? { remoteip: ip } : {}),
        }),
      }
    )
  } catch {
    verifyRes = null
  }

  if (!verifyRes?.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Captcha verification failed",
      data: { errors: verifyRes?.["error-codes"] ?? ["unknown_error"] },
    })
  }

  
  // ✅ Rate limit: 15/hour per IP
  await enforceHourlyRateLimit({ ip, email })

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: config.smtpSecure,
    auth: { user: config.smtpUser, pass: config.smtpPass },
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

async function enforceHourlyRateLimit(params: { ip: string; email?: string }) {
  const { ip, email } = params

  const storage = useStorage("cache") // Nitro storage
  const now = Date.now()
  const bucket = Math.floor(now / WINDOW_MS) // hour bucket (fixed window)

  // per-IP key
  const ipKey = `contact:ip:${ip}:${bucket}`

  // optional: per-email key (prevents bypass)
  const emailKey = email ? `contact:email:${String(email).toLowerCase()}:${bucket}` : null

  const [ipCount, emailCount] = await Promise.all([
    storage.getItem<number>(ipKey),
    emailKey ? storage.getItem<number>(emailKey) : Promise.resolve<number | null>(null),
  ])

  const nextIpCount = (ipCount ?? 0) + 1
  const nextEmailCount = emailKey ? (emailCount ?? 0) + 1 : null

  // block if exceeded
  if (nextIpCount > MAX_PER_HOUR || (nextEmailCount !== null && nextEmailCount > MAX_PER_HOUR)) {
    throw createError({
      statusCode: 429,
      // statusMessage: `Too many requests. Max ${MAX_PER_HOUR} messages per hour.`,
      statusMessage: `Too many requests.`,
    })
  }

  // TTL until end of the current hour window
  const msIntoWindow = now % WINDOW_MS
  const ttlSeconds = Math.ceil((WINDOW_MS - msIntoWindow) / 1000)

  await Promise.all([
    storage.setItem(ipKey, nextIpCount, { ttl: ttlSeconds }),
    emailKey ? storage.setItem(emailKey, nextEmailCount!, { ttl: ttlSeconds }) : Promise.resolve(),
  ])
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
