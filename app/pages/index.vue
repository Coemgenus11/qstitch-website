<script setup>
definePageMeta({
  layout: "landing",
});
import { clients } from "~/data/clients"
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
