<script setup>
useHead({
  htmlAttrs: { lang: 'en-US' },
  title: 'Nuxt Starter',
  meta: [
    { name: 'description', content: 'Nuxt Starter is a minimal template created for quick landing pages, built with Nuxt and Tailwind CSS.' }
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
