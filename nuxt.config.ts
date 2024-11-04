// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-quasar-ui'],
  // pinia: {
  //   storesDirs: ['./stores/**'],
  // },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.dev
        ? 'http://localhost:8000'
        : 'https://tour-mgmt-be-111738155758.europe-west1.run.app',
      CLIENT_ID:
        '111738155758-mdh51n6ts04p24bqngod841rt55qjmot.apps.googleusercontent.com',
    },
  },
  ssr: false,
  quasar: {
    iconSet: 'material-symbols-outlined',
  },
});
