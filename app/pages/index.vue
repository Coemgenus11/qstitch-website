<script setup>
definePageMeta({
  layout: "landing",
});
import { clients } from "~/data/clients"

const config = useRuntimeConfig()
const siteUrl = (config.public.siteUrl || "").replace(/\/$/, "")
const url = `${siteUrl}/`

useSeoMeta({
  title: "Welcome",
  description:
    "QStitch, Inc. garments manufacturing company in Laguna, Philippines — quality production and reliable capability.",
  ogTitle: "QStitch, Inc.",
  ogDescription:
    "Garments manufacturing in Laguna, Philippines — quality production and reliable capability.",
  ogUrl: url,
  ogImage: `${siteUrl}/og/qsi-icon.webp`,
  twitterCard: "summary_large_image",
  twitterImage: `${siteUrl}/og/qsi-icon.webp`,
})
</script>

<template>
  
  <LandingHero />
  <LandingContainer>

    <CompanyAbout />
    <CompanyVisionMission />
    <CompanyCoreValues />
    <CompanyCapabilities />
    <CompanyTeam />
    <CompanyServices />
    <CompanyGallery />
  </LandingContainer>
    <ClientsCarousel :clients="clients" :rows="2" :speed-seconds="28" />
    <CompanyContact />

</template>
