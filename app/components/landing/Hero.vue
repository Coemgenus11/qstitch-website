<template>
  <main class="relative overflow-hidden pt-14 md:pt-16">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-20 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-slate-200/60 blur-3xl" />
      <div class="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
    </div>

    <div class="grid lg:grid-cols-2 items-center gap-10">
      <div>
        <p class="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
          2025 Company Profile • Garments Manufacturing
        </p>
        <h1 class="mt-5 text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
          <span class="text-brand-navy">Built with Purpose.</span> <span class="text-brand-gold">Driven by People.</span> <span class="text-brand-teal">Focused on Quality.</span>
        </h1>
        <p class="mt-5 text-lg text-slate-600 max-w-xl leading-relaxed">
          QStitch, Inc. is a duly licensed organization that values quality, innovation, total customer satisfaction, and adaptability to the needs of its clients.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <LandingLink href="#contact">Request a Quote</LandingLink>
          <LandingLink size="lg" styleName="outline" href="#capabilities">View Capabilities</LandingLink>
        </div>

        <div class="mt-10 grid grid-cols-3 gap-4 max-w-xl">
          <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p class="text-xs text-slate-500">Machines</p>
            <p class="mt-1 text-2xl font-bold text-slate-900">224</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p class="text-xs text-slate-500">Employees</p>
            <p class="mt-1 text-2xl font-bold text-slate-900">207</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p class="text-xs text-slate-500">Established</p>
            <p class="mt-1 text-2xl font-bold text-slate-900">2020</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-slate-200/80 via-white to-slate-100 blur" />
        <img
          class="w-full max-w-xl mx-auto rounded-3xl border border-slate-200 object-cover shadow-sm"
          src="~/assets/img/qsi-icon.webp"
          alt="QStitch garments manufacturing"
          loading="eager"
          width="900"
          height="900"
        />
      </div>
    </div>
  </main>
</template>
