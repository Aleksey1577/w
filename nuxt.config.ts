// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  app: {
    baseURL: "/w/", // Замените 'your-repository' на имя вашего репозитория
  },
});
