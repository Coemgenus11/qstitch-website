export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  return {
    publicSiteKey: config.public?.turnstileSiteKey || null,
    hasSecretKey: Boolean((config as any).turnstileSecretKey),
    secretKey: config.turnstileSecretKey || null,
  }
})
