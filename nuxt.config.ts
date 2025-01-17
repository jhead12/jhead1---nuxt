

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/content', "nuxt-icon", "@nuxtjs/apollo"],
   apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://numberlessagingcom.local/graphql",
      },
    },
  },

  compatibilityDate: "2024-12-18",
});