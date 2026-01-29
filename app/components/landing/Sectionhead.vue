<script setup>
defineProps({
  align: {
    default: "center",
  },
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'center' && 'text-center']">
    <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-brand-navy">
      <slot name="title">{{ title || "Title" }}</slot>
    </h1>
    <p class="text-lg mt-4 text-slate-600">
      <slot name="desc">{{ desc || "Some description goes here" }}</slot>
    </p>
  </div>
</template>
