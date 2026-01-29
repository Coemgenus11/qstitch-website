<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile";
</script>

<template>
  <section id="team" class="mt-20 scroll-mt-24">
    <LandingSectionhead
      title="Our Team"
      desc="A strong, capable team built on quality systems and disciplined execution."
    />

    <div class="mt-10 grid gap-6 lg:grid-cols-2">
      <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div class="flex items-baseline justify-between gap-6">
          <h3 class="text-2xl font-bold tracking-tight">Headcount</h3>
          <div class="text-slate-600">
            Total: <span class="font-semibold text-slate-900">{{ companyProfile.keyStats[1].value }}</span>
          </div>
        </div>

        <div class="mt-6 overflow-hidden rounded-xl border border-slate-200">
          <table class="w-full text-left text-sm">
            <thead class="bg-slate-50 text-slate-600">
              <tr>
                <th class="px-4 py-3 font-medium">Position</th>
                <th class="px-4 py-3 font-medium">No. of Employees</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in companyProfile.team"
                :key="row.title"
                class="border-t border-slate-100 hover:bg-slate-50/60"
              >
                <td class="px-4 py-3 font-medium text-slate-900">{{ row.title }}</td>
                <td class="px-4 py-3 text-slate-600">{{ row.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 p-8 text-white shadow-sm">
        <h3 class="text-2xl font-bold tracking-tight">What this means for partners</h3>
        <ul class="mt-6 space-y-4 text-slate-200">
          <li class="flex gap-3">
            <span class="mt-0.5">•</span>
            <span>Clear line leadership and quality control for consistent output.</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-0.5">•</span>
            <span>Dedicated mechanics to keep machines running and minimize downtime.</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-0.5">•</span>
            <span>Scalable workforce for peak requirements and special projects.</span>
          </li>
        </ul>

        <div class="mt-8 rounded-2xl bg-white/10 p-6">
          <p class="text-sm text-slate-300">Quick facts</p>
          <div class="mt-3 grid grid-cols-3 gap-4">
            <div>
              <p class="text-xs text-slate-300">Sewers</p>
              <p class="mt-1 text-xl font-semibold">155</p>
            </div>
            <div>
              <p class="text-xs text-slate-300">QC</p>
              <p class="mt-1 text-xl font-semibold">12</p>
            </div>
            <div>
              <p class="text-xs text-slate-300">Mechanics</p>
              <p class="mt-1 text-xl font-semibold">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
