export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OverWolf',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/index.sass',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/'
    },
    token: {
      global: true,
    },
    strategies: {
      local: {
        token: {
          property: 'token.accessToken',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: '',
        },
        endpoints: {
          login: {url: `${process.env.API_BASE_URL}/api/auth/login`, method: 'post'},
          user: {url: `${process.env.API_BASE_URL}/api/auth/user`, method: 'get'},
          logout: false,
        }
      },
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-click-outside.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
