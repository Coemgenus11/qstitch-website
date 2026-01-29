<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile";

const showMore = ref(false);
</script>

<template>
  <section id="about" class="mt-20 scroll-mt-24">
    <LandingSectionhead
      :title="`About ${companyProfile.name}`"
      :desc="companyProfile.about.paragraph"
    />

    <div class="mt-10 grid gap-6 lg:grid-cols-3">
      <div class="rounded-2xl border border-brand-gold bg-white p-6 shadow-sm">
        <p class="text-sm text-slate-500">Established</p>
        <p class="mt-1 text-xl font-semibold text-slate-900">
          {{ companyProfile.about.established }}
        </p>
      </div>
      <div class="rounded-2xl border border-brand-gold bg-white p-6 shadow-sm">
        <p class="text-sm text-slate-500">Location</p>
        <p class="mt-1 text-xl font-semibold text-slate-900">
          {{ companyProfile.about.location }}
        </p>
      </div>
      <div class="rounded-2xl border border-brand-gold bg-white p-6 shadow-sm">
        <p class="text-sm text-slate-500">Profile</p>
        <p class="mt-2 text-slate-600 leading-relaxed">
          {{ companyProfile.hero.subtext }}
        </p>
      </div>
    </div>

    <div class="mt-8 rounded-2xl bg-brand-teal text-white p-6 md:p-8">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-lg font-semibold">Our story</h3>
          <p class="mt-2 text-slate-200 leading-relaxed">
            {{ showMore ? companyProfile.about.longStory : companyProfile.about.longStory.slice(0, 170) + "…" }}
          </p>
        </div>
        <button
          class="shrink-0 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
          @click="showMore = !showMore"
          type="button"
        >
          {{ showMore ? "Show less" : "Read more" }}
        </button>
      </div>
    </div>
  </section>
</template>
