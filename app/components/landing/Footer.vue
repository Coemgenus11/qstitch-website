<template>
  <footer class="my-20">
    <!-- Social icons -->
    <div class="mb-4 flex justify-center gap-5">
      <a
        href="https://www.facebook.com/qstitchinc/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        class="text-slate-500 transition hover:text-slate-900"
      >
        <Icon name="mdi:facebook" size="22" />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        class="text-slate-500 transition hover:text-slate-900"
      >
        <Icon name="mdi:instagram" size="22" />
      </a>

      <a
        href="https://www.tiktok.com/@qstitchinc"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        class="text-slate-500 transition hover:text-slate-900"
      >
        <Icon name="ic:baseline-tiktok" size="22" />
      </a>
    </div>

    <!-- Copyright -->
    <p class="text-center text-sm text-slate-500">
      © {{ new Date().getFullYear() }} QStitch, Inc. All rights reserved.
    </p>

    <p class="mt-1 text-center text-xs text-slate-500">
      <a href="#contact" class="hover:underline">Contact us</a>
    </p>
  </footer>
</template>
