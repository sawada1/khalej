// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-swiper", "@nuxtjs/i18n", 'nuxt-primevue' , "nuxt-aos" , "@nuxt/image"],
  plugins: ['~/plugins/pinia.js' , '~/plugins/axios.js' , '~/plugins/sweetalert2.js'],
  image: {
    format: ['webp'],
    provider: 'ipx', // Default image provider
    domains: ['https://admin.alkhalej.webstdy.com'], // Add your API domain here
    quality: 80,
     presets: {
       default: {
         modifiers: {
           quality: 80, 
         },
       },
     },
     screens: {
      sm: 320,  // Define responsive sizes
      md: 640,
      lg: 1024,
      xl: 1280,
    },
    webp: {
      quality: 80 // Adjust the quality for webp images
    },
  },
  aos: {
    // Initialize AOS
      once: true, // Animation happens only once
  },
  i18n: {
    // lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en",
        dir: "ltr",
        name: "english",
        file: "en.json",
      },
      {
        code: "ar",
        iso: "ar",
        dir: "rtl",
        name: "عربي",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
  },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          integrity:
            "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
      script: [
        {
          src: "/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },

  css: [
    // "primevue/resources/themes/lara-dark-green/theme.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/styles/main.scss",
  ],

  build: {
    transpile: ["vuetify" , "vue-toastification"],
  }
})
