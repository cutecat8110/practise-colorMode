// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "assets/scss/custom/_variables.scss";`
        }
      }
    }
  },
  css: ['~/assets/scss/app.scss']
})
