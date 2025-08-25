// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    rootId: 'nuxt-example',
    rootTag: 'main'
  },
  devServer: {
    host: 'localhost',
    port: 3000
  },
  css: [
    '@/assets/scss/main.scss'
  ],
})
