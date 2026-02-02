<script setup lang="ts">
import { computed } from "vue"

type Client = {
  name: string
  logo: string
  href?: string
}

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    clients: Client[]
    speedSeconds?: number
    rows?: 1 | 2
  }>(),
  {
    title: "Our Clients",
    subtitle: "Trusted by the brands we've worked with",
    speedSeconds: 28,
    rows: 2,
  }
)

const safeRows = computed(() => (props.rows === 2 ? 2 : 1))
const half = computed(() => Math.ceil(props.clients.length / safeRows.value))

const row1 = computed(() => props.clients.slice(0, half.value))
const row2 = computed(() => props.clients.slice(half.value))

const track1 = computed(() => [...row1.value, ...row1.value])
const track2 = computed(() => [...row2.value, ...row2.value])

const hasRow2 = computed(() => safeRows.value === 2 && row2.value.length > 0)
</script>

<template>
  <section id="clients" class="mt-20 scroll-mt-24">
    <!-- same style as your About header -->
    <LandingSectionhead :title="props.title" :desc="props.subtitle" />

    <div class="max-w-screen-3xl mx-auto px-5 mt-10 rounded-2xl bg-white">
      <div class="relative overflow-hidden">
        <!-- fade edges (still white) -->
        <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        <!-- Row 1 -->
        <div class="marquee group" :style="{ '--duration': `${props.speedSeconds}s` }">
          <div class="track py-2">
            <component
              :is="c.href ? 'a' : 'div'"
              v-for="(c, idx) in track1"
              :key="`r1-${c.name}-${idx}`"
              :href="c.href"
              target="_blank"
              rel="noreferrer"
              class="logo-card"
              :aria-label="c.href ? `Open ${c.name}` : c.name"
              :title="c.name"
            >
              <img
                :src="c.logo"
                :alt="c.name"
                class="logo-img"
                loading="lazy"
                decoding="async"
              />
            </component>
          </div>
        </div>

        <!-- Row 2 -->
        <div
          v-if="hasRow2"
          class="marquee group mt-4"
          :style="{ '--duration': `${Math.max(18, (props.speedSeconds ?? 28) - 6)}s` }"
        >
          <div class="track reverse py-2">
            <component
              :is="c.href ? 'a' : 'div'"
              v-for="(c, idx) in track2"
              :key="`r2-${c.name}-${idx}`"
              :href="c.href"
              target="_blank"
              rel="noreferrer"
              class="logo-card"
              :aria-label="c.href ? `Open ${c.name}` : c.name"
              :title="c.name"
            >
              <img
                :src="c.logo"
                :alt="c.name"
                class="logo-img"
                loading="lazy"
                decoding="async"
              />
            </component>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="props.clients.length === 0" class="py-10 text-center text-sm text-slate-500">
          No client logos yet.
        </div>
      </div>

      <!-- footer note -->
      <!-- <div class="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-xs text-slate-500">Hover to pause • PNG/SVG transparent background looks best.</p>
        <div class="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-700">
          {{ props.clients.length }} clients
        </div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.marquee {
  --duration: 28s;
  overflow: hidden;
}

.track {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: max-content;
  animation: marquee var(--duration) linear infinite;
}

.track.reverse {
  animation-direction: reverse;
}

.marquee:hover .track {
  animation-play-state: paused;
}

/* ✅ Same theme as your About cards */
.logo-card {
  display: flex;
  align-items: center;
  justify-content: center;

  /* MAS MALAKI PA */
  height: 7rem;         /* 112px */
  width: 18rem;         /* 288px */
  padding: 0 2rem;

  background: #fff;
  box-shadow: 0 1px 2px rgba(2, 6, 23, 0.06);

  transition: transform 180ms ease, box-shadow 180ms ease;
}

.logo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 18px rgba(2, 6, 23, 0.08);
}

/* ✅ Bigger logo inside */
.logo-img {
  max-height: 5rem; /* 80px */
  max-width: 100%;
  width: auto;
  object-fit: contain;
  opacity: 0.95;
  transition: opacity 180ms ease;
}

.logo-card:hover .logo-img {
  opacity: 1;
}

/* Responsive: even bigger on md+ */
@media (min-width: 768px) {
  .logo-card {
    height: 7.5rem; /* 120px */
    width: 20rem;   /* 320px */
    padding: 0 2.25rem;
  }

  .logo-img {
    max-height: 5.5rem; /* 88px */
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
