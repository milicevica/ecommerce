// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/eslint"],
  extends: ["../ui", "../i18n", "../auth"],
  eslint: {
    config: {
      standalone: false,
    },
  },
});
