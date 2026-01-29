<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile";
import heroImg from "~/assets/img/hero.jpg";

// TODO: Replace these placeholders with real product / production photos.
const images = Array.from({ length: 6 }).map((_, i) => ({
  src: heroImg,
  alt: `Creation ${i + 1}`,
}));
</script>

<template>
  <section id="gallery" class="mt-20 scroll-mt-24">
    <LandingSectionhead :title="companyProfile.gallery.title" :desc="companyProfile.gallery.description" />

    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="img in images"
        :key="img.alt"
        class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          class="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div class="p-4">
          <p class="text-sm font-medium text-slate-900">{{ img.alt }}</p>
          <p class="mt-1 text-xs text-slate-500">Fabric / style varies based on requirements.</p>
        </div>
      </div>
    </div>
  </section>
</template>
