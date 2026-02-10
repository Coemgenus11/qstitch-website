<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile";
</script>

<template>
  <section id="contact" class="max-w-7xl mx-auto mt-20 mb-20 scroll-mt-24">
    <div class="rounded-3xl border border-brand-gold bg-white shadow-sm overflow-hidden">
      <div class="grid gap-0 lg:grid-cols-2">
        <div class="p-8 md:p-12 bg-brand-navy text-white">
          <h2 class="text-4xl font-bold tracking-tight">Let’s build something together</h2>
          <p class="mt-4 text-slate-200 leading-relaxed">
            Tell us about your requirements. We’ll respond with capacity, timeline, and next steps.
          </p>
          <div class="mt-8 space-y-3 text-sm text-slate-200">

            <p class="flex items-center gap-3">
              <Icon name="mdi:office-building" class="w-4 h-4 text-brand-gold" />
              <span class="text-slate-400">Company:</span>
              <span>{{ companyProfile.name }}</span>
            </p>

            <p class="flex items-center gap-3">
              <Icon name="mdi:map-marker" class="w-4 h-4 text-brand-gold" />
              <span class="text-slate-400">Location:</span>
              <span>{{ companyProfile.about.location }}</span>
            </p>

            <p class="flex items-center gap-3">
              <Icon name="mdi:calendar-check" class="w-4 h-4 text-brand-gold" />
              <span class="text-slate-400">Established:</span>
              <span>{{ companyProfile.about.established }}</span>
            </p>

            <!-- ✅ Contact number -->
            <p class="flex items-center gap-3">
              <Icon name="mdi:phone" class="w-4 h-4 text-brand-gold" />
              <span class="text-slate-400">Contact:</span>
              <a
                :href="`tel:${companyProfile.contact.phone}`"
                class="text-brand-gold hover:underline"
              >
                {{ companyProfile.contact.phone }}
              </a>
            </p>

          </div>


          <div class="mt-10 rounded-2xl bg-white/10 p-6">
            <p class="text-sm text-brand-gold">Tip</p>
            <p class="mt-2 text-slate-300 text-sm">
              Include target quantity, fabric type, and required delivery date to help us quote faster.
            </p>
          </div>
        </div>

        <div class="p-8 md:p-12">
          <h3 class="text-2xl font-bold text-brand-teal tracking-tight">Send an inquiry</h3>
          <p class="mt-2 text-slate-600">We’ll get back to you as soon as possible.</p>
          <div class="mt-8">
            <LandingContactform />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
