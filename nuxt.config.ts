// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/turnstile"],

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    turnstileSecretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || "",

    smtpHost: process.env.SMTP_HOST || "",
    smtpPort: process.env.SMTP_PORT || "465",
    smtpUser: process.env.SMTP_USER || "",
    smtpPass: process.env.SMTP_PASS || "",
    mailFrom: process.env.MAIL_FROM || "",
    mailTo: process.env.MAIL_TO || "",
    public: {
      // exposed to client
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || "",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://qstitchclothing.com", // palitan mo
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      titleTemplate: "%s · QStitch, Inc.",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#0f172a" },
        { property: "og:site_name", content: "QStitch, Inc." },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },


})
