// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../ui", "../i18n"],
  modules: ["@pinia/nuxt"]
})