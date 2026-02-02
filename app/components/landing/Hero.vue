<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue"

// ✅ Recommended: use /public so you can swap images easily
const slides = [
  "/img/hero/qsi1.png",
  "/img/hero/qsi2.png",
  "/img/hero/qsi5.png",
  // add more...
]

const active = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    active.value = (active.value + 1) % slides.length
  }, 10000) // change speed here
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <main class="relative overflow-hidden pt-14 pb-5 md:pt-16">
    <!-- Background (photo + overlays) -->
    <!-- ✅ Mobile: limited height; ✅ Desktop (lg+): full inset -->
    <div
      class="pointer-events-none absolute left-0 right-0 top-0 -z-10
             h-[520px] sm:h-[560px]
             lg:inset-0 lg:h-auto"
    >
      <!-- Slideshow images (fade) -->
      <Transition name="fade" mode="out-in">
        <img
          :key="slides[active]"
          :src="slides[active]"
          alt=""
          class="h-full w-full object-cover scale-105 opacity-90 md:opacity-100"
        />
      </Transition>

      <!-- Dark-to-light overlay for readability -->
      <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-white/10 md:via-white/50 md:to-white/10" />

      <!-- Brand-tinted overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-brand-navy/15 via-transparent to-brand-teal/10" />

      <!-- Subtle texture/pattern -->
      <div
        class="absolute inset-0 opacity-[0.06]"
        style="
          background-image:
            radial-gradient(circle at 20% 10%, #255776 0, transparent 35%),
            radial-gradient(circle at 80% 30%, #428b97 0, transparent 40%),
            radial-gradient(circle at 60% 90%, #ec8b3f 0, transparent 35%);
        "
      />

      <!-- Soft blobs -->
      <div class="absolute -top-28 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-slate-200/60 blur-3xl" />
      <div class="absolute -bottom-28 right-[-4rem] h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

      <!-- Vignette edges -->
      <div class="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.10)]" />
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid min-h-[80vh] md:min-h-[70vh] lg:min-h-0 lg:grid-cols-2 items-center gap-10">
        <!-- Left copy -->
        <div class="order-1">
          <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
            <span class="h-2 w-2 rounded-full bg-brand-gold"></span>
            Garments Manufacturing • Laguna, Philippines
          </div>

          <h1 class="mt-5 font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            <span class="text-brand-navy">Built with Purpose.</span>
            <span class="text-brand-gold"> Driven by People.</span>
            <span class="text-brand-teal"> Focused on Quality.</span>
          </h1>

          <p class="mt-4 sm:mt-5 text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed">
            QStitch, Inc. is a duly licensed organization that values quality, innovation, total customer satisfaction,
            and adaptability to the needs of its clients.
          </p>

          <div class="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <LandingLink href="#contact">Request a Quote</LandingLink>
            <LandingLink size="lg" styleName="outline" href="#capabilities">View Capabilities</LandingLink>
          </div>

          <div class="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
            <div class="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
              <p class="text-xs text-slate-500">Machines</p>
              <p class="mt-1 text-2xl font-bold text-slate-900">224</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
              <p class="text-xs text-slate-500">Employees</p>
              <p class="mt-1 text-2xl font-bold text-slate-900">207</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
              <p class="text-xs text-slate-500">Established</p>
              <p class="mt-1 text-2xl font-bold text-slate-900">2020</p>
            </div>
          </div>
        </div>

        <!-- Right visual (no design changes for desktop) -->
        <div class="order-2 lg:order-2 relative">
          <div class="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xs overflow-hidden rounded-3xl opacity-90">
            <div class="absolute inset-0 "/>
            <img
              class="relative w-full object-cover"
              src="~/assets/img/qsi-icon.webp"
              alt="QStitch garments manufacturing"
              loading="eager"
              width="900"
              height="900"
            />
          </div>

          <div class="mt-4 flex justify-center">
            <div class="inline-flex flex-wrap justify-center items-center gap-x-2 gap-y-1 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
              <span class="font-semibold text-brand-navy">Quality</span>
              <span class="text-slate-400">•</span>
              <span>Innovation</span>
              <span class="text-slate-400">•</span>
              <span class="font-semibold text-brand-teal">Customer Satisfaction</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 900ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
