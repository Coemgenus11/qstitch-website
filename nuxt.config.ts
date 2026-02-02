// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/turnstile"],

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY || "",

    smtpHost: process.env.SMTP_HOST || "",
    smtpPort: process.env.SMTP_PORT || "587",
    smtpUser: process.env.SMTP_USER || "",
    smtpPass: process.env.SMTP_PASS || "",
    mailFrom: process.env.MAIL_FROM || "",
    mailTo: process.env.MAIL_TO || "",
    public: {
      // exposed to client
      turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || "",
    },
  },


})
