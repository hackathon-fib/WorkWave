// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'dayjs-nuxt',
    '@nuxtjs/tailwindcss'
  ],
   devServer: {
    port: 8000
  },
  devtools: { enabled: true }
})
