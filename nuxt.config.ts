

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

  modules: ['@nuxt/content', "nuxt-icon"],

  vite: {
    plugins: [
      {
        name: 'yaml-loader',
        enforce: 'pre',
        transform(src, id) {
          if (id.endsWith('.yml') || id.endsWith('.yaml')) {
            return {
              code: `export default ${JSON.stringify(require('js-yaml').load(src))}`,
              map: null,
            }
          }
        },
      },
    ],
    assetsInclude: ['**/*.yml', '**/*.yaml'],
  },

  compatibilityDate: "2024-12-18",
});