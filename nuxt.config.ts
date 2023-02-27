export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  nitro: {
    preset: 'aws-lambda',
    serveStatic: true
  }
})
