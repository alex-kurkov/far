import { I18N } from './config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'far',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/normalize.css', '@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-notifications',
    '@/plugins/vue-awesome-swiper',
    '@/plugins/vuelidate',
    /*     { src: '@/plugins/vue-awesome-swiper.js', mode: 'client' }, */
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [['nuxt-i18n', I18N]],

  //Server middleware https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware/#custom-api-endpoint
  serverMiddleware: [
    {
      path: '/server-middleware/get-redirect',
      handler: '~/server-middleware/get-redirect.js',
    },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
