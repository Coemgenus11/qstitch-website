<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile"

// Gallery images
import creation1 from "~/assets/img/gallery/creation1.webp"
import creation2 from "~/assets/img/gallery/creation2.webp"
import creation3 from "~/assets/img/gallery/creation3.webp"
import creation4 from "~/assets/img/gallery/creation4.webp"
import creation5 from "~/assets/img/gallery/creation5.webp"
import creation6 from "~/assets/img/gallery/creation6.webp"

// ✅ Real gallery data (easy to edit / reorder)
const images = [
  {
    src: creation1,
    alt: "Garment production – sample 01",
  },
  {
    src: creation2,
    alt: "Garment production – sample 02",
  },
  {
    src: creation3,
    alt: "Garment production – sample 03",
  },
  {
    src: creation4,
    alt: "Garment production – sample 04",
  },
  {
    src: creation5,
    alt: "Garment production – sample 05",
  },
  {
    src: creation6,
    alt: "Garment production – sample 06",
  },
]
</script>

<template>
  <section id="gallery" class="mt-20 scroll-mt-24">
    <LandingSectionhead
      :title="companyProfile.gallery.title"
      :desc="companyProfile.gallery.description"
    />

    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="img in images"
        :key="img.alt"
        class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition"
      >
        <!-- Image -->
        <div class="overflow-hidden">
          <img
            :src="img.src"
            :alt="img.alt"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
        </div>

   
      </div>
    </div>
  </section>
</template>
