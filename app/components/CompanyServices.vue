<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile";
</script>

<template>
  <section id="services" class="mt-20 scroll-mt-24">
    <LandingSectionhead
      title="Business Lines"
      desc="How we support partners and build brands — from subcontracting to direct-to-consumer channels."
    />

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="s in companyProfile.services"
        :key="s.title"
        class="rounded-2xl border border-brand-teal bg-white p-6 shadow-sm hover:shadow transition"
      >
        <div class="flex items-center gap-3">
          <div class="rounded-xl bg-brand-navy p-2">
            <Icon class="text-brand-gold" :name="s.icon || 'bx:briefcase'" />
          </div>
          <h3 class="font-semibold text-lg text-brand-navy">{{ s.title }}</h3>
        </div>
        <p class="mt-3 text-slate-600 leading-relaxed">{{ s.description }}</p>
      </div>
    </div>
  </section>
</template>