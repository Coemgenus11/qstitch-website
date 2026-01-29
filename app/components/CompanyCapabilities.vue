<script setup lang="ts">
import { companyProfile } from "~/data/companyProfile";

const q = ref("");

const machines = computed(() => {
  const term = q.value.trim().toLowerCase();
  if (!term) return companyProfile.machines;
  return companyProfile.machines.filter((m) =>
    `${m.title} ${m.description || ""}`.toLowerCase().includes(term)
  );
});
</script>

<template>
  <section id="capabilities" class="mt-20 scroll-mt-24">
    <LandingSectionhead
      title="Production & Sewing Area"
      desc="Our capacity and equipment support a wide range of garments and styles—even complex requirements."
    />

    <div class="mt-10 grid gap-6 lg:grid-cols-3">
      <div class="rounded-2xl bg-slate-900 p-8 text-white shadow-sm">
        <p class="text-sm text-slate-300">Total machines</p>
        <p class="mt-2 text-5xl font-bold tracking-tight">
          {{ companyProfile.keyStats[0].value }}
        </p>
        <p class="mt-2 text-slate-200">{{ companyProfile.keyStats[0].note }}</p>
        <div class="mt-6 grid grid-cols-3 gap-4">
          <div class="rounded-xl bg-white/10 p-4">
            <p class="text-xs text-slate-300">Employees</p>
            <p class="mt-1 text-xl font-semibold">{{ companyProfile.keyStats[1].value }}</p>
          </div>
          <div class="rounded-xl bg-white/10 p-4">
            <p class="text-xs text-slate-300">Established</p>
            <p class="mt-1 text-xl font-semibold">{{ companyProfile.keyStats[2].value }}</p>
          </div>
          <div class="rounded-xl bg-white/10 p-4">
            <p class="text-xs text-slate-300">Location</p>
            <p class="mt-1 text-xl font-semibold">Laguna</p>
          </div>
        </div>
      </div>

      <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 class="text-2xl font-bold tracking-tight">List of Machines</h3>
            <p class="mt-2 text-slate-600">
              Search the equipment list. Status: <span class="font-medium">GRC</span> (good running condition).
            </p>
          </div>
          <div class="w-full md:w-72">
            <label class="text-sm text-slate-600">Search</label>
            <input
              v-model="q"
              type="text"
              placeholder="e.g. single needle"
              class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 ring-slate-100 focus:border-slate-400"
            />
          </div>
        </div>

        <div class="mt-6 overflow-hidden rounded-xl border border-slate-200">
          <table class="w-full text-left text-sm">
            <thead class="bg-slate-50 text-slate-600">
              <tr>
                <th class="px-4 py-3 font-medium">Machine</th>
                <th class="px-4 py-3 font-medium">Quantity</th>
                <th class="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="m in machines"
                :key="m.title"
                class="border-t border-slate-100 hover:bg-slate-50/60"
              >
                <td class="px-4 py-3 font-medium text-slate-900">{{ m.title }}</td>
                <td class="px-4 py-3 text-slate-600">{{ m.description }}</td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    GRC
                  </span>
                </td>
              </tr>
              <tr v-if="machines.length === 0">
                <td class="px-4 py-6 text-slate-600" colspan="3">
                  No results. Try a different keyword.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
