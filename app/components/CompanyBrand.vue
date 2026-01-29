<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile";
</script>

<template>
  <section id="brand" class="mt-20 scroll-mt-24">
    <div class="rounded-3xl bg-slate-900 text-white overflow-hidden">
      <div class="grid gap-0 lg:grid-cols-2">
        <div class="p-8 md:p-12">
          <p class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-slate-200">In-house brand</p>
          <h2 class="mt-4 text-4xl font-bold tracking-tight">{{ companyProfile.brand.name }}</h2>
          <p class="mt-4 text-slate-200 leading-relaxed">
            {{ companyProfile.brand.description }}
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Work with us
              <span class="ml-2">→</span>
            </a>
            <a
              href="#gallery"
              class="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
            >
              View creations
            </a>
          </div>
        </div>

        <div class="relative min-h-[260px]">
          <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="rounded-3xl border border-white/15 bg-black/20 p-10 text-center backdrop-blur">
              <p class="text-sm text-slate-200">Brand spotlight</p>
              <p class="mt-2 text-3xl font-bold">MIX</p>
              <p class="mt-2 text-slate-300 text-sm">Premium inner & outer apparel • Uniforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
