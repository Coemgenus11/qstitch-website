<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile";
</script>

<template>
  <section id="vision" class="mt-20 scroll-mt-24">
    <div class="grid gap-6 lg:grid-cols-2">
      <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 class="text-3xl font-bold tracking-tight">Vision</h2>
        <p class="mt-4 text-brand-teal leading-relaxed">
          {{ companyProfile.vision }}
        </p>
      </div>

      <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 class="text-3xl font-bold tracking-tight">Mission</h2>
        <p class="mt-4 text-brand-teal leading-relaxed">
          {{ companyProfile.mission }}
        </p>
      </div>
    </div>
  </section>
</template>