<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile";
</script>

<template>
  <section id="values" class="mt-20 scroll-mt-24">
    <LandingSectionhead
      title="Core Values"
      desc="The values we uphold in every partnership and every piece we produce."
    />

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      <div
        v-for="v in companyProfile.coreValues"
        :key="v.title"
        class="rounded-2xl border border-brand-gold bg-white p-6 shadow-sm hover:shadow transition"
      >
        <div class="flex items-center gap-3">
          <div class="rounded-xl bg-brand-gold p-2">
            <Icon class="text-white" :name="v.icon || 'bx:badge-check'" />
          </div>
          <h3 class="font-semibold text-slate-900">{{ v.title }}</h3>
        </div>
      </div>
    </div>

    <div class="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
      <p class="text-slate-600">
        <span class="font-semibold text-slate-900">{{ companyProfile.taglineLines[0] }}</span>
        {{ " " }}{{ companyProfile.taglineLines[1] }}{{ " " }}{{ companyProfile.taglineLines[2] }}
      </p>
    </div>
  </section>
</template>
