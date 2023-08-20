import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // exp
  experimental: {
    localLayerAliases: true,
  },

  target: 'static',
  runtimeConfig: {
    firebaseApiKey: '',
    firebaseAuthDomain: '',
    firebaseProjectId: '',
    firebaseStorageBucket: '',
    firebaseMessagingSenderId: '',
    firebaseAppId: '',
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // modules
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],

  css: [
    resolve('./assets/styles.scss'),
  ],

  components: [
    {
      prefix: '',
      path: resolve('./components'),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  // module::pinia
  pinia: {
    autoImports: [['defineStore', 'definePiniaStore']],
  },

  // module::headlessui
  headlessui: {
    prefix: 'Headless',
  },

  // module::content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },

  // module::i18n
  i18n: {

    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-EN',
        name: 'English',
        file: 'en-EN.json',
      },
    ],
  },
});
